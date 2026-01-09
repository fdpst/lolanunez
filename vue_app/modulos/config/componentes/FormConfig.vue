<template>
    <div class="my-container">
        <loader v-if="isloading"></loader>

        <v-card class="mx-auto">
            <v-toolbar color="#1d2735" dark>
                <v-toolbar-title>Configuracion</v-toolbar-title>
            </v-toolbar>

            <v-container fluid>
                <v-row dense>
                    <v-col cols="12" md="8">
                        <v-text-field v-model="config.stripe_key" label="Stripe Key"></v-text-field>
                    </v-col>
                </v-row>

                <v-row dense>
                    <v-col cols="12" md="8">
                        <v-text-field v-model="config.stripe_secret" label="Stripe Secret"></v-text-field>
                    </v-col>
                </v-row>

                <v-row dense>
                    <v-col cols="12" md="6">
                        <v-select v-model="config.tienda_id" :items="tiendas" label="Tienda por defecto" item-text="nombre" item-value="id"></v-select>
                    </v-col>
                </v-row>

                <v-row dense>
                    <v-col cols="12" md="8">
                        <v-checkbox v-model="config.activo" label="Activar pago"></v-checkbox>
                    </v-col>
                </v-row>

                <v-row dense>
                    <v-col cols="12" md="4">
                        <v-file-input prepend-icon="mdi-camera" ref="file" label="Logo" v-on:change="onFileChange"></v-file-input>
                    </v-col>
                </v-row>

                <v-row dense v-if="config.logo_url">
                    <v-col cols="12" md="4">
                        <v-card class="mx-auto">
                            <v-card-text>
                                <v-img :src="config.logo_url"></v-img>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>

                <v-row class="mt-4">
                    <v-col cols="12" md="4">
                        <v-color-picker v-model="config.color"></v-color-picker>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12">
                        <v-btn rounded depressed class="white--text" color="success" @click="saveConfig">guardar</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                tiendas: [],
                config: {
                    id: null,
                    activo: false,
                    stripe_key: null,
                    stripe_secret: null,
                    tienda_id: null,
                    logo: null,
                    color: null,
                    logo_url: null,
                }
            }
        },


        created() {
            this.getConfig();
        },

        methods: {
            getConfig() {
                axios.get(`api/get-config`).then(res => {
                    this.tiendas = res.data.tiendas
                    if (res.data.config.id) {
                        this.config = res.data.config
                    }
                }, res => {
                    this.$toast.error("Error consultando configuracion")
                });
            },

            saveConfig() {
                if(typeof(this.config.color) !== 'String'){
                    this.config.color = this.config.color.hex
                }

                axios.post(`api/save-config`, this.config).then(res => {
                    this.$toast.sucs("Configuración actualizada con exito")
                    this.config = res.data
                }, res => {
                    this.$toast.error("Error guardando configuracion")
                });
            },

            onFileChange(file) {
                let reader = new FileReader()
                reader.onload = e => {
                    this.config.logo = e.target.result
                }
                if (file) {
                    reader.readAsDataURL(file)
                }
            },

        },

        computed: {
            isloading: function() {
                return this.$store.getters.getloading;
            }
        }
    };
</script>