<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="{{URL::asset('assets/materialize/css/materialize.min.css')}}">
    <script type="text/javascript" src="{{ url('assets/materialize/js/materialize.min.js') }}"></script>
    <script type="text/javascript" src="{{ url('js/vue.js') }}"></script>
    <script type="text/javascript" src="{{ url('js/axios.min.js') }}"></script>
    <script src="https://js.pusher.com/7.0/pusher.min.js"></script>
    <title>@yield('title')</title>
    <script src="https://unpkg.com/vue-multiselect@2.1.0"></script>
    <link rel="stylesheet" href="https://unpkg.com/vue-multiselect@2.1.0/dist/vue-multiselect.min.css">
    <link href="//vjs.zencdn.net/5.11/video-js.min.css" rel="stylesheet">
    <script src="//vjs.zencdn.net/5.11/video.min.js"></script>
</head>

<body>
    <script>
        axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    </script>

    <nav>
        <div style="background-color:#671c79;" class="nav-wrapper">
        <img class="float-logo" src="{{URL::asset('logo.png')}}" alt="">
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li>
                    <a href="{{url('tienda-inicio')}}">{{ Auth::user() ? Auth::user()->name : 'N/A' }}</a>
                </li>
                <li>
                    <a href="{{url('empleados')}}">Lista Espera</a>
                </li>
            </ul>
        </div>
    </nav>

    

    @yield('contenido')

    <style media="screen">

    .float-logo{
      height: 60px;
      margin-top:5px;
      margin-left: 20px;
    }
        nav {
            text-transform: capitalize;
        }

        .badge {
            border-radius: 7px;
        }

        .select-wrapper input.select-dropdown {
            text-transform: capitalize;
        }

        .main-title {
            font-weight: 700
        }

        input:not([type]):focus:not([readonly]),
        input[type=text]:not(.browser-default):focus:not([readonly]),
        input[type=password]:not(.browser-default):focus:not([readonly]),
        input[type=email]:not(.browser-default):focus:not([readonly]),
        input[type=url]:not(.browser-default):focus:not([readonly]),
        input[type=time]:not(.browser-default):focus:not([readonly]),
        input[type=date]:not(.browser-default):focus:not([readonly]),
        input[type=datetime]:not(.browser-default):focus:not([readonly]),
        input[type=datetime-local]:not(.browser-default):focus:not([readonly]),
        input[type=tel]:not(.browser-default):focus:not([readonly]),
        input[type=number]:not(.browser-default):focus:not([readonly]),
        input[type=search]:not(.browser-default):focus:not([readonly]),
        textarea.materialize-textarea:focus:not([readonly]) {
            border-bottom: 1px solid #6a1b9a !important;
            -webkit-box-shadow: 0 1px 0 0 #6a1b9a !important;
            box-shadow: 0 1px 0 0 #6a1b9a !important;
        }

        input.valid:not([type]),
        input.valid:not([type]):focus,
        input.valid[type=text]:not(.browser-default),
        input.valid[type=text]:not(.browser-default):focus,
        input.valid[type=password]:not(.browser-default),
        input.valid[type=password]:not(.browser-default):focus,
        input.valid[type=email]:not(.browser-default),
        input.valid[type=email]:not(.browser-default):focus,
        input.valid[type=url]:not(.browser-default),
        input.valid[type=url]:not(.browser-default):focus,
        input.valid[type=time]:not(.browser-default),
        input.valid[type=time]:not(.browser-default):focus,
        input.valid[type=date]:not(.browser-default),
        input.valid[type=date]:not(.browser-default):focus,
        input.valid[type=datetime]:not(.browser-default),
        input.valid[type=datetime]:not(.browser-default):focus,
        input.valid[type=datetime-local]:not(.browser-default),
        input.valid[type=datetime-local]:not(.browser-default):focus,
        input.valid[type=tel]:not(.browser-default),
        input.valid[type=tel]:not(.browser-default):focus,
        input.valid[type=number]:not(.browser-default),
        input.valid[type=number]:not(.browser-default):focus,
        input.valid[type=search]:not(.browser-default),
        input.valid[type=search]:not(.browser-default):focus,
        textarea.materialize-textarea.valid,
        textarea.materialize-textarea.valid:focus,
        .select-wrapper.valid>input.select-dropdown {
            border-bottom: 1px solid #6a1b9a !important;
            -webkit-box-shadow: 0 1px 0 0 #6a1b9a !important;
            box-shadow: 0 1px 0 0 #6a1b9a !important;
        }

        input:not([type]):focus:not([readonly])+label,
        input[type=text]:not(.browser-default):focus:not([readonly])+label,
        input[type=password]:not(.browser-default):focus:not([readonly])+label,
        input[type=email]:not(.browser-default):focus:not([readonly])+label,
        input[type=url]:not(.browser-default):focus:not([readonly])+label,
        input[type=time]:not(.browser-default):focus:not([readonly])+label,
        input[type=date]:not(.browser-default):focus:not([readonly])+label,
        input[type=datetime]:not(.browser-default):focus:not([readonly])+label,
        input[type=datetime-local]:not(.browser-default):focus:not([readonly])+label,
        input[type=tel]:not(.browser-default):focus:not([readonly])+label,
        input[type=number]:not(.browser-default):focus:not([readonly])+label,
        input[type=search]:not(.browser-default):focus:not([readonly])+label,
        textarea.materialize-textarea:focus:not([readonly])+label {
            color: #6a1b9a !important;
        }

        .dropdown-content li>a,
        .dropdown-content li>span {
            color: #6a1b9a !important;
            text-transform: capitalize;
        }

        .card {
            box-shadow: none !important;
            border-radius: 20px !important;
            background-color: #ffffffb8 !important;
        }

        .card .card-action {
            background-color: rgba(0, 0, 0, 0) !important;
        }

        .franja {
            width: 100%;
            height: 18px;
            background-color: #f99d0f;
        }

        input:not([type]),
        input[type=text]:not(.browser-default),
        input[type=password]:not(.browser-default),
        input[type=email]:not(.browser-default),
        input[type=url]:not(.browser-default),
        input[type=time]:not(.browser-default),
        input[type=date]:not(.browser-default),
        input[type=datetime]:not(.browser-default),
        input[type=datetime-local]:not(.browser-default),
        input[type=tel]:not(.browser-default),
        input[type=number]:not(.browser-default),
        input[type=search]:not(.browser-default),
        textarea.materialize-textarea {
            border-bottom: 2px solid #671c79;
            color: #671c79;
        }

        ::placeholder {
            color: #671c79;
            opacity: 1;
        }

        :-ms-input-placeholder {
            color: #671c79;
        }

        ::-ms-input-placeholder {
            color: #671c79;
        }

        .round-label {
            color: #ffffff !important;
            background-color: #671c79;
            padding: 3px 8px;
            border-radius: 10px;
        }



    </style>

</body>

</html>
