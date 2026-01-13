<template>
    <section>

        <VCard>
            <VCardText>
                <VProgressLinear class="mb-4" v-if="store.loader" indeterminate color="primary" />
                <VRow>
                    <VCol cols="12" md="3">
                        <VAutocomplete :items="tiendas" v-model="tienda" item-title="nombre" item-value="id" variant="outlined" hide-details label="Tienda"></VAutocomplete>
                        <br>

                        <VBtn @click="openAppointmentDialog">Nuevo</VBtn>

                        <VBtn v-if="tienda" @click="abrirbusqueda" variant="outlined" class="ml-2">Buscar cita</VBtn>
                    </VCol>

                    <VCol v-if="tienda" cols="12" md="8">
                        <VBtn v-for="calendar_type in calendar_types" rounded depressed class="mr-2" :color="calendar_type == type ? 'success' :''" :key="calendar_type" @click="semana(calendar_type)">
                            {{ calendar_type }}
                        </VBtn>
                        <VBtn outlined class="ml-4" color="grey darken-2" @click="setToday">
                            Hoy
                        </VBtn>
                        <VBtn fab text class="ml-2" small color="grey darken-2" @click="prev">
                            <VIcon small>ri-arrow-left-s-line</VIcon>
                        </VBtn>
                        <VBtn fab text class="ml-2" small color="grey darken-2" @click="next">
                            <VIcon small>ri-arrow-drop-right-line</VIcon>
                        </VBtn>
                    </VCol>


                    <VCol v-if="tienda" cols="12">
                        <div ref="false_scroll" class="false_scroll" v-on:scroll.pasive="falseScrollFunction">
                            <div class="false_scroll_container"></div>
                        </div>
                    </VCol>
                    <VCol v-if="tienda" cols="12">
                        <div ref="calendar_wrap" v-on:scroll.pasive="scrollFunction" class="calendar-wrapper">

                            <div class="dia-container" :class="{ 'full-width': type == 'day' }">

                                <div v-for="(weekday, i) in set_week_days" class="dia-component" :class="{ 'full-width': type == 'day' }">
                                    <div class="dia-header">

                                        <span> {{ translateWeekDay(weekday.nombre_dia)  }}</span>

                                        <VBtn id="diabtn" @click="selectDay(weekday)" :class="{'green white--text':weekday.full_date ==current_day_inmutable}">
                                            {{ weekday.numero_dia }}
                                        </VBtn>

                                    </div>

                                    <div class="cita-container mt-2">
                                        <EmpleadoComponent v-for="(empleado, i) in empleados" :intervalos="intervalos" :key="empleado.id" :app_tienda_id="tienda" :empleado="empleado" :citas="getCitas(empleado, weekday.full_date)"
                                          :horario="getHorario(empleado, weekday.full_date)" :fechas="getFechas(empleado, weekday.full_date)" :dia_actual="weekday.full_date" :interval_height="slider" :type="type" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </VCol>

                    <VCol cols="12" md="3">
                        <!--<EventoComponent :tipo="tipo" :app_tienda_id="tienda" :isloading="isloading" v-on:eliminar_cita="deleteCita" :abrirbusqueda="abrirbusqueda()" v-on:cita_guardada="agregarCita" :empleados="empleados" :clientes="clientes"
                          :servicios="servicios" v-on:resetClientes="resetClientes" @refresh="refresh()" />
                        -->
                    </VCol>
                </VRow>
            </VCardText>
        </VCard>

        <AppointmentDialog v-model:isDialogOpen="dialogocita" :item="evento" :app_tienda_id="tienda" :empleados="empleados" :servicios="servicios || []" :clientes="clientes" :user="usuario" @save="saveCita" @updatecitas="refresh"
          @generar_factura="generarFactura" @refresh="updateClients" />
        <dialogLoader />
    </section>
</template>

