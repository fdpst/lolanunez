<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Helpers\Base64ImageHelper;
use App\ModelsApp\AppTienda;
use Storage;
use Str;

class Config extends Model
{
    use HasFactory;

    protected $table = 'config';

    protected $fillable = [
      'activo',
      'stripe_key',
      'stripe_secret',
      'tienda_id',
      'logo',
      'color'
    ];

    protected $casts = [
      'activo' => 'boolean'
    ];

    protected $appends = [
     'logo_url',
    ];

    public function tienda(){
      return $this->belongsTo(AppTienda::class, 'tienda_id');
    }

    public function setLogoAttribute($img){
      $imagen_helper = new Base64ImageHelper();

      $is_valid = $imagen_helper->createImageFromBase($img, 'prueba-de-logo');

      if (!$is_valid){
           return null;
      }

      $this->attributes['logo'] = $is_valid['file_name'];

      Storage::disk('logo')->put($is_valid['file_name'], $is_valid['image']);
    }

    public function getLogoUrlAttribute(){
      return asset("storage/logo/{$this->logo}");
    }
}
