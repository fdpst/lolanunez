<?php

namespace App\Http\Controllers\AppControllers;

use App\Http\Resources\AppEventoResource;
use App\ModelsApp\AppHistorialMascota;
use App\Http\Controllers\Controller;
use App\Http\Requests\AgendaRequest;
use App\ModelsApp\AppHorarioTienda;
use App\ModelsApp\AppEmpleado;
use App\ModelsApp\AppServicio;
use App\ModelsApp\AppUsuario;
use App\ModelsApp\AppTienda;
use App\ModelsApp\AppEvent;
use App\ModelsApp\Tipo;
use App\ModelsApp\AppMascota;
use App\ModelsApp\AppDireccionUsuario;
use App\Models\DataMail;
use App\Models\Config;
use App\Models\User;
use Illuminate\Http\Request;
use App\Mail\NewPetDateMail;
use Carbon\Carbon;
use Mail;
use Log;
use Str;
use App\Utils\StatusConstants;
use Stripe\Stripe;
use Stripe\Charge;

class EventAppController extends Controller
{
  public function confirmarCita($evento_id){
    $evento = AppEvent::find($evento_id);
    $evento->confirmada = !$evento->confirmada;
    $evento->save();
    return response()->json(new AppEventoResource($evento), 200);
  }

  public function getInformeCitas(Request $request){
    $events = AppEvent::whereHas('empleado')->whereHas('usuario')
    ->whereBetween('start', [$request->fecha_inicio, $request->fecha_fin])
    ->with('servicio', 'mascota')
    ->get();
    return $events;
  }

  public function saveCitaWeb(Request $request){
    $cliente = AppUsuario::where('telefono', $request->cliente['telefono'])->first();

    if($cliente == null){
      $data = $request->cliente;
      $data['dni'] = 0;
      $cliente = AppUsuario::create( $data);
    }

    $cita = $request->cita;
    $cita['app_usuario_id'] = $cliente->id;

    $objetoRequest = new AgendaRequest();
    $objetoRequest->setMethod('POST');
    $objetoRequest->request->add($cita);

    return response()->json($this->_saveCita($objetoRequest,StatusConstants::PENDIENTE), 200);

    /*$empleado = AppEmpleado::where('id', $cita['app_empleado_id'])->get(['nombre'])->first();
    $tienda = AppTienda::where('id', $cita['app_tienda_id'])->get(['nombre'])->first();
    $cita['nombre_empleado'] = $empleado->nombre;
    $cita['nombre_tienda'] = $tienda->nombre;
    $cita['nombre_cliente'] = $cliente->nombre;

    Mail::to($cliente->email)->send(new confirmCitaMail($cita));

    $admin_mail='info@imperiovaron.com';

    Mail::to($admin_mail)->send(new confirmCitaAdminMail($cita));;
    */
  }

  public function getEvents($fecha){
    $events = AppEvent::whereHas('empleado')->whereHas('usuario')
      ->whereBetween('start', [Carbon::parse($fecha)->startOfWeek(), Carbon::parse($fecha)->endOfWeek()])
      ->with('servicio', 'mascota')
      ->whereIn('status', [StatusConstants::CONFIRMADA, StatusConstants::PAGADA, StatusConstants::PENDIENTE])
      ->get();
    return response()->json(AppEventoResource::collection($events), 200);
  }

  public function getData($nombre_tipo, $tienda_id){
    $tipo = Tipo::where('nombre', $nombre_tipo)->get(['id'])->first();

    $empleados = AppEmpleado::with([
      'fecha',
      'vacaciones',
      'horario' => function($query) use ($tienda_id){
        $query->where('app_tienda_id', $tienda_id)->orderBy('entrada', 'ASC');
      }
    ])
    ->where('tipo_id', $tipo->id)
    // ->whereHas('tienda', function($q) use ($tienda_id){
    //     $q->where('app_tienda_id', $tienda_id);
    // })
    ->whereHas('horario', function($q) use ($tienda_id){
        $q->where('app_tienda_id', $tienda_id);
    })
    ->get();

    $clientes = AppUsuario::get();

    $servicios = AppServicio::where('tipo_id', $tipo->id)->get(['id','nombre', 'precio','duracion']);

    return response()->json([
      'clientes'  => $clientes,
      'empleados' => $empleados,
      'servicios' => $servicios,
    ], 200);
  }

  public function saveCita(AgendaRequest $request){
    return $this->_saveCita($request, StatusConstants::CONFIRMADA);
  }

