@extends('app.app')
@section('contenido')

@if(session('mensaje'))
<script type="text/javascript">
    M.toast({
        html: "{!! session('mensaje') !!}"
    })
</script>
@endif

<div class="container center-align">

    <h2 class="orange-text main-title">Login</h2>

    <div class="row">

        <div class="col s12 m6 l6 offset-m3 offset-l3 card">

            <div class="card-content">

                <form action="{{route('do.login')}}" method="post">
                    @csrf

                    <div class="input-field col s12">
                        <input name="email" id="email" placeholder="Email" type="text" class="validate">
                        <label for="email" class="active">Email</label>
                    </div>

                    <div class="input-field col s12">
                        <input name="password" id="password" placeholder="Contraseña" type="password" class="validate">
                        <label for="password" class="active">Contraseña</label>
                    </div>

                    <div class="input-field col s12">
                        <button type="submit" class="btn btn-small green">Login</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
</div>

@endsection
