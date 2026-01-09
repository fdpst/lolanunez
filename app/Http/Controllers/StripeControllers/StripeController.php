<?php

namespace App\Http\Controllers\StripeControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Mail;
use Log;
use App\Utils\StatusConstants;
use Stripe\Stripe;
use Stripe\Charge;
use App\Models\DataMail;
use App\Mail\NewPetDateMail;
use App\ModelsApp\AppEvent;

class StripeController extends Controller
{
  public function webHook(Request $request){
    Log::channel('stripe_log')->info(print_r($request['data'], true));
    if($request['type'] == 'charge.succeeded'){
       $this->updateEvent($request['data']['object']['metadata'], $request['id']);
    }
  }

  private function updateEvent($data, $id){
    $event = AppEvent::find($data['app_event_id'])->load(['usuario', 'empleado', 'tienda']);
    $event->status = StatusConstants::PAGADA;
    $event->save();

    $dataMail = new DataMail;

    $dataMail->fill([
      'userMail'     => $event->usuario->email,
      'userName'     => $event->usuario->nombre,
      'dateStart'    => substr($event->start,0,16),
      'dateEnd'      => substr($event->start,0,16),
      'empleadoName' => $event->empleado->nombre,
      'tiendaName'   => $event->tienda->nombre,
      'confirmada'   => StatusConstants::CONFIRMADA
    ]);

    Mail::to($event->usuario->email)->bcc('danielvkp@live.com')->send(new NewPetDateMail($dataMail));
  }
}
