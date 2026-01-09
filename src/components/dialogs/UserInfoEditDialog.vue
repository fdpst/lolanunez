<script setup>
const props = defineProps({
    userData: {
        type: Object,
        required: false,
        default: () => ({
            id: null,
            id_role: null,
            id_empresa: null,
            name: "",
            nif: "",
            naf: "",
            email: "",
            rol: "",
            empresa: ""
        })
    },
    isDialogVisible: {
        type: Boolean,
        required: true
    }
});

const emit = defineEmits(["submit", "update:isDialogVisible"]);

const userData = ref(structuredClone(toRaw(props.userData)));

watch(props, () => {
    userData.value = structuredClone(toRaw(props.userData));
});

const onFormSubmit = () => {
    emit("update:isDialogVisible", false);
    emit("submit", userData);
};

const onFormReset = () => {
    userData.value = structuredClone(toRaw(props.userData));
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
                        Editar información del usuario
                    </h4>
                    <div class="text-body-1">
                        Actualizar los detalles del usuario
                    </div>
                </div>

                <!-- 👉 Form -->
                <VForm class="mt-4" @submit.prevent="onFormSubmit">
                    <VRow>
                        <!-- 👉  Name -->
                        <VCol cols="12" md="6">
                            <VTextField
                                v-model="userData.name"
                                label="Nombre"
                                placeholder="John"
                            />
                        </VCol>

                        <!-- 👉 Email -->
                        <VCol cols="12" md="6">
                            <VTextField
                                v-model="userData.email"
                                label="Billing Email"
                                placeholder="johndoe@email.com"
                            />
                        </VCol>

                        <VCol cols="12" md="6">
                            <VTextField
                                v-model="userData.nif"
                                label="NIF"
                                placeholder=""
                            />
                        </VCol>

                        <VCol cols="12" md="6">
                            <VTextField
                                v-model="userData.naf"
                                label="NAF"
                                placeholder=""
                            />
                        </VCol>

                        <!-- 👉 role -->
                        <VCol cols="12" md="6">
                            <VSelect
                                v-model="userData.id_role"
                                :items="roles"
                                label="Perfil"
                                item-value="id"
                                item-title="descripcion"
                                placeholder="Selecciona un perfil"
                            />
                        </VCol>

                        <!-- 👉 empresa -->
                        <VCol cols="12" md="6">
                            <VSelect
                                v-model="userData.id_empresa"
                                :items="empresas"
                                label="Empresa"
                                placeholder="Selecciona una empresa"
                                item-value="id"
                                item-title="nombre"
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
