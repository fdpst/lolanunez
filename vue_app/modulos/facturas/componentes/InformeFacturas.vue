<template>
    <div class="background my-container">
        <v-toolbar flat color="#1d2735" dark>
            <v-toolbar-title>Informe Facturas</v-toolbar-title>
        </v-toolbar>
        
        <loader v-if="isloading"></loader>

        <v-row class="mt-3">
            <v-col cols="12" md="4">
                <date-select 
                    dense outlined
                    label="Fecha Inicio"
                    v-model="fecha_inicio"
                ></date-select>
            </v-col>
            <v-col cols="12" md="4">
                <date-select
                    dense outlined
                    label="Fecha Fin"
                    v-model="fecha_fin"
                ></date-select>
            </v-col>
        </v-row>

        <v-data-table
            :item-class="
                () => {
                    return 'pointer';
                }
            "
            :headers="headers"
            :search="search"
            :items="facturas"
            item-key="id"
            class="elevation-1"
        >
            <template v-slot:item.total="{ item }">
                € {{ item.total.toFixed(2) }}
            </template>
            <template v-slot:item.action="{ item }">
                <v-icon
                    small
                    color="red"
                    @click.stop="
                        selected_item = item;
                        dialog = true;
                    "
                    >mdi-trash-can</v-icon
                >
            </template>
        </v-data-table>
        <v-dialog persistent v-model="dialog" max-width="500">
            <v-card>
                <v-card-title class="headline"
                    >Esta Seguro de Eliminar</v-card-title
                >
                <v-card-text> </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        :loading="isloading"
                        color="red"
                        dark
                        @click="deleteFactura"
                        >Eliminar</v-btn
                    >
                    <v-btn color="red" outlined text @click="dialog = false"
                        >Cancelar</v-btn
                    >
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fecha_inicio: null,
            fecha_fin: null,
            dialog: false,
            search: "",
            facturas: [],
            selected_item: {},
            headers: [
                {
                    text: "Cliente",
                    align: "left",
                    value: "cliente.nombre"
                },
                {
                    text: "Total",
                    value: "total"
                },
                {
                    text: "Fecha",
                    value: "fecha"
                }
            ]
        };
    },
    mounted() {
        var date = new Date();
        this.fecha_inicio = new Date(date.getFullYear(), date.getMonth(), 1)
            .toISOString()
            .split("T")[0];
        this.fecha_fin = new Date(date.getFullYear(), date.getMonth() + 1, 0)
            .toISOString()
            .split("T")[0];
        this.getFacturas();
    },
    watch: {
        fecha_inicio(val) {
            this.getFacturas();
        },
        fecha_fin(val) {
            this.getFacturas();
        }
    },
    methods: {
        deleteFactura() {
            axios
                .post("api/delete-factura", this.selected_item)
                .then(res => {
                    this.getFacturas();
                    this.dialog = false;
                    this.$toast.sucs("Eliminado con exito");
                })
                .catch(err => {
                    this.$toast.error("Algo ha salido mal");
                });
        },
        getFacturas() {
            let data = `&fecha_inicio=${this.fecha_inicio}&fecha_fin=${this.fecha_fin}`;

            axios.get("api/get-facturas-informe?temp=1" + data).then(
                res => {
                    this.facturas = res.data.data;
                    this.facturas.push({
                        cliente: { nombre: "Facturado:" },
                        total: res.data.total
                    });
                },
                err => {
                    //this.$toast.error('Algo ha salido mal')
                }
            );
        }
    },
    computed: {
        isloading: function() {
            return this.$store.getters.getloading;
        }
    }
};
</script>
