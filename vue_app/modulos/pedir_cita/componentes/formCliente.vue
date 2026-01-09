<template>
    <div class="mx-md-8">
        <div class="d-flex justify-space-between align-center mb-5 mt-1">

            <h4 class="text-subtitle-2">(*) Campos requeridos</h4>
        </div>
        <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="saveCita">

            <v-row class="mx-1">
                <v-col cols="12" class="col-responsive">
                    <v-text-field v-model="form.nombre" filled color="green lighten-1" label="Nombre*" maxlength="50" :rules="[
                            v => !!v || 'Campo requerido',
                            v =>
                                /^[a-z0-9 ]+$/i.test(v) ||
                                'Este campo solo permite letras y numeros'
                        ]" clearable></v-text-field>
                </v-col>
            </v-row>
            <v-row class="mx-1">
                <v-col cols="12">
                    <v-text-field v-model="form.email" filled color="green lighten-1" label="Correo Electronico*" maxlength="50" :rules="[
                            v =>
                                /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
                                    v
                                ) || 'Correo invalido'
                        ]" clearable></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field v-model="form.telefono" filled color="green lighten-1" label="Telefono*" clearable maxlength="9" :rules="[
                            v =>
                                Number.isInteger(Number(v)) ||
                                'El campo es solo numeros'
                        ]"></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field v-model="comentario" filled color="green lighten-1" label="Comentario" clearable></v-text-field>
                </v-col>
            </v-row>
        </v-form>
        <v-divider></v-divider>

        <v-row dense>
            <v-col cols="12">
                <v-btn color="red lighten-1" dark @click="$emit('pasoAtras')">
                    ATRÁS
                </v-btn>

                <v-btn color="green lighten-1" dark @click="saveCita">
                    {{payment_active ? 'CONTINUAR AL PAGO' : 'CONFIRMAR CITA'}}
                </v-btn>
            </v-col>
        </v-row>

        <v-dialog v-model="dialog" width="500">
            <v-alert class="mb-0" color="green" dark border="top" icon="mdi-check" transition="scale-transition">
                Tu cita se ha creado correctamente, en breve recibirás un mail
                con la confirmación
            </v-alert>
        </v-dialog>
    </div>
</template>

<script>
export default {
    props: ['formData', 'payment_active'],
    data() {
        return {
            app_event: {
                precio: 0
            },
            valid: true,
            radioGroup: [],
            form: {
                nombre: null,
                email: null,
                telefono: null,
            },
            comentario: null,
            dialog: false
        };
    },
    methods: {
        checkPayment(res) {
            if (res.data.clientSecret) {
                this.$emit('open_stripe_tab', res.data)
                return null
            }
            this.dialog = true
            this.$emit('clearFormulario')
            this.$refs.form.reset()
            this.$refs.form.resetValidation();
        },
        saveCita() {
            let data = {
                cita: this.formData,
                cliente: this.form
            };

            data.cita.observacionesUsuario = this.comentario;

            if (!this.$refs.form.validate()) {
                return this.$toast.warn('Por favor compruebe los campos')
            }

            axios.post(`api/app/saveCitaWeb`, data).then(res => {
                this.checkPayment(res)
            }, res => {
                this.$toast.error("algo ha salido mal");
            })
        }
    }
}
</script>

<style>
    @media (max-width: 600px) {
        .col-responsive {
            padding: 4px !important;
        }
    }
</style>