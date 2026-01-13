<template>
    <VDialog v-model="isAppointmentDialogVisible" width="900px" @update:model-value="dialogOpenUpdate" persistent>
        <VCard>
            <DialogCloseBtn variant="text" size="default" @click="closeDialog" />

            <VCardTitle class="d-flex justify-center text-h4">
                {{ evento.id == null ? "Agregar nueva" : "Editar" }} cita
            </VCardTitle>

            <VForm ref="formEvent" v-model="formEventValid" @submit.prevent="saveEvent">

                <!-- Datos de cliente -->
                <VCardText class="mt-3">
                    <!-- <loader v-if="isloading"></loader> -->
                    <VCard>
                        <VCardTitle>Datos del cliente</VCardTitle>
                        <VCardText>
                            <VRow dense>
                                <VCol cols="12" md="4">
                                    <!-- Empleado -->
                                    <VAutocomplete label="Empleado" v-model="evento.app_empleado_id" :items="local_empleados" @update:modelValue="buscarDisponible" item-title="nombre" item-value="id" />
                                </VCol>

                                <VCol>
                                    <CRUDSelect title="Cliente" v-model="evento.app_usuario_id" :items="props.clientes" :item-title="getItemText" item-value="id" placeholder="Selecciona un cliente" clearable @update:selectedItem="updateCliente"
                                      @submit="saveCliente" @delete="deleteCliente">

                                        <template #form>

                                            <VCol cols="12" md="6">
                                                <VTextField v-model="clienteSelected.nombre" label="Nombre" placeholder="John" :rules="[requiredValidator]" />
                                            </VCol>

                                            <VCol cols="12" md="6">
                                                <VTextField v-model="clienteSelected.apellidos" label="Apellidos" placeholder="Doe" :rules="[requiredValidator]" />
                                            </VCol>

                                            <VCol cols="12">
                                                <VTextField v-model="
                                                        clienteSelected.telefono
                                                    " label="Teléfono" placeholder="+1 9876543210" :rules="[phoneValidator]" />
                                            </VCol>

                                            <VCol cols="12">
                                                <VTextField v-model="
                                                        clienteSelected.email
                                                    " label="Email" placeholder="johndoe@email.com" :rules="[
                                                        requiredValidator,
                                                        emailValidator
                                                    ]" />
                                            </VCol>

                                            <VCol cols="12">
                                                <VTextarea v-model="clienteSelected.observaciones" label="Observaciones" placeholder="Observaciones" />
                                            </VCol>
                                        </template>
                                    </CRUDSelect>
                                </VCol>

                                <VCol cols="12">
                                    <v-textarea outlined height="50px" v-model="usuario.observaciones" label="Observaciones del cliente"></v-textarea>
                                </VCol>
                            </VRow>
                        </VCardText>
                    </VCard>

                    <!-- Servicio de Recogida -->
                    <!--<VCard outlined class="pl-5" v-show="evento.recogida" style="margin-top: 2px;">
                        <VCardTitle>Datos Servicio Recogida</VCardTitle>
                        <VRow>
                            <VCol cols="12" md="5">
                                <VAutocomplete  v-model="evento.direccion_recogida" :items="direccion_recogida" label="Dirección Recogida" item-text="direccion" item-value="id"></VAutocomplete>
                            </VCol>
                            <VCol cols="12" md="5">
                                <VAutocomplete  v-model="evento.direccion_entrega" :items="direccion_entrega" label="Dirección Entrega"  item-text="direccion" item-value="id"></VAutocomplete>
                            </VCol>
                            <VCol cols="12" md="2">
                                <!-- hacemos if para cambiar el color -->
                    <!--<VBtn-toggle v-model="evento.pago" color= "purple" rounded class="ml-3">
                                    <VBtn v-if="evento.pago ==0" color="purple" small elevation="3"> <v-icon>mdi-currency-eur</v-icon>  </VBtn>
                                    <VBtn v-else small elevation="3"> <v-icon>mdi-currency-eur</v-icon>  </VBtn>

                                    <VBtn v-if="evento.pago ==1" color="purple" small elevation="3"><v-icon>mdi-credit-card</v-icon></VBtn>
                                    <VBtn v-else small elevation="3"><v-icon>mdi-credit-card</v-icon></VBtn>
                                </VBtn-toggle>
                            </VCol>
                        </VRow>
                    </VCard>-->
                    <!-- Botones de evento cerrar, eliminar, confirmar -->
                </VCardText>

                <!-- Datos de servicios -->
                <VCardText>
                    <VCard>
                        <VCardTitle>Datos del Servicios</VCardTitle>
                        <VCardText>
                            <VRow>
                                <!-- Servicios -->
                                <VCol cols="12" md="10">
                                    <VAutocomplete label="Servicios" v-model="evento.servicios" :items="local_servicios" item-title="nombre" return-object multiple chips @update:modelValue="buscarDisponible" />
                                </VCol>
                                <VCol cols="12" md="2">
                                    <VTextField v-model="evento.precio" label="Precio" :rules="[numberValidator]"></VTextField>
                                </VCol>
                            </VRow>

                            <!-- Historial de mascota -->
                            <!-- <strong
                            ><p v-if="mascota.historial.length > 0">
                                Historial
                            </p></strong
                        >
                        <VRow>
                            <VRow justify="space-around">
                                <VCol
                                    id="historial"
                                    v-for="(item, i) in historial"
                                    :key="i"
                                    cols="7"
                                >
                                    <VBtn
                                        depressed
                                        elevation="2"
                                        @click="asignarServicio(item)"
                                        small
                                        block
                                        outlined
                                        :color="isSelect(item)"
                                        >{{ item.abreviacion }}
                                    </VBtn>
                                </VCol>
                            </VRow>
                        </VRow> -->
                        </VCardText>
                    </VCard>
                </VCardText>

                <!-- Botones de evento cerrar, eliminar, confirmar -->
                <VCardText>
                    <VRow>
                        <VCol cols="12" md="5" class="d-flex" style="margin-top: 10px;">
                            <!-- <VBtn
                                class="white--text"
                                rounded
                                @click="closeDialog"
                                outlined
                                color="red accent-2"
                                >cerrar</VBtn
                            > -->
                            <VBtn v-if="evento.id" rounded depressed @click="openDeleteDialog" class="mr-2">eliminar</VBtn>
                            <VBtn v-if="evento.id" rounded @click="confirmarCita" outlined :color="(evento.confirmada == 1 || evento.confirmada === true) ? 'grey' : 'success'" class="mr-2">
                                {{ (evento.confirmada == 1 || evento.confirmada === true) ? "Desconfirmar" : "Confirmar" }}
                            </VBtn>
                            <VBtn v-if="evento.id" class="white--text mr-2" rounded @click="generarFactura" outlined :color="'green'">Generar Factura</VBtn>
                        </VCol>
                        <!--<VCol cols="12" md="3">
                            <v-switch v-model="evento.recogida" label="Servicio de recogida" color="purple" style=""></v-switch>
                        </VCol>  -->
                    </VRow>
                    <VRow>
                        <!-- Calendario y boton buscar disponible -->
                        <VCol cols="12" md="6" class="my-1 py-1">
                            <AppDateTimePicker v-model="evento.fecha" label="Fecha" placeholder="Selecciona una fecha" :config="{ inline: true, locale: Spanish, firstDayOfWeek: 1, dateFormat: 'Y-m-d', altFormat: 'd-m-Y', altInput: true }" @update:modelValue="buscarDisponible" />
                        </VCol>
                        <!-- DIV Seccion citas disponibles empleado y dialogos-->
                        <VCol cols="12" md="5" class="pt-0">

                            <div style="font-size: 12px !important; margin-top: 10px !important; margin-bottom: 10px !important;">
                                <strong>INICIO: </strong>
                                <template v-if="isDateValid || evento.id">
                                    {{ evento.start }}
                                </template>
                                <br>
                                <strong>FIN: </strong>
                                <template v-if="isDateValid || evento.id">
                                    {{ evento.end }}
                                </template>
                                <br>
                                <strong>DURACIÓN: </strong>{{ evento.duracion }}
                            </div>

                            <VRow dense v-for="(empleado, i) in local_horario" :key="empleado.app_empleado_id">
                                <VCol cols="12">
                                    <VChip v-if="empleado.horario.length > 0" prepend-icon="ri-account-circle-line" color="success" variant="outlined">{{ empleado.nombre_empleado }}</VChip>
                                </VCol>
                                <VCol v-for="(item, i) in empleado.horario" :key="i" cols="12" md="3">
                                    <VBtn elevation="2" @click="asignarDatos(item, empleado.app_empleado_id)" rounded small block :color="isSelect2(item, empleado.app_empleado_id)">{{ item }}
                                    </VBtn>
                                </VCol>
                            </VRow>

                            <VBtn :disabled="store.loader" class="mt-3" @click="asignarCita()" block rounded>
                                {{ evento.id == null ? "Guardar" : "Editar" }} cita
                            </VBtn>
                        </VCol>
                    </VRow>
                </VCardText>
            </VForm>
        </VCard>
    </VDialog>



    <!-- Dialogo de causas de eliminar cita -->
    <deleteEventDialog />

