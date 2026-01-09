<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;

class AppEjemplarResource extends JsonResource
{
    public function toArray($request){
      return [
          'id'   => $this->id,
          'titulo'   => $this->titulo,
          'fecha'    => Carbon::parse($this->fecha)->format('d/m/Y'),
          'descripcion' => $this->descripcion,
          'imagen'    => $this->imagen_path,
          'tienda'  => $this->tienda->nombre,
          'tienda_id'  => $this->tienda_id,
          'activo'  => $this->activo,
      ];
    }
}
