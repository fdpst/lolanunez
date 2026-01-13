<template>
    <div class="paso2-container">
        <div class="text-center mb-6">
            <h2 class="text-h5 mb-2">Selecciona Fecha y Horario</h2>
            <p class="text-body-2 text-medium-emphasis">Elige el día y la hora que mejor te convenga</p>
        </div>

        <!-- Selección de Tienda -->
        <VRow class="mb-4">
            <VCol cols="12" md="6">
                <VAutocomplete
                    v-model="tiendaSeleccionada"
                    :items="tiendas"
                    item-title="nombre"
                    item-value="id"
                    label="Selecciona una tienda"
                    variant="outlined"
                    @update:model-value="onTiendaChange"
                />
            </VCol>
        </VRow>

        <div v-if="loading" class="text-center py-8">
            <VProgressCircular indeterminate color="primary" />
            <p class="mt-4">Cargando horarios disponibles...</p>
        </div>

        <div v-else-if="tiendaSeleccionada">
            <!-- Navegación de Semana -->
            <div class="d-flex justify-space-between align-center mb-4">
                <VBtn icon="ri-arrow-left-s-line" variant="text" @click="semanaAnterior" />
                <h3 class="text-h6">{{ semanaActualTexto }}</h3>
                <VBtn icon="ri-arrow-right-s-line" variant="text" @click="semanaSiguiente" />
            </div>

            <!-- Días de la Semana - Scroll Horizontal -->
            <div ref="scrollContainer" class="dias-scroll-container">
                <div class="dias-scroll-content">
                    <div
                        v-for="dia in diasSemana"
                        :key="dia.fecha"
                        :ref="el => { if (el) diaRefs[dia.fecha] = el }"
                        class="dia-card-wrapper"
                    >
                        <VCard
                            :class="{ 'border-primary': diaSeleccionado === dia.fecha }"
                            class="dia-card"
                        >
                            <VCardText>
                                <div class="text-center mb-3">
                                    <p class="text-subtitle-1 font-weight-bold mb-1">
                                        {{ dia.nombreDiaCorto }}
                                    </p>
                                    <p class="text-h6 mb-2">{{ dia.numeroDia }}</p>
                                    <VChip
                                        v-if="dia.esHoy"
                                        size="small"
                                        color="primary"
                                    >
                                        Hoy
                                    </VChip>
                                </div>

                                <!-- Horarios Disponibles por Empleado -->
                                <div v-if="horariosPorDia[dia.fecha] && horariosPorDia[dia.fecha].length > 0">
                                    <div
                                        v-for="empleado in horariosPorDia[dia.fecha]"
                                        :key="empleado.id"
                                        class="mb-3"
                                    >
                                        <p class="text-body-2 font-weight-medium mb-2">
                                            {{ empleado.nombre }}
                                        </p>
                                        <div class="d-flex flex-wrap gap-2">
                                            <VChip
                                                v-for="hora in empleado.todosHorarios"
                                                :key="hora"
                                                :class="{
                                                    'chip-selected': horarioSeleccionado === `${dia.fecha}_${empleado.id}_${hora}`,
                                                    'chip-disabled': empleado.horariosDeshabilitados && empleado.horariosDeshabilitados.includes(hora)
                                                }"
                                                :disabled="empleado.horariosDeshabilitados && empleado.horariosDeshabilitados.includes(hora)"
                                                :color="empleado.horariosDeshabilitados && empleado.horariosDeshabilitados.includes(hora) ? 'error' : undefined"
                                                size="small"
                                                variant="outlined"
                                                class="cursor-pointer"
                                                @click="!(empleado.horariosDeshabilitados && empleado.horariosDeshabilitados.includes(hora)) ? seleccionarHorario(dia.fecha, empleado.id, empleado.nombre, hora) : null"
                                            >
                                                {{ hora }}
                                            </VChip>
                                        </div>
                                    </div>
                                </div>
                                <div v-else class="text-center text-medium-emphasis text-body-2">
                                    Sin horarios disponibles
                                </div>
                            </VCardText>
                        </VCard>
                    </div>
                </div>
            </div>

            <!-- Botones de Navegación -->
            <div class="d-flex justify-space-between mt-6">
                <VBtn variant="outlined" @click="$emit('atras')">
                    <VIcon start icon="ri-arrow-left-line" />
                    Atrás
                </VBtn>
                <VBtn
                    color="primary"
                    :disabled="!horarioSeleccionado"
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
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import moment from 'moment'

