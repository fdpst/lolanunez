<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AppHorarioEspecificoEmpleadoResource extends JsonResource
{
    public function toArray($request){
      return [
        'id'             => $this->id,
        'app_tienda_id'  => $this->app_tienda_id,
        'nombre_tienda'  => $this->tienda ? $this->tienda->nombre : 'N/A',
        'fecha'          => $this->fecha,
        'entrada'        => $this->entrada,
        'salida'         => $this->salida
      ];
    }
}
