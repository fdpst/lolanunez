<?php

namespace App\Http\Controllers\ApiControllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\EmpleadoRequest;
use Illuminate\Http\Request;
use App\Models\Seccion;
use App\Models\Empleado;
use App\Models\WebUser;

class EmpleadoController extends Controller
{
  public function getEmpleadosAndSecciones(){
    $empleados = Empleado::withCount('secciones')->with('secciones', 'tiendas')->orderBy('created_at', 'DESC')->get();

    $secciones = Seccion::get(['id', 'nombre']);

    $tiendas = WebUser::get(['id', 'name']);

    return response()->json([
      'empleados' => $empleados,
      'secciones' => $secciones,
      'tiendas'   => $tiendas
    ]);
  }

  public function getEmpleados(){
    $empleados = Empleado::orderBy('created_at', 'DESC')->get();
    return response()->json($empleados, 200);
  }

  public function saveEmpleado(EmpleadoRequest $request){
    $empleado = Empleado::updateOrCreate(['id' => $request->id], $request->except(['secciones', 'tiendas']));

    $empleado->secciones()->sync($request->secciones);

    $empleado->tiendas()->sync($request->tiendas);

    $empleado->loadCount('secciones')->load('secciones', 'tiendas');

    if($empleado->wasRecentlyCreated === true) {
      return response()->json(['push' => true, 'empleado' => $empleado], 200);
    }

    return response()->json(['push' => false, 'empleado' => $empleado], 200);
  }

  public function deleteEmpleado($empleado_id){
    $empleado = Empleado::find($empleado_id);
    $empleado->secciones()->wherePivot('empleado_id', $empleado_id)->detach();
    $empleado->delete();
    return response()->json('empleado eliminada', 200);
  }
}
