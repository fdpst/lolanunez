<?php

namespace App\Mail;

use App\Models\DataMail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class NewPetDateMail extends Mailable
{
    use Queueable, SerializesModels;

    public $dataMail;

    public function __construct(DataMail $dataMail){
        $this->dataMail = $dataMail;
    }

    public function build(){
        return $this->markdown('emails.pet.new_date', ['dataMail' => $this->dataMail])->subject('Tiene una Cita');
    }
}