</template>

<script setup>
    import deleteEventDialog from './deleteEventDialog.vue'

    import {
        useStateStore
    } from "@store/state"

    const store = useStateStore()

    import {
        Spanish
    } from "flatpickr/dist/l10n/es.js"

    import {
        EventBus
    } from "@/utils/eventbus"

    import {
        ref,
        watch
    } from "vue"

    import moment from "moment"

    import {
        _
    } from "lodash";

    const props = defineProps({
        isDialogOpen: {
            type: Boolean,
            default: false
        },
        app_tienda_id: {
            type: Number,
            default: null
        },
        item: {
            type: Object,
            default: () => ({})
        },
        empleados: {
            type: Array,
            default: () => []
        },
        servicios: {
            type: Array,
            default: () => []
        },
        clientes: {
            type: Array,
            default: () => []
        },
        user: {
            type: Object,
            default: () => ({
                id: null,
                nombre: "",
                apellidos: "",
                email: "",
                telefono: "",
                codigo: "",
                observaciones: "",
                avatar: null,
                password: null,
                direccion: []
            })
        }
    });

    const emit = defineEmits(['generar_factura', 'save', 'updatecitas', 'refresh', 'submit', 'update:isDialogOpen'])

    const isAppointmentDialogVisible = ref(props.isDialogOpen);

    const formEvent = ref(null);
    const formEventValid = ref(false);
    const isMissingDataVisible = ref(false);
    const missingDataMessage = ref("");
    const isCancelEventVisible = ref(false);

    const isDateValid = ref(false)

    const evento = ref({
        id: null,
        app_empleado_id: null,
        fecha: null,
        servicios: [],
        precio: 0,
        duracion: 0,
        start: null,
        end: null
    })

    const usuario = ref({});

    const mascota = ref({
        historial: [],
        usuario: {
            observaciones: ""
        }
    });

    const clienteSelected = ref({
        id: null,
        nombre: "",
        apellidos: "",
        telefono: "",
        email: "",
        observaciones: ""
    });

    const local_empleados = ref([])
    const local_servicios = ref([])
    const local_horario = ref([])
    const nuevo = ref("nuevo")
    const horas = ref(null)
    const editable = ref(false)

    // Validator para números (acepta decimales)
    const numberValidator = (value) => {
        if (!value) return true
        const num = Number(value)
        return (!isNaN(num) && isFinite(num)) || 'Debe ser un número válido'
    }

    const filtrar_horas_reales = computed(() => {
        return [];
    });

    const filtrohoras = ref(false);

    const filtrar_90_minutos = (lista_horas, duracion) => {

        let lista = [];

        if (filtrohoras.value == true) {
            lista_horas.forEach((element, index, self_array) => {

                let start = moment(`2021-03-26 ${element}`, "YYYY-MM-DD HH:mm")

                let intervalos = _.range(duracion / 30 + 2).map(x => (x + 1) * 30)

                let intervalos_completos = [-60, -30, 0, ...intervalos]

                let horas = intervalos_completos.map(x => {
                    return start.clone().add(x, "minutes").format("HH:mm");
                })

                let tiene_una_hora = self_array.includes(horas[0]) && self_array.includes(horas[1])

                let no_tiene_nada = !self_array.includes(horas[1])

                let tiene_una_hora_final = self_array.includes(horas[horas.length - 2]) && self_array.includes(horas[horas.length - 3])

                let no_tiene_nada_final = !self_array.includes(horas[horas.length - 3])

                let eliminar_inicio = _.drop(horas, 2)

                let intervalo_real = _.dropRight(eliminar_inicio, 3)

                let encaja = _.difference(intervalo_real, self_array).length === 0;

                if ((tiene_una_hora || no_tiene_nada) && (tiene_una_hora_final || no_tiene_nada_final) && encaja) {
                    lista.push(element)
                }
            })
        } else {
            lista_horas.forEach((element, index, self_array) => {
                let start = moment(`2021-03-26 ${element}`, "YYYY-MM-DD HH:mm");
                let intervalos = _.range(duracion / 30 + 2).map(x => (x + 1) * 30);
                let intervalos_completos = [-60, -30, 0, ...intervalos];

                let horas = intervalos_completos.map(x => {
                    return start.clone().add(x, "minutes").format("HH:mm");
                })

                let eliminar_inicio = _.drop(horas, 2)
                let intervalo_real = _.dropRight(eliminar_inicio, 3)
                let encaja = _.difference(intervalo_real, self_array).length === 0
                if (encaja) {
                    lista.push(element)
                }
            })
        }
        return lista
    };

    const filtrarHoras = lista_empleados => {
        local_horario.value = lista_empleados.map(element => {
            return {
                app_empleado_id: element.app_empleado_id,
                nombre_empleado: element.nombre_empleado,
                horario: filtrar_90_minutos(
                    element.diferencia,
                    evento.value.duracion
                )
            }
        })
    }

    const openAlert = mensaje => {
        missingDataMessage.value = mensaje
        isMissingDataVisible.value = true
        return null
    }

    const buscarDisponible = async () => {

        if (evento.value.servicios.length == 0 && evento.value.fecha == null && evento.value.app_empleado_id == null) {
            return openAlert("Asigne un empleado, dia y servicios para consultar las citas disponibles")
        } else if (evento.value.servicios.length == 0 && evento.value.fecha == null) {
            return openAlert("Asigne un dia en el calendario y servicios para consultar las citas disponibles")
        } else if (evento.value.servicios.length == 0) {
            return openAlert("Asigne servicios para consultar las citas disponibles")
        } else if (evento.value.app_empleado_id == null) {
            return openAlert("Asigne un empleado para consultar las citas disponibles")
        }

        if (evento.value.fecha == null) {
            evento.value.fecha = moment().format("YYYY-MM-DD")
        }

        let data = {
            id: evento.value.id,
            fecha: evento.value.fecha,
            tienda_id: props.app_tienda_id,
            tipo: "peluqueria",
            empleado_id: evento.value.app_empleado_id
        }

        evento.value.precio = 0

        evento.value.precio = evento.value.servicios.reduce((acc, element) => {
            return acc + element.precio
        }, 0)

        evento.value.duracion = evento.value.servicios.reduce((acc, element) => {
            return acc + element.duracion
        }, 0)

        const res = await $api(`/app/buscar-horario-disponible`, {
            method: "POST",
            body: data
        })

        if (!evento.value.id) {
            evento.value.start = evento.value.fecha
            evento.value.end = null
        }

        horas.value = filtrarHoras(res)

    };

    const isSelect2 = (item, empleadoId) => {
        let hora = ""

        if (evento.value.start != null) {
            hora = evento.value.start.substring(11, 16)
        }

        if ((item == hora && evento.value.app_empleado_id == empleadoId)) {
            editable.value = true
            return "success"
        }
        return "secondary"
    }

    const getItemText = item => `${item.nombre} ${item.apellidos}`

    const dialogOpenUpdate = val => {
        isAppointmentDialogVisible.value = val
        emit("update:isDialogOpen", val)
    };

    const historial = computed(() => {
        if (mascota.value.historial.length > 0) {
            return mascota.value.historial.map(x => x.servicio);
        }
        return null
    })

    const closeDialog = () => {
        isAppointmentDialogVisible.value = false
        emit("update:isDialogOpen", false)
    }

    const saveEvent = () => {
        console.log("saveEvent")
    }

    const asignarDatos = (item, empleado) => {
        editable.value = false
        isDateValid.value = true
        evento.value.tipo = 'peluqueria'
        evento.value.start = `${evento.value.fecha} ${item}`;
        evento.value.end = moment(evento.value.start).clone().add(evento.value.duracion, "minutes").format("YYYY-MM-DD HH:mm")
    };

    const asignarCita = () => emit('save', evento.value)

    const resetForm = () => {
        local_horario.value = []
        evento.value = {
            id: null,
            app_empleado_id: null,
            app_usuario_id: null,
            app_tienda_id: null,
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
            precio: 0
        }
    }

    const updateCliente = item => clienteSelected.value = item

    const saveCliente = async item => {
        try {
            const response = await $api_app("/saveusuario", {
                method: "POST",
                body: clienteSelected.value
            })
            emit("refresh", response.data)
            emit("update:isDrawerOpen", false)
        } catch (error) {

            if (error.status == 422) {
                errors.value = error.response._data.errors;
            }
        }
    };

    const deleteCliente = async id => {
        if (!id) return;

        try {
            const response = await $api(`/proveedores/${id}`, {
                method: "DELETE"
            });

            proveedores.value = proveedores.value.filter(
                proveedor => proveedor.id !== id
            );

            factura.value.proveedor_id = null;
            resetProveedorSelected();

            snackbarColor.value = "success";
            snackbarText.value = response.message;
            snackbar.value = true;
        } catch (error) {
            console.error(error);
            snackbarColor.value = "error";
            snackbarText.value =
                error.response?._data?.message ?? "Error al eliminar el proveedor";
            snackbar.value = true;
        }
    };

    const parseEvent = data => {
        evento.value = JSON.parse(JSON.stringify(data))
        evento.value.fecha = data.start.substring(0, 10)
        evento.value.tipo = 'peluqueria'
        evento.value.tienda_id = props.app_tienda_id
    }

    const confirmarCita = async () => {
        try {
            const response = await $api_app(`/confirmar-cita/${evento.value.id}`, {
                method: "GET",
            })
            // Actualizar el estado local con la respuesta del servidor
            // La respuesta viene directamente con confirmada como booleano o 1/0
            if (response && response.confirmada !== undefined) {
                // Convertir a 1 o 0 para mantener consistencia con el formato usado en el componente
                evento.value.confirmada = response.confirmada ? 1 : 0
            } else if (response && response.data && response.data.confirmada !== undefined) {
                evento.value.confirmada = response.data.confirmada ? 1 : 0
            }
            // Emitir evento para refrescar la lista de citas
            emit('updatecitas')
            // Mostrar mensaje de éxito
            store.success('Estado de la cita actualizado')
        } catch (error) {
            console.error('Error confirmando cita:', error)
            store.error('Error al actualizar el estado de la cita')
        }
    }

    const openDeleteDialog = () => EventBus.emit('open_delete_dialog', evento.value.id)

    const generarFactura = () => emit('generar_factura', evento.value.id)

    EventBus.on('close_appoiment_dialog', () => {
        isAppointmentDialogVisible.value = false
        resetForm()
        emit('updatecitas')
    })

    EventBus.on('close_form', () => {
        resetForm()
        isAppointmentDialogVisible.value = false
    })

    EventBus.on('open_form', async (data) => {
        // Si no hay servicios, intentar cargarlos
        if (!props.servicios || props.servicios.length === 0) {
            // Emitir evento para que el padre cargue los datos
            emit('refresh');
        }
        
        if (data.id) {
            parseEvent(data)
            buscarDisponible()
        } else {
            evento.value.fecha = data.fecha
            evento.value.app_empleado_id = data.app_empleado_id
            evento.value.start = `${data.fecha} ${data.intervalo}`
            // Asegurar que servicios esté inicializado
            if (!evento.value.servicios) {
                evento.value.servicios = []
            }
        }
        isAppointmentDialogVisible.value = true
    })

    watch(() => props.isDialogOpen, (newVal) => {
        if (newVal != null) {
            isAppointmentDialogVisible.value = newVal;
        }
    });

    watch(() => props.item, (newVal) => {
        if (newVal != null) {
            evento.value = JSON.parse(JSON.stringify(newVal));
        }
    }, { deep: true });

    watch(() => props.user, (newVal) => {
        if (newVal != null) {
            usuario.value = JSON.parse(JSON.stringify(newVal));
        }
    }, { deep: true });

    watch(() => props.empleados, (newVal) => {
        if (newVal != null && Array.isArray(newVal)) {
            local_empleados.value = JSON.parse(JSON.stringify(newVal));
            local_empleados.value.unshift({
                id: null,
                nombre: "Selecciona un empleado"
            });
        }
    }, { deep: true });

    watch(() => props.servicios, (newVal) => {
        if (newVal != null && Array.isArray(newVal)) {
            local_servicios.value = JSON.parse(JSON.stringify(newVal));
        } else {
            local_servicios.value = [];
        }
    }, { deep: true, immediate: true });

    watch(() => evento.value.servicios, (n) => {
        if (n.length > 0) {
            evento.value.end = moment(evento.value.start).clone().add(evento.value.duracion, "minutes").format("YYYY-MM-DD HH:mm")
        }
    })
</script>