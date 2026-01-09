<?php

namespace App\Mail;

use App\Models\DataMail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class BirthdayMail extends Mailable
{
    use Queueable, SerializesModels;

    public $dataMail;

    public function __construct(DataMail $dataMail){
        $this->dataMail = $dataMail;
    }

    public function build(){
        return $this->markdown('emails.pet.happy_birthday', ['dataMail' => $this->dataMail])->subject('Feliz Cumpleaños');
    }
}
