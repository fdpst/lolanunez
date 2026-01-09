<script setup>
import { useStateStore } from "@store/state";

import { PerfectScrollbar } from "vue3-perfect-scrollbar";

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

const storeData = ref({
    id: null,
    nombre: ""
});

const isFormValid = ref(false);
const refForm = ref();

const closeNavigationDrawer = () => {
    errors.value = {};
    emit("update:isDrawerOpen", false);
};

const saveStore = async () => {
    try {
        errors.value = {};

        const response = await $api_app("/savetienda", {
            method: "POST",
            body: storeData.value
        });

        store.success(
            `Localización ${
                response.was_created ? "creada" : "actualizada"
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
        await saveStore();
    }
};

const resetStoreData = () => {
    nextTick(() => {
        refForm.value?.reset();
        refForm.value?.resetValidation();
    });
    storeData.value = {
        id: null,
        nombre: ""
    };
};

watch(() => props.item, () => {
    if (props.item != null) {
        storeData.value = JSON.parse(JSON.stringify(props.item));
    } else {
        resetStoreData();
    }
}, { immediate: true });

const handleDrawerModelValueUpdate = val => {
    emit("update:isDrawerOpen", val);
};
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
            :title="props.item != null ? 'Editar localización' : 'Agregar localización'"
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
                                    v-model="storeData.nombre"
                                    :rules="[requiredValidator]"
                                    label="Nombre"
                                    placeholder="Nombre de la localización"
                                />
                            </VCol>

                            <VCol cols="12">
                                <VBtn
                                    type="submit"
                                    class="me-4"
                                >
                                    Guardar
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