const props = defineProps({
    serviciosSeleccionados: {
        type: Array,
        required: true
    }
})

const emit = defineEmits(['continuar', 'atras'])

const tiendas = ref([])
const tiendaSeleccionada = ref(null)
const loading = ref(false)
// Iniciar semana en lunes (isoWeek)
const fechaInicioSemana = ref(moment().startOf('isoWeek'))
const diaSeleccionado = ref(null)
const horarioSeleccionado = ref(null)
const horariosPorDia = ref({})
const datosSeleccionados = ref({
    fecha: null,
    horario: null,
    empleado: null,
    empleadoNombre: null,
    tienda: null
})
const scrollContainer = ref(null)
const diaRefs = ref({})

const diasSemana = computed(() => {
    const dias = []
    // Configurar moment para español
    moment.locale('es')
    
    for (let i = 0; i < 7; i++) {
        const fecha = moment(fechaInicioSemana.value).add(i, 'days')
        const esHoy = fecha.isSame(moment(), 'day')
        dias.push({
            fecha: fecha.format('YYYY-MM-DD'),
            nombreDia: fecha.format('dddd'),
            nombreDiaCorto: fecha.format('ddd'),
            numeroDia: fecha.format('D'),
            mes: fecha.format('MMMM'),
            esHoy
        })
    }
    return dias
})

const semanaActualTexto = computed(() => {
    const inicio = moment(fechaInicioSemana.value).format('D MMM')
    const fin = moment(fechaInicioSemana.value).add(6, 'days').format('D MMM YYYY')
    return `${inicio} - ${fin}`
})

const fetchTiendas = async () => {
    try {
        const response = await $api_app('/gettiendas', {
            method: 'GET'
        })
        tiendas.value = response.data || response
    } catch (error) {
        console.error('Error cargando tiendas:', error)
    }
}

const fetchHorariosDisponibles = async () => {
    if (!tiendaSeleccionada.value) return

    loading.value = true
    try {
        // Calcular duración total de servicios seleccionados
        const duracionTotal = props.serviciosSeleccionados.reduce((sum, s) => sum + (s.duracion || 60), 0)

        // Obtener eventos de la semana
        const fechaActual = moment(fechaInicioSemana.value).format('YYYY-MM-DD')
        const eventos = await $api_app(`/geteventsbymonth/${fechaActual}`, {
            method: 'GET'
        })

        // Obtener empleados con horarios filtrados por tienda
        const empleadosResponse = await $api_app('/getempleados', {
            method: 'GET',
            params: {
                itemsPerPage: -1,
                tienda_id: parseInt(tiendaSeleccionada.value)
            }
        })
        const empleados = empleadosResponse.data || empleadosResponse

        // Para cada día de la semana, calcular horarios disponibles
        const horarios = {}
        diasSemana.value.forEach(dia => {
            horarios[dia.fecha] = []
            
            empleados.forEach(empleado => {
                // Verificar si el empleado tiene horarios cargados
                if (!empleado.horario || empleado.horario.length === 0) {
                    return
                }

                // Obtener horario del empleado para este día
                // Backend usa: domingo=0, lunes=1, ..., sábado=6
                // Frontend muestra: lunes=1, martes=2, ..., domingo=7
                // Convertir: si es domingo (7) -> 0, sino mantener el valor
                const diaSemanaISO = moment(dia.fecha).isoWeekday() // lunes=1, domingo=7
                const diaSemana = diaSemanaISO === 7 ? 0 : diaSemanaISO
                
                const horarioEmpleado = empleado.horario?.find(h => 
                    h.dia === diaSemana && h.app_tienda_id === tiendaSeleccionada.value
                )

                if (horarioEmpleado) {
                    // Calcular intervalos disponibles
                    const horariosDisponibles = calcularHorariosDisponibles(
                        dia.fecha,
                        horarioEmpleado.entrada,
                        horarioEmpleado.salida,
                        duracionTotal,
                        eventos,
                        empleado.id
                    )

                    // Calcular horarios ocupados (para mostrarlos deshabilitados)
                    const horariosOcupados = calcularHorariosOcupados(
                        dia.fecha,
                        horarioEmpleado.entrada,
                        horarioEmpleado.salida,
                        eventos,
                        empleado.id
                    )
                    
                    // Calcular todos los horarios posibles (disponibles + ocupados)
                    const todosHorarios = calcularTodosHorarios(
                        dia.fecha,
                        horarioEmpleado.entrada,
                        horarioEmpleado.salida
                    )
                    
                    if (todosHorarios.length > 0) {
                        horarios[dia.fecha].push({
                            id: empleado.id,
                            nombre: empleado.nombre,
                            horarios: horariosDisponibles,
                            horariosOcupados: horariosOcupados,
                            todosHorarios: todosHorarios,
                            horariosDeshabilitados: horariosOcupados
                        })
                    }
                }
            })
        })

        horariosPorDia.value = horarios
    } catch (error) {
        console.error('Error cargando horarios:', error)
    } finally {
        loading.value = false
    }
}

