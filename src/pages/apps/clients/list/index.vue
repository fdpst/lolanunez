<script setup>
import { useStateStore } from "@store/state";

const store = useStateStore();

import AddNewClientDrawer from "@/views/apps/clients/list/AddNewClientDrawer.vue";
import ConfirmDialog from "@/components/dialogs/ConfirmDialog.vue";

const isSnackbarVisible = ref(false);
const snackbarColor = ref("success");
const snackbarText = ref("");

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
        title: "Apellidos",
        key: "apellidos"
    },
    {
        title: "DNI",
        key: "dni"
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

const roles = {
    1: "administrador",
    2: "usuario",
    3: "turno"
};

const isAddNewClientDrawerVisible = ref(false);
const selectedClient = ref(null);
const clients = ref([]);
const totalClients = ref(0);

const isConfirmDialogVisible = ref(false);

const fetchClients = async () => {
    try {
        const response = await $api_app("/getusuarios", {
            method: "GET",
            params: {
                search: searchQuery.value,
                itemsPerPage: itemsPerPage.value,
                page: page.value,
                sortBy: sortBy.value,
                orderBy: orderBy.value
            }
        });

        clients.value = response.data;
        totalClients.value = response.total;
    } catch (error) {
        console.error(error);
    }
};

const updateTable = user => {
    let index = clients.value.findIndex(element => element.id == user.id);

    if (index > -1) {
        return (clients.value[index] = user);
    }
    clients.value.unshift(user);
};

const deleteClient = async () => {
    try {
        const response = await $api_app(
            `/deleteusuario/${selectedClient.value.id}`,
            {
                method: "GET"
            }
        );

        isConfirmDialogVisible.value = false;

        let user_index = clients.value.findIndex(
            x => x.id == selectedClient.value.id
        );

        if (user_index > -1) {
            clients.value.splice(user_index, 1);
        }

        snackbarColor.value = "success";
        snackbarText.value = response.message;
        isSnackbarVisible.value = true;
    } catch (error) {
        snackbarColor.value = "error";
        snackbarText.value = error.response._data.message;
        isSnackbarVisible.value = true;
    }
};

const openAddClient = () => {
    isAddNewClientDrawerVisible.value = true;
    selectedClient.value = null;
};

const openEditClient = user => {
    isAddNewClientDrawerVisible.value = true;
    selectedClient.value = user;
};

const openDeleteClient = user => {
    selectedClient.value = user;
    isConfirmDialogVisible.value = true;
};

onMounted(fetchClients);

watch([itemsPerPage, sortBy, orderBy, page, searchQuery], () => {
    fetchClients();
});

watch(isAddNewClientDrawerVisible, async new_value => {
    if (!new_value) {
        selectedClient.value = {};
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

                    <VBtn @click="openAddClient">
                        Agregar nuevo cliente
                    </VBtn>
                </div>
            </VCardText>

            <VDataTableServer
                v-model:items-per-page="itemsPerPage"
                v-model:page="page"
                :items="clients"
                item-value="id"
                :items-length="totalClients"
                :headers="headers"
                class="text-no-wrap rounded-0"
                @update:options="updateOptions"
            >
                <template #item.role="{ item }">
                    {{ roles[item.role] }}
                </template>

                <template #item.actions="{ item }">
                    <IconBtn size="small" @click="openDeleteClient(item)">
                        <VIcon icon="ri-delete-bin-7-line" />
                    </IconBtn>

                    <IconBtn size="small" @click="openEditClient(item)">
                        <VIcon icon="ri-edit-box-line" title="Editar" />
                    </IconBtn>
                    <IconBtn
                        size="small"
                        :to="{
                            name: 'apps-clients-view-id',
                            params: { id: item.id }
                        }"
                    >
                        <VIcon icon="ri-eye-line" title="Detalles" />
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
                                    totalClients
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
                                    page >=
                                        Math.ceil(totalClients / itemsPerPage)
                                "
                                @click="
                                    page >=
                                    Math.ceil(totalClients / itemsPerPage)
                                        ? (page = Math.ceil(
                                              totalClients / itemsPerPage
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

        <AddNewClientDrawer
            v-model:isDrawerOpen="isAddNewClientDrawerVisible"
            :item="selectedClient"
            @refresh="fetchClients"
        />

        <ConfirmDialog
            v-model:isDialogVisible="isConfirmDialogVisible"
            confirmationQuestion="¿Está seguro que desea eliminar el cliente seleccionado?"
            note="Se eliminaran todas las citas asociadas"
            @confirm="deleteClient"
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
