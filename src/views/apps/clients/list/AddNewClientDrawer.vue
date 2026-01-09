<script setup>
    import {
        useStateStore
    } from "@store/state";

    import {
        PerfectScrollbar
    } from "vue3-perfect-scrollbar";

    const props = defineProps({
        isDrawerOpen: {
            type: Boolean,
            required: true
        },
        item: {
            type: Object,
            default: () => null
        }
    });

    const store = useStateStore();

    const emit = defineEmits(["update:isDrawerOpen", "refresh"]);

    const errors = ref({});

    const clientData = ref({
        id: null,
        dni: "",
        nombre: "",
        apellidos: "",
        email: "",
        fecha_nacimiento: "",
        telefono: "",
        profesion: "",
        observaciones: "",
        ciudad: "",
        pais: "",
        direccion: ""
    });

    /*const roles = ref([
        {
            id: 1,
            label: "Administrador"
        },
        {
            id: 2,
            label: "Usuario"
        },
        {
            id: 3,
            label: "Turno"
        }
    ]);*/

    const isFormValid = ref(false);
    const refForm = ref();

    const closeNavigationDrawer = () => {
        errors.value = {};
        emit("update:isDrawerOpen", false);
    };

    const saveClient = async () => {
        try {
            errors.value = {};

            const response = await $api_app("/saveusuario", {
                method: "POST",
                body: clientData.value
            });

            store.success(response.message);
            emit("refresh", response);
            emit("update:isDrawerOpen", false);
        } catch (error) {
            store.error(error.response._data.message);
            if (error.status == 422) {
                errors.value = error.response._data.errors;
            }
        }
    };

    const onSubmit = async () => {
        const {
            valid,
            errors
        } = await refForm.value?.validate();

        if (valid) {
            let user = await saveClient();
        }
    };

    const resetClientData = () => {
        nextTick(() => {
            refForm.value?.reset();
            refForm.value?.resetValidation();
        });
        clientData.value = {
            id: null,
            dni: "",
            nombre: "",
            apellidos: "",
            email: "",
            fecha_nacimiento: "",
            telefono: "",
            profesion: "",
            observaciones: "",
            ciudad: "",
            pais: "",
            direccion: ""
        };
    };

    watch(() => {
        if (props.item != null) {
            clientData.value = JSON.parse(JSON.stringify(props.item));
        } else {
            resetClientData();
        }
    });

    const handleDrawerModelValueUpdate = val => {
        emit("update:isDrawerOpen", val);
    };
</script>

<template>
    <VNavigationDrawer temporary :width="400" location="end" class="scrollable-content" :model-value="props.isDrawerOpen" @update:model-value="handleDrawerModelValueUpdate">
        <!-- 👉 Title -->
        <AppDrawerHeaderSection :title="props.item != null ? 'Editar cliente' : 'Agregar cliente'" @cancel="closeNavigationDrawer" />

        <VDivider />

        <PerfectScrollbar :options="{ wheelPropagation: false }">
            <VCard flat>
                <VCardText>
                    <!-- 👉 Form -->
                    <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
                        <VRow>
                            <!-- 👉 Full name -->
                            <VCol cols="12">
                                <VTextField v-model="clientData.nombre" :rules="[requiredValidator]" label="Nombre" placeholder="John" />
                            </VCol>

                            <VCol cols="12">
                                <VTextField v-model="clientData.apellidos" :rules="[requiredValidator]" label="Apellidos" placeholder="Doe" />
                            </VCol>

                            <VCol cols="12">
                                <VTextField v-model="clientData.dni" :rules="[requiredValidator]" label="DNI" placeholder="12345678B" />
                            </VCol>

                            <VCol cols="12">
                                <VTextField v-model="clientData.telefono" :rules="[requiredValidator]" label="Teléfono" placeholder="123456789" />
                            </VCol>

                            <!-- 👉 Email -->
                            <VCol cols="12">
                                <VTextField v-model="clientData.email" :rules="[requiredValidator, emailValidator]" label="Email" placeholder="johndoe@email.com" :error-messages="
                                        errors.email ? errors.email[0] : ''
                                    " />
                            </VCol>

                            <VCol cols="12">
                                <AppDateTimePicker v-model="clientData.fecha_nacimiento" label="Fecha de nacimiento" placeholder="Selecciona una fecha" />
                            </VCol>

                            <VCol cols="12">
                                <VTextField v-model="clientData.ciudad" label="Ciudad" placeholder="Almoradí" />
                            </VCol>

                            <VCol cols="12">
                                <VTextField v-model="clientData.pais" label="País" placeholder="España" />
                            </VCol>

                            <VCol cols="12">
                                <VTextarea v-model="clientData.direccion" label="Dirección" placeholder="Incluye calle, código postal, referencias, etc." />
                            </VCol>

                            <VCol cols="12">
                                <VTextarea v-model="clientData.observaciones" label="Observaciones" placeholder="Escribe notas relevantes del cliente" />
                            </VCol>

                            <VCol cols="12">
                                <VBtn type="submit" class="me-4">
                                    Aceptar
                                </VBtn>
                                <VBtn type="reset" variant="outlined" color="error" @click="closeNavigationDrawer">
                                    Cancelar
                                </VBtn>
                            </VCol>
                        </VRow>
                    </VForm>
                </VCardText>
            </VCard>
        </PerfectScrollbar>
    </VNavigationDrawer>
</template>