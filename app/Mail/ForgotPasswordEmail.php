<?php

namespace App\Mail;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ForgotPasswordEmail extends Mailable
{
    use  SerializesModels;

    public $email;

    public $token;

    public function __construct($email, $token){
        $this->email = $email;
        $this->token = $token;
    }

    public function build(){
        return $this->from(config('mail.from.address'), config('mail.from.name'))
                    ->markdown('emails.user.recover_password', ['email' => $this->email, 'token' => $this->token])
                    ->subject('Recuperar Contraseña');
    }
}
