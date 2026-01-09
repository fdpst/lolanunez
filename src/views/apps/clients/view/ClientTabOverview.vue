<script setup>
const props = defineProps({
    item: {
        type: Object,
        required: false,
        default: () => ({
            id: null,
            antecedentes: "",
            consulta: "",
            ejercicio: "",
            alergias: "",
            tratamiento: "",
            telefono: ""
        })
    }
});

const emit = defineEmits(["update:item"]);

const clientData = ref(structuredClone(toRaw(props.item)));

const alert = ref({
    status: false,
    color: "success",
    message: ""
});

const isFormValid = ref(false);
const refForm = ref();

const route = useRoute("apps-user-view-id");

const saveClient = async () => {
    try {
        // errors.value = {};

        const response = await $api_app("/saveusuario", {
            method: "POST",
            body: clientData.value
        });

        alert.value.message = response.message;
        alert.value.color = "success";
        alert.value.status = true;

        emit("update:item", clientData);
    } catch (error) {
        // store.error(error.response._data.message);
        alert.value.message = error.response._data.message;
        alert.value.color = "error";
        alert.value.status = true;
        // if (error.status == 422) {
        //     errors.value = error.response._data.errors;
        // }
    }
};

const onSubmit = async () => {
    const { valid, errors } = await refForm.value?.validate();

    if (valid) {
        await saveClient();
    }
};

//onMounted(fetchVacations)

watch(props, () => {
    clientData.value = structuredClone(toRaw(props.item));
});
</script>

<template>
    <VRow>
        <VSnackbar
            v-model="alert.status"
            location="top end"
            :color="alert.color"
        >
            {{ alert.message }}
        </VSnackbar>

        <VCol cols="12">
            <VCard title="Agregar información del cliente">
                <VCardText>
                    <VForm
                        ref="refForm"
                        v-model="isFormValid"
                        @submit.prevent="onSubmit"
                    >
                        <VRow>
                            <!-- 👉 Full name -->
                            <VCol cols="12">
                                <VTextarea
                                    v-model="clientData.consulta"
                                    label="Motivo de consulta"
                                    placeholder=""
                                />
                            </VCol>

                            <VCol cols="12">
                                <VTextarea
                                    v-model="clientData.tratamiento"
                                    label="Valoración y tratamiento"
                                    placeholder=""
                                />
                            </VCol>

                            <VCol cols="12">
                                <VTextarea
                                    v-model="clientData.antecedentes"
                                    label="Antecedentes médicos"
                                    placeholder="12345678B"
                                />
                            </VCol>

                            <VCol cols="12">
                                <VTextarea
                                    v-model="clientData.alergias"
                                    label="Alergias"
                                    placeholder="123456789"
                                />
                            </VCol>

                            <!-- 👉 Email -->
                            <VCol cols="12">
                                <VTextarea
                                    v-model="clientData.ejercicio"
                                    label="Ejercicio"
                                    placeholder=""
                                />
                            </VCol>

                            <VCol cols="12" class="d-flex justify-center">
                                <VBtn type="submit" class="me-4">
                                    Aceptar
                                </VBtn>
                            </VCol>
                        </VRow>
                    </VForm>
                </VCardText>
            </VCard>
        </VCol>
    </VRow>
</template>
