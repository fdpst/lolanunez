<?php

namespace App\Imports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Imports\HeadingRowFormatter;
use App\ModelsApp\AppUsuario;
use Carbon\carbon;

class ClienteImport implements ToModel, WithHeadingRow
{
    /**
    * @param Collection $collection
    */

    protected $headingRow = 2;

    public function __construct()
    {
        // Desactivar el formateo de encabezados, esto permite
        // acceder a los encabezados tal como están en el Excel
        HeadingRowFormatter::default('none');
    }

    public function headingRow(): int
    {
        return $this->headingRow;
    }

    public function model(array $row)
    {
        $fecha_nacimiento = $row['Fecha de nacimiento'] ?? null;

        // Crea un nuevo cliente
        AppUsuario::create([
            // Datos de usuario
            'nombre' => $row['Nombre'],
            'apellidos' => $row['Apellidos'],
            'dni' => $row['DNI'],
            'telefono' => $row['Telefono'],
            'email' => $row['Correo'],
            'profesion' => $row['Profesión'] ?? null,
            'direccion' => $row['Dirección Observaciones'],
            'fecha_nacimiento' => $fecha_nacimiento != null ? Carbon::parse($fecha_nacimiento)->format('Y-m-d'): null,
            
            // Datos de historial
            'consulta' => $row['Motivo consulta'],
            'tratamiento' => $row['Valoración y tratamiento'],
            'antecedentes' => $row['Antecedentes Médicos'],
            'alergias' => $row['Alergias'],
            'ejercicio' => $row['Ejercicio'],
        ]);
        return null;
    }
}
