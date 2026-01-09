<template>
    <div class="background my-container">
        <v-toolbar color="#1d2735" dark>
            <v-toolbar-title
                >Clientes</v-toolbar-title>
        </v-toolbar>
        <!--<v-row
            v-if="
                this.$route.query.tipo == 'adoptante' ||
                    this.$route.query.tipo == 'donante'
            "
            class="ml-1"
        >
            <v-btn rounded depressed color="orange" dark to="/lista-adopciones">
                <strong
                    ><v-icon class="white--text mr-1">mdi-playlist-star</v-icon>
                    Listado Adopciones</strong
                >
            </v-btn>
        </v-row>-->
        <!-- <v-file-input label="selecciona una archivo" v-model="file"></v-file-input>
        <v-btn @click="importClientes">Importar</v-btn> -->

        <v-row class="mt-3">
            <v-col cols="12" md="8">
                <v-btn
                    v-if="
                        this.$route.query.tipo != 'adoptante' &&
                            this.$route.query.tipo != 'donante'
                    "
                    rounded
                    depressed
                    color="blue"
                    dark
                    to="guardar-usuario-app"
                    >Nuevo Cliente
                </v-btn>
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
   
        
        <!-- <v-btn v-if="this.$route.query.tipo == 'donante'" 
            rounded depressed color="blue" dark to="guardar-usuario-app">Nuevo Donante
        </v-btn> 
        <v-btn
            v-if="this.$route.query.tipo == 'donante'"
            rounded
            depressed
            color="blue"
            dark
            to="guardar-usuario-app?tipo=donante"
            >Nuevo Donante
        </v-btn>-->

        <v-overlay v-if="overlay">
            <v-progress-circular
                indeterminate
                size="220"
                color="green"
                width="10"
            >
                <v-col>
                    <!--<v-icon class="white--text">mdi-paw</v-icon>-->
                    <strong style="color:white !important;">
                        Cargando datos</strong
                    >
                </v-col>
            </v-progress-circular>
        </v-overlay>
        
        <v-data-table
            :item-class="
                () => {
                    return 'pointer';
                }
            "
            @click:row="
                item => {
                    $router.push(`/guardar-usuario-app?id=${item.id}`);
                }
            "
            :headers="headers"
            :search="search"
            :items="usuarios"
            :server-items-length="total_cliente"
            @update:options="loadItems"
            item-key="id"
            class="elevation-1"
        >
            <template v-slot:item.action="{ item }">
                <router-link
                    :to="{ path: `/guardar-usuario-app?id=${item.id}` }"
                >
                    <v-icon color="blue" small class="mr-2">
                        mdi-pencil
                    </v-icon>
                </router-link>
                <!--<router-link :to="{ path: `/mascotas-usuario-app?id=${item.id}` }">
                    <v-icon color="green" small class="mr-2">
                        mdi-dog-side
                    </v-icon>
                </router-link>-->
            </template>
        </v-data-table>
    </div>
</template>
<script>
import { debounce } from "../../../helpers";
export default {
    data() {
        return {
            search: "",
            itemsPerPage: 10,
            page: 1,
            route: this.$route.query,
            recargar: false,
            overlay: true,
            usuarios: [],
            total_cliente: 0,
            headers: [
                { text: "Nombre", align: "left", value: "nombre" },
                { text: "Apellidos", align: "left", value: "apellidos" },
                { text: "Email", value: "email" },
                { text: "Teléfono", value: "telefono" }
            ],
            file: null
        };
    },
    mounted() {
        this.route = this.$route.query.tipo;
        if (this.route == "adoptante") {
            this.getUsuariosAdoptantes();
        } else if (this.route == "donante") {
            this.getUsuariosDonantes();
        } else {
            this.getUsuarios();
        }
    },
    watch: {
        search:debounce(function(val) {
            this.getUsuarios()
        }, 500),
        $route(to, from) {
            if (from.query.q && to.query.q) {
                this.$router.go();
            }
        }
    },
    methods: {
        loadItems({ page, itemsPerPage, sortBy }) {
            this.page = page;
            this.itemsPerPage = itemsPerPage;
            this.getUsuarios();
        },
        getUsuarios() {
            axios
                .get(
                    `api/app/getusuarios?page=${this.page}&amount=${this.itemsPerPage}&search=${this.search}`
                )
                .then(
                    res => {
                        this.usuarios = res.data.data;
                        this.total_cliente = res.data.total;
                        this.overlay = false;
                    },
                    err => {
                        this.$toast.error("Algo ha salido mal");
                    }
                );
        },
        getUsuariosAdoptantes() {
            axios.get("api/app/getusuarios/adoptantes").then(
                res => {
                    this.usuarios = res.data;
                    this.overlay = false;
                },
                err => {
                    this.$toast.error("Algo ha salido mal");
                }
            );
        },
        getUsuariosDonantes() {
            axios.get("api/app/getusuarios/donantes").then(
                res => {
                    this.usuarios = res.data;
                    this.overlay = false;
                },
                err => {
                    this.$toast.error("Algo ha salido mal");
                }
            );
        },
        importClientes(){
            let formData = new FormData();
            formData.append('file', this.file);

            axios.post('api/app/import-clientes', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then((res) => {
                    console.log(res.data);
                })
                .catch((error) => {
                    console.log(error.response.data);
                })
        },
    }
};
</script>
