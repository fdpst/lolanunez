<?php

namespace App\Http\Controllers\ApiControllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\TurnoRequest;
use Illuminate\Http\Request;
use App\Models\Turno;

class TurnoController extends Controller
{
  public function getTurnos(){
    $turnos = Turno::orderBy('created_at', 'DESC')->get();
    return response()->json($turnos, 200);
  }

  public function saveTurno(TurnoRequest $request){
    $turno = Turno::updateOrCreate(['id' => $request->id], $request->all());

    if($turno->wasRecentlyCreated === true) {
      return response()->json(['push' => true, 'turno' => $turno], 200);
    }
    return response()->json(['push' => false, 'turno' => $turno], 200);
  }

  public function deleteTurno($turno_id){
    $turno = Turno::find($turno_id);
    $turno->delete();
    return response()->json('turno eliminado', 200);
  }
}
