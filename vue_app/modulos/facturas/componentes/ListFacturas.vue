<template>
    <div class="background my-container">
         <v-toolbar flat color="#1d2735" dark>
            <v-toolbar-title>Listado Facturas</v-toolbar-title>
        </v-toolbar>
        <v-row>
            <v-col cols="12" md="8">
                <v-btn rounded depressed color="blue" dark to="guardar-factura"
                    >nuevo</v-btn>
            </v-col>
            <v-col cols="12" md="4">
                <v-text-field
                    dense outlined
                    prepend-icon="mdi-account-search"
                    filled
                    v-model="search"
                    label="Búsqueda"
                ></v-text-field>
            </v-col>
        </v-row>
        <loader v-if="isloading"></loader>
        <v-data-table
            :item-class="
                () => {
                    return 'pointer';
                }
            "
            @click:row="
                item => {
                    $router.push(`/guardar-factura?id=${item.id}`);
                }
            "
            :server-items-length="total_cliente"
            @update:options="loadItems"
            :headers="headers"
            :search="search"
            :items="facturas"
            item-key="id"
            class="elevation-1"
        >
            <template v-slot:item.pdf="{ item }">
                <a targer="_blank" :href="item.url" @click.stop="">
                    <v-icon small color="red">mdi-file-pdf</v-icon>
                </a>
            </template>
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
            dialog: false,
            search: "",
            facturas: [],
            selected_item: {},
            itemsPerPage: 10,
            page: 1,
            total_cliente: 0,
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
                },
                {
                    text: "Pdf",
                    value: "pdf"
                },
                {
                    text: "Action",
                    value: "action"
                }
            ]
        };
    },
    mounted() {
        this.getFacturas();
    },
    methods: {
        loadItems({ page, itemsPerPage, sortBy }) {
            this.page = page;
            this.itemsPerPage = itemsPerPage;
            this.getFacturas();
        },
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
            let data = "";
            if (this.search != "") {
                data += `&search=${this.search}`;
            }

            axios
                .get(
                    `api/get-facturas?page=${this.page}&amount=${this.itemsPerPage}` +
                        data
                )
                .then(
                    res => {
                        this.facturas = res.data.data;
                        this.total_cliente = res.data.total;
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
