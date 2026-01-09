<?php

namespace App\Http\Controllers\ApiControllers;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\ModelsApp\AppUsuario;
use App\ModelsApp\AppEvent;

use App\Models\DataMail;
use App\Mail\BirthdayMail;
use App\Mail\RemeberDate;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Mail;
class CronMailController extends Controller
{
    public function BirthdayMail(Request $request){
        $usuarios  = AppUsuario::whereMonth('fecha_nacimiento', Carbon::now()->format('m'))
        ->whereDay('fecha_nacimiento', Carbon::now()->format('d'))
        ->get();
       // return $usuarios;
        foreach($usuarios as $usuario){
            $dataMail = new DataMail;
            $dataMail ->fill([
              'userMail' => $usuario->email,
              'userName' => $usuario->nombre.' '.$usuario->apellidos,
            ]);
            Mail::to($usuario->email)->send(new BirthdayMail($dataMail));

        }
    }
    public function cancelarCita($token){
        AppEvent::where('token_cancelar',$token)->delete();
        return 'Cita Cancelada';
    }
    public function RememberActiveDate(Request $request){
        $now = Carbon::now();
        $twentyFourHoursFromNow = $now->copy()->addHours(24);
    
        $appEvents = AppEvent::where('start', '>=', $now)
            ->where('start', '<=', $twentyFourHoursFromNow)
            ->get();
        foreach($appEvents as $event){
            $token_cancelar = Str::random(20);
            $event->token_cancelar = $token_cancelar;
            $event->save();
            $dataMail = new DataMail;
            $dataMail ->fill([
                'tiendaName' =>$event->tienda->nombre,
              'dateStart' => $event->start,
              'dateEnd' => $event->end,
              'token' => $token_cancelar
            ]);
    
            Mail::to($event->usuario->email)->send(new RemeberDate($dataMail));

        }
        return $appEvents;

    }
}