const calcularHorariosDisponibles = (fecha, entrada, salida, duracion, eventos, empleadoId) => {
    const horarios = []
    const inicio = moment(`${fecha} ${entrada}`, 'YYYY-MM-DD HH:mm')
    const fin = moment(`${fecha} ${salida}`, 'YYYY-MM-DD HH:mm')
    
    // Obtener citas del empleado para este día
    const citasDelDia = eventos.filter(e => {
        const fechaEvento = moment(e.start).format('YYYY-MM-DD')
        // Usar app_empleado_id en lugar de empleado (que es el nombre)
        return fechaEvento === fecha && (e.app_empleado_id === empleadoId || e.empleado === empleadoId)
    })

    // Generar intervalos de 30 minutos
    let horaActual = moment(inicio)
    while (horaActual.isBefore(fin)) {
        const horaFin = moment(horaActual).add(duracion, 'minutes')
        
        // Verificar si el horario está disponible (no hay solapamiento con citas existentes)
        const estaDisponible = citasDelDia.every(cita => {
            const inicioCita = moment(cita.start)
            const finCita = moment(cita.end)
            
            // Verificar si hay solapamiento
            // El horario está disponible si:
            // - Termina antes de que empiece la cita, O
            // - Empieza después de que termine la cita
            const noHaySolapamiento = horaFin.isSameOrBefore(inicioCita) || horaActual.isSameOrAfter(finCita)
            
            return noHaySolapamiento
        })

        if (estaDisponible && horaFin.isSameOrBefore(fin)) {
            horarios.push(horaActual.format('HH:mm'))
        }

        horaActual.add(30, 'minutes')
    }

    return horarios
}

const calcularHorariosOcupados = (fecha, entrada, salida, eventos, empleadoId) => {
    const horariosOcupados = []
    
    // Obtener citas del empleado para este día
    const citasDelDia = eventos.filter(e => {
        const fechaEvento = moment(e.start).format('YYYY-MM-DD')
        return fechaEvento === fecha && (e.app_empleado_id === empleadoId || e.empleado === empleadoId)
    })

    // Para cada cita, marcar todos los intervalos de 30 minutos que ocupa
    citasDelDia.forEach(cita => {
        const inicioCita = moment(cita.start)
        const finCita = moment(cita.end)
        
        // Generar todos los intervalos de 30 minutos que cubre esta cita
        let horaActual = moment(inicioCita)
        while (horaActual.isBefore(finCita)) {
            const horaStr = horaActual.format('HH:mm')
            if (!horariosOcupados.includes(horaStr)) {
                horariosOcupados.push(horaStr)
            }
            horaActual.add(30, 'minutes')
        }
    })

    return horariosOcupados.sort()
}

