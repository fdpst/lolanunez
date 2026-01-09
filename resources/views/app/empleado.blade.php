@extends('app.app')
@section('title', 'MadagascarTV | Empleado')
@section('contenido')

<div class="main-container">

    <div class="row">

        <div class="franja"></div>

        <div class="col s12 center-align">
            <h2 style="margin-top:80px;" class="white-text main-title">Lista Espera</h2>
        </div>

        <div id=app>

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

            <div class="row">

                <div class="col s12 m6 l6">
                    <div class="card card-panel">

                        <table>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Secciones</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody v-cloak v-for="empleado in empleados">
                                <tr>
                                    <td>@{{ empleado.nombre }}</td>
                                    <td>@{{ setSecciones(empleado.secciones) }}</td>
                                    <td>
                                        <button :disabled="is_loading" @click="setEmpleado(empleado)" class="btn btn-small orange">Siguiente</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>

                <div class="col s12 m6 l6">
                    <div class="card card-panel">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Cliente</th>
                                    <th>Empleado</th>
                                    <th>Seccion</th>
                                    <th>Status</th>
                                    <th>Hora</th>
                                </tr>
                            </thead>

                            <tbody v-cloak v-for="cliente in clientes_ordenados">
                                <tr>
                                    <td>@{{ cliente.id }}</td>
                                    <td>@{{ cliente.nombre_cliente }}</td>
                                    <td>
                                        <template v-if="cliente.empleado">
                                            @{{ cliente.empleado.nombre }}
                                        </template>
                                        <template v-else>
                                            N/A
                                        </template>
                                    </td>
                                    <td>@{{ cliente.seccion.nombre }}</td>
                                    <td>
                                        <span class="white-text badge" :class="cliente.status == 'pendiente' ? 'red' : 'green'" data-badge-caption="">@{{cliente.status}}</span>
                                    </td>
                                    <td>@{{ cliente.created_at }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

            <div id="modal_anterior" class="modal">

                <div class="modal-content">

                    <h4>Cliente Atendido</h4>

                    <h5><strong>Cliente: </strong>@{{ turno_anterior.nombre_cliente }}</h5>

                    <h5><strong>Empleado: </strong>@{{ turno_anterior.empleado.nombre }}</h5>

                    <div>
                        <label class="typo__label">Secciones</label>
                        <vue-multiselect v-model="turno_anterior.secciones" :options="secciones" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" track-by="nombre" label="nombre" :searchable="false"
                          :close-on-select="false" :show-labels="false" placeholder="Secciones">
                            <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">@{{ values.length }} opciones seleccionadas</span></template>
                        </vue-multiselect>
                    </div>
                    <br>
                    <br>

                    <button class="btn btn-small green" @click="confirmarCita">Confirmar</button>

                </div>

            </div>

            <div id="modal_crear" class="modal">

                <div class="modal-header">
                    <h4 class="white-text">Crear Turno</h4>
                </div>

                <div class="modal-content">

                    <form v-on:submit.prevent="crearTurno" method="post">

                        <div class="row">

                            <div class="input-field col s12">
                                <input v-model="turno.nombre_cliente" placeholder="Nombre Cliente" type="text" class="validate">
                                <label for="cliente_nombre" class="active">Nombre</label>
                            </div>

                            <div class="col s12">
                                <label for="categoria">Categoria</label>

                                <select id="categoria" v-model="turno.seccion_id" class="browser-default">
                                    <option value="" disabled selected>Categoria</option>
                                    <option v-for="seccion in secciones" :value="seccion.id">@{{seccion.nombre}}</option>
                                </select>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col s12">
                                <button type="submit" :disabled="is_loading" class="btn btn-small flat purple">guardar</button>

                                <button type="button" :disabled="is_loading" class="btn btn-small red" @click="modal_crear = false">Cerrar</button>
                            </div>
                        </div>

                    </form>

                </div>

            </div>

            <div id="modal_actual" class="modal">

                <div class="modal-header">
                    <h4 class="white-text">Proximo Cliente</h4>
                </div>

                <div class="modal-content">


                    <h5><strong>Cliente: </strong>@{{ turno_actual.nombre_cliente }}</h5>

                    <h5><strong>Empleado: </strong>@{{ turno_actual.empleado.nombre }}</h5>

                    <h5><strong>Seccion: </strong>@{{ turno_actual.seccion.nombre }}</h5>

                    <br>
                    <br>

                    <button class="btn btn-small orange" @click="modal = false">Cerrar</button>

                    <button class="btn btn-small red" @click="cancelarCita">No atendido</button>

                </div>

            </div>

        </div>
    </div>
</div>

<script>
    Vue.component('vue-multiselect', window.VueMultiselect.default)

    const app = new Vue({
        el: '#app',

        data: {
            is_loading: false,
            empleados: [],
            clientes: [],
            secciones: [],
            selected: null,

            turno: {
                seccion_id: null,
                nombre_cliente: null,
                empleado_id: null
            },

            turno_actual: {
                empleado: {
                    nombre: null
                },
                seccion: {
                    nombre: null
                }
            },

            turno_anterior: {
                empleado: {
                    nombre: null
                },
                secciones: []
            },
            notificacion: {
                cliente: null,
                empleado: null,
                tienda: null
            },

            modal: false,
            modal_anterior: false,
            modal_crear: false,
        },

        watch: {
            'modal'(estado_modal) {
                this.handleModal(estado_modal, 'modal_actual')
            },
            'modal_anterior'(estado_modal) {
                this.handleModal(estado_modal, 'modal_anterior')
            },
            'modal_crear'(estado_modal) {
                this.handleModal(estado_modal, 'modal_crear')
            }
        },

        created() {
            this.getEmpleados()
        },

        mounted() {
            this.modal_instance = M.Modal.init(document.getElementById('modal_actual'))

            Pusher.logToConsole = true

            const pusher = new Pusher('7294be907f389f80193f', {
                cluster: 'us2'
            })

            const channel = pusher.subscribe('canal-clientes');

            const channel_actual = pusher.subscribe('canal-actual');

            channel.bind('nuevo.cliente', data => {
                this.handleCliente(data.message)
            })

            channel_actual.bind('actualizar.tabla', data => {
                this.getEmpleados()
            })

            /*channel.bind('actualizar.tabla', data => {
                this.handleCliente(data.message)
            })*/
        },

        methods: {
            handleModal(estado_modal, modal_name) {
                M.Modal.init(document.getElementById(modal_name), {
                    dismissible: false
                })

                var instance = M.Modal.getInstance(document.getElementById(modal_name));

                estado_modal ? instance.open() : instance.close()
            },

            handleCliente(data) {
                this.clientes.unshift(data)
            },

            getEmpleados() {
                axios.get(`api/v1/get-empleados-and-clientes`).then(res => {
                    this.empleados = res.data.empleados
                    this.clientes = res.data.clientes
                    this.secciones = res.data.secciones
                })
            },

            crearTurno() {
                this.is_loading = true
                axios.post(`api/v1/create-turno`, this.turno).then(res => {
                    this.modal_crear = false
                    this.is_loading = false
                    this.clearTurno()
                }, res => {
                    this.is_loading = false
                })
            },

            setEmpleado(empleado) {
                this.is_loading = true
                this.turno.empleado_id = empleado.id

                axios.post('set-turno-actual', empleado).then(res => {
                    let cliente = res.data.cliente

                    let anterior = res.data.anterior

                    if (anterior) {
                        this.turno_anterior = anterior
                        this.turno_anterior.secciones.push(anterior.seccion)
                        this.modal_anterior = true
                    }

                    if (cliente) {
                        this.turno_actual = cliente
                        this.modal = true
                    }

                    if (cliente == null && anterior == null) {
                        this.modal_crear = true
                    }

                    this.getEmpleados()

                    this.is_loading = false
                    

                }, res => {
                    this.is_loading = false
                })
            },

            cancelarCita() {
                this.is_loading = true
                axios.get(`api/v1/cancelar-cita/${this.turno_actual.id}`).then(res => {
                    this.modal = false
                    this.is_loading = false
                    let i = this.clientes.findIndex(element => element.id == this.turno_actual.id)
                    this.clientes.splice(i, 1)
                }, res => {
                    this.is_loading = false
                })
            },

            confirmarCita() {
                this.is_loading = true
                
                axios.post(`api/v1/confirmar-cita`, this.turno_anterior).then(res => {
                    this.modal_anterior = false
                    this.is_loading = false
                    this.notificar();
                }, res => {
                    this.is_loading = false
                })
            },

            notificar(){
                //enviamos notificacion a app
                this.notificacion.cliente=this.turno_actual.nombre_cliente;
                this.notificacion.empleado=this.turno_actual.empleado.nombre;
                this.notificacion.tienda=this.turno_actual.web_user_id;
                
                axios.post(`api/v1/notificar-turno`, this.notificacion).then(res => {
                    
                }, res => {
                    
                })
            },

            setSecciones(secciones) {
                return secciones.map(x => x.nombre).join(', ')
            },

            clearTurno() {
                this.turno = {
                    seccion_id: null,
                    nombre_cliente: null,
                    empleado_id: null
                }
            },

            clearTurnoActual() {
                this.turno_actual = {
                    empleado: {
                        nombre: null
                    },
                    seccion: {
                        nombre: null
                    }
                }
            }
        },

        computed: {
            clientes_ordenados() {
                return [...this.clientes].sort((a, b) => (a.status < b.status) ? 1 : ((b.status < a.status) ? -1 : 0));
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