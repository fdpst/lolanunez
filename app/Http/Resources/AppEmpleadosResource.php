<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\HorarioEmpleadoResource;

class AppEmpleadosResource extends JsonResource
{

    public function toArray($request){
      return [
          'id'               => $this->id,
          'nombre'           => $this->nombre,
          'email'            => $this->email,
          'telefono'         => $this->telefono,
          'color'            => $this->color,
          'tipo'             => $this->tipo ? $this->tipo->nombre : 'N/A',
          'tipo_libre'       => 'V',
          'lista_libres'     => $this->lista_libres,
          'lista_vacaciones' => $this->lista_vacaciones,
          'horario'          => $this->whenLoaded('horario', function() {
              return HorarioEmpleadoResource::collection($this->horario);
          }),
          'vacaciones'      => $this->whenLoaded('vacaciones', function() {
              return $this->vacaciones;
          }, []),
          'fecha'            => $this->whenLoaded('fecha', function() {
              return $this->fecha;
          }, [])
      ];
    }
}
