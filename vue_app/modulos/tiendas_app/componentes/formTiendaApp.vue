<template>
    <v-card class="mx-auto">

        <v-toolbar color="#1d2735" dark>
            <v-toolbar-title>Guardar / Editar Localización</v-toolbar-title>
        </v-toolbar>

        <v-container fluid>

            <v-row>
                <v-col cols="12" md="3">
                    <v-text-field dense outlined v-model="tienda.nombre" label="Nombre" required></v-text-field>
                </v-col>
                <v-col cols="12" md="3">
                    <v-btn rounded depressed class="white--text" color="success" @click="saveTienda">guardar</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
    export default {
        props: ['tienda'],

        methods: {
            saveTienda() {
                axios.post('api/app/savetienda', this.tienda).then(res => {
                    this.$emit('pushTienda', res.data)
                }, res => {
                    this.$toast.error('Algo ha salido mal')
                })
            },
        }
    }
</script>