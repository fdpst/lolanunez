<template>
    <div class="my-container">
        <loader v-if="isloading"></loader>

        <v-card class="mx-auto">
            <v-toolbar color="#1d2735" dark>
                <v-toolbar-title>Horario Localizaciones</v-toolbar-title>
            </v-toolbar>

            <v-container fluid>
                <v-row>
                    <v-col cols="12" md="3">
                        <v-select
                            v-model="app_tienda_id"
                            :items="tiendas"
                            item-text="nombre"
                            item-value="id"
                            label="Tienda"
                        ></v-select>
                    </v-col>
                    <v-col cols="12" md="2">
                        <v-select
                            v-model="hora.dia"
                            :items="dias"
                            item-text="text"
                            item-value="dia"
                            label="Dia"
                        ></v-select>
                    </v-col>
                    <v-col cols="12" md="2">
                        <v-text-field
                            v-model="hora.start"
                            label="Hora Inicial"
                            required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="2">
                        <v-text-field
                            v-model="hora.end"
                            label="Hora Final"
                            required
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12">
                        <v-btn
                            rounded
                            depressed
                            class="white--text"
                            color="success"
                            @click="saveHorarioByTienda"
                            >guardar</v-btn
                        >
                    </v-col>
                </v-row>
            </v-container>
        </v-card>

        <br />

        <v-data-table
            :item-class="
                () => {
                    return 'pointer';
                }
            "
            @click:row="
                item => {
                    setHorario(item);
                }
            "
            :headers="headers"
            disable-pagination
            hide-default-footer
            :items="horas"
            item-key="id"
            class="elevation-1"
        >
            <template v-slot:item.dia="{ item }">
                {{ item.dia | getday }}
            </template>

            <template v-slot:item.action="{ item }">
                <v-icon small @click="setHorario(item)">
                    mdi-pencil
                </v-icon>
            </template>
        </v-data-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            headers: [
                {
                    text: "Dia",
                    align: "left",
                    value: "dia"
                },
                {
                    text: "Inicio",
                    value: "start"
                },
                {
                    text: "Final",
                    value: "end"
                }
            ],

            tiendas: [],

            app_tienda_id: null,

            horas: [],

            hora: {
                id: null,
                dia: null,
                start: "00:00",
                end: "00:00",
                is_active: true
            },

            dias: [
                {
                    dia: "1",
                    text: "Lunes"
                },
                {
                    dia: "2",
                    text: "Martes"
                },
                {
                    dia: "3",
                    text: "Miercoles"
                },
                {
                    dia: "4",
                    text: "Jueves"
                },
                {
                    dia: "5",
                    text: "Viernes"
                },
                {
                    dia: "6",
                    text: "Sabado"
                },
                {
                    dia: "0",
                    text: "Domingo"
                }
            ]
        };
    },

    watch: {
        app_tienda_id(n) {
            this.getHorarioByTienda(n);
        }
    },

    created() {
        this.getTiendas();
    },

    methods: {
        getTiendas() {
            axios.get(`api/app/gettiendas`).then(
                res => {
                    this.tiendas = res.data;
                },
                res => {
                    this.$toast.error("Error consultando tiendas");
                }
            );
        },

        getHorarioByTienda(app_tienda_id) {
            axios.get(`api/app/get-horario-by-tienda/${app_tienda_id}`).then(
                res => {
                    this.horas = res.data;
                },
                res => {
                    this.$toast.error("Error consultando horario");
                }
            );
        },

        saveHorarioByTienda() {
            axios
                .post(
                    `api/app/save-horario-by-tienda/${this.app_tienda_id}`,
                    this.hora
                )
                .then(
                    res => {
                        this.$toast.sucs("horario actualizado");
                        this.resetForm();
                        this.updateTable(res.data);
                    },
                    res => {
                        this.$toast.error("error actualizando horario");
                    }
                );
        },

        updateTable(data) {
            let i = this.horas.findIndex(x => x.id == data.id);

            if (i == -1) {
                return this.horas.push(data);
            }

            this.$set(this.horas, i, data);
        },

        resetForm() {
            this.hora = {
                id: null,
                dia: null,
                start: "00:00",
                end: "00:00",
                is_active: true
            };
        },

        setHorario(item) {
            this.hora = item;
        },

        getColor(is_active) {
            return is_active ? "Activo" : "Inactivo";
        }
    },
    filters: {
        getday(val) {
            switch (val) {
                case "0":
                    return "Domingo";
                    break;
                case "1":
                    return "Lunes";
                    break;
                case "2":
                    return "Martes";
                    break;
                case "3":
                    return "Miercoles";
                    break;
                case "4":
                    return "Jueves";
                    break;
                case "5":
                    return "Viernes";
                    break;
                case "6":
                    return "Sabado";
                    break;
                default:
                    return "N/A";
            }
        }
    },
    computed: {
        isloading: function() {
            return this.$store.getters.getloading;
        }
    }
};
</script>
