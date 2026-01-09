<template>
    <div class="background my-container">
        <loader v-if="isloading"></loader>

        <form-tienda-app
            :tienda="tienda"
            v-on:clearTienda="clearTienda"
            v-on:pushTienda="pushTienda"
        >
        </form-tienda-app>

        <v-toolbar color="#1d2735" dark>
            <v-toolbar-title>Listado de Localizaciones</v-toolbar-title>
        </v-toolbar>

        <v-data-table
            :item-class="
                () => {
                    return 'pointer';
                }
            "
            @click:row="
                item => {
                    setTienda(item);
                }
            "
            :headers="headers"
            :search="search"
            disable-pagination
            hide-default-footer
            :items="tiendas"
            item-key="id"
            class="elevation-1"
        >
            <template v-slot:item.action="{ item }">
                <v-icon small color="red" @click.stop="deleteTienda(item)">
                    mdi-delete
                </v-icon>
            </template>
        </v-data-table>
    </div>
</template>

<script>
import formTiendaApp from "./formTiendaApp.vue";
export default {
    components: {
        formTiendaApp
    },

    data() {
        return {
            search: "",

            tienda: {
                id: null,
                nombre: ""
            },

            tiendas: [],

            headers: [
                {
                    text: "Nombre",
                    align: "left",
                    value: "nombre"
                },
                {
                    text: "Acciones",
                    value: "action",
                    sortable: false
                }
            ]
        };
    },
    mounted() {
        this.getTiendas();
    },
    methods: {
        getTiendas() {
            axios.get("api/app/gettiendas").then(
                res => {
                    this.tiendas = res.data;
                },
                err => {
                    this.$toast.error("Algo ha salido mal");
                }
            );
        },

        setTienda(tienda) {
            this.tienda = tienda;
        },

        deleteTienda(tienda) {
            axios.get(`api/app/deletetienda/${tienda.id}`).then(
                res => {
                    this.tiendas.splice(this.tiendas.indexOf(tienda), 1);
                },
                res => {}
            );
        },

        pushTienda(data) {
            if (data.was_created) {
                this.tiendas.push(data.tienda);
            }
            this.clearTienda();
        },

        clearTienda() {
            this.tienda = {
                id: null,
                nombre: ""
            };
        }
    },
    computed: {
        isloading: function() {
            return this.$store.getters.getloading;
        }
    }
};
</script>
