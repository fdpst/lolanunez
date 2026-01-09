<script setup>
import { useStateStore } from "@store/state";

const store = useStateStore();

import AddNewStoreDrawer from "@/views/apps/stores/list/AddNewStoreDrawer.vue";

// 👉 Store
const searchQuery = ref("");

// Data table options
const itemsPerPage = ref(10);
const page = ref(1);
const sortBy = ref();
const orderBy = ref();

const updateOptions = options => {
    page.value = options.page;
    sortBy.value = options.sortBy[0]?.key;
    orderBy.value = options.sortBy[0]?.order;
};

// Headers
const headers = [
    {
        title: "Nombre",
        key: "nombre"
    },
    {
        title: "Acciones",
        key: "actions",
        sortable: false
    }
];

const isConfirmDialogVisible = ref(false);
const isSnackbarVisible = ref(false);
const snackbarColor = ref("success");
const snackbarText = ref("");

const isAddNewStoreDrawerVisible = ref(false);
const selectedStore = ref(null);
const stores = ref([]);
const totalStores = ref(0);

const fetchStores = async () => {
    try {
        const response = await $api_app("/gettiendas", {
            method: "GET"
        });
        stores.value = response;
        totalStores.value = response.length;
    } catch (error) {
        console.error(error);
        snackbarColor.value = "error";
        snackbarText.value = "Error al cargar las localizaciones";
        isSnackbarVisible.value = true;
    }
};

const updateTable = response => {
    if (response.was_created) {
        stores.value.unshift(response.tienda);
        totalStores.value = stores.value.length;
    } else {
        let index = stores.value.findIndex(element => element.id == response.tienda.id);
        if (index > -1) {
            stores.value[index] = response.tienda;
        }
    }
};

const deleteStore = async () => {
    try {
        const response = await $api_app(
            `/deletetienda/${selectedStore.value.id}`,
            {
                method: "GET"
            }
        );

        let index = stores.value.findIndex(
            x => x.id == selectedStore.value.id
        );
        if (index > -1) {
            stores.value.splice(index, 1);
            totalStores.value = stores.value.length;
        }

        isConfirmDialogVisible.value = false;

        snackbarColor.value = "success";
        snackbarText.value = "Localización eliminada con éxito";
        isSnackbarVisible.value = true;
    } catch (error) {
        snackbarColor.value = "error";
        snackbarText.value = "Error al eliminar la localización";
        isSnackbarVisible.value = true;
    }
};

const openAddStore = () => {
    isAddNewStoreDrawerVisible.value = true;
    selectedStore.value = null;
};

const openEditStore = store => {
    isAddNewStoreDrawerVisible.value = true;
    selectedStore.value = store;
};

const openDeleteStore = item => {
    selectedStore.value = item;
    isConfirmDialogVisible.value = true;
};

const filteredStores = computed(() => {
    if (!searchQuery.value) {
        return stores.value;
    }
    return stores.value.filter(store =>
        store.nombre.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});

onMounted(fetchStores);

watch(isAddNewStoreDrawerVisible, async new_value => {
    if (!new_value) {
        selectedStore.value = {};
    }
});
</script>

<template>
    <section>
        <VCard title="Localizaciones" class="mb-6">
            <VCardText class="d-flex flex-wrap gap-4">
                <div class="app-user-search-filter d-flex align-center">
                    <VTextField
                        v-model="searchQuery"
                        placeholder="Buscar localización"
                        density="compact"
                        class="me-4"
                    />

                    <VBtn @click="openAddStore">
                        Agregar nueva localización
                    </VBtn>
                </div>
            </VCardText>

            <VDataTable
                :items="filteredStores"
                item-value="id"
                :headers="headers"
                class="text-no-wrap rounded-0"
            >
                <template #item.actions="{ item }">
                    <IconBtn size="small" @click="openDeleteStore(item)">
                        <VIcon icon="ri-delete-bin-7-line" />
                    </IconBtn>

                    <IconBtn size="small" @click="openEditStore(item)">
                        <VIcon icon="ri-edit-box-line" title="Editar" />
                    </IconBtn>
                </template>
            </VDataTable>
            <!-- SECTION -->
        </VCard>

        <AddNewStoreDrawer
            v-model:isDrawerOpen="isAddNewStoreDrawerVisible"
            :item="selectedStore"
            @refresh="updateTable"
        />

        <ConfirmDialog
            v-model:isDialogVisible="isConfirmDialogVisible"
            confirmationQuestion="¿Está seguro que desea eliminar la localización seleccionada?"
            @confirm="deleteStore"
        />

        <VSnackbar
            location="top end"
            v-model="isSnackbarVisible"
            :color="snackbarColor"
        >
            {{ snackbarText }}
        </VSnackbar>
    </section>
</template>
<style lang="scss">
.app-user-search-filter {
    inline-size: 24.0625rem;
}

.text-capitalize {
    text-transform: capitalize;
}

.user-list-name:not(:hover) {
    color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity));
}
</style>
