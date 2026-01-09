<?php

namespace App\ModelsApp;

use Illuminate\Database\Eloquent\Model;

class AppServicio extends Model {

	protected $table = 'app_servicio';

	protected $fillable = ['tipo_id', 'nombre', 'precio', 'duracion', 'is_active', 'abreviacion', 'codigo'];

	public function tipo(){
		return $this->belongsTo(Tipo::class);
	}

	public function event(){
    return $this->belongsToMany(Event::class);
  }

	public function historial(){
		return $this->hasMany(AppHistorialMascota::class);
	}
}