  private function _saveCita(AgendaRequest $request, $status){
      if($request->id){
        $existing_event = AppEvent::find($request->id);
      }

      $config = Config::get()->first();

      $empleado = $this->getEmpleado($request->app_empleado_id);

      $out_of_time = $this->isOutOfTime($request->app_tienda_id, $request->fecha, $request->start, $request->end);

      if(!$out_of_time){
        return response()->json(['message' => 'fuera de horario'], 301);
      }

      $event = new AppEvent();

      // Verificar si existe configuración, si no existe usar valor por defecto
      $configActivo = $config && isset($config->activo) ? $config->activo : true;

      $event->fill([
        'app_empleado_id'     => $empleado['id'],
        'app_usuario_id'      => $request->app_usuario_id,
        'app_tienda_id'       => $request->app_tienda_id,
        'app_mascota_id'      => null,
        'app_tienda_id'       => $request->app_tienda_id,
        'start'               => $request->start,
        'end'                 => $request->end,
        'duracion'            => $request->duracion,
        'confirmada'          => $request->confirmada,
        'recogida'            => $request->recogida,
        'direccion_recogida'  => $request->direccion_recogida,
        'direccion_entrega'   => $request->direccion_entrega,
        'pago'                => $request->pago,
        'precio'              => $request->precio,
        'status'              => $configActivo ? $status : StatusConstants::CONFIRMADA
      ]);

      $usuario = AppUsuario::updateOrCreate(['id' => $request->app_usuario_id], ['observaciones' => $request->observacionesUsuario]);
      // Actualizamos las observaciones de la mascota
     // $mascota = AppMascota::updateOrCreate(['id' => $request->app_mascota_id], ['observaciones' => $request->observaciones]);

      $tipo = Tipo::where('nombre', $request->tipo)->get(['id'])->first();

      $saved_event = $tipo->event()->save($event);

      $servicios = $this->returnIds($request->servicios);

      $saved_event->servicio()->sync($servicios);

      $date = null;
      
      // Obtener emails de administradores (rol = 1)
      $administradores = User::where('role', 1)->pluck('email')->toArray();
      
      // Comprobamos si esta confirmada la cita para envio de mail
      if($request->confirmada == '0'){

        $user = AppUsuario::where(['id' => $request->app_usuario_id])->get(['email','nombre'])->first();
        $userMail = $user->email;
        $userName = $user->nombre;
        /*$pet = AppMascota::where(['id' => $request->app_mascota_id])->get(['nombre'])->first();
        $petName = $pet->nombre;*/
        $date = AppEvent::where('app_usuario_id', $request->app_usuario_id)->get(['start','end'])->first();
        $dateStart = substr($date->start,0,16);
        $dateEnd = substr($date->end,0,16);
        $empleado = AppEmpleado::where('id', $empleado['id'])->get(['nombre'])->first();
        $empleadoName = $empleado->nombre;
        $tienda = AppTienda::where('id', $request->app_tienda_id)->get(['nombre'])->first();
        $tiendaName = $tienda->nombre;

        $dataMail = new DataMail;

        $dataMail->fill([
          'userMail'     => $userMail,
          'userName'     => $userName,
          'dateStart'    => $dateStart,
          'dateEnd'      => $dateEnd,
          'empleadoName' => $empleadoName,
          'tiendaName'   => $tiendaName,
          'confirmada'   => 'SIN CONFIRMAR'
        ]);

        // Enviar email siempre al cliente y a los administradores
        try {
          // Validar email del cliente antes de enviar
          if (filter_var($userMail, FILTER_VALIDATE_EMAIL) === false) {
            \Log::warning('Email del cliente inválido, no se enviará correo: ' . $userMail);
          } else {
            $mail = Mail::to($userMail);
            if (!empty($administradores)) {
              // Filtrar emails válidos antes de agregarlos al CC
              $emailsValidos = array_filter($administradores, function($email) {
                return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
              });
              if (!empty($emailsValidos)) {
                $mail->cc($emailsValidos);
              }
            }
            $mail->send(new NewPetDateMail($dataMail));
          }
        } catch (\Exception $e) {
          // Log del error pero no fallar la creación de la cita
          \Log::error('Error enviando email de nueva cita (sin confirmar): ' . $e->getMessage(), [
            'userMail' => $userMail,
            'administradores' => $administradores ?? []
          ]);
        }
      }

      // Comprobamos si no esta confirmada la cita para envio de mail
      if($request->confirmada == '1'){

        $user = AppUsuario::where(['id' => $request->app_usuario_id])->get(['email','nombre'])->first();
        $userMail = $user->email;
        $userName = $user->nombre;
        //$pet = AppMascota::where(['id' => $request->app_mascota_id])->get(['nombre'])->first();
        //$petName = $pet->nombre;
        $date = AppEvent::where('app_usuario_id', $request->app_usuario_id)->get(['start','end'])->first();

        $dateStart = substr($date->start,0,16);
        $dateEnd = substr($date->end,0,16);
        $empleado = AppEmpleado::where('id', $empleado['id'])->get(['nombre'])->first();
        $empleadoName = $empleado->nombre;
        $tienda = AppTienda::where('id', $request->app_tienda_id)->get(['nombre'])->first();
        $tiendaName = $tienda?->nombre;

        $dataMail = new DataMail;
        
        $dataMail->fill([
          'userMail'     => $userMail,
          'userName'     => $userName,
          'dateStart'    => $dateStart,
          'dateEnd'      => $dateEnd,
          'empleadoName' => $empleadoName,
          'tiendaName'   => $tiendaName,
          'confirmada'   => 'CONFIRMADA'
        ]);

        // Enviar email siempre al cliente y a los administradores
        try {
          // Validar email del cliente antes de enviar
          if (filter_var($userMail, FILTER_VALIDATE_EMAIL) === false) {
            \Log::warning('Email del cliente inválido, no se enviará correo: ' . $userMail);
          } else {
            $mail = Mail::to($userMail);
            if (!empty($administradores)) {
              // Filtrar emails válidos antes de agregarlos al CC
              $emailsValidos = array_filter($administradores, function($email) {
                return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
              });
              if (!empty($emailsValidos)) {
                $mail->cc($emailsValidos);
              }
            }
            $mail->send(new NewPetDateMail($dataMail));
          }
        } catch (\Exception $e) {
          // Log del error pero no fallar la creación de la cita
          \Log::error('Error enviando email de nueva cita (confirmada): ' . $e->getMessage(), [
            'userMail' => $userMail,
            'administradores' => $administradores ?? []
          ]);
        }
      }

      if(isset($existing_event)){
        $existing_event->delete();
      }

      if($config && !$config->activo){
        return response()->json([
          'app_event' => new AppEventoResource($saved_event)
        ], 200);
      }

      return $this->generatePayIntent($saved_event);
  }

