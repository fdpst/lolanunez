<?php

namespace App\Http\Controllers\AppControllers;

use App\Http\Requests\AppUsuarioRequest;
use App\Http\Controllers\Controller;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Storage;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Hash;
use App\ModelsApp\AppUsuario;
use App\ModelsApp\AppUsuariosArchivos;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\Validator;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\ClienteImport;
use App\Http\Resources\AppUsuarioResource;
use Exception;

class UsuarioAppController extends Controller
{
  // Listar clientes
  public function getUsuarios(Request $request){
    $itemsPerPage = $request->itemsPerPage ?? 15;
    $sortBy = $request->sortBy ?? 'id';
    $orderBy = $request->orderBy ?? 'desc';

    $usuarios = AppUsuario::with(['mascota']);

    if($request->search){
      $search = "%".$request->search."%";
      $usuarios->where(function($query) use ($search){
        $query->where('nombre','Like',$search);
        $query->orWhere('apellidos','Like',$search);
        $query->orWhere('email','Like',$search);
        $query->orWhere('telefono','Like',$search);
      });
    }

    $usuarios = $usuarios->orderBy($sortBy, $orderBy);
    $total = $usuarios->count();

    if($itemsPerPage == -1){
      $usuarios = $usuarios->get();
    }else{
      $usuarios = $usuarios->paginate($itemsPerPage);
    }

    return response()->json([
      "data" => AppUsuarioResource::collection($usuarios),
      "total" => $total
    ], 200);

    /*if($request->amount == -1){
      return response()->json(["data"=>$usuarios->get(),"total"=>$usuarios->count()], 200);  
    }
    return response()->json($usuarios->paginate($request->amount??15), 200);*/
  }

  // Retorna el cliente segun su id
  public function getUsuario($usuario_id){
    $user = AppUsuario::find($usuario_id);
    return response()->json(new AppUsuarioResource($user), 200);
  }

  // Crea o actualiza un cliente
  public function saveUsuario(Request $request){
    try{
      $validator = Validator::make($request->all(), ['nombre' => 'required','telefono' => 'required']);

      if ($validator->fails()){
        $messages = $validator->errors()->all();
        $msg = $messages[0];
        return response()->json(['status' => false, 'message' => $msg], 301);
      }

      $usuario = AppUsuario::updateOrCreate(['id' => $request->id], $request->all());
      
      return response()->json([
        'message' => 'Cliente guardado con éxito', 
        'data' => $usuario
      ], 200);
    }catch(\Exception $e){
      return response()->json([
        'message' => 'Error '. ($request->id == null ? 'creando' : 'actualizando').' cliente', 
        'error' => $e->getMessage()
      ], 400);
    }
    
  }

  // Eliminar un cliente
  public function deleteUsuario($usuario_id){
    try{
      $usuario = AppUsuario::find($usuario_id);
      $usuario->event()->delete();
      $usuario->mascota()->delete();
      $usuario->delete();
      return response()->json(['message' =>'Cliente eliminado'], 200);
    }catch(\Exception $e){
      return response()->json(['message' => 'Error eliminando cliente', 'error' => $e->getMessage()], 400);
    }
  }

  public function login(Request $request){
    $user = AppUsuario::where('email', $request->email)->first();

    $credentials = $request->only('email', 'password');

    if (!$user || !Hash::check($request->password, $user->password)) {
      return response(['message' => ['Estas credenciales no coinciden con nuestros registros.']], 404);
    }

    $token = auth('android_users')->attempt($request->only('email', 'password'), ['exp' => Carbon::now()->addYear()->timestamp]);

    //return 'no token'. $token; <- esto no se muy bien que hace

    if(!$token){
    	return response()->json(['error' => 'Error Autenticando token'], 401);
    }

    $response = ['user' => $user, 'token' => $token];

    return response($response, 201);
  }

  public function getUsuariosAdoptantes(){
    return response()->json(AppUsuario::with('direccion')->where('adoptar',true)->get(), 200);
  }

  public function getUsuariosDonantes(){
    return response()->json(AppUsuario::with('direccion')->where('donar',true)->get(), 200);
  }

  public function getArchivos($id){
    return response()->json(AppUsuariosArchivos::where('id_usuario', $id)->get(), 200);
  }

  public function getDieta($id){
    $dieta = AppUsuariosArchivos::where('id_usuario', $id)->where('tipo_archivo', 'dieta')->orderBy('id', 'desc')->first();

    if($dieta){
      return response()->json($dieta, 200);
    }else{
      return response()->json("No tienes ninguna dieta activada", 200);
    }
    
  }

