<template>
    <VNavigationDrawer temporary :width="400" location="end" class="scrollable-content" :model-value="props.isDrawerOpen" @update:model-value="handleDrawerModelValueUpdate">
        <!-- 👉 Title -->
        <AppDrawerHeaderSection :title="props.item != null ? 'Editar Empleado' : 'Agregar Empleado'" @cancel="closeNavigationDrawer" />

        <VDivider />

        <PerfectScrollbar :options="{ wheelPropagation: false }">
            <VCard flat>
                <VCardText>
                    <!-- 👉 Form -->
                    <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">


                        <VRow>
                            <VCol cols="12">
                                <VAutocomplete v-model="itemData.app_tienda_id" density="compact" label="Tiendas" placeholder="Tiendas" :items="props.tiendas" item-value="id" item-title="nombre" />
                            </VCol>

                            <VCol v-if="props.type == 'usual'" cols="12">
                                <VSelect v-model="itemData.dia" label="Día" density="compact" placeholder="Selecciona una día" :items="days" item-value="value" item-title="label" />
                            </VCol>

                            <VCol v-else cols="12">
                                <AppDateTimePicker v-model="itemData.fechas" label="Vacaciones" placeholder="Selecciona una o más fechas" :config="{mode: 'multiple', dateFormat: 'Y-m-d'}" />
                            </VCol>

                            <VCol cols="12" md="6">
                                <AppDateTimePicker v-model="itemData.entrada" density="compact" label="Entrada" :config="{
                                enableTime: true,
                                noCalendar: true,
                                dateFormat: 'H:i',
                              }" />
                            </VCol>

                            <VCol cols="12" md="6">
                                <AppDateTimePicker v-model="itemData.salida" density="compact" label="Salida" :config="{
                                enableTime: true,
                                noCalendar: true,
                                dateFormat: 'H:i',
                              }" />
                            </VCol>

                            <VCol cols="12" md="6">
                                <AppDateTimePicker v-model="itemData.entrada2" density="compact" label="Entrada 2" :config="{
                                enableTime: true,
                                noCalendar: true,
                                dateFormat: 'H:i',
                              }" />
                            </VCol>

                            <VCol cols="12" md="6">
                                <AppDateTimePicker v-model="itemData.salida2" density="compact" label="Salida 2" :config="{
                                enableTime: true,
                                noCalendar: true,
                                dateFormat: 'H:i',
                              }" />
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

<script setup>
    const route = useRoute('apps-employee-view-id')

    import {
        useStateStore
    } from '@store/state'

    const store = useStateStore()

    import {
        PerfectScrollbar
    } from 'vue3-perfect-scrollbar';

    const props = defineProps({
        isDrawerOpen: {
            type: Boolean,
            required: true,
        },
        item: {
            type: Object,
            default: () => null,
        },
        tiendas: {
            type: Array,
            required: true,
        },
        days: {
            type: Array,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
    })

    const emit = defineEmits([
        'update:isDrawerOpen',
        'itemData',
    ])

    const itemData = ref({
        id: null,
        app_tienda_id: null,
        nombre_tienda: "Almoradi",
        dia: 1,
        entrada: '00:00',
        salida: '00:00',
        entrada2: '00:00',
        salida2: '00:00',
        fechas: ""
    });

    const isFormValid = ref(false)

    const refForm = ref()

    const closeNavigationDrawer = () => {
        emit('update:isDrawerOpen', false)
    }

    const save = async () => {
        let url = props.type == 'usual' ? 'savehorario' : 'add-horario'

        try {
            const response = await $api(`/api/app/${url}/${route.params.id}`, {
                method: 'POST',
                body: itemData.value,
            })

            store.success('Horario guardado con éxito')
            emit('itemData', response)
            emit('update:isDrawerOpen', false)
        } catch (error) {
            console.log(error);
            store.error('Algo ha salido mal')
        }
    }

    const onSubmit = async () => {

        const {
            valid,
            errors
        } = await refForm.value?.validate();

        if (valid) {
            let item = await save();
        }
    }

    const resetItemData = () => {
        nextTick(() => {
            refForm.value?.reset()
            refForm.value?.resetValidation()
        })
        itemData.value = {
            id: null,
            app_tienda_id: null,
            nombre_tienda: "Almoradi",
            fechas: "",
            dia: 1,
            entrada: '00:00',
            salida: '00:00',
            entrada2: '00:00',
            salida2: '00:00'
        }
    }

    watch(() => {
        if (props.item != null) {
            itemData.value = JSON.parse(JSON.stringify(props.item))
        } else {
            resetItemData()
        }
    })

    const handleDrawerModelValueUpdate = val => {
        emit('update:isDrawerOpen', val)
    }
</script>