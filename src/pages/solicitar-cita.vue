<template>
    <div class="solicitar-cita-container">
        <VContainer>
            <VCard>
                <VCardText>
                    <!-- Paso 1: Selección de Servicios -->
                    <Paso1Servicios
                        v-if="pasoActual === 1"
                        @continuar="onServiciosSeleccionados"
                    />

                    <!-- Paso 2: Selección de Fecha y Horario -->
                    <Paso2FechaHorario
                        v-if="pasoActual === 2"
                        :servicios-seleccionados="formData.servicios"
                        @continuar="onFechaHorarioSeleccionado"
                        @atras="pasoActual = 1"
                    />

                    <!-- Paso 3: Formulario de Cliente -->
                    <Paso3Formulario
                        v-if="pasoActual === 3"
                        :form-data="formData"
                        :payment-active="false"
                        @atras="pasoActual = 2"
                        @cita-guardada="onCitaGuardada"
                    />

                    <!-- Paso 4: Resumen de la Cita -->
                    <Paso4Resumen
                        v-if="pasoActual === 4"
                        :cita-data="resumenCita"
                        @volver-inicio="volverInicio"
                    />
                </VCardText>
            </VCard>
        </VContainer>
    </div>
</template>

<script setup>
import Paso1Servicios from '@/views/apps/solicitar-cita/Paso1Servicios.vue'
import Paso2FechaHorario from '@/views/apps/solicitar-cita/Paso2FechaHorario.vue'
import Paso3Formulario from '@/views/apps/solicitar-cita/Paso3Formulario.vue'
import Paso4Resumen from '@/views/apps/solicitar-cita/Paso4Resumen.vue'

definePage({ meta: { layout: 'blank', public: true } })

const pasoActual = ref(1)
const formData = ref({
    servicios: [],
    fecha: null,
    horario: null,
    empleado: null,
    tienda: null,
    observacionesUsuario: null
})
const resumenCita = ref({
    cliente: null,
    servicios: [],
    fecha: null,
    horario: null,
    empleadoNombre: null,
    tiendaNombre: null,
    comentario: null
})

const onServiciosSeleccionados = (servicios) => {
    formData.value.servicios = servicios
    pasoActual.value = 2
}

const onFechaHorarioSeleccionado = (data) => {
    formData.value.fecha = data.fecha
    formData.value.horario = data.horario
    formData.value.empleado = data.empleado
    formData.value.tienda = data.tienda
    pasoActual.value = 3
}

const onCitaGuardada = (datosCita) => {
    // Guardar datos para el resumen
    resumenCita.value = {
        cliente: datosCita.cliente,
        servicios: formData.value.servicios,
        fecha: formData.value.fecha,
        horario: formData.value.horario,
        empleadoNombre: datosCita.empleadoNombre,
        tiendaNombre: datosCita.tiendaNombre,
        comentario: formData.value.observacionesUsuario
    }
    
    // Ir al paso de resumen
    pasoActual.value = 4
}

const volverInicio = () => {
    // Resetear formulario
    formData.value = {
        servicios: [],
        fecha: null,
        horario: null,
        empleado: null,
        tienda: null,
        observacionesUsuario: null
    }
    resumenCita.value = {
        cliente: null,
        servicios: [],
        fecha: null,
        horario: null,
        empleadoNombre: null,
        tiendaNombre: null,
        comentario: null
    }
    pasoActual.value = 1
}
</script>

<style scoped>
.solicitar-cita-container {
    min-height: 100vh;
    padding: 2rem 0;
    background-color: rgb(var(--v-theme-surface));
}
</style>
