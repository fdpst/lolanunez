<template id="">
    <VCard title="" class="mb-6">
        <VCardText class="">
            <VRow>
                <VCol cols="12" md="2">
                    <VBtn class="mt-1" @click="isDrawerOpen = true">
                        Agregar fechas
                    </VBtn>
                </VCol>
            </VRow>
        </VCardText>

        <VDataTableServer
            :items="items"
            item-value="id"
            :headers="headers"
            class="text-no-wrap rounded-0"
        >
            <template #item.actions="{ item }">
                <IconBtn @click="openDeleteItem(item)" size="small">
                    <VIcon icon="ri-delete-bin-7-line" />
                </IconBtn>
                <IconBtn @click="editItem(item)" size="small">
                    <VIcon icon="ri-edit-box-line" title="Editar" />
                </IconBtn>
            </template>

            <template #bottom> </template>
        </VDataTableServer>

        <ScheduleDrawer
            :type="'s'"
            :days="days"
            :tiendas="tiendas"
            v-model:isDrawerOpen="isDrawerOpen"
            :item="selectedItem"
            @item-data="updateTable"
        />

        <DeleteDialog
            v-model:isDialogVisible="isDeleteDialogVisible"
            :id="selectedItem?.id"
            @submit="deleteHorario"
        />
    </VCard>
</template>

<script setup>
import ScheduleDrawer from "@/views/apps/employee/view/ScheduleDrawer.vue";

import DeleteDialog from "../../../../components/dialogs/DeleteDialog.vue";

const route = useRoute("apps-employee-view-id");

import { useStateStore } from "@store/state";

const store = useStateStore();

const isDrawerOpen = ref(false);

const emit = defineEmits(["fetchEmployee"]);

const props = defineProps({
    fechas: {
        type: Array,
        required: true
    },
    tiendas: {
        type: Array,
        required: true
    }
});

const headers = [
    {
        title: "Id",
        key: "id"
    },
    {
        title: "Tienda",
        key: "nombre_tienda"
    },
    {
        title: "Fecha",
        key: "fecha"
    },
    {
        title: "Entrada",
        key: "entrada"
    },
    {
        title: "Salida",
        key: "salida"
    },
    {
        title: "Acciones",
        key: "actions",
        sortable: false
    }
];

const isDeleteDialogVisible = ref(false);

const selectedItem = ref({});

const items = ref([]);

const item = ref({
    id: null,
    app_tienda_id: null,
    nombre_tienda: "Almoradi",
    dia: 1,
    fecha: "",
    entrada: "00:00",
    salida: "00:00",
    entrada2: "00:00",
    salida2: "00:00"
});

const openDeleteItem = item => {
    selectedItem.value = item;
    isDeleteDialogVisible.value = true;
};

const editItem = db_item => {
    selectedItem.value = db_item;
    isDrawerOpen.value = true;
};

const deleteHorario = async id => {
    try {
        const response = await $api(`/api/app/deletehorario/${id}`, {
            method: "POST",
            body: item.value
        });
        store.success("Horario eliminado con éxito");
        let index = items.value.findIndex(x => x.id == id);
        items.value.splice(index, 1);
    } catch (error) {
        store.error("Algo ha salido mal");
    }
};

const updateTable = item => {
    emit("fetchEmployee");
};

items.value = JSON.parse(JSON.stringify(props.fechas));

watch(
    () => props.fechas,
    n => {
        items.value = JSON.parse(JSON.stringify(n));
    }
);

watch(isDrawerOpen, async new_value => {
    if (!new_value) {
        selectedItem.value = {};
    }
});
</script>
