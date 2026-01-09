<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\ModelsApp\AppSuscripcion;

class Seccion extends Model
{
    use HasFactory;

    protected $table = 'secciones';

    protected $fillable = ['nombre'];

    public function empleados(){
      return $this->belongsToMany(Empleado::class, 'empleado_seccion');
    }

    public function solicitud(){
      return $this->hasMany(Solicitud::class);
    }

    public function mascota(){
      return $this->hasMany('App\ModelsApp\AppMascota');
    }

    public function suscripciones(){
		return $this->hasMany(AppSuscripcion::class);
	}
}
