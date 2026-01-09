<template>
    <div class="background my-container">
        <v-toolbar color="#1d2735" dark>
            <v-toolbar-title
                >Listado Empleados</v-toolbar-title>
        </v-toolbar>
        
        
        <loader v-if="isloading"></loader>

        <v-row class="mt-3">
            <v-col cols="12" md="8">
                <v-btn rounded depressed color="blue" dark to="guardar-empleado-app">nuevo</v-btn>
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

        <v-data-table
            :item-class="
                () => {
                    return 'pointer';
                }
            "
            @click:row="
                item => {
                    $router.push(`/guardar-empleado-app?id=${item.id}`);
                }
            "
            :headers="headers"
            :search="search"
            :items="empleados"
            item-key="id"
            class="elevation-1"
        >
        </v-data-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search: "",
            empleados: [],
            headers: [
                {
                    text: "Nombre",
                    align: "left",
                    value: "nombre"
                },
                {
                    text: "Email",
                    value: "email"
                },
                {
                    text: "Teléfono",
                    value: "telefono"
                }/*,
                {
                    text: "Tipo",
                    value: "tipo"
                }*/
            ]
        };
    },
    mounted() {
        this.getEmpleados();
    },
    methods: {
        getEmpleados() {
            axios.get("api/app/getempleados").then(
                res => {
                    this.empleados = res.data;
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
