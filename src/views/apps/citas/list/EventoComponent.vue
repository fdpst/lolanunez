<template>
    <VContainer>
        <VOverlay v-if="overlay">
            <VProgressCircular indeterminate size="220" color="green" width="10">
                <VCol>
                    <!--<v-icon class="white--text">mdi-paw</v-icon>-->
                    <strong style="color:white !important;">
                        Cargando datos</strong>
                </VCol>
            </VProgressCircular>
        </VOverlay>

        <!-- Guardar / Editar Cita -->
        <VDialog @keydown.esc="closeDialog" persistent @click:outside="closeDialog" v-model="dialog" width="900px">
            <h1>{{dialog}}</h1>
        </VDialog>

        <SearchDialog v-model:isDialogOpen="dialogobuscar" :clientes="props.clientes" :app_usuario_id="evento.app_usuario_id" />
    </VContainer>
</template>

<script setup>
    import {
        EventBus
    } from "@/utils/eventbus"

    import SearchDialog from "./SearchDialog.vue";
    import {
        useNotificaciones
    } from "@/utils/notificaciones"
    import moment from "moment"

    const props = defineProps([
        "empleados",
        "clientes",
        "servicios",
        "tipo",
        "app_tienda_id"
    ]);

    const emit = defineEmits(["refresh", "cita_guardada"]);

    const {
        notificaciones,
        getNotificaciones
    } = useNotificaciones()


    const tipos_tamanyo = ref([])
    const tipos_pelo = ref([])

    const tamanyo_selec = ref({
        id: null,
        nombre: null,
        peso: ""
    })

    const editar = ref("editar")

    const direccion_recogida = ref([]);
    const direccion_entrega = ref([]);
    const filtrohoras = ref(false);
    const dialogo = ref(false);
    const dialogocita = ref(false);
    const dialogobuscar = ref(false);
    const dialogocancelar = ref(false);
    const dialogogomascota = ref(false);
    const toggle_exclusive = ref(null);
    const usuario = ref({
        id: "",
        nombre: "",
        apellidos: "",
        email: "",
        telefono: "",
        codigo: "",
        observaciones: "",
        avatar: null,
        password: null,
        direccion: []
    });
    const usuarioEdit = ref({
        id: "",
        nombre: "",
        apellidos: "",
        email: "",
        telefono: "",
        adoptar: 0,
        donar: 0,
        codigo: "",
        observaciones: "",
        avatar: null,
        password: null,
        direccion: "",
        profesion: "",
        consulta: "",
        antecedentes: "",
        tratamiento: ""
    });
    const local_mascota = ref({
        id: "",
        app_usuario_id: "",
        nombre: "",
        Fecha_Nacimiento: "",
        raza: "",
        sexo: "",
        tamanyo: "",
        pelo: "",
        peso: "",
        color: "",
        Adoptable: "",
        seccion_id: "",
        imagen: null,
        observaciones: "",
        codigo: "",
        imagen_path: null
    });
    const secciones = ref([]);
    const dialog = ref(false);
    const horas = ref([]);
    const mascotas = ref([]);
    const mascota = ref({
        historial: [],
        usuario: {
            observaciones: ""
        }
    });

    const local_horario = ref([]);
    const evento = ref({
        id: null,
        app_empleado_id: null,
        app_usuario_id: null,
        app_tienda_id: props.app_tienda_id,
        app_mascota_id: null,
        tipo_id: 1,
        color: null,
        start: null,
        end: null,
        duracion: null,
        servicios: [],
        fecha: moment().format("YYYY-MM-DD"),
        observacionesMascota: "",
        observacionesUsuario: "",
        confirmada: 1,
        recogida: 0,
        direccion_recogida: null,
        direccion_entrega: null,
        pago: 0,
        precio: 0
    });
    const citapet = ref({
        id: null,
        mascota: null,
        tamanyo: null,
        pelo: null,
        raza: null,
        tipo: null,
        tienda: null,
        servicios: null,
        start: null,
        start_format: null
    });

    const dataItem = ref([]);

    const editable = ref(false);
    const IdEmpleadoCita = ref("");
    // const nuevo = ref(true)
    const idEmpFormulario = ref("");
    const evento_nuevo = ref(true);
    const mascotaEdit = ref([]);
    const overlay = ref(false);

    // Observadores
    watch(evento.value.servicios, (newValue, oldValue) => {
        if (newValue) {
            evento.value.duracion = newValue.reduce((acc, x) => {
                return acc + x.duracion;
            }, 0);
        }
    });
    watch(evento.value.app_usuario_id, (newValue, oldValue) => {
        if (evento_nuevo.value == true) {
            // this.getMascotas(n, true)
            //this.getDirecciones(n)
        } else {
            evento_nuevo.value = true;
        }
    });

    watch(mascota, (newValue, oldValue) => {
        evento.value.app_mascota_id = newValue ? newValue.id : null;
    });

    watch(usuario, (newValue, oldValue) => {
        evento.value.app_usuario_id = newValue ? newValue.id : null;
    });

    onMounted(async () => {
        await obtenerTiposPelo();
        await obtenerTiposTamanyo();
        await getSecciones();

        /*$parent.$on("abrirbusqueda", () => {
            dialogobuscar.value = true;
        });*/

        dialogobuscar.value = true

        //EventBus.on("open_form", openForm)

        EventBus.on("save_cita", async cita => {
            evento_nuevo.value = false
            //this.dialog = true;
            evento.value = Object.assign({}, cita)
            evento.value.fecha = cita.start.substring(0, 10)
            evento.value.app_tienda_id = app_tienda_id.value

            getMascotas(cita.app_usuario_id, false)
            setUsuario(cita.app_usuario_id)

            IdEmpleadoCita = evento.value.app_empleado_id
            idEmpFormulario = evento.value.app_empleado_id

            await buscarDisponible()

            const ele = local_horario[0].horario.find(element => {
                return element == cita.start.substring(11);
            });

            if (ele != null) {
                asignarCita(ele, cita.app_usuario_id);
            } else {
                emit("refresh", cita)
                this.$toast.error("Horario no disponible")
                emit("cita_guardada", cita)
            }
        });

        EventBus.on("set_cita", async cita => {
            evento_nuevo.value = false
            dialog.value = true
            evento.value = Object.assign({}, cita)
            evento.value.fecha = cita.start.substring(0, 10)
            evento.value.app_tienda_id = app_tienda_id.value
            getMascotas(cita.app_usuario_id, false)
            setUsuario(cita.app_usuario_id)
            IdEmpleadoCita = evento.value.app_empleado_id
            idEmpFormulario = evento.value.app_empleado_id
        })
    })

    // Funciones
    const generarFactura = async () => {
        try {
            const res = await $api(`generate-factura/${evento.value.id}`);
            this.$toast.sucs("Factura Generada con exito");
        } catch (error) {
            this.$toast.error("Error generando factura");
        }
    };

    const obtenerTiposPelo = async () => {
        const res = await $api_app("get-tipos-pelo", {
            method: "GET"
        });
        tipos_pelo.value = res.data;
    };

    const obtenerTiposTamanyo = async () => {
        const res = await $api_app("get-tipos-tamanyos", {
            method: "GET"
        });
        tipos_tamanyo.value = res.data;
    };

    const setUsuario = id_usuario => {
        props.clientes.forEach(element => {
            if (element.id == id_usuario) {
                usuario.value = element;
            }
        });
    };

    const editCostumer = tipo => {
        // Abre formulario con datos o no segun sea el boton pulsado nuevo o esitar usuario
        if (tipo == "editar") {
            usuarioEdit.value = Object.assign({}, usuario.value);
        }
        if (tipo == "nuevo") {
            usuarioEdit.value = {
                id: "",
                nombre: "",
                apellidos: "",
                email: "",
                telefono: "",
                adoptar: 0,
                donar: 0,
                codigo: "",
                observaciones: "",
                avatar: null,
                password: null,
                direccion: "",
                profesion: "",
                consulta: "",
                antecedentes: "",
                tratamiento: ""
            };
            //this.usuario = [];
        }
    };
    const editPet = tipo => {
        // Abre formulario con datos o no segun sea el boton pulsado nueva o editar mascota
        if (evento.value.app_mascota_id != null && tipo == "editar") {
            getPetEdit(evento.value.app_mascota_id);
        }
        if (evento.value.app_mascota_id != null && tipo == "nuevo") {
            tamanyo_selec.value = {
                id: null,
                nombre: null,
                peso: ""
            };
            local_mascota.value = {
                id: "",
                app_usuario_id: "",
                nombre: "",
                Fecha_Nacimiento: "",
                raza: "",
                sexo: "",
                tamanyo: "",
                pelo: "",
                peso: "",
                color: "",
                Adoptable: "",
                seccion_id: "",
                imagen: null,
                observaciones: "",
                codigo: "",
                imagen_path: null
            };
        }
    };
    const getUsuarioEdit = async usuario_id => {
        // Obtiene el usuario a editar
        const res = await $api_app(`get-usuario/${usuario_id}`);
        usuario.value = res.data;
        //this.usuarioEdit = res.data;
        //this.usuario = res.data; //this.usuarioEdit;
        //this.evento.observacionesUsuario = this.usuario.observaciones;
        //this.usuarioEdit.id = this.app_usuario_id;
    };
    const getPetEdit = mascota_id => {
        // Obtiene la mascota a editar
        local_mascota.value = Object.assign({}, mascota.value);
        tipos_tamanyo.value.forEach(tamanyo => {
            if (tamanyo.id == local_mascota.value.tamanyo) {
                tamanyo_selec.value = tamanyo;
            }
        });
    };
    const getDirecciones = id_usuario => {
        // Obtiene direcciones de usuario
        props.clientes.forEach(element => {
            if (element.id == id_usuario) {
                direccion_recogida.value = element.direccion;
                direccion_entrega.value = element.direccion;
            }
        });
    };

    const openForm = data => {
        console.log('ABRIR FORM', data)
        dialog.value = true
        evento.value.fecha = data.fecha
        //evento.value.app_tienda_id = app_tienda_id.value;
        evento.value.app_empleado_id = data.app_empleado_id
    }

    const saveUsuario = async () => {
        // crea nuevo usuario desde cita
        const res = await $api_app(`save-usuario`, usuarioEdit.value);
        resetClientes();
        usuario.value = res.data;
        this.$toast.sucs("Usuario Almacenado Correctamente");
        dialog.value = false;
        console.log(this.clientes);
        console.log(this.usuario);
    };
    const guardarMascota = async () => {
        // crea nueva mascota desde cita
        if (evento.value.app_usuario_id == "") return;
        local_mascota.value.tamanyo = tamanyo_selec.value.id;
        let usuario_id = evento.value.app_usuario_id;
        local_mascota.value.app_usuario_id = usuario_id;
        const res = await $api_app(
            `save-mascota-from-user/${usuario_id}`,
            local_mascota.value
        );
        resetMascota();
        mascota.value = res.data;
        this.$toast.sucs("Mascota Almacenada Correctamente");
        dialog.value = false;
    };
    const resetClientes = () => {
        emit("resetClientes");
    };
    const getSecciones = async () => {
        const res = await $api("get-secciones");
        secciones.value = res.data;
    };
    const isSelect = item => {
        // Color segun servicio seleccionado o no
        let index = evento.value.servicios.findIndex(x => x.id == item.id);
        return index > -1 ? "orange" : "green darken-1";
    };

    const asignarServicio = item => {
        // Evento de seleccion de servicio
        let index = evento.value.servicios.findIndex(x => x.id == item.id);
        if (index == -1) {
            evento.value.servicios.push(item);
        } else {
            evento.value.servicios.splice(index, 1);
        }
        buscarDisponible();
    };
    const confirmarCita = async () => {
        // boton de cita confirmada o sin confirmar
        const res = await $api_app(`confirmar-cita/${evento.value.id}`);
        evento.value.confirmada = res.data.confirmada;
        // this.$toast.sucs("Estado actualizado");
        snackbarColor.value = "success";
        snackbarText.value = "Estado actualizado";
        isSnackbarVisible.value = true;
        // this.$store.dispatch("getNotificaciones");
        getNotificaciones();
    };

    const asignarCita = (item, app_empleado_id) => {
        // asigna los datos al pinchar en la hora (item) disponible para el empleado asignarDatos(item, empleado.app_empleado_id)
        if (!editable.value) {
            evento.value.app_empleado_id = app_empleado_id;
        }
        evento.value.start = `${evento.value.fecha} ${item}`;
        evento.value.end = moment(evento.value.start)
            .clone()
            .add(this.evento.duracion, "minutes")
            .format("YYYY-MM-DD HH:mm");
        evento.value.tipo = tipo.value;
        saveCita();
    };

    const saveCita = async () => {
        // graba cita con datos recibidos del metodo anterior asignarCita()
        //le paso las observaciones a evento para actualizarlo en el controller y grabamos la cita
        evento.value.observaciones = mascota.value.observaciones;
        evento.value.observacionesUsuario = usuario.value.observaciones;

        axios.post(`api/app/savecita`, evento.value).then(
            res => {
                let fecha = evento.value.fecha
                this.$toast.sucs("cita guardada con exito")
                this.$emit("cita_guardada", res.data.app_event)
                this.closeDialog()
                // this.$store.dispatch("getNotificaciones");
                getNotificaciones()

                axios.get(`api/app/geteventsbymonth/${fecha}`).then(
                    res => {
                        this.citas = res.data;
                    },
                    res => {}
                );
            },
            res => {
                if (res.response.status == 301) {
                    return this.$toast.warn(res.response.data.message);
                }
                if (res.response.status == 422) {
                    return this.$toast.warn("Debe completar los campos");
                }
                this.$toast.error("algo ha salido mal");
            }
        );
    };
    const getMascotas = async (usuario_id, reseteo_mascota) => {
        // Obtiene usuario id, mascota id , historial y evento
        if (reseteo_mascota) {
            mascota.value = {
                historial: [],
                usuario: {
                    observaciones: ""
                }
            };
        }
        axios.get(`api/app/get-mascotas-by-user/${usuario_id}`).then(
            res => {
                mascotas.value = res.data;
                if (evento.value.app_mascota_id != null) {
                    let i = mascotas.value.findIndex(
                        x => x.id == evento.value.app_mascota_id
                    );
                    mascota.value = mascotas.value[i];
                }
            },
            res => {}
        );
    };
    const closeDialog = () => {
        // Cierra formulario y resetea formulario
        filtrohoras.value = true;
        resetForm();
        //this.dialog = false;
    };
    const resetMascota = () => {
        // resetea campos de inserccion de mascota
        tamanyo_selec.value = {
            id: null,
            nombre: null,
            peso: ""
        };
        local_mascota.value = {
            id: "",
            app_usuario_id: "",
            nombre: "",
            Fecha_Nacimiento: "",
            raza: "",
            sexo: "",
            tamanyo: "",
            pelo: "",
            peso: "",
            color: "",
            Adoptable: "",
            seccion_id: "",
            imagen: null,
            observaciones: "",
            codigo: "",
            imagen_path: null
        };
    };
    const resetUsuario = () => {
        // resetea campos de inserccion de usuario
        usuario.value = {
            id: null,
            nombre: null,
            apellidos: null,
            email: null,
            telefono: null,
            codigo: null,
            observaciones: ""
        };
    };
    const resetForm = () => {
        // resetea campos de formularios
        horas.value = [];
        local_horario.value = [];
        mascota.value = {
            historial: [],
            usuario: {
                observaciones: ""
            }
        };
        mascotas.value = [];
        dialog.value = false;
        evento.value = {
            app_empleado_id: null,
            app_usuario_id: null,
            app_mascota_id: null,
            app_tienda_id: app_tienda_id.value,
            color: null,
            start: null,
            end: null,
            duracion: null,
            servicios: [],
            fecha: null,
            observaciones: "",
            confirmada: 1,
            recogida: false,
            observacionesMascota: "",
            observacionesUsuario: "",
            direccion_recogida: null,
            direccion_entrega: null,
            pago: 0,
            precio: ""
        };

        editable.value = false;
        IdEmpleadoCita.value = idEmpFormulario.value;
        dataItem.value = "";
        evento_nuevo.value = true;
        tamanyo_selec.value = {
            id: null,
            nombre: null,
            peso: ""
        };
        resetUsuario();
    };
    const eliminarCita = async toggle_exclusive => {
        // Elimina cita en pantalla
        axios
            .get(`api/app/eliminarcita/${evento.value.id}/${toggle_exclusive}`)
            .then(
                res => {
                    this.$emit("eliminar_cita", evento.value, toggle_exclusive);
                    closeDialog();
                },
                res => {
                    this.$toast.error("algo ha salido mal");
                }
            );
        this.toggle_exclusive = null;
    };
    const cierraeliminar = () => {
        // Cierra formulario y resetea formulario
        toggle_exclusive.value = null;
        dialogocancelar.value = false;
    };
    const cierraobligacita = () => {
        // Cierra aviso obligado de cita
        dialogocita.value = false;
    };
    const cierrabusqueda = () => {
        // Cierra busqueda
        resetForm();
        citapet.value = {};
        citacli.value = {};
        dialogobuscar.value = false;
    };
    const abrirbusqueda = () => {
        // Abre busqueda
        citapet.value = {};
        citacli.value = {};
        dialogobuscar.value = true;
    };

    const evento_horario = computed(() => {
        return [];
    });

    const isloading = ref(false);
    /*const isloading = computed(() => {
        return this.$store.getters.getloading;
    });*/
</script>


<style media="screen">
    .cita-element {
        background-color: #1e5dbf;
        border-radius: 8px;
        font-size: 10px !important;
        padding: 3px;
        color: #fff;
        overflow: hidden;
    }

    div#buscar.cita-element i {
        color: #fff;
        font-size: 15px !important;
        text-transform: uppercase !important;
    }

    .cita :hover {
        cursor: pointer;
    }
</style>