<script setup>
    import dialogLoader from '@core/components/dialogLoader.vue'
    import {
        useStateStore
    } from "@store/state";

    const store = useStateStore();

    import {
        ref,
        reactive,
        computed,
        watch,
        onMounted,
        nextTick
    } from "vue";

    import {
        useDataMixin
    } from "../mixins/data_mixin"

    import {

        calendar_basic_mixin
    } from "../mixins/calendar_basic_mixin"

    import EventoComponent from "@/views/apps/citas/list/EventoComponent.vue";
    import EmpleadoComponent from "@/views/apps/citas/list/EmpleadoComponent.vue";
    import moment from "moment"
    //import 'moment/locale/es'
    import {
        _
    } from "lodash";

    import AppointmentDialog from "@/views/apps/citas/list/AppointmentDialog.vue";

    const emit = defineEmits(["open_dialog", "abrirbusqueda"]);

    const {
        tienda,
        tiendas,
        empleados,
        clientes,
        servicios,
        getTiendas,
        getData,
        getServicios
    } = useDataMixin()

    const tipo = ref(null);

    const type = ref('week')

    const calendar_types = ['week', 'day']

    const scroll_value = ref(0);

    const slider = ref(26);

    const dia_actual = ref(moment().format("YYYY-MM-DD").substring(0, 10));

    const current_day_inmutable = moment().format("YYYY-MM-DD").substring(0, 10);

    const entrada = ref("08:00");
    const salida = ref("21:30");
    const intervalos = ref([]);
    const citas = ref([]);
    const dialogo = ref("");
    const overlay = ref(false);
    const dialogobuscar = ref(false);
    const dialogocita = ref(false);
    const weekday = ref(null);

    const month = computed(() => {
        return moment(dia_actual).format("MMMM");
    });

    const evento = ref({
        id: null,
        app_empleado_id: null,
        app_usuario_id: null,
        app_tienda_id: tienda.value,
        app_mascota_id: null,
        tipo_id: 1,
        color: null,
        start: null,
        end: null,
        duracion: null,
        servicios: [],
        fecha: null,
        observacionesMascota: "",
        observacionesUsuario: "",
        confirmada: 1,
        recogida: 0,
        direccion_recogida: null,
        direccion_entrega: null,
        pago: 0,
        precio: ""
    });

    const map_horario = computed(() => {
        let horarios = empleados.value.flatMap(empleado => {
            // Asegurarse de que el horario tenga el app_empleado_id correcto
            return (empleado.horario || []).map(h => ({
                ...h,
                app_empleado_id: h.app_empleado_id || empleado.id
            }));
        });
        const map = {};
        horarios.forEach(x => {
            let ref = `${x.app_empleado_id}_${x.dia}`;
            (map[ref] = map[ref] || []).push(x);
        });
        return map;
    });

    const map_fecha = computed(() => {
        let fechas = empleados.value.flatMap(empleado => empleado.fecha)

        const map = {};
        fechas.forEach(x => {
            let ref = `${x.app_empleado_id}_${x.fecha}`;
            (map[ref] = map[ref] || []).push(x);
        });
        return map;
    });

    const week_days = computed(() => {
        let current_date = moment(dia_actual.value)

        var week_start = current_date.clone().startOf("isoweek")

        let range_dates = _.range(7).map(x => {
            let fecha = moment(week_start).add(x, "days");
            return {
                numero_dia: fecha.format("DD"),
                nombre_dia: fecha.format("dddd"),
                full_date: fecha.format("YYYY-MM-DD")
            }
        })
        return range_dates
    })

    const set_week_days = computed(() => {
        if (type.value == "day") {
            let i = week_days.value.findIndex(x => {
                return x.full_date == dia_actual.value
            });
            return [week_days.value[i]];
        } else {
            return week_days.value;
        }
    });

    const setToday = () => dia_actual.value = moment().format('YYYY-MM-DD').substring(0, 10)

    const translateWeekDay = nombre_dia => {
        let nombres = {
            Monday: 'Lunes',
            Tuesday: 'Martes',
            Wednesday: 'Miercoles',
            Thursday: 'Jueves',
            Friday: 'Viernes',
            Saturday: 'Sabado',
            Sunday: 'Domingo',
        }
        return nombres[nombre_dia]
    }

    const prev = () => {
        let add_day = moment(dia_actual.value).weekday() == 1 ? 2 : 1
        let add = type.value == 'week' ? 7 : add_day
        dia_actual.value = moment(dia_actual.value).subtract(add, 'days').format('YYYY-MM-DD')
    }

    const next = () => {
        let add_day = moment(dia_actual.value).weekday() == 6 ? 2 : 1
        let add = type.value == 'week' ? 7 : add_day
        dia_actual.value = moment(dia_actual.value).add(add, 'days').format('YYYY-MM-DD')
    }

    onMounted(async () => {
        (overlay.value = false), calcularIntervalos();
        await getTiendas();
        // tipo.value = route.query.tipo;
        tipo.value = "peluqueria";
        // Cargar servicios al inicio
        await getServicios();
    });

    const refresh = () => agregarCitas(dia_actual.value)

    const updateClients = item => {
        let index = clientes.value.findIndex(cliente => cliente.id == item.id)
        if (index > -1) {
            clientes.value[index] = item
        } else {
            clientes.value.unshift(item)
        }
    }

    const semana = calendar_type => type.value = calendar_type

    const false_scroll = ref(null);

    const calendar_wrap = ref(null);

    const scrollFunction = e => {
        false_scroll.value.scrollLeft = e.target.scrollLeft;
    };

    const falseScrollFunction = e => {
        calendar_wrap.value.scrollLeft = e.target.scrollLeft;
    };

    const getCitas = (empleado, dia) => {
        return map_citas.value[`${empleado.nombre}_${dia}`]
    }

    const getHorarioOriginal = (empleado, dia) => {
        let horario_especial = undefined;
        let actual = moment(`${dia}`, "YYYY-MM-DD");
        let fecha_revision = moment("2021-11-15", "YYYY-MM-DD");
        // Comprobamos si el empleado tiene un horario especifico ( variable fecha del array en crearIntervalos(n, dia_actual))
        // si no tiene horario especifico asignamos la entrada y salida de este dia actual ( habitual )
        // y verificamos que el id del horario del empleado sea de la tienda seleccionada
        if (empleado.fecha.length == 0) {
            horario_especial = this.map_horario[
                `${empleado.id}_${moment(dia).day()}`
            ];
        }
        // si tiene horario especifico asignamos la entrada y salida de este dia actual ( especifico )
        else {
            let horarioHabitual = [];
            let horarioEspecifico = [];
            let horarioLibre = [];
            let diaEspecifico = false;
            let diaHabitual = false;
            let diaLibre = false;

            horario_especial = undefined;
            // para evitar la entrada en todos los dias especificos y que muestre de manera erroneo el horario
            //  creamos una variable flag para marcar la entrada
            let diapintado = false;
            //  recorremos el horario especifico y asignamos la entrada y salida de este dia especifico
            empleado.fecha.forEach(especifico => {
                // Seteamos en variables la fecha especifica del dia recorrido y la fecha actual para realizar la comprobacion
                let fecha = moment(`${especifico.fecha}`, "YYYY-MM-DD");

                // Verificamos que sean iguales para asignar la entrada y salida
                if (this.tienda == especifico.app_tienda_id) {
                    if (JSON.stringify(fecha) == JSON.stringify(actual)) {
                        //si es undefine inicializo el array
                        if (
                            horarioEspecifico ==
                            undefined /*|| diapintado == false*/
                        ) {
                            horarioEspecifico = [];
                        }
                        //Añadimos en horario especifico
                        horarioEspecifico.push({
                            app_empleado_id: empleado.id,
                            app_tienda_id: especifico.app_tienda_id,
                            dia: moment(dia).day(),
                            entrada: especifico.entrada,
                            salida: especifico.salida
                        });

                        // Si los dias coinciden marcamos el flag como true para no realice mas comprobaciones y marque mal el horario
                        //Indicamos diaEspecifico a true para confirmar que se existe horario específico
                        //diapintado = true;
                        diaEspecifico = true;
                    } else {
                        // Si los dias no coinciden marcamos el flag y el horario como habitual
                        // if (diapintado == false) {
                        //diapintado = true;
                        //diaHabitual = true
                        //añadimos a horario habitual e indicamos a true el diahabitual
                        diaHabitual = true;
                        horarioHabitual = this.map_horario[
                            `${empleado.id}_${moment(dia).day()}`
                        ];
                        //}
                    }
                } else {
                    if (JSON.stringify(fecha) == JSON.stringify(actual)) {
                        horarioLibre = undefined;
                        //diapintado = true;
                        diaLibre = true;
                    }
                }
            });
            //comprobamos si el día actual es específico o habitual y dependiendo de esto se lo asignamos a horario_especial para devolverlo
            if (diaEspecifico) {
                horario_especial = horarioEspecifico;
            } else if (diaLibre) {
                horario_especial = horarioLibre;
            } else if (diaHabitual) {
                horario_especial = horarioHabitual;
            }
        }

        // Comprobamos si el empleado tiene vacaciones ( variable fecha del array en crearIntervalos(n, dia_actual))
        // si no tiene vacaciones asignamos la entrada y salida de este dia actual ( habitual )
        if (empleado.vacaciones.length > 0) {
            // para evitar la entrada en todos los dias de vacaciones y que muestre de manera erroneo el horario
            //  creamos una variable flag para marcar la entrada
            let diavacaciones = false;
            //  recorremos el horario vacaciones y asignamos la entrada y salida de este dia vacaciones
            empleado.vacaciones.forEach(vacaciones => {
                // Seteamos en variables la fecha especifica del dia recorrido y la fecha actual para realizar la comprobacion
                let fechavacaciones = moment(
                    `${vacaciones.fecha}`,
                    "YYYY-MM-DD HH:mm"
                );
                let actual = moment(`${dia}`, "YYYY-MM-DD HH:mm");
                // Verificamos que sean iguales para asignar la entrada y salida
                if (
                    JSON.stringify(fechavacaciones) ==
                    JSON.stringify(actual)
                ) {
                    horario_especial = undefined;
                    // Si los dias coinciden marcamos el flag como true para no realice mas comprobaciones y marque mal el horario
                    diavacaciones = true;
                }
            });
        }

        return horario_especial;
    }

    const getHorario = (empleado, dia) => {

        let horario_especial = undefined;
        let actual = moment(`${dia}`, "YYYY-MM-DD");
        let fecha_revision = moment("2021-11-15", "YYYY-MM-DD");


        if (!empleado.fecha || empleado.fecha.length == 0) {
            // Usar day() en lugar de weekday() para que coincida con el formato del backend (domingo=0, lunes=1, etc.)
            const diaSemana = moment(dia).day();
            const ref = `${empleado.id}_${diaSemana}`;
            const horariosEncontrados = map_horario.value[ref];
            
            // Si hay horarios, devolver el array completo (el componente espera un array)
            if (horariosEncontrados && horariosEncontrados.length > 0) {
                horario_especial = horariosEncontrados;
            } else {
                horario_especial = undefined;
            }
        }
        // si tiene horario especifico asignamos la entrada y salida de este dia actual ( especifico )
        else {
            let horarioHabitual = [];
            let horarioEspecifico = [];
            let horarioLibre = [];
            let diaEspecifico = false;
            let diaHabitual = false;
            let diaLibre = false;

            horario_especial = undefined;
            // para evitar la entrada en todos los dias especificos y que muestre de manera erroneo el horario
            //  creamos una variable flag para marcar la entrada
            let diapintado = false;
            //  recorremos el horario especifico y asignamos la entrada y salida de este dia especifico
            empleado.fecha.forEach(especifico => {
                // Seteamos en variables la fecha especifica del dia recorrido y la fecha actual para realizar la comprobacion
                let fecha = moment(`${especifico.fecha}`, "YYYY-MM-DD");

                // Verificamos que sean iguales para asignar la entrada y salida
                if (tienda == especifico.app_tienda_id) {
                    if (JSON.stringify(fecha) == JSON.stringify(actual)) {
                        //si es undefine inicializo el array
                        if (
                            horarioEspecifico ==
                            undefined /*|| diapintado == false*/
                        ) {
                            horarioEspecifico = [];
                        }
                        //Añadimos en horario especifico
                        horarioEspecifico.push({
                            app_empleado_id: empleado.id,
                            app_tienda_id: especifico.app_tienda_id,
                            dia: moment(dia).day(),
                            entrada: especifico.entrada,
                            salida: especifico.salida
                        });

                        // Si los dias coinciden marcamos el flag como true para no realice mas comprobaciones y marque mal el horario
                        //Indicamos diaEspecifico a true para confirmar que se existe horario específico
                        //diapintado = true;
                        diaEspecifico = true;
                    } else {
                        // Si los dias no coinciden marcamos el flag y el horario como habitual
                        // if (diapintado == false) {
                        //diapintado = true;
                        //diaHabitual = true
                        //añadimos a horario habitual e indicamos a true el diahabitual
                        diaHabitual = true;
                        // Usar day() en lugar de weekday() y map_horario.value
                        const diaSemana = moment(dia).day();
                        horarioHabitual = map_horario.value[`${empleado.id}_${diaSemana}`];
                        //}
                    }
                } else {
                    if (JSON.stringify(fecha) == JSON.stringify(actual)) {
                        horarioLibre = undefined;
                        //diapintado = true;
                        diaLibre = true;
                    }
                }
            });
            //comprobamos si el día actual es específico o habitual y dependiendo de esto se lo asignamos a horario_especial para devolverlo
            if (diaEspecifico) {
                horario_especial = horarioEspecifico;
            } else if (diaLibre) {
                horario_especial = horarioLibre;
            } else if (diaHabitual) {
                horario_especial = horarioHabitual;
            }
        }

        // Comprobamos si el empleado tiene vacaciones ( variable fecha del array en crearIntervalos(n, dia_actual))
        // si no tiene vacaciones asignamos la entrada y salida de este dia actual ( habitual )
        // NOTA: Comentamos la verificación de vacaciones para que siempre se muestre el horario
        // Si quieres ocultar el horario cuando hay vacaciones, descomenta este bloque
        /*
        if (empleado.vacaciones && Array.isArray(empleado.vacaciones) && empleado.vacaciones.length > 0) {
            let diavacaciones = false;
            empleado.vacaciones.forEach(vacaciones => {
                let fechavacaciones = moment(vacaciones.fecha);
                let actual = moment(dia);
                
                if (fechavacaciones.format("YYYY-MM-DD") === actual.format("YYYY-MM-DD")) {
                    horario_especial = undefined;
                    diavacaciones = true;
                }
            });
        }
        */
        return horario_especial;
    }

    const getFechas = (empleado, dia) => {
        return map_fecha.value[`${empleado.id}_${dia}`];
    };

    const selectDay = weekday => {
        weekday.value = weekday
        dia_actual.value = weekday.full_date
        type.value = "day"
    }

    const agregarCitas = async dia_actual => {
        try {
            const res = await $api_app(`/geteventsbymonth/${dia_actual}`, {
                method: "GET"
            })
            citas.value = res
        } catch (e) {

        }
    }

    const map_citas = computed(() => {
        const map = {}
        citas.value.forEach(x => {
            let fecha = x.start.substring(0, 10);
            let ref = `${x.empleado}_${fecha}`;
            (map[ref] = map[ref] || []).push(x);
        })
        return map
    })

    const agregarCita = cita => {
        let start_of_week = week_days[0].full_date

        let end_of_week = week_days[week_days.length - 1].full_date

        let is_beetween = moment(cita.start.substring(0, 10)).isBetween(
            start_of_week,
            end_of_week,
            undefined,
            "[]"
        )

        deleteCita(cita)

        if (is_beetween) {
            citas.push(cita)
        }

        agregarCitas(dia_actual)
    };

    const deleteCita = cita => {
        let index = citas.findIndex(element => element.id == cita.id);
        if (index > -1) {
            citas.splice(index, 1);
        }
    };

    const calcularIntervalos = () => {
        let start = moment(`2021-03-26 ${entrada.value}`, "YYYY-MM-DD HH:mm")
        let end = moment(`2021-03-26 ${salida.value}`, "YYYY-MM-DD HH:mm")

        let diff = end.diff(start, "minutes")

        let intervalos_local = _.range(diff / 30)

        intervalos.value = intervalos_local.map((element, index) => {
            return start.clone().add(index * 30, "minutes").format("HH:mm");
        })
    };

    const resetClientes = async () => {
        try {
            const res = await $api_app(`/getusuarios?itemsPerPage=-1`, {
                method: "GET"
            })
            clientes = res.data
            overlay = false
            dialogo = false
        } catch (error) {
            $toast.error("Error obteniendo Usuarios");
        }
        overlay = true;
        /*axios.get("api/app/getusuarios?amount=-1").then(
            res => {
                clientes = res.data.data;
                overlay = false;

                dialogo = false;
            }
            res => {
                $toast.error("Error obteniendo Usuarios");
            }
        );*/
    };

    EventBus.on('edit_cita', data => {
        saveCita(data)
    })

    const saveCita = async (data) => {
        try {
            const response = await $api_app("/savecita", {
                method: "POST",
                body: data
            })

            EventBus.emit('close_form')

            store.success('Cita actualizada con exito')

            agregarCitas(dia_actual.value)

        } catch (error) {
            console.log(error)
        }
    }

    const abrirbusqueda = () => dialogobuscar.value = true

    const openAppointmentDialog = async () => {
        // Si no hay servicios, cargarlos
        if (!servicios.value || servicios.value.length === 0) {
            await getServicios();
        }
        
        EventBus.emit("open_form", {
            fecha: dia_actual.value
        })
    };

    const generarFactura = async (evento_id) => {
        try {
            const res = await $api(`generate-factura/${evento_id}`)
            store.success('Factura generada con exito')
        } catch (error) {
            store.error('Error generando factura')
        }
    }

    watch(dia_actual, (new_date, old_date) => {
        //let base_url = route.query.tipo == "peluqueria" ? "citas-peluqueria?tipo=peluqueria" : "citas-clinica?tipo=clinica"
        //router.push(`${base_url}`).catch(() => {})
        agregarCitas(new_date)
        //setWeekDay(newValue);
    }, {
        immediate: true
    })

    watch(tienda, async (newValue, oldValue) => {
        tienda.value = parseInt(tienda.value);
        evento.value.app_tienda_id = tienda.value;
        if (newValue) {
            await getData(tipo.value, newValue);
        }
    }, {
        immediate: true
    });
