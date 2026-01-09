@component('mail::message')
<img src="{{ URL::asset('logo.png') }}" alt="Citapick" height="200">


<h1><strong style="color: orange;">{{ $dataMail->userName }} Te recordamos que el dia de mañana tienes una cita</strong></h1>

<strong style="color: black;">Datos de la Cita:</strong>


Cita Inicio : <strong>{{ $dataMail->dateStart }}</strong>
Cita Fin    : <strong>{{ $dataMail->dateEnd }}</strong>
Tienda  : <strong>{{ $dataMail->tiendaName }}</strong>
{{$dataMail->token}}
@component('mail::button', ['url' => url('/api/cancelar-cita').'/'.$dataMail->token])
    Cancelar    
@endcomponent
Si desea cambiar EL ESTADO  o cualquier dato relavivo a su cita , presione el boton cancelar o pongase en contacto con nosotros.
Gracias!!
@endcomponent

