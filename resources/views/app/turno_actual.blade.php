@extends('app.app')
@section('title', 'MadagascarTV | Cliente')
@section('contenido')

<div id="app" class="main-container">
    
        <video id="vid" class="" height="200" controls muted>
            <source :src="this.video" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    
    <div class="row center-align">

        <div class="franja"></div>

        <div class="col s12 m8 l8 offset-m2 offset-l2">
                
            <h2 class="white-text main-title">Turno</h2>

            <div class="card card-panel">

                <table>
                    <thead>
                        <tr>
                            <th>Cliente</th>
                            <th>Empleado</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="cliente in clientes">
                            <td>@{{ cliente.nombre_cliente }}</td>
                            <td>
                                <template v-if="cliente.empleado">
                                    @{{ cliente.empleado.nombre }}
                                </template>
                                <template v-else>
                                    N/A
                                </template>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <button onclick="getFullscreen()" id="bot">Open Video in Fullscreen Mode</button>
        </div>
        
    </div>

</div>
<script>
//this.getFullscreen();
boton = document.getElementById('bot');

function getFullscreen(){
    /*var element = document.getElementById("vid");
    if(element.requestFullscreen) {
        element.requestFullscreen();
    } else if(element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if(element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if(element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }*/
}
</script>
<script>
    
    const app = new Vue({
      
        el: '#app',

        data: {
            clientes: [],
            video: "http://127.0.0.1:8000/storage/videos/60cd185ca6523-loguin.mp4",
                        
        },

        created() {
            this.getClientesActuales();
            var options = {};
           
            //document.getElementById('vid').pause();
            //document.getElementById('vid').play();
            // Show loading animation.
            
            
        },

        mounted() {
            var video = document.getElementById('vid');
            
            var playPromise = video.play();
            
            if (playPromise !== undefined) {
                
                playPromise.then(_ => {
                    // Automatic playback started!
                    // Show playing UI.
                    // We can now safely pause video...
                    //video.pause();
                    
                })
                .catch(error => {
                    // Auto-play was prevented
                    // Show paused UI.
                });
            }
            
            Pusher.logToConsole = true

            const pusher = new Pusher('7294be907f389f80193f', {
                cluster: 'us2'
            })

            const channel_actual = pusher.subscribe('canal-actual');

            channel_actual.bind('actualizar.tabla', data => {
                this.getClientesActuales()
            })
            
        },

        methods: {
            getClientesActuales() {
                axios.get(`api/v1/get-cliente-actual`).then(res => {
                    this.clientes = res.data
                    M.toast({
                        html: 'Proximo Turno'
                    })
                })
            },
            getFullscreen2(){
                var element = document.getElementById("vid");
                var promise="";
                if(element.requestFullscreen) {
                    promise = element.requestFullscreen();
                    if (promise !== undefined) {
                
                        promise.then(_ => {
                        // Automatic playback started!
                        // Show playing UI.
                        // We can now safely pause video...
                        //video.pause();
                        
                    })
                    .catch(error => {
                        // Auto-play was prevented
                        // Show paused UI.
                    });
                }
                } else if(element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if(element.webkitRequestFullscreen) {
                    element.webkitRequestFullscreen();
                } else if(element.msRequestFullscreen) {
                    element.msRequestFullscreen();
                }
            }
        }
    })
</script>

<style media="screen">
    [v-cloak] {
        display: none;
    }

    .hide {
        opacity: 0;
    }

    .main-container {
        height: 100vh;
        background-image: url("{{URL::asset('assets/img/camalon.jpg')}}");
        background-position: center;
        background-size: cover;
        padding-top: 5px;
    }


    .titulo-cliente {
        margin: 20px 30px 20px 20px;
        font-size: 28px;
        font-weight: 700;
        color: #671c79;
    }

  table{
        color: #671c79 !important;
    }


</style>

@endsection
