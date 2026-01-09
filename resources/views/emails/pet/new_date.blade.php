@component('mail::message')
# Nueva Cita
<img src="{{ URL::asset('logo.png') }}" alt="Citapick" height="200"><br>
Se ha registrado una nueva cita en la plataforma de Citapick:
<h1><strong style="color: orange;">{{ $dataMail->userName }}</strong></h1>
<strong style="color: black;">Datos de la Cita:</strong><br>
Usuario : <strong>{{ $dataMail->userName }}</strong><br>
Cita Inicio : <strong>{{ $dataMail->dateStart }}</strong><br>
Cita Fin : <strong>{{ $dataMail->dateEnd }}</strong><br>
Tienda : <strong>{{ $dataMail->tiendaName }}</strong><br>
@if ($dataMail->confirmada === 'CONFIRMADA')
    ¡Importante! La cita esta : <strong style="color: green;">{{ $dataMail->confirmada }}</strong><br>
@else
    ¡Importante! La cita esta : <strong style="color: red;">{{ $dataMail->confirmada }}</strong><br>
@endif
Si desea cambiar EL ESTADO o cualquier dato relativo a su cita pongase en contacto con nosotros.<br>
Gracias!!<br>
Citapick
@endcomponent
