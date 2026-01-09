<script setup>
import { useStateStore } from "@store/state";

import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import moment from "moment";

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

const serviceData = ref({
    id: null,
    nombre: "",
    precio: 0,
    duracion: "",
    tipos: {
        tipo_pelo: [],
        tipo_mascota: [],
        tipo_tamanyo: []
    }
});

const isFormValid = ref(false);
const refForm = ref();
const is_multiple = ref(false);

const closeNavigationDrawer = () => {
    errors.value = {};
    emit("update:isDrawerOpen", false);
};

const saveService = async () => {
    try {
        errors.value = {};

        if (serviceData.value.tipos == null) {
            serviceData.value.tipos = {
                tipo_pelo: [],
                tipo_mascota: [],
                tipo_tamanyo: []
            };
        }

        const response = await $api_app("/saveservicio", {
            method: "POST",
            body: serviceData.value
        });

        store.success(
            `Servicio ${
                serviceData.value.id != null ? "actualizado" : "creado"
            } con éxito`
        );
        emit("refresh", response);
        emit("update:isDrawerOpen", false);
    } catch (error) {
        store.error("Algo ha salido mal");
        if (error.status == 422) {
            errors.value = error.response._data.errors;
        }
    }
};

const onSubmit = async () => {
    const { valid, errors } = await refForm.value?.validate();

    if (valid) {
        let user = await saveService();
    }
};

const resetServiceData = () => {
    nextTick(() => {
        refForm.value?.reset();
        refForm.value?.resetValidation();
    });
    serviceData.value = {
        id: null,
        nombre: "",
        precio: 0,
        duracion: "",
        tipos: {
            tipo_pelo: [],
            tipo_mascota: [],
            tipo_tamanyo: []
        }
    };
};

watch(() => {
    if (props.item != null) {
        serviceData.value = JSON.parse(JSON.stringify(props.item));
    } else {
        resetServiceData();
    }
});

watch(
    () => serviceData.value.duracion, // Observar la propiedad reactiva `duracion`
    newValue => {
        is_multiple.value = newValue % 30 === 0;
        console.log("is_multiple", is_multiple.value);
    }
);

const handleDrawerModelValueUpdate = val => {
    emit("update:isDrawerOpen", val);
};

const horas = computed(() => {
    if (serviceData.value.duracion) {
        return moment
            .utc(
                moment
                    .duration(serviceData.value.duracion, "minutes")
                    .asMilliseconds()
            )
            .format("HH:mm");
    }
    return null; // Opcional: Retorna null si no hay duración
});
</script>

<template>
    <VNavigationDrawer
        temporary
        :width="400"
        location="end"
        class="scrollable-content"
        :model-value="props.isDrawerOpen"
        @update:model-value="handleDrawerModelValueUpdate"
    >
        <!-- 👉 Title -->
        <AppDrawerHeaderSection
            :title="props.item != null ? 'Editar servicio' : 'Agregar servicio'"
            @cancel="closeNavigationDrawer"
        />

        <VDivider />

        <PerfectScrollbar :options="{ wheelPropagation: false }">
            <VCard flat>
                <VCardText>
                    <!-- 👉 Form -->
                    <VForm
                        ref="refForm"
                        v-model="isFormValid"
                        @submit.prevent="onSubmit"
                    >
                        <VRow>
                            <VCol cols="12">
                                <VTextField
                                    v-model="serviceData.nombre"
                                    :rules="[requiredValidator]"
                                    label="Nombre"
                                    placeholder="Servicio"
                                />
                            </VCol>

                            <VCol cols="12">
                                <VTextField
                                    v-model="serviceData.precio"
                                    :rules="[requiredValidator]"
                                    label="Precio"
                                    placeholder="precio"
                                />
                            </VCol>

                            <VCol cols="12">
                                <VTextField
                                    v-model="serviceData.duracion"
                                    :rules="[requiredValidator]"
                                    label="Duración en minutos"
                                />
                            </VCol>

                            <VCol cols="12">
                                <VTextField
                                    disabled
                                    v-model="horas"
                                    label="Hora"
                                />
                            </VCol>

                            <VCol cols="12">
                                <VBtn
                                    :disabled="!is_multiple"
                                    type="submit"
                                    class="me-4"
                                >
                                    Aceptar
                                </VBtn>
                                <VBtn
                                    type="reset"
                                    variant="outlined"
                                    color="error"
                                    @click="closeNavigationDrawer"
                                >
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