const calcularTodosHorarios = (fecha, entrada, salida) => {
    const horarios = []
    const inicio = moment(`${fecha} ${entrada}`, 'YYYY-MM-DD HH:mm')
    const fin = moment(`${fecha} ${salida}`, 'YYYY-MM-DD HH:mm')
    
    // Generar todos los intervalos de 30 minutos
    let horaActual = moment(inicio)
    while (horaActual.isBefore(fin)) {
        horarios.push(horaActual.format('HH:mm'))
        horaActual.add(30, 'minutes')
    }
    
    return horarios
}

const seleccionarHorario = (fecha, empleadoId, empleadoNombre, hora) => {
    diaSeleccionado.value = fecha
    horarioSeleccionado.value = `${fecha}_${empleadoId}_${hora}`
    datosSeleccionados.value = {
        fecha,
        horario: hora,
        empleado: empleadoId,
        empleadoNombre,
        tienda: tiendaSeleccionada.value
    }
}

const semanaAnterior = () => {
    fechaInicioSemana.value = moment(fechaInicioSemana.value).subtract(7, 'days').startOf('isoWeek')
    fetchHorariosDisponibles()
}

const semanaSiguiente = () => {
    fechaInicioSemana.value = moment(fechaInicioSemana.value).add(7, 'days').startOf('isoWeek')
    fetchHorariosDisponibles()
}

const scrollToToday = () => {
    nextTick(() => {
        const hoy = moment().format('YYYY-MM-DD')
        const diaHoy = diasSemana.value.find(d => d.fecha === hoy)
        
        if (diaHoy && diaRefs.value[diaHoy.fecha] && scrollContainer.value) {
            const elemento = diaRefs.value[diaHoy.fecha]
            const container = scrollContainer.value
            
            // Calcular posición para centrar el día actual
            const scrollLeft = elemento.offsetLeft - (container.offsetWidth / 2) + (elemento.offsetWidth / 2)
            
            container.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            })
        }
    })
}

const onTiendaChange = () => {
    horarioSeleccionado.value = null
    diaSeleccionado.value = null
    fetchHorariosDisponibles()
}

const continuar = () => {
    if (datosSeleccionados.value.fecha) {
        emit('continuar', datosSeleccionados.value)
    }
}

watch(() => props.serviciosSeleccionados, () => {
    if (tiendaSeleccionada.value) {
        fetchHorariosDisponibles()
    }
}, { deep: true })

watch(() => horariosPorDia.value, () => {
    // Scroll al día actual cuando se cargan los horarios
    scrollToToday()
}, { deep: true })

onMounted(() => {
    fetchTiendas()
    // Scroll al día actual después de montar
    nextTick(() => {
        scrollToToday()
    })
})
</script>

<style scoped>
.dias-scroll-container {
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    padding-bottom: 1rem;
}

.dias-scroll-container::-webkit-scrollbar {
    height: 8px;
}

.dias-scroll-container::-webkit-scrollbar-track {
    background: rgba(var(--v-theme-surface), 0.1);
    border-radius: 4px;
}

.dias-scroll-container::-webkit-scrollbar-thumb {
    background: rgba(var(--v-theme-primary), 0.5);
    border-radius: 4px;
}

.dias-scroll-container::-webkit-scrollbar-thumb:hover {
    background: rgba(var(--v-theme-primary), 0.7);
}

.dias-scroll-content {
    display: flex;
    gap: 1rem;
    min-width: min-content;
    padding: 0.5rem 0;
}

.dia-card-wrapper {
    flex: 0 0 auto;
    min-width: 280px;
    max-width: 320px;
}

@media (max-width: 600px) {
    .dia-card-wrapper {
        min-width: 260px;
        max-width: 280px;
    }
}

.dia-card {
    transition: all 0.3s ease;
    border: 2px solid transparent;
    height: 100%;
}

.dia-card.border-primary {
    border-color: rgb(var(--v-theme-primary));
    box-shadow: 0 2px 8px rgba(var(--v-theme-primary), 0.2);
}

.chip-selected {
    background-color: rgb(var(--v-theme-primary)) !important;
    color: white !important;
}

.cursor-pointer {
    cursor: pointer;
}

.chip-disabled {
    opacity: 0.6;
    cursor: not-allowed;
}
</style>
