<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AppUsuarioResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'nombre' => $this->nombre,
            'apellidos' => $this->apellidos,
            'full_name' => $this->nombre.' '.$this->apellidos,
            'dni' => $this->dni ?? 'Sin información',
            'email' => $this->email,
            'telefono' => $this->telefono,
            'direccion' => $this->direccion,
            'ciudad' => $this->ciudad,
            'pais' => $this->pais,
            'fecha_nacimiento' => $this->fecha_nacimiento ?? 'Sin información',
            'profesion' => $this->profesion ?? 'Sin información',
            'antecedentes' => $this->antecedentes,
            'consulta' => $this->consulta,
            'ejercicio' => $this->ejercicio,
            'alergias' => $this->alergias,
            'tratamiento' => $this->tratamiento,
            'firma' => $this->firma,
            'pdf' => $this->pdf,
            'created_at' => $this->created_at,
        ];
    }
}
