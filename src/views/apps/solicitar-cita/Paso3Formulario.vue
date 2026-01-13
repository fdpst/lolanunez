<template>
    <div class="paso3-container">
        <div class="text-center mb-6">
            <h2 class="text-h5 mb-2">Datos del Cliente</h2>
            <p class="text-body-2 text-medium-emphasis">(*) Campos requeridos</p>
        </div>

        <VForm ref="formRef" v-model="valid">
            <VRow>
                <VCol cols="12">
                    <VTextField
                        v-model="form.nombre"
                        label="Nombre*"
                        :rules="[
                            v => !!v || 'Campo requerido',
                            v => /^[a-z0-9 ]+$/i.test(v) || 'Este campo solo permite letras y números'
                        ]"
                        maxlength="50"
                        variant="outlined"
                        clearable
                    />
                </VCol>
                <VCol cols="12">
                    <VTextField
                        v-model="form.email"
                        label="Correo Electrónico*"
                        :rules="[
                            v => !!v || 'Campo requerido',
                            v => /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(v) || 'Correo inválido'
                        ]"
                        maxlength="50"
                        variant="outlined"
                        clearable
                    />
                </VCol>
                <VCol cols="12">
                    <VTextField
                        v-model="form.telefono"
                        label="Teléfono*"
                        :rules="[
                            v => !!v || 'Campo requerido',
                            v => Number.isInteger(Number(v)) || 'El campo es solo números'
                        ]"
                        maxlength="9"
                        variant="outlined"
                        clearable
                    />
                </VCol>
                <VCol cols="12">
                    <VTextField
                        v-model="comentario"
                        label="Comentario"
                        variant="outlined"
                        clearable
                    />
                </VCol>
            </VRow>
        </VForm>

        <VDivider class="my-6" />

        <div class="d-flex justify-space-between">
            <VBtn variant="outlined" @click="$emit('atras')">
                <VIcon start icon="ri-arrow-left-line" />
                Atrás
            </VBtn>
            <VBtn
                color="primary"
                :loading="guardando"
                @click="saveCita"
            >
                {{ paymentActive ? 'CONTINUAR AL PAGO' : 'CONFIRMAR CITA' }}
                <VIcon end icon="ri-check-line" />
            </VBtn>
        </div>

        <!-- Dialog de confirmación -->
        <VDialog v-model="dialog" max-width="500">
            <VCard>
                <VCardText>
                    <VAlert
                        color="success"
                        variant="tonal"
                        border="start"
                        icon="ri-check-line"
                    >
                        Tu cita se ha creado correctamente, en breve recibirás un mail con la confirmación
                    </VAlert>
                </VCardText>
                <VCardActions>
                    <VSpacer />
                    <VBtn color="primary" @click="cerrarDialog">
                        Aceptar
                    </VBtn>
                </VCardActions>
            </VCard>
        </VDialog>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import moment from 'moment'

const props = defineProps({
    formData: {
        type: Object,
        required: true
    },
    paymentActive: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['atras', 'cita-guardada'])

const formRef = ref(null)
const valid = ref(false)
const guardando = ref(false)
const dialog = ref(false)

const form = ref({
    nombre: null,
    email: null,
    telefono: null
})

const comentario = ref(null)

const checkPayment = async (res) => {
    if (res.data?.clientSecret) {
        emit('open_stripe_tab', res.data)
        return
    }
    
    // Obtener datos adicionales para el resumen
    const datosResumen = await obtenerDatosResumen()
    
    dialog.value = true
    emit('cita-guardada', datosResumen)
    resetForm()
}

const obtenerDatosResumen = async () => {
    try {
        // Obtener nombre del empleado
        const empleadosResponse = await $api_app('/getempleados', {
            method: 'GET',
            params: {
                itemsPerPage: -1,
                tienda_id: props.formData.tienda
            }
        })
        const empleados = empleadosResponse.data || empleadosResponse
        const empleado = empleados.find(e => e.id === props.formData.empleado)
        
        // Obtener nombre de la tienda
        const tiendasResponse = await $api_app('/gettiendas', {
            method: 'GET'
        })
        const tiendas = tiendasResponse.data || tiendasResponse
        const tienda = tiendas.find(t => t.id === props.formData.tienda)
        
        return {
            cliente: { ...form.value },
            empleadoNombre: empleado?.nombre || 'N/A',
            tiendaNombre: tienda?.nombre || 'N/A'
        }
    } catch (error) {
        console.error('Error obteniendo datos del resumen:', error)
        return {
            cliente: { ...form.value },
            empleadoNombre: 'N/A',
            tiendaNombre: 'N/A'
        }
    }
}

const saveCita = async () => {
    const { valid: isValid } = await formRef.value.validate()
    
    if (!isValid) {
        return
    }

    guardando.value = true

    try {
        // Preparar datos de la cita
        const serviciosIds = props.formData.servicios.map(s => s.id)
        const duracionTotal = props.formData.servicios.reduce((sum, s) => sum + (s.duracion || 60), 0)
        const precioTotal = props.formData.servicios.reduce((sum, s) => sum + (s.precio || 0), 0)

        // Calcular fecha y hora de inicio y fin
        const fechaInicio = moment(`${props.formData.fecha} ${props.formData.horario}`).format('YYYY-MM-DD HH:mm:ss')
        const fechaFin = moment(fechaInicio).add(duracionTotal, 'minutes').format('YYYY-MM-DD HH:mm:ss')

        // Obtener el tipo del primer servicio (asumiendo que todos los servicios son del mismo tipo)
        const tipo = props.formData.servicios[0]?.tipo?.nombre || 'peluqueria'

        const data = {
            cita: {
                start: fechaInicio,
                end: fechaFin,
                app_empleado_id: props.formData.empleado,
                app_tienda_id: props.formData.tienda,
                servicios: serviciosIds,
                duracion: duracionTotal,
                precio: precioTotal,
                observacionesUsuario: comentario.value,
                tipo: tipo,
                fecha: props.formData.fecha,
                confirmada: false,
                recogida: false,
                pago: false
            },
            cliente: form.value
        }

        const response = await $api_app('/saveCitaWeb', {
            method: 'POST',
            body: data
        })

        checkPayment(response)
    } catch (error) {
        console.error('Error guardando cita:', error)
        // TODO: Mostrar mensaje de error al usuario
    } finally {
        guardando.value = false
    }
}

const resetForm = () => {
    form.value = {
        nombre: null,
        email: null,
        telefono: null
    }
    comentario.value = null
    formRef.value?.reset()
    formRef.value?.resetValidation()
}

const cerrarDialog = () => {
    dialog.value = false
}
</script>

<style scoped>
.paso3-container {
    max-width: 600px;
    margin: 0 auto;
}
</style>
