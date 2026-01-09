<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Mail\ForgotPasswordEmail;
use Illuminate\Support\Facades\Mail;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'role'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $appends = [
      'id_role'
    ];

    public function getIdRoleAttribute(){
      return 1;
    }

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function sendPasswordResetNotification($token) : void {
        Mail::to($this->email)->send(new ForgotPasswordEmail($this->email, $token));
    }

    public function setPasswordAttribute($password){
       $this->attributes['password'] = bcrypt($password);
    }
}
