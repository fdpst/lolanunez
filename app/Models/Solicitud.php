<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Solicitud extends Model
{
    use HasFactory;

    protected $table = 'solicitud';

    protected $fillable = [
      'seccion_id',
      'empleado_id',
      'web_user_id',
      'nombre_cliente',
      'status',
      'hora_inicio',
      'hora_progreso',
      'hora_final',
      'tiempo_espera',
      'tiempo_consulta'
    ];

    protected $dates = ['created_at', 'hora_inicio', 'hora_progreso', 'hora_final'];

    protected $casts = [
       'created_at' => 'datetime:H:m',
       'seccion_id' => 'integer'
    ];

    protected $appends = ['secciones'];

    public function getSeccionesAttribute(){
      return [];
    }

    public function getTiempoEsperaAttribute($tiempo_espera){
      return number_format($tiempo_espera, 2);
    }

    public function getTiempoConsultaAttribute($tiempo_consulta){
      return number_format($tiempo_consulta, 2);
    }

    public function seccion(){
      return $this->belongsTo(Seccion::class, 'seccion_id');
    }

    public function empleado(){
      return $this->belongsTo(Empleado::class, 'empleado_id');
    }

    public function tienda(){
      return $this->belongsTo(WebUser::class, 'web_user_id');
    }
}
