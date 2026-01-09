<template>
    <VDialog v-model="dialog" width="500">

        <VCard>
            <VCardText class="pt-4">
                <h3 class="text-center">
                    Para eliminar la cita debe indicar un motivo
                </h3>

                <VCol justify-center cols="12" class="d-flex py-6 justify-center">
                    <VBtn v-for="motivo in motivos" @click="setMotivo(motivo.id)" :color="motivo_selected == motivo.id ? 'success': 'grey darken-2'" class="mx-2" small>
                        {{motivo.label}}
                    </VBtn>
                </VCol>

            </VCardText>

            <VCardActions>
                <VRow align="center" justify="center">
                    <VBtn @click="deleteCita" small v-if="motivo_selected" md="3" rounded depressed color="danger" class="white--text red mt-0 ml-4 mb-4">Eliminar</VBtn>
                    <VBtn @click="dialog = false" small md="3" rounded depressed color="success" class="white--text mt-0 mx-2 mb-4">Cancelar</VBtn>
                </VRow>
            </VCardActions>
        </VCard>

    </VDialog>
</template>
<script setup>
    import {
        useStateStore
    } from "@store/state";

    const store = useStateStore();
    import {
        EventBus
    } from "@/utils/eventbus"

    import {
        ref
    } from "vue"

    const dialog = ref(false)

    const motivos = [{
        id: 1,
        label: 'No asiste'
    }, {
        id: 2,
        label: 'Cancela cliente'
    }, {
        id: 3,
        label: 'Erronea'
    }]

    const motivo_selected = ref(null)

    const evento_id = ref(null)

    const setMotivo = motivo => {
        motivo_selected.value = motivo
    }

    EventBus.on('open_delete_dialog', (id) => {
        dialog.value = true
        evento_id.value = id
    })

    const deleteCita = async () => {
        try {
            const response = await $api_app(`/eliminarcita/${evento_id.value}/${motivo_selected.value}`, {
                method: "GET",
            })
            store.success('Cita eliminada')
            dialog.value = false
            EventBus.emit('close_appoiment_dialog')
        } catch (error) {
            console.log(error)
        }
    }
</script>