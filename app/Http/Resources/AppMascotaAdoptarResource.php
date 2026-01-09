<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AppMascotaAdoptarResource extends JsonResource
{
    public function toArray($request){
      return [
          'nombre'   => $this->mascota->nombre,
          'raza'     => $this->mascota->raza,
          'peso'     => $this->mascota->peso,
          'imagen'   => $this->mascota->imagen_path,
          'tienda'   => $this->tienda
      ];
    }
}