  private function generatePayIntent(AppEvent $event){
      $stripeSecret = config('services.stripe.secret');
      
      // Verificar que la clave de Stripe esté configurada
      if (empty($stripeSecret) || !is_string($stripeSecret)) {
        // Si Stripe no está configurado, devolver la cita sin clientSecret
        // Esto permite que la cita se cree sin pago
        return [
          'app_event' => new AppEventoResource($event)
        ];
      }

      try {
        $stripe = new \Stripe\StripeClient($stripeSecret);

        $event->load('usuario');

        $paymentIntent = $stripe->paymentIntents->create([
            'amount'   => (double) $event->precio * 100,
            'currency' => 'eur',
            'automatic_payment_methods' => ['enabled' => true],
            'metadata' => [
                'app_event_id' => $event->id,
                'nombre'       => $event->usuario->nombre,
                'email'        => $event->usuario->email,
                'telefono'     => $event->usuario->telefono
            ]
        ]);

        return [
          'clientSecret' => $paymentIntent->client_secret,
          'app_event'    => new AppEventoResource($event)
        ];
      } catch (\Exception $e) {
        // Si hay un error con Stripe, devolver la cita sin clientSecret
        \Log::error('Error al crear PaymentIntent de Stripe: ' . $e->getMessage());
        return [
          'app_event' => new AppEventoResource($event),
          'error' => 'No se pudo procesar el pago. La cita se ha creado correctamente.'
        ];
      }
  }

  public function saveCitaApp(Request $request){

      /*// Busca si la mascota tiene cita en el dia o dias posteriores
        $recent_event = AppEvent::where('app_mascota_id', $request->app_mascota_id)
                                ->whereDate('start', '>=', Carbon::parse($request->fecha))
                                ->get()->first();
      // si existe id en request lo busca y lo borra
      */
      //calculamos manualmente la finalización de la cita
      $fecha_end = Carbon::parse($request->start)->addMinute(60)->format('Y-m-d H:i');

      if($request->id){
      $existing_event = AppEvent::find($request->id);
      $existing_event->delete();
      }
      //return response()->json("hola", 200);
      // Obtengo empleado
      $empleado = $this->getEmpleado(51);
      // Obtengo si la fecha es correcta
      $out_of_time = $this->isOutOfTime(8, $request->fecha, $request->start, $fecha_end);

      if(!$out_of_time){
        if(isset($existing_event)){
          $existing_event->restore();
        }
        return response()->json(['message' => 'fuera de horario'], 301);
      }
      // Obtengo horas de empleado
      $events = $empleado->event;
      $fit = $this->fitInTime($events, $request->start, $fecha_end);
      // Verifico si hay hora disponible
      if(!$fit){
        if(isset($existing_event)){
          $existing_event->restore();
        }
      return response()->json(['message' => 'hora no disponible en fit'], 301);
      }
      $event = new AppEvent();
      $event->fill([
      'app_empleado_id' => $empleado['id'],
      'app_usuario_id'  => $request->app_usuario_id,
      //'app_mascota_id'  => $request->app_mascota_id,
      'app_tienda_id'   => 8,
      'start'           => $request->start,
      'end'             => $fecha_end,
      'duracion'        => 60,
      'confirmada'      => 1
      ]);

      /*// Actualizamos las observaciones de usuario
      $usuario = AppUsuario::updateOrCreate(['id' => $request->app_usuario_id], ['observaciones' => $request->observacionesUsuario]);
      // Actualizamos las observaciones de la mascota
      $mascota = AppMascota::updateOrCreate(['id' => $request->app_mascota_id], ['observaciones' => $request->observaciones]);*/

      $tipo = Tipo::where('nombre', 'peluqueria')->get(['id'])->first();
      $saved_event = $tipo->event()->save($event);
      $servicios = $this->returnIds($request->servicios);
      $saved_event->servicio()->sync($servicios);
      //$historial = $this->guardarHistorial($servicios, $saved_event->app_mascota_id);
      return response()->json("Cita creada correctamente", 200);

  }

  private function guardarItemsHistorial($servicios, $app_mascota_id){
    foreach ($servicios as $key => $servicio) {
       AppHistorialMascota::create(['app_servicio_id' => $servicio, 'app_mascota_id' => $app_mascota_id]);
    }
    return true;
  }

  private function guardarHistorial($servicios, $app_mascota_id){
    $historial = AppHistorialMascota::where('app_mascota_id', $app_mascota_id)->get();
    if($historial->isEmpty()){
       return $this->guardarItemsHistorial($servicios, $app_mascota_id);
    }
    /*comparar*/
    $servicios_totales = collect($historial)->map(function($element){
      return $element['app_servicio_id'];
    });
    $concatenated = $servicios_totales->concat($servicios)->unique()->take(-3);
    $historial->each->delete();
    return $this->guardarItemsHistorial($concatenated, $app_mascota_id);
  }

  private function restoreEvent($existing_event){
    if(isset($existing_event)){
      return $existing_event->restore();
    }
  }

  private function fitInTime($events, $inicio_evento, $final_evento){
    if(count($events) == 0){
      return true;
    }
    foreach($events as $key => $evento) {
      $is_between = Carbon::parse($inicio_evento)->betweenExcluded($evento['start'], $evento['end']);
      $is_between_end = Carbon::parse($final_evento)->betweenExcluded($evento['start'], $evento['end']);
      $is_envolving = Carbon::parse($inicio_evento)->lessThanOrEqualTo(Carbon::parse($evento['start'])) && Carbon::parse($final_evento)->greaterThanOrEqualTo(Carbon::parse($evento['end']));
      if($is_between){
        return false;
      }
      if($is_between_end){
        return false;
      }
      if($is_envolving){
        return false;
      }
    }
    return true;
  }

  private function getEmpleado($empleado_id){
    return AppEmpleado::with('event')->where('id', $empleado_id)->get()->first();
  }

  private function isOutOfTime($app_tienda_id, $fecha, $start, $end){
    //where('app_tienda_id', $app_tienda_id)
    $numero_dia = AppHorarioTienda::where('dia', Carbon::parse($start)->dayOfWeek)
      ->get()
      ->first();

    $hora_inicio = Carbon::parse($fecha . " " . $numero_dia['start'])->format('Y-m-d H:i');

    $hora_final = Carbon::parse($fecha . " " . $numero_dia['end'])->format('Y-m-d H:i');


    if( Carbon::parse($start)->lessThan(Carbon::parse($hora_inicio)) || Carbon::parse($end)->greaterThan(Carbon::parse($hora_final)) ){
      return false;
    }
    return true;
  }

  private function returnIds($servicios){
    if (is_array($servicios[0])){
      return collect($servicios)->map(function($element){
        return $element['id'];
      });
    }
    return $servicios;
  }

  public function eliminarCita($evento_id, $causa){
    $event = AppEvent::find($evento_id);
    $event->cancelada = $causa;
    $event->save();

    $event->servicio()->detach();
    $event->delete();
    return response()->json('cita eliminada', 200);
  }

}
