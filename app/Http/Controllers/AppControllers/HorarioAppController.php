<?php

namespace App\Http\Controllers\AppControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\ModelsApp\AppHorarioTienda;
use App\ModelsApp\AppTienda;
use App\Http\Resources\AppHorarioResource;

class HorarioAppController extends Controller
{
  public function getHorarioByTienda($tienda_id, Request $request){
    $itemsPerPage = $request->itemsPerPage ?? 15;
    $sortBy = $request->sortBy ?? 'id';
    $orderBy = $request->orderBy ?? 'desc';

    $horario = AppHorarioTienda::orderBy('dia', 'ASC')
      ->where('app_tienda_id', $tienda_id);

    $total = $horario->count();

    if($itemsPerPage == -1){
        $response = $horario->get();
        // $response = [
        //     'data' => $horario,
        //     'total' => $total
        // ];
      }else{
        $response = $horario->paginate($itemsPerPage);
    }

    // $horario_resource = AppHorarioResource::collection($horario);
    return response()->json([
      "data" => AppHorarioResource::collection($response),
      "total" => $total
    ], 200);

    // return response()->json($horario_resource, 200);
  }

  public function saveHorarioByTienda($tienda_id, Request $request){
    $horario = AppHorarioTienda::updateOrCreate(
      ['app_tienda_id' => $tienda_id, 'dia' => $request->dia], 
      $request->merge(['app_tienda_id' => $tienda_id])->all());
    return response()->json(new AppHorarioResource($horario), 200);
  }

  public function deleteHorarioByTienda($horario_id){
    $horario = AppHorarioTienda::find($horario_id);
    $horario->delete();
    return response()->json(['message' => 'Horario eliminado con éxito'], 200);
  }
}
