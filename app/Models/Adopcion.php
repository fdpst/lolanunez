<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Storage;
use File;

class Adopcion extends Model
{
  protected $table = 'app_adopcion';

  protected $fillable = ['id_tienda','id_mascota','id_donante','id_adoptante','fecha_donacion','fecha_adopcion'];

  /*protected $appends = ['adopcion_name', 'path'];

  public function getPathAttribute(){
      return asset('storage/adopciones/' . $this->file_name);
  }

  public function getAdopcionNameAttribute(){
    return substr($this->file_name, strpos($this->file_name, '-') + 1);
  }

  public function setActiveAttribute($active){
    $this->attributes['active'] = ($active == 'true') ? 1 : 0;
  }

  public function setFileNameAttribute($adopcion){
    if(!$adopcion || !File::isFile($adopcion)){
      return null;
    }
    $file_name = uniqid() . '-' . $adopcion->getClientOriginalName();
    Storage::disk('adopciones')->put($file_name,  File::get($adopcion));
    $this->attributes['file_name'] = $file_name;
  }*/

  public function mascota(){
		return $this->belongsTo('App\ModelsApp\AppMascota', 'id_mascota');
	}

  public function usuarioDonante(){
		return $this->belongsTo('App\ModelsApp\AppUsuario', 'id_donante');
	}

  public function usuarioAdoptante(){
		return $this->belongsTo('App\ModelsApp\AppUsuario', 'id_adoptante');
	}

	public function tienda(){
		return $this->belongsTo('App\ModelsApp\AppTienda', 'id');
	}
}
