<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AppCompactEventResource extends JsonResource
{
    public function toArray($request){
      return [
          'id'           => $this->id,
          'mascota'      => $this->mascota->nombre,
          'peso'         => $this->mascota->peso,
          'raza'         => $this->mascota->raza,
          'tipo'         => $this->tipo->nombre,
          'tienda'       => $this->tienda->id,
          'servicios'    => $this->servicio->pluck('nombre')->implode(', '),
          'start'        => $this->start->format('d-m-Y H:i'),
          'start_format' => $this->start->format('Y-m-d')
      ];
    }
}
