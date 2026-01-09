<?php

namespace App\Http\Controllers\ApiControllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\SeccionRequest;
use Illuminate\Http\Request;
use App\Models\Seccion;
use App\Models\Empleado;

class SeccionController extends Controller
{
  public function getSecciones(){
    $secciones = Seccion::withCount('empleados')->orderBy('created_at', 'DESC')->get();
    return response()->json($secciones, 200);
  }

  public function saveSeccion(SeccionRequest $request){
    $seccion = Seccion::updateOrCreate(['id' => $request->id], $request->all());

    $seccion->loadCount('empleados');

    if($seccion->wasRecentlyCreated === true) {
      return response()->json(['push' => true, 'seccion' => $seccion], 200);
    }

    return response()->json(['push' => false, 'seccion' => $seccion], 200);
  }

  public function deleteSeccion($seccion_id){
    $seccion = Seccion::find($seccion_id);
    $seccion->empleados()->wherePivot('seccion_id', $seccion_id)->detach();
    $seccion->delete();
    return response()->json('seccion eliminada', 200);
  }
}
