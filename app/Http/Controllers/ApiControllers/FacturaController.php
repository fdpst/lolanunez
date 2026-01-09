<?php

namespace App\Http\Controllers\ApiControllers;
use  App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Factura;
use App\Models\ItemFacturas;
use App\ModelsApp\AppEvent;
use App\ModelsApp\AppUsuario;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Storage;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\FacturasExport;

class FacturaController extends Controller
{
    public function getFacturaInforme(Request $request){
        $itemsPerPage = $request->itemsPerPage ?? 15;

        $facturas = Factura::with(['Items','Cliente']);

        if($request->search){
            $search = "%".$request->search."%";
            // $factura->where('nro_factura','Like',$search);
            $facturas->whereHas('Cliente', function ($query) use ($search){
                //$query->where('nro_factura','Like',$search);
                $query->where('nombre','Like',$search);
                $query->orWhere('apellidos','Like',$search);
            });
        }

        if($request->fecha_inicio){
            $facturas->whereDate('fecha', '>=', $request->fecha_inicio);
        }
        if($request->fecha_fin){
            $facturas->whereDate('fecha', '<=', $request->fecha_fin);
        }

        // $facturas = $factura->get();

        if($itemsPerPage == -1){
            $facturas = $facturas->get();
            $response = [
                'data' => $facturas,
                'total' => $facturas->count()
            ];
          }else{
            $response = $facturas->paginate($itemsPerPage);
        }

        $total = 0;
        $data = $itemsPerPage == -1 ? $response['data'] : $response->items();
        foreach($data as $factura){
            $total  += $factura->total;
        }

        return['total'=>$total,'data'=>$response];
    }

    public function getFacturas(Request $request){
        $itemsPerPage = $request->itemsPerPage ?? 15;
        $sortBy = $request->sortBy ?? 'id';
        $orderBy = $request->orderBy ?? 'desc';

        $factura = Factura::with(['Items','Cliente']);
        if($request->id_cliente){
            $factura->where('id_cliente',$request->id_cliente);
        }

        if($request->search){
            $search = "%".$request->search."%";
            // $factura->where('nro_factura','Like',$search);
            $factura->whereHas('Cliente', function ($query) use ($search){
                //$query->where('nro_factura','Like',$search);
                $query->where('nombre','Like',$search);
                $query->orWhere('apellidos','Like',$search);
            });
        }

        if($request->fecha_inicio){
            $factura->whereDate('fecha', '>=', $request->fecha_inicio);
        }
        if($request->fecha_fin){
            $factura->whereDate('fecha', '<=', $request->fecha_fin);
        }

        $total = $factura->count();
    
        if($itemsPerPage == -1){
            $factura = $factura->get();
            $response = [
                'data' => $factura,
                'total' => $total,
            ];
          }else{
            $response = $factura->paginate($itemsPerPage);
        }

        return response()->json($response, 200);
    }

    public function getFactura($id){
        $factura = Factura::with(['Items.Servicio','Cliente'])->find($id);
        return $factura;
    }

    public function generateFacturaFromCita($id){
        $cita = AppEvent::with(['servicio'])->find($id);

        $factura = Factura::create([
            'id_cliente'=>$cita->app_usuario_id,
            'descuento'=>0,
            'fecha'=>date('Y-m-d'),
            'comentario'=>'',
        ]);

        $items= [];

        foreach($cita->servicio as $servicio){
            $items[] = [
                'descripcion' => '',
                'id_articulo' => $servicio->id,
                'cantidad'    => 1,
                'precio'      => $servicio->precio,
                'id_factura'  => $factura->id,
            ];
        }

        $this->saveItemFacturas($factura, $items);
    }

    public function saveFactura(Request $request){
        $factura = Factura::updateOrCreate(['id'=>$request->id],$request->all());
        $this->saveItemFacturas($factura,$request->items);

        $data_report = $this->generateReports('factura', $factura);

        $factura->url = $data_report['url'];
        $factura->file_name = $data_report['path'];

        $factura->update();

        return $factura;
    }

    public function deleteFactura(Request $request){
        $factura = Factura::find($request->id);
        $factura->items()->delete();
        $factura->delete();
    }

    public function saveItemFacturas($factura,$items){
        $ids = [];
        foreach($items as $item){
            $item['id_factura'] = $factura->id;
            $ids[ ] = ItemFacturas::updateOrCreate(['id'=>$item['id']??null],$item)->id;
        }
        ItemFacturas::where('id_factura',$factura->id)->whereNotIn('id',$ids)->delete();
    }

    public function generateReports($file_config, $report_pdf)	{
        $pdf = \App::make('dompdf.wrapper');
        $cliente = AppUsuario::find($report_pdf['id_cliente']);

        $stringfactura = $file_config.' ';
        $numfacturayear = date('y').'-';
        $numfactura = $report_pdf['id'];
        $stringcompany = ' Citapick';
        $stringempresa = '('.$cliente['nombre_fiscal'].')';
        $extension = '.pdf';
        $nombre_pdf = $stringfactura . $numfacturayear . $numfactura . $stringcompany . $stringempresa . $extension;
        // End Oscar 31/10/2022

        // copy the temp image back to the real image

        $pdf = PDF::setPaper('A4', 'portrait');

        $data = $pdf->loadView('pdf.facturas', compact('report_pdf','cliente'))->output();

        // Start Oscar 31/10/2022
        // $report_name = 'reporte_'.$file_config.'_'.uniqid().'.pdf'; // Antiguo
        $report_name = str_replace('%20', ' ', $nombre_pdf);
        // $report_name = urlencode($nombre_pdf);
        // End Oscar 31/10/2022

        $path_file_name = 'reports-all/'.$file_config.'/'.$report_name;

        Storage::disk('public')->put($path_file_name, $data);

        // Start Oscar 31/10/2022
        // $url = config('app.url').'/storage/'.$path_file_name.'#toolbar=0'; // Antiguo
        $url = '/storage/'.$path_file_name;
        // End Oscar 31/10/2022

        $str_path = str_replace('/', DIRECTORY_SEPARATOR, $path_file_name);

        // $path = Storage::disk('public')->path($str_path);

        return [
            'url'  => $url,
            'path' => $str_path
        ];
    }

    public function export(Request $request){
        // Obtener la respuesta JSON de getFacturas
        $index = $this->getFacturas($request)->getData(true); // Decodifica el JSON como array asociativo

        // Acceder a los datos
        $facturas = $index['data'];

        $importe = 0;
        foreach($facturas as $item){
            $importe += $item['total'];
        }

        // Descargar el Excel
        return Excel::download(new FacturasExport($facturas, $importe), 'Facturas.xlsx');
      }
}
