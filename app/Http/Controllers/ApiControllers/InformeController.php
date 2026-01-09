<?php

namespace App\Http\Controllers\ApiControllers;

use App\Http\Resources\TiempoAtencionResource;
use App\Http\Controllers\Controller;
use App\Models\EmpleadoTurno;
use Illuminate\Http\Request;
use App\Models\Solicitud;
use App\Models\Empleado;
use App\Models\Seccion;
use App\Models\WebUser;
use Carbon\Carbon;
use DB;

class InformeController extends Controller
{
  public function __construct() {
    $this->middleware('auth:api');
  }

  public function getData(){
    //$empleados = Empleado::get(['id', 'nombre']);

    $tiendas = WebUser::with('empleados:id,nombre')->get(['id', 'name']);

    $secciones = Seccion::get(['id', 'nombre']);

    return response()->json([
      'empleados' => [],
      'tiendas'   => $tiendas,
      'secciones' => $secciones
    ], 200);
  }

  public function informe(Request $request){
    if ($request->has(['desde', 'hasta'])) {

       $minutos_activo = DB::table('empleado_turno')
         ->whereBetween('created_at', [$request->desde, $request->hasta])
         ->select(DB::raw('SUM(tiempo_trabajo) as total, empleado_id'))
         ->groupBy('empleado_id')->get();

       $minutos_trabajando = DB::table('solicitud')->where('status', 'finalizado')
         ->whereBetween('created_at', [$request->desde, $request->hasta])
         ->select(DB::raw('SUM(tiempo_consulta) as total, empleado_id'))
         ->groupBy('empleado_id')->get();

       $minutos_espera = Solicitud::select(DB::raw('COUNT(*) as clientes, SUM(tiempo_espera) as tiempo_espera, AVG(tiempo_espera) as media'))->get();

       $minutos_consulta = Solicitud::select(DB::raw('COUNT(*) as clientes, SUM(tiempo_consulta) as tiempo_consulta, AVG(tiempo_consulta) as media'))->get();

       return response()->json([
         'total_minutos_activo'   => $minutos_activo,
         'minutos_trabajando'     => $minutos_trabajando,
         'total_minutos_espera'   => $minutos_espera,
         'total_minutos_consulta' => $minutos_consulta
       ], 200);

     }
     return response()->json([], 301);
  }

  public function getTiempoMuerto(Request $request){
    if(!$request->has(['desde', 'hasta'])) {
      return response()->json('error', 301);
    }

    $query = (new Solicitud())->newQuery();

    $query->leftJoin('empleado_turno', function ($join) {
        $join->on(DB::raw('DATE(solicitud.hora_inicio)'), '=', DB::raw('DATE(empleado_turno.inicio)'));
    });

    $query->select(DB::raw('(sum(tiempo_consulta) - empleado_turno.tiempo_trabajo) as media, DATE(hora_inicio) as dia, empleado_turno.tiempo_trabajo, empleado_turno.id as empleado_id, solicitud.seccion_id, solicitud.web_user_id'));

    $query->groupBy('empleado_id', 'empleado_turno.tiempo_trabajo', 'dia', 'solicitud.web_user_id', 'solicitud.seccion_id')
    ->with('empleado', 'seccion', 'tienda');

    return response()->json(TiempoAtencionResource::collection($query->get()), 200);
  }

  public function getTiempoEspera(Request $request){
    if(!$request->has(['desde', 'hasta'])) {
      return response()->json('error', 301);
    }

    $query = (new Solicitud())->newQuery();
    $query->select(DB::raw('web_user_id, empleado_id, seccion_id, DATE(hora_inicio) as dia, AVG(tiempo_espera) as media'));
    $query->groupBy('dia', 'empleado_id', 'seccion_id', 'web_user_id')->with('empleado', 'seccion');

    if($request->filled('empleado')){
      $query->where('empleado_id', $request->empleado);
    }

    if(!$request->filled('tienda') && !$request->filled('seccion')){
      return response()->json(TiempoAtencionResource::collection($query->get()), 200);
    }

    if($request->filled('tienda') && $request->filled('seccion')){
      $query->where('web_user_id', $request->tienda)->where('seccion_id', $request->seccion);
      return response()->json(TiempoAtencionResource::collection($query->get()), 200);
    }

    if($request->filled('tienda')){
      $query->where('web_user_id', $request->tienda);
      return response()->json(TiempoAtencionResource::collection($query->get()), 200);
    }

    $query->where('seccion_id', $request->seccion);
    return response()->json(TiempoAtencionResource::collection($query->get()), 200);
  }

  public function getTiempoAtencion(Request $request){
    if(!$request->has(['desde', 'hasta'])) {
      return response()->json('error', 301);
    }

    $query = (new Solicitud())->newQuery();
    $query->select(DB::raw('web_user_id, empleado_id, seccion_id, DATE(hora_inicio) as dia, AVG(tiempo_consulta) as media'));
    $query->groupBy('dia', 'empleado_id', 'seccion_id', 'web_user_id')->with('empleado', 'seccion');

    if($request->filled('empleado')){
      $query->where('empleado_id', $request->empleado);
    }

    if(!$request->filled('tienda') && !$request->filled('seccion')){
      return response()->json(TiempoAtencionResource::collection($query->get()), 200);
    }

    if($request->filled('tienda') && $request->filled('seccion')){
      $query->where('web_user_id', $request->tienda)->where('seccion_id', $request->seccion);
      return response()->json(TiempoAtencionResource::collection($query->get()), 200);
    }

    if($request->filled('tienda')){
      $query->where('web_user_id', $request->tienda);
      return response()->json(TiempoAtencionResource::collection($query->get()), 200);
    }

    $query->where('seccion_id', $request->seccion);
    return response()->json(TiempoAtencionResource::collection($query->get()), 200);
  }

  public function getNoAtendidos(Request $request){
    $clientes_no_atendidos = Solicitud::where('web_user_id', $request->tienda)->where('status', 'cancelado')
        ->whereBetween('created_at', [$request->desde, $request->hasta])
        ->count();

    $clientes_si_atendidos = Solicitud::where('web_user_id', $request->tienda)->where('status', 'finalizado')
        ->whereBetween('created_at', [$request->desde, $request->hasta])
        ->distinct()->get(['nombre_cliente', 'hora_inicio', 'hora_progreso', 'hora_final', 'empleado_id'])->count();
        //->count();

    return response()->json([[
      'no_atendidos' => $clientes_no_atendidos,
      'si_atendidos' => $clientes_si_atendidos
    ]], 200);

  }
}