  public function getEntrenamiento($id){
    $entrenamiento = AppUsuariosArchivos::where('id_usuario', $id)->where('tipo_archivo', 'entrenamiento')->orderBy('id', 'desc')->first();

    if($entrenamiento){
      return response()->json($entrenamiento, 200);
    }else{
      return response()->json("No tienes ningún entrenamiento activado", 200);
    }
    
  }

  public function getHistorial($id){
    $historial = AppUsuariosArchivos::where('id_usuario', $id)->where('tipo_archivo', 'entrenamiento')->orderBy('id', 'desc')->first();
    if($historial){
      return response()->json($historial, 200);
    }else{
      return response()->json("No tienes ningún historial activado", 200);
    }
  }

  
  
  public function firmarConsentimiento(Request $request){
    try{      
      $firmaBase64 = $request->firma;
      
      $imagenBinaria = str_replace('data:image/octet-stream;base64,', '', $firmaBase64);
      //$imagenBinaria = "data:image/octet-stream;base64,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";
      
      // Guarda la imagen en el sistema de almacenamiento (storage)
      $nombreArchivo = 'firmas/'.uniqid() . '.png'; // Carpeta 'firmas' dentro de storage
      Storage::disk('public')->put($nombreArchivo, base64_decode($imagenBinaria));

      // Devuelve la URL de la imagen guardada en storage
      $urlImagenGuardada = Storage::url($nombreArchivo);
      
      $user = AppUsuario::find($request->id);
      if (!$user){
        
        $validator = Validator::make($request->usuario, ['nombre' => 'required','telefono' => 'required']);

        if ($validator->fails()){
          $messages = $validator->errors()->all();
          $msg = $messages[0];
          return response()->json(['status' => false, 'mensaje' => $msg], 301);
        }
        $user = AppUsuario::updateOrCreate(['id' => $request->id], $request->usuario); 
      }
      // $user->consentimiento1 = $request->consentimiento1;
      // $user->consentimiento2 = $request->consentimiento2;
      // $user->consentimiento3 = $request->consentimiento3;
      // $user->consentimiento4 = $request->consentimiento4;
      $user->firma = $urlImagenGuardada;

      // $user->fecha_formateada = Carbon::parse($user->updated_at)->format('j \d\e F \d\e Y');

      $pdf = $this->generateReports('politica_de_privacidad', $user, $firmaBase64);

      $user->pdf = $pdf['url'];
      $user->save();
      
      return response()->json(['success' => 'Documento firmado correctamente', 'PDF' => $pdf, 'user' => $user], 200);
    }catch(\Exception $e){
      return response()->json(['error' => $e->getMessage()], 400);
    }
  }

  public function generateReports($file_config, $report_pdf, $firmaBase64)	{
    $pdf = \App::make('dompdf.wrapper');
    // $cliente = AppUsuario::find($report_pdf['id_cliente']);
    
    $stringConsentimeinto = $file_config;
    // $numfacturayear = date('y').'-';
    $nombreUser = $report_pdf['nombre'].'_'.$report_pdf['apellidos'];
    // $stringcompany = ' Fisiozen';
    // $stringempresa = '('.$cliente['nombre_fiscal'].')';
    $extension = '.pdf';
    $nombre_pdf = $stringConsentimeinto.'_'. $nombreUser . $extension;
    // End Oscar 31/10/2022
    
    // copy the temp image back to the real image

    $pdf = Pdf::setPaper('A4', 'portrait');
    $data = $pdf->loadView('pdf.consentimiento', compact('report_pdf', 'firmaBase64'))->output();
  
    // Start Oscar 31/10/2022
    // $report_name = 'reporte_'.$file_config.'_'.uniqid().'.pdf'; // Antiguo
    $report_name = str_replace('%20', ' ', $nombre_pdf);
    // $report_name = urlencode($nombre_pdf);
    // End Oscar 31/10/2022

    $path_file_name = 'reports-all/'.$file_config.'/'.$report_name;

    Storage::disk('public')->put($path_file_name, $data);

    // Start Oscar 31/10/2022
    // $url = config('app.url').'/storage/'.$path_file_name.'#toolbar=0'; // Antiguo
    $url = config('app.url').'/storage/'.$path_file_name;
    // $url = '/storage/'.$path_file_name;
    // $url = public_path($path_file_name);
    // End Oscar 31/10/2022

    $str_path = str_replace('/', DIRECTORY_SEPARATOR, $path_file_name);

    // $path = Storage::disk('public')->path($str_path);

    return [
      'url'  => $url,
      'path' => $str_path
    ];
  }

  public function importFromExcel(Request $request){
    $import = new ClienteImport;

    try{
      $data = Excel::import($import, $request->file('file'));

      return response()->json(['success' => $data]);
    }catch(Exception $e){
      return response()->json(['error' => $e->getMessage()], 400);
    }
  }
}
