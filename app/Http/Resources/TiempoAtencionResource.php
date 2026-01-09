<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TiempoAtencionResource extends JsonResource
{
    public function toArray($request){
      return [
          'dia'      => $this->dia,
          'media'    => $this->media,
          'empleado' => $this->empleado ? $this->empleado->nombre : 'N/A',
          'seccion'  => $this->seccion ? $this->seccion->nombre : 'N/A',
          'tienda'   => $this->tienda ? $this->tienda->name : 'N/A'
      ];
    }
}
