<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Empleado extends Model
{
    use HasFactory;

    protected $table = 'empleados';

    protected $fillable = ['nombre'];

    public function secciones(){
      return $this->belongsToMany(Seccion::class, 'empleado_seccion');
    }

    public function turno(){
      return $this->hasMany(EmpleadoTurno::class);
    }

    public function ultimo_turno(){
      return $this->hasOne(EmpleadoTurno::class)->latest();
    }

    public function is_active(){
      return $this->hasOne(EmpleadoTurno::class)->whereNull('final')->latest();
    }

    public function solicitud(){
      return $this->hasMany(Solicitud::class);
    }

    public function tiendas(){
      return $this->belongsToMany(WebUser::class, 'empleado_web_users');
    }
}
