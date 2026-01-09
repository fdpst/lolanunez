<template>
    <VNavigationDrawer temporary :width="400" location="end" class="scrollable-content" :model-value="props.isDrawerOpen" @update:model-value="handleDrawerModelValueUpdate">
        <!-- 👉 Title -->
        <AppDrawerHeaderSection :title="props.user != null ? 'Editar Usuario' : 'Agregar Usuario'" @cancel="closeNavigationDrawer" />

        <VDivider />

        <PerfectScrollbar :options="{ wheelPropagation: false }">
            <VCard flat>
                <VCardText>
                    <!-- 👉 Form -->
                    <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
                        <VRow>
                            <!-- 👉 Full name -->
                            <VCol cols="12">
                                <VTextField v-model="userData.name" :rules="[requiredValidator]" label="Nombre" placeholder="John Doe" />
                            </VCol>

                            <!-- 👉 Email -->
                            <VCol cols="12">
                                <VTextField v-model="userData.email" :rules="[requiredValidator, emailValidator]" label="Email" placeholder="johndoe@email.com" :error-messages="errors.email ? errors.email[0] : '' " />
                            </VCol>

                            <!-- 👉 Role -->
                            <VCol cols="12">
                                <VSelect v-model="userData.role" label="Perfil" placeholder="Selecciona una perfil" :rules="[requiredValidator]" :items="roles" item-value="id" item-title="label" />
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
        user: {
            type: Object,
            default: () => null,
        },
    })

    const store = useStateStore()

    const emit = defineEmits([
        'update:isDrawerOpen',
        'userData',
    ])

    const show1 = ref(false)
    const show2 = ref(false)

    const errors = ref({})

    const userData = ref({
        id: null,
        name: null,
        email: null,
        role: null,
    });

    const roles = ref([{
            id: 1,
            label: 'Administrador'
        },
        {
            id: 2,
            label: 'Usuario'
        },
        {
            id: 3,
            label: 'Turno'
        }
    ])

    const isFormValid = ref(false);
    const refForm = ref();
    const password = ref();

    const closeNavigationDrawer = () => {
        errors.value = {}
        emit('update:isDrawerOpen', false)
    }

    const saveUser = async () => {
        try {
            errors.value = {}

            const response = await $api('/api/save-user', {
                method: 'POST',
                body: userData.value,
            })
            store.success('Usuario guardado con éxito')
            emit('userData', response)
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
            let user = await saveUser();
        }
    }

    const resetUserData = () => {
        nextTick(() => {
            refForm.value?.reset()
            refForm.value?.resetValidation()
        })
        userData.value = {
            id: null,
            name: null,
            email: null,
            role: null
        }
    }

    watch(() => {
        if (props.user != null) {
            userData.value = JSON.parse(JSON.stringify(props.user))
        } else {
            resetUserData()
        }
    })

    const handleDrawerModelValueUpdate = val => {
        emit('update:isDrawerOpen', val)
    }
</script>