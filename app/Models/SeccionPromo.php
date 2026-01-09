<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SeccionPromo extends Model
{
    use HasFactory;
    protected $table = 'app_promocion_seccion';
    protected $fillable = ['id_promocion','id_seccion'];
}
