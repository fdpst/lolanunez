<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class WebUser extends Authenticatable
{
    protected $table = 'web_users';

    protected $fillable = ['name', 'email', 'password'];

    protected $hidden = ['password'];

    public function setPasswordAttribute($password){
       $this->attributes['password'] = bcrypt($password);
    }

    public function empleados(){
      return $this->belongsToMany(Empleado::class, 'empleado_web_users');
    }
}
