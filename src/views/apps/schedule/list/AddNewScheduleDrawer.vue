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
    },
    tienda_id: {
        type: Number,
        default: () => null
    }
});

const store = useStateStore();

const emit = defineEmits(["update:isDrawerOpen", "refresh"]);

const errors = ref({});

const scheduleData = ref({
    id: null,
    app_tienda_id: props.tienda_id,
    dia: null,
    start: "",
    end: ""
});

const diasSemana = [
    { id: 0, nombre: "Domingo" },
    { id: 1, nombre: "Lunes" },
    { id: 2, nombre: "Martes" },
    { id: 3, nombre: "Miércoles" },
    { id: 4, nombre: "Jueves" },
    { id: 5, nombre: "Viernes" },
    { id: 6, nombre: "Sábado" }
];

const isFormValid = ref(false);
const refForm = ref();

const closeNavigationDrawer = () => {
    errors.value = {};
    emit("update:isDrawerOpen", false);
};

const saveSchedule = async () => {
    try {
        errors.value = {};

        const response = await $api_app(
            `/save-horario-by-tienda/${scheduleData.value.app_tienda_id}`,
            {
                method: "POST",
                body: scheduleData.value
            }
        );

        store.success(
            `Horario ${
                scheduleData.value.id != null ? "actualizado" : "creado"
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
        let user = await saveSchedule();
    }
};

const resetScheduleData = () => {
    nextTick(() => {
        refForm.value?.reset();
        refForm.value?.resetValidation();
    });
    scheduleData.value = {
        id: null,
        app_tienda_id: props.tienda_id,
        dia: null,
        start: "",
        end: ""
    };
};

watch(
    [() => props.item, () => props.tienda_id],
    ([newItem, newTiendaId]) => {
        if (newItem != null) {
            scheduleData.value = JSON.parse(JSON.stringify(newItem));
        } else {
            resetScheduleData();
            scheduleData.value.app_tienda_id = newTiendaId;
        }
    },
    { immediate: true }
);

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
            :title="
                props.item != null
                    ? 'Editar horario de la tienda'
                    : 'Agregar horario de la tienda'
            "
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
                                <VSelect
                                    v-model="scheduleData.dia"
                                    :rules="[requiredValidator]"
                                    :items="diasSemana"
                                    item-title="nombre"
                                    item-value="id"
                                    label="Día de la semana"
                                    placeholder="Día de la semana"
                                />
                            </VCol>

                            <VCol cols="12">
                                <AppDateTimePicker
                                    v-model="scheduleData.start"
                                    label="Hora inicio"
                                    format="HH:mm"
                                    :rules="[requiredValidator]"
                                    :config="{
                                        enableTime: true,
                                        noCalendar: true,
                                        dateFormat: 'H:i',
                                        time_24hr: true
                                    }"
                                />
                            </VCol>

                            <VCol cols="12">
                                <AppDateTimePicker
                                    v-model="scheduleData.end"
                                    label="Hora fin"
                                    format="HH:mm"
                                    :rules="[requiredValidator]"
                                    :config="{
                                        enableTime: true,
                                        noCalendar: true,
                                        dateFormat: 'H:i',
                                        time_24hr: true
                                    }"
                                />
                            </VCol>

                            <VCol cols="12">
                                <VBtn type="submit" class="me-4">
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
