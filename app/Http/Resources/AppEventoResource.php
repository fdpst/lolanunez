<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;

class AppEventoResource extends JsonResource
{
    public function toArray($request){
      return [
          'id'              => $this->id,
          'tipo_id'         => $this->tipo_id,
          'usuario'         => $this->usuario->nombre,
          'telefono'        => $this->usuario->telefono,
          'empleado'        => $this->empleado->nombre,
          'color'           => $this->empleado->color,
          /*'mascota'       => $this->mascota->nombre,
          'peso'            => $this->mascota->peso,
          'raza'            => $this->mascota->raza,
          'observaciones'   => $this->mascota->observaciones,*/
          'start'           => Carbon::parse($this->start)->format('Y-m-d H:i'),
          'end'             => Carbon::parse($this->end)->format('Y-m-d H:i'),
          'duracion'        => $this->duracion,
          'servicios'       => $this->servicio,
          'app_empleado_id' => $this->empleado->id,
          'app_tienda_id'   => $this->app_tienda_id,
          //'app_mascota_id'  => $this->app_mascota_id,
          'app_usuario_id'  => $this->usuario->id,
          'confirmada'      => $this->confirmada,
          'precio'          => $this->precio
          /*'recogida'        => $this->recogida,
          'direccion_recogida' => $this->direccion_recogida,
          'direccion_entrega'  => $this->direccion_entrega,
          'pago'               => $this->pago,*/
      ];
    }
}
