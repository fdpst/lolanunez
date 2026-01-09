<template>
    <v-card class="mx-auto">
        <v-toolbar color="#1d2735" dark>
            <v-toolbar-title
                >Guardar / Editar | Lista Servicios</v-toolbar-title
            >
        </v-toolbar>

        <v-container fluid>
            <v-row>
                <v-col cols="12" md="6">
                    <v-text-field
                        v-model="servicio.nombre"
                        label="Nombre"
                        required
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="2">
                    <v-text-field
                        v-model="servicio.precio"
                        label="Precio"
                        required
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="2">
                    <v-text-field
                        v-model="servicio.duracion"
                        label="Duración en minutos"
                        required
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="1">
                    <v-text-field
                        disabled
                        v-model="horas"
                        label="horas"
                        required
                    ></v-text-field>
                </v-col>

                <!--<v-col cols="12" md="6">
                    <v-text-field v-model="servicio.abreviacion" label="Abreviación" required></v-text-field>
                </v-col>

                <v-col cols="12" md="3">
                    <v-text-field v-model="servicio.codigo" label="Código" required></v-text-field>
                </v-col>-->

                <!--<v-col cols="12" md="3">
                    <v-autocomplete v-model="servicio.tipo" :items="tipos" item-text="nombre" item-value="id" label="Tipo Servicio"></v-autocomplete>
                </v-col>-->

                <!--<v-col cols="12" md="3">
                    <v-autocomplete v-model="tipos_tamanyo_selec"  multiple chips small-chips return-object :items="tipos_tamanyo" item-text="nombre" item-value="id" label="Tamaño Mascota"></v-autocomplete>
                </v-col>

                <v-col cols="12" md="3">
                    <v-autocomplete v-model="tipos_pelo_selec" multiple chips small-chips return-object :items="tipos_pelo" item-text="nombre" item-value="id" label="Tipo Pelo"></v-autocomplete>
                </v-col>

                <v-col cols="12" md="3">
                    <v-autocomplete v-model="tipos_mascota_selec" multiple chips small-chips return-object :items="tipos_mascota" item-text="nombre" item-value="id" label="Tipo Mascota"></v-autocomplete>
                </v-col>-->
            </v-row>

            <v-row>
                <v-col cols="12">
                    <v-btn
                        rounded
                        depressed
                        :disabled="!is_multiple"
                        class="white--text"
                        color="success"
                        @click="saveServicio"
                        >guardar</v-btn
                    >
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
export default {
    props: ["servicio", "tipos"],

    data() {
        return {
            is_multiple: false,
            number_to: 30,
            lista_duracion: [30, 45, 60, 75, 90, 105, 120],
            tipos_pelo: [],
            tipos_mascota: [],
            tipos_tamanyo: [],
            tipos_pelo_selec: [],
            tipos_mascota_selec: [],
            tipos_tamanyo_selec: []
        };
    },
    mounted() {
        this.obtenerTiposPelo();
        this.obtenerTiposMascota();
        this.obtenerTiposTamanyo();
    },
    watch: {
        "servicio.duracion"(n) {
            this.is_multiple = n % this.number_to == 0;
        },
        "servicio.id"(n) {
            this.obtenerTiposServicio(n);
        }
    },
    methods: {
        saveServicio() {
            /*añadimos los tipos del servicio para guardarlos respectivamente*/
            this.servicio.tipos = {
                tipo_pelo: this.tipos_pelo_selec,
                tipo_mascota: this.tipos_mascota_selec,
                tipo_tamanyo: this.tipos_tamanyo_selec
            };
            this.servicio.tipo = 1;
            axios.post("api/app/saveservicio", this.servicio).then(
                res => {
                    this.$emit("pushServicio", res.data);
                    this.tipos_pelo_selec = [];
                    this.tipos_mascota_selec = [];
                    this.tipos_tamanyo_selec = [];
                },
                res => {}
            );
        },
        obtenerTiposPelo() {
            axios.get("api/app/get-tipos-pelo").then(
                res => {
                    this.tipos_pelo = res.data;
                },
                err => {
                    this.$toast.error("Error consultando Tipos de pelo");
                }
            );
        },
        obtenerTiposMascota() {
            axios.get("api/app/get-tipos-mascotas").then(
                res => {
                    this.tipos_mascota = res.data;
                },
                err => {
                    this.$toast.error("Error consultando tipos de mascota");
                }
            );
        },
        obtenerTiposTamanyo() {
            axios.get("api/app/get-tipos-tamanyos").then(
                res => {
                    this.tipos_tamanyo = res.data;
                },
                err => {
                    this.$toast.error("Error consultando tipos de tamaños");
                }
            );
        },
        obtenerTiposServicio(id_servicio) {
            axios.get(`api/app/get-servicios-tipos-pelo/${id_servicio}`).then(
                res => {
                    this.tipos_pelo_selec = res.data;
                },
                err => {
                    this.$toast.error("Error consultando tipos de tamaños");
                }
            );

            axios
                .get(`api/app/get-servicios-tipos-mascota/${id_servicio}`)
                .then(
                    res => {
                        this.tipos_mascota_selec = res.data;
                    },
                    err => {
                        this.$toast.error("Error consultando tipos de tamaños");
                    }
                );

            axios
                .get(`api/app/get-servicios-tipos-tamanyos/${id_servicio}`)
                .then(
                    res => {
                        this.tipos_tamanyo_selec = res.data;
                    },
                    err => {
                        this.$toast.error("Error consultando tipos de tamaños");
                    }
                );
        }
    },
    computed: {
        horas() {
            if (this.servicio.duracion) {
                return moment
                    .utc(
                        moment
                            .duration(this.servicio.duracion, "minutes")
                            .asMilliseconds()
                    )
                    .format("HH:mm");
            }
        }
    }
};
</script>
