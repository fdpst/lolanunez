@extends('app.app')
@section('title', 'MadagascarTV | Cliente')
@section('contenido')

<div class="main-container">

    <div class="row">

        <div class="franja"></div>

        <h4 class="center-align titulo-cliente">Solicitar Turno</h4>

        <div class="col s12 m6 l6 offset-m3 offset-l3">

            <div class="card">
                <div class="card-content">

                    <div class="row">
                        <div class="input-field col s12">
                            <input id="input_nombre_cliente" placeholder="Indique su nombre" type="text" class="validate">
                            <!--<label for="cliente_nombre" class="active">Nombre</label>-->
                        </div>
                        <div class="input-field col s12">
                            <select id="select_secciones">
                                <option value="" disabled selected>Seccion</option>
                            </select>
                            <label class="round-label">Seleccionar</label>
                        </div>
                    </div>

                </div>

                <div class="card-action">
                    <button id="btn_aceptar" class="btn btn-small flat green darken-3">Aceptar</button>
                </div>
            </div>

        </div>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {

        const select_secciones = document.getElementById('select_secciones')

        const btn_aceptar = document.getElementById('btn_aceptar')

        const input_nombre_cliente = document.getElementById('input_nombre_cliente')

        const showAlert = msg => {
            M.toast({
                html: msg
            })
        }

        const resetForm = () => {
            select_secciones.value = ""

            if (typeof(Event) === 'function') {
                var event = new Event('change')
            } else {
                var event = document.createEvent('Event')
                event.initEvent('change', true, true)
            }
            select_secciones.dispatchEvent(event)
            input_nombre_cliente.value = ""
        }

        const createHtmlOptions = lista_secciones => {
            return lista_secciones.map(element => {
                return `<option value="${element.id}">${element.nombre}</option>`
            }).join('')
        }

        const getSecciones = () => {
            axios.get(`api/v1/get-secciones-app`).then(res => {
                select_secciones.insertAdjacentHTML('beforeend', createHtmlOptions(res.data.secciones))
                 M.FormSelect.init(select_secciones, null)
            })
        }

        const addToQueue = () => {
            let instance = M.FormSelect.init(select_secciones, null)

            let data = {
                seccion_id: instance.getSelectedValues()[0],
                nombre_cliente: input_nombre_cliente.value
            }

            btn_aceptar.disabled = true

            axios.post(`api/v1/add-to-queue`, data).then(res => {
                btn_aceptar.disabled = false
                resetForm()
                showAlert('Añadido a la cola de espera')
            }, res => {
                btn_aceptar.disabled = false
                showAlert('Por favor intente de nuevo')
            })

        }

        btn_aceptar.addEventListener('click', e => addToQueue())

        getSecciones()
    })
</script>


<style media="screen">
    .main-container {
        height: 100vh;
        background-image: url("{{URL::asset('assets/img/fondo-de-peces-amarillos.jpg')}}");
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

</style>

@endsection
