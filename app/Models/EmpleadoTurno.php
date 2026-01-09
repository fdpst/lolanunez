<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmpleadoTurno extends Model
{
    use HasFactory;

    protected $table = 'empleado_turno';

    protected $fillable = ['empleado_id', 'inicio', 'final', 'tiempo_trabajo'];

    public function getTiempoTrabajoAttribute($tiempo_trabajo){
      return number_format($tiempo_trabajo, 2);
    }

    public function empleado(){
      return $this->belongsTo(Empleado::class);
    }
}
