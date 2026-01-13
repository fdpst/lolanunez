<template>
    <div class="paso1-container">
        <!-- Logo y Título -->
        <div class="text-center mb-8">
            <VImg
                v-if="logoUrl"
                :src="logoUrl"
                max-width="200"
                class="mx-auto mb-4"
            />
            <h1 class="text-h4 mb-2">Solicitar Cita</h1>
            <p class="text-body-1 text-medium-emphasis">Selecciona uno o varios servicios</p>
        </div>

        <!-- Listado de Servicios -->
        <div v-if="loading" class="text-center py-8">
            <VProgressCircular indeterminate color="primary" />
            <p class="mt-4">Cargando servicios...</p>
        </div>

        <div v-else>
            <VRow>
                <VCol
                    v-for="servicio in servicios"
                    :key="servicio.id"
                    cols="12"
                    md="6"
                    lg="4"
                >
                    <VCard
                        :class="{ 'border-primary': isSelected(servicio.id) }"
                        class="service-card cursor-pointer"
                        @click="toggleServicio(servicio)"
                    >
                        <VCardText>
                            <div class="d-flex align-center justify-space-between">
                                <div>
                                    <h3 class="text-h6 mb-1">{{ servicio.nombre }}</h3>
                                    <p class="text-body-2 text-medium-emphasis mb-2">
                                        Duración: {{ servicio.duracion }} min
                                    </p>
                                    <p class="text-h6 text-primary">
                                        {{ formatPrice(servicio.precio) }}
                                    </p>
                                </div>
                                <VCheckbox
                                    :model-value="isSelected(servicio.id)"
                                    @click.stop="toggleServicio(servicio)"
                                />
                            </div>
                        </VCardText>
                    </VCard>
                </VCol>
            </VRow>

            <div v-if="servicios.length === 0" class="text-center py-8">
                <p class="text-body-1 text-medium-emphasis">No hay servicios disponibles</p>
            </div>

            <!-- Botón Continuar -->
            <div class="text-center mt-8">
                <VBtn
                    color="primary"
                    size="large"
                    :disabled="serviciosSeleccionados.length === 0"
                    @click="continuar"
                >
                    Continuar
                    <VIcon end icon="ri-arrow-right-line" />
                </VBtn>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits(['continuar'])

const servicios = ref([])
const serviciosSeleccionados = ref([])
const loading = ref(true)
const logoUrl = ref(null)

const fetchServicios = async () => {
    try {
        loading.value = true
        const response = await $api_app('/getservicios', {
            method: 'GET',
            params: {
                itemsPerPage: -1
            }
        })
        servicios.value = response.data || response
    } catch (error) {
        console.error('Error cargando servicios:', error)
    } finally {
        loading.value = false
    }
}

const isSelected = (servicioId) => {
    return serviciosSeleccionados.value.some(s => s.id === servicioId)
}

const toggleServicio = (servicio) => {
    const index = serviciosSeleccionados.value.findIndex(s => s.id === servicio.id)
    if (index > -1) {
        serviciosSeleccionados.value.splice(index, 1)
    } else {
        serviciosSeleccionados.value.push(servicio)
    }
}

const formatPrice = (price) => {
    return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'EUR'
    }).format(price)
}

const continuar = () => {
    if (serviciosSeleccionados.value.length > 0) {
        emit('continuar', serviciosSeleccionados.value)
    }
}

onMounted(() => {
    fetchServicios()
    // TODO: Cargar logo de la empresa desde configuración
})
</script>

<style scoped>
.service-card {
    transition: all 0.3s ease;
    border: 2px solid transparent;
}

.service-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.service-card.border-primary {
    border-color: rgb(var(--v-theme-primary));
    box-shadow: 0 2px 8px rgba(var(--v-theme-primary), 0.3);
}

.cursor-pointer {
    cursor: pointer;
}
</style>
