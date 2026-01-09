<script setup>
const props = defineProps({
    item: {
        type: Object,
        required: false,
        default: () => ({
            id: null,
            dni: "",
            nombre: "",
            apellidos: "",
            email: "",
            role: null,
            fecha_nacimiento: "",
            telefono: "",
            profesion: "",
            observaciones: "",
            ciudad: "",
            pais: "",
            direccion: ""
        })
    },
    isDialogVisible: {
        type: Boolean,
        required: true
    }
});

const emit = defineEmits(["submit", "update:isDialogVisible"]);

const clientData = ref(structuredClone(toRaw(props.item)));

watch(props, () => {
    clientData.value = structuredClone(toRaw(props.item));
});

const onFormSubmit = () => {
    emit("update:isDialogVisible", false);
    emit("submit", clientData);
};

const onFormReset = () => {
    clientData.value = structuredClone(toRaw(props.item));
    emit("update:isDialogVisible", false);
};

const dialogVisibleUpdate = val => {
    emit("update:isDialogVisible", val);
};

// const roles = await $api(`/getroles`, {
//   method: 'GET'
// })
//const empresas = await $api(`/get-empresas`, {
//    method: "GET"
//});
</script>

<template>
    <VDialog
        :width="$vuetify.display.smAndDown ? 'auto' : 900"
        :model-value="props.isDialogVisible"
        @update:model-value="dialogVisibleUpdate"
    >
        <VCard class="pa-sm-11 pa-3">
            <!-- 👉 dialog close btn -->
            <DialogCloseBtn
                variant="text"
                size="default"
                @click="onFormReset"
            />

            <VCardText class="pt-5">
                <div class="text-center pb-6">
                    <h4 class="text-h4 mb-2">
                        Editar información del cliente
                    </h4>
                    <div class="text-body-1">
                        Actualizar los detalles del cliente
                    </div>
                </div>

                <!-- 👉 Form -->
                <VForm class="mt-4" @submit.prevent="onFormSubmit">
                    <VRow>
                        <VCol cols="12" md="6">
                            <VTextField
                                v-model="clientData.nombre"
                                :rules="[requiredValidator]"
                                label="Nombre"
                                placeholder="John"
                            />
                        </VCol>

                        <VCol cols="12" md="6">
                            <VTextField
                                v-model="clientData.apellidos"
                                :rules="[requiredValidator]"
                                label="Apellidos"
                                placeholder="Doe"
                            />
                        </VCol>

                        <VCol cols="12" md="6">
                            <VTextField
                                v-model="clientData.dni"
                                :rules="[requiredValidator]"
                                label="DNI"
                                placeholder="12345678B"
                            />
                        </VCol>

                        <VCol cols="12" md="6">
                            <VTextField
                                v-model="clientData.telefono"
                                :rules="[requiredValidator]"
                                label="Teléfono"
                                placeholder="123456789"
                            />
                        </VCol>

                        <!-- 👉 Email -->
                        <VCol cols="12" md="6">
                            <VTextField
                                v-model="clientData.email"
                                :rules="[requiredValidator, emailValidator]"
                                label="Email"
                                placeholder="johndoe@email.com"
                            />
                        </VCol>

                        <VCol cols="12" md="6">
                            <AppDateTimePicker
                                v-model="clientData.fecha_nacimiento"
                                label="Fecha de nacimiento"
                                placeholder="Selecciona una fecha"
                            />
                        </VCol>

                        <VCol cols="12" md="6">
                            <VTextField
                                v-model="clientData.ciudad"
                                label="Ciudad"
                                placeholder="Almoradí"
                            />
                        </VCol>

                        <VCol cols="12" md="6">
                            <VTextField
                                v-model="clientData.pais"
                                label="País"
                                placeholder="España"
                            />
                        </VCol>

                        <VCol cols="12">
                            <VTextarea
                                v-model="clientData.direccion"
                                label="Dirección"
                                placeholder="Incluye calle, código postal, referencias, etc."
                            />
                        </VCol>

                        <VCol cols="12">
                            <VTextarea
                                v-model="clientData.observaciones"
                                label="Observaciones"
                                placeholder="Escribe notas relevantes del cliente"
                            />
                        </VCol>
                        <!-- 👉 Submit and Cancel -->
                        <VCol
                            cols="12"
                            class="d-flex flex-wrap justify-center gap-4"
                        >
                            <VBtn type="submit">
                                Aceptar
                            </VBtn>

                            <VBtn
                                color="secondary"
                                variant="outlined"
                                @click="onFormReset"
                            >
                                Cancelar
                            </VBtn>
                        </VCol>
                    </VRow>
                </VForm>
            </VCardText>
        </VCard>
    </VDialog>
</template>
