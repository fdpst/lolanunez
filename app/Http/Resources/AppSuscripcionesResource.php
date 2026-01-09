<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AppSuscripcionesResource extends JsonResource
{

    public function toArray($request)
    {
      return [
          'id_seccion'       => $this->id,
          'seccion'   => $this->nombre,
        //   'usuario_id'    => $this->usuario_id,
        //   'seccion_id'    => $this->seccion_id,
          'status'    => count($this->suscripciones) > 0 ? 1 : 0,
      ];
    }
}
