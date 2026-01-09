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
                                <VTextField v-model="itemData.nombre" :rules="[requiredValidator]" label="Nombre" placeholder="" :error-messages="errors.nombre ? errors.nombre[0] : '' " />
                            </VCol>

                            <VCol cols="12">
                                <VTextField v-model="itemData.email" :rules="[requiredValidator, emailValidator]" label="Email" placeholder="" :error-messages="errors.email ? errors.email[0] : '' " />
                            </VCol>

                            <VCol cols="12">
                                <VTextField v-model="itemData.telefono" :rules="[requiredValidator]" label="Teléfono" placeholder="" :error-messages="errors.telefono ? errors.telefono[0] : '' " />
                            </VCol>

                            <VCol cols="12">
                                <AppDateTimePicker v-model="itemData.lista_vacaciones" label="Vacaciones" placeholder="Selecciona una o más fechas" :config="{mode: 'multiple', dateFormat: 'Y-m-d'}" />
                            </VCol>

                            <VCol cols="12">
                                <p class="ml-2">Color del empleado</p>
                                <VColorPicker v-model="itemData.color" mode="hex" :modes="['hex']" @update:model-value="setPrimaryColor({ main: customPrimaryColor, darken: customPrimaryColor })" />
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
    import {
        useStateStore
    } from '@store/state'

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
    })

    const store = useStateStore()

    const emit = defineEmits([
        'update:isDrawerOpen',
        'itemData',
    ])

    const errors = ref({})

    const itemData = ref({
        id: null,
        tipo_id: 1,
        nombre: null,
        email: null,
        telefono: null,
        color: null,
        tipo_libre: 'V',
        lista_vacaciones: [],
        lista_libres: []
    });

    const isFormValid = ref(false);
    const refForm = ref();
    const password = ref();

    const closeNavigationDrawer = () => {
        errors.value = {}
        emit('update:isDrawerOpen', false)
    }

    const save = async () => {
        try {
            errors.value = {}

            const response = await $api('/api/app/saveempleado', {
                method: 'POST',
                body: itemData.value,
            })
            console.log(response);
            store.success('Empleado guardado con éxito')
            emit('itemData', response)
            emit('update:isDrawerOpen', false)
        } catch (error) {
            store.error('Algo ha salido mal')
            if (error.status == 422) {
                errors.value = error.response._data.errors
            }
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
            tipo_id: 1,
            nombre: null,
            email: null,
            telefono: null,
            color: null,
            tipo_libre: 'V',
            lista_vacaciones: null,
            lista_libres: null
        }
    }

    watch(() => {
        if (props.item?.id != null) {
            itemData.value = JSON.parse(JSON.stringify(props.item))
        } else {
            resetItemData()
        }
    })

    const handleDrawerModelValueUpdate = val => {
        emit('update:isDrawerOpen', val)
    }
</script>