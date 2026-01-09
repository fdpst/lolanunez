@component('mail::message')
    # Feliz Cumpleaños

    {{ $dataMail->userName }} Desde Citapick te deseamos Feliz cumpleaños:

    {{ config('app.name') }}!!!
@endcomponent