</script>


<style media="screen">
    .dia-header {
        padding: 1px 1rem;
        text-align: center;
        border-left: #e0e0e0 0.5px solid;
        border-bottom: #e0e0e0 0.5px solid;
        border-top: #e0e0e0 0.5px solid;
    }

    .full-width {
        width: 100% !important;
    }

    .dia-header span {
        display: block;
    }

    .dia-container {
        display: flex;
    }

    .dia-component {
        min-width: 132px;
    }

    .cita-container {
        display: flex;
        width: 100%;
    }

    .calendar-wrapper {
        overflow: hidden;
        overflow-x: auto;
        overflow-y: scroll;
        display: flex;
    }

    .false_scroll {
        height: 20px;
        overflow-x: auto;
    }

    .false_scroll_container {
        width: 3500px !important;
        height: 10px;
        overflow-x: auto;
        display: flex;
    }

    @media (min-width: 1900px) {
        .empleado-row {
            height: 26px !important;
            width: 100% !important;
            padding-left: 5px;
            margin-right: 3px;
            font-size: 12px !important;
        }

        .empleado-column {
            width: inherit;
            min-height: auto;
            position: relative !important;
        }

        .cita-element {
            width: 99%;
            padding-left: 5px;
            margin-right: 2px;
            font-size: 12px !important;
            overflow: hidden !important;
        }

        .dia-header {
            height: 60px !important;
        }

        button#diabtn.VBtn {
            height: 50% !important;
        }

        #historial span {
            font-size: 9px !important;
        }
    }
</style>