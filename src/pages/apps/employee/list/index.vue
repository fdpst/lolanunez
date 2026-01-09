<script setup>
import { useStateStore } from "@store/state";

const store = useStateStore();

import EmployeeDrawer from "@/views/apps/employee/list/EmployeeDrawer.vue";
import DeleteDialog from "../../../../components/dialogs/DeleteDialog.vue";

const searchQuery = ref("");

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
        title: "Email",
        key: "email"
    },
    {
        title: "Teléfono",
        key: "telefono"
    },
    {
        title: "Acciones",
        key: "actions",
        sortable: false
    }
];

const isDrawerOpen = ref(false);
const selectedItem = ref(null);
const items = ref([]);
const totalItems = ref(0);

const isDeleteDialogVisible = ref(false);
const isSnackbarVisible = ref(false);
const snackbarColor = ref("success");
const snackbarText = ref("");

const fetchEmployees = async () => {
    try {
        const response = await $api_app("/getempleados", {
            method: "GET",
            params: {
                search: searchQuery.value,
                itemsPerPage: itemsPerPage.value,
                page: page.value,
                sortBy: sortBy.value,
                orderBy: orderBy.value
            }
        });
        items.value = response.data;
        totalItems.value = response.total;
    } catch (error) {
        console.error(error);
    }
};

const updateTable = item => {
    console.log(item);
    let index = items.value.findIndex(element => element.id == item.id);

    if (index > -1) {
        return (items.value[index] = item);
    }
    items.value.unshift(item);
};

const deleteEmployee = async () => {
    try {
        const response = await $api_app(
            `/deleteempleado/${selectedItem.value.id}`,
            {
                method: "GET"
            }
        );

        let index = items.value.findIndex(x => x.id == selectedItem.value.id);
        if (index > -1) {
            items.value.splice(index, 1);
        }

        isDeleteDialogVisible.value = false;

        snackbarColor.value = "success";
        snackbarText.value = response.message;
        isSnackbarVisible.value = true;
    } catch (error) {
        snackbarColor.value = "error";
        snackbarText.value = error.response._data.message;
        isSnackbarVisible.value = true;
    }
};

const openDrawer = item => {
    isDrawerOpen.value = true;
    selectedItem.value = item;
};

const openDeleteItem = item => {
    selectedItem.value = item;
    isDeleteDialogVisible.value = true;
};

onMounted(fetchEmployees);

watch([itemsPerPage, sortBy, orderBy, page, searchQuery], () => {
    fetchEmployees();
});

watch(isDrawerOpen, async new_value => {
    if (!new_value) {
        selectedItem.value = {};
    }
});
</script>

<template>
    <section>
        <VCard title="Filtros" class="mb-6">
            <VCardText class="d-flex flex-wrap gap-4">
                <div class="app-user-search-filter d-flex align-center">
                    <VTextField
                        v-model="searchQuery"
                        placeholder="Buscar"
                        density="compact"
                        class="me-4"
                    />

                    <VBtn @click="openDrawer">
                        Agregar nuevo empleado
                    </VBtn>
                </div>
            </VCardText>

            <VDataTableServer
                v-model:items-per-page="itemsPerPage"
                v-model:page="page"
                :items="items"
                item-value="id"
                :items-length="totalItems"
                :headers="headers"
                class="text-no-wrap rounded-0"
                @update:options="updateOptions"
            >
                <template #item.actions="{ item }">
                    <IconBtn size="small" @click="openDeleteItem(item)">
                        <VIcon icon="ri-delete-bin-7-line" />
                    </IconBtn>

                    <IconBtn size="small" @click="openDrawer(item)">
                        <VIcon icon="ri-edit-box-line" title="Editar" />
                    </IconBtn>

                    <IconBtn
                        size="small"
                        :to="{
                            name: 'apps-employee-view-id',
                            params: { id: item.id }
                        }"
                    >
                        <VIcon icon="ri-eye-line" />
                    </IconBtn>
                </template>

                <template #bottom>
                    <VDivider />

                    <div class="d-flex justify-end flex-wrap gap-x-6 px-2 py-1">
                        <div
                            class="d-flex align-center gap-x-2 text-medium-emphasis text-base"
                        >
                            Filas por página:
                            <VSelect
                                v-model="itemsPerPage"
                                class="per-page-select"
                                variant="plain"
                                :items="[10, 20, 25, 50, 100]"
                            />
                        </div>

                        <p
                            class="d-flex align-center text-base text-high-emphasis me-2 mb-0"
                        >
                            {{
                                paginationMeta(
                                    { page, itemsPerPage },
                                    totalItems
                                )
                            }}
                        </p>

                        <div class="d-flex gap-x-2 align-center me-2">
                            <VBtn
                                class="flip-in-rtl"
                                icon="ri-arrow-left-s-line"
                                variant="text"
                                density="comfortable"
                                color="high-emphasis"
                                :disabled="page <= 1"
                                @click="page <= 1 ? (page = 1) : page--"
                            />

                            <VBtn
                                class="flip-in-rtl"
                                icon="ri-arrow-right-s-line"
                                density="comfortable"
                                variant="text"
                                color="high-emphasis"
                                :disabled="
                                    page >= Math.ceil(totalItems / itemsPerPage)
                                "
                                @click="
                                    page >= Math.ceil(totalItems / itemsPerPage)
                                        ? (page = Math.ceil(
                                              totalItems / itemsPerPage
                                          ))
                                        : page++
                                "
                            />
                        </div>
                    </div>
                </template>
            </VDataTableServer>
            <!-- SECTION -->
        </VCard>

        <EmployeeDrawer
            v-model:isDrawerOpen="isDrawerOpen"
            :item="selectedItem"
            @item-data="updateTable"
        />

        <ConfirmDialog
            v-model:isDialogVisible="isDeleteDialogVisible"
            confirmationQuestion="¿Está seguro que desea eliminar el empleado seleccionado?"
            @confirm="deleteEmployee"
        />

        <VSnackbar
            location="top end"
            v-model="isSnackbarVisible"
            :color="snackbarColor"
        >
            {{ snackbarText }}
        </VSnackbar>

        <!-- <DeleteDialog
            v-model:isDialogVisible="isDeleteDialogVisible"
            :id="selectedItem?.id"
            @submit="deleteEmployee"
        /> -->
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
