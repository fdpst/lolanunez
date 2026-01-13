<template>
    <div class="paso4-container">
        <div class="text-center mb-6">
            <VIcon
                icon="ri-checkbox-circle-fill"
                size="64"
                color="success"
                class="mb-4"
            />
            <h2 class="text-h4 mb-2">¡Cita Confirmada!</h2>
            <p class="text-body-1 text-medium-emphasis">
                Tu cita se ha creado correctamente. En breve recibirás un email de confirmación.
            </p>
        </div>

        <VCard class="mb-6">
            <VCardTitle class="d-flex align-center">
                <VIcon icon="ri-calendar-event-line" class="me-2" />
                Resumen de la Cita
            </VCardTitle>
            <VDivider />
            <VCardText>
                <VRow>
                    <!-- Información del Cliente -->
                    <VCol cols="12" md="6">
                        <h3 class="text-h6 mb-4">Datos del Cliente</h3>
                        <div class="mb-3">
                            <p class="text-body-2 text-medium-emphasis mb-1">Nombre</p>
                            <p class="text-body-1 font-weight-medium">{{ citaData.cliente?.nombre }}</p>
                        </div>
                        <div class="mb-3">
                            <p class="text-body-2 text-medium-emphasis mb-1">Email</p>
                            <p class="text-body-1 font-weight-medium">{{ citaData.cliente?.email }}</p>
                        </div>
                        <div class="mb-3">
                            <p class="text-body-2 text-medium-emphasis mb-1">Teléfono</p>
                            <p class="text-body-1 font-weight-medium">{{ citaData.cliente?.telefono }}</p>
                        </div>
                        <div v-if="citaData.comentario" class="mb-3">
                            <p class="text-body-2 text-medium-emphasis mb-1">Comentario</p>
                            <p class="text-body-1 font-weight-medium">{{ citaData.comentario }}</p>
                        </div>
                    </VCol>

                    <!-- Información de la Cita -->
                    <VCol cols="12" md="6">
                        <h3 class="text-h6 mb-4">Detalles de la Cita</h3>
                        <div class="mb-3">
                            <p class="text-body-2 text-medium-emphasis mb-1">Fecha</p>
                            <p class="text-body-1 font-weight-medium">{{ fechaFormateada }}</p>
                        </div>
                        <div class="mb-3">
                            <p class="text-body-2 text-medium-emphasis mb-1">Hora</p>
                            <p class="text-body-1 font-weight-medium">{{ horaFormateada }}</p>
                        </div>
                        <div class="mb-3">
                            <p class="text-body-2 text-medium-emphasis mb-1">Empleado</p>
                            <p class="text-body-1 font-weight-medium">{{ citaData.empleadoNombre }}</p>
                        </div>
                        <div class="mb-3">
                            <p class="text-body-2 text-medium-emphasis mb-1">Tienda</p>
                            <p class="text-body-1 font-weight-medium">{{ citaData.tiendaNombre }}</p>
                        </div>
                        <div class="mb-3">
                            <p class="text-body-2 text-medium-emphasis mb-1">Duración</p>
                            <p class="text-body-1 font-weight-medium">{{ duracionTotal }} minutos</p>
                        </div>
                    </VCol>
                </VRow>

                <VDivider class="my-4" />

                <!-- Servicios Seleccionados -->
                <div class="mb-4">
                    <h3 class="text-h6 mb-3">Servicios</h3>
                    <VList>
                        <VListItem
                            v-for="servicio in citaData.servicios"
                            :key="servicio.id"
                            class="px-0"
                        >
                            <VListItemTitle class="d-flex justify-space-between align-center">
                                <span>{{ servicio.nombre }}</span>
                                <span class="text-primary font-weight-medium">
                                    {{ formatPrice(servicio.precio) }}
                                </span>
                            </VListItemTitle>
                            <VListItemSubtitle>
                                Duración: {{ servicio.duracion }} min
                            </VListItemSubtitle>
                        </VListItem>
                    </VList>
                </div>

                <VDivider class="my-4" />

                <!-- Total -->
                <div class="d-flex justify-space-between align-center">
                    <h3 class="text-h6">Total</h3>
                    <h3 class="text-h5 text-primary font-weight-bold">
                        {{ precioTotalFormateado }}
                    </h3>
                </div>
            </VCardText>
        </VCard>

        <!-- Botón para volver al inicio -->
        <div class="text-center">
            <VBtn
                color="primary"
                size="large"
                @click="$emit('volver-inicio')"
            >
                Volver al Inicio
            </VBtn>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import moment from 'moment'
import 'moment/locale/es'

// Configurar moment en español al montar el componente
onMounted(() => {
    moment.locale('es')
})

const props = defineProps({
    citaData: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['volver-inicio'])

const fechaFormateada = computed(() => {
    if (!props.citaData.fecha) return '-'
    // Asegurar que moment esté en español
    moment.locale('es')
    const fecha = moment(props.citaData.fecha)
    if (!fecha.isValid()) return '-'
    return fecha.format('dddd, D [de] MMMM [de] YYYY')
})

const horaFormateada = computed(() => {
    if (!props.citaData.horario) return '-'
    // Asegurar que moment esté en español
    moment.locale('es')
    
    // Intentar parsear la hora en diferentes formatos
    const formatos = ['HH:mm', 'H:mm', 'h:mm A', 'h:mmA', 'HH:mm:ss', 'H:mm:ss']
    let horaParseada = null
    
    for (const formato of formatos) {
        horaParseada = moment(props.citaData.horario, formato, true)
        if (horaParseada.isValid()) {
            break
        }
    }
    
    // Si se pudo parsear, formatear en español (formato 24 horas)
    if (horaParseada && horaParseada.isValid()) {
        return horaParseada.format('HH:mm')
    }
    
    // Si no se puede parsear, devolver el valor original
    return props.citaData.horario
})

const duracionTotal = computed(() => {
    if (!props.citaData.servicios || props.citaData.servicios.length === 0) return 0
    return props.citaData.servicios.reduce((sum, s) => sum + (s.duracion || 60), 0)
})

const precioTotalFormateado = computed(() => {
    if (!props.citaData.servicios || props.citaData.servicios.length === 0) return formatPrice(0)
    const total = props.citaData.servicios.reduce((sum, s) => sum + (s.precio || 0), 0)
    return formatPrice(total)
})

const formatPrice = (price) => {
    return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'EUR'
    }).format(price)
}
</script>

<style scoped>
.paso4-container {
    max-width: 800px;
    margin: 0 auto;
}
</style>
