@extends('app.app')
@section('title', 'MadagascarTV | Cliente')
@section('contenido')

<div id=app class="main-container">

    <div v-if="is_loading" class="col s12 center-align">
        <div class="preloader-wrapper big active">
            <div class="spinner-layer spinner-orange-only">
                <div class="circle-clipper left">
                    <div class="circle"></div>
                </div>
                <div class="gap-patch">
                    <div class="circle"></div>
                </div>
                <div class="circle-clipper right">
                    <div class="circle"></div>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
        <h4 class="white-text main-title" style="text-align:center;">Activar/Desactivar Empleado</h4>

            <div class="row">

                <div class="col s12 m12 l12">
                    <div class="card card-panel">
                    
                        <table>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>

                            <tbody v-cloak v-for="empleado in empleados">
                                <tr>
                                    <td>@{{ empleado.nombre }}</td>
                                    <td>
                                        <template v-if="empleado.ultimo_turno == null || empleado.ultimo_turno.final != null">
                                            <button class="btn btn-small green flat" @click="guardarTurno(empleado)">activar</button>
                                        </template>
                                        <template v-if="empleado.ultimo_turno && empleado.ultimo_turno.final == null">
                                            <button class="btn btn-small red flat" @click="guardarTurno(empleado)">desactivar</button>
                                        </template>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    </div>


</div>

<script>
    const app = new Vue({
        el: '#app',

        data: {
            is_loading: false,
            empleados: []
        },

        created() {
            this.getEmpleados()
        },

        methods: {
            getEmpleados() {
                axios.get(`api/v1/get-auth-user`).then(res => {
                    this.empleados = res.data.empleados
                })
            },

            guardarTurno(empleado) {
                axios.get(`api/v1/guardar-turno-empleado/${empleado.id}`).then(res => {
                    let i = this.empleados.findIndex(x => x.id == empleado.id)
                    Vue.set(this.empleados, i, res.data.empleado)
                })
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

    #app .card {
        background-color: #ffffff !important;
    }

    .titulo-cliente {
        margin: 20px 30px 20px 20px;
        font-size: 28px;
        font-weight: 700;
        color: #671c79;
    }

    .modal {
        border-radius: 20px;
        color: #6a1b9a !important;
        text-align: center !important;
    }

    .modal .modal-content {
        text-align: center !important;
    }

    .modal-header {
        padding: 20px;
        background-color: #671c79 !important;
    }
</style>

@endsection
