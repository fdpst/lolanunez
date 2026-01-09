<script setup>
import { useStateStore } from "@store/state";

const store = useStateStore();

import AddNewServiceDrawer from "@/views/apps/services/list/AddNewServiceDrawer.vue";

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
        title: "Duración",
        key: "duracion",
        sortable: false
    },
    {
        title: "Precio",
        key: "precio",
        sortable: false
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

const isAddNewServiceDrawerVisible = ref(false);
const selectedService = ref(null);
const services = ref([]);
const totalServices = ref(0);

const fetchServices = async () => {
    try {
        const response = await $api_app("/getservicios", {
            method: "GET",
            params: {
                search: searchQuery.value,
                itemsPerPage: itemsPerPage.value,
                page: page.value,
                sortBy: sortBy.value,
                orderBy: orderBy.value
            }
        });
        console.log(response);
        services.value = response.data;
        totalServices.value = response.total;
    } catch (error) {
        console.error(error);
    }
};

const updateTable = user => {
    let index = services.value.findIndex(element => element.id == user.id);

    if (index > -1) {
        return (services.value[index] = user);
    }
    services.value.unshift(user);
};

const deleteService = async () => {
    try {
        const response = await $api_app(
            `/deleteservicio/${selectedService.value.id}`,
            {
                method: "GET"
            }
        );

        let index = services.value.findIndex(
            x => x.id == selectedService.value.id
        );
        if (index > -1) {
            services.value.splice(index, 1);
        }

        isConfirmDialogVisible.value = false;

        snackbarColor.value = "success";
        snackbarText.value = response.message;
        isSnackbarVisible.value = true;
    } catch (error) {
        snackbarColor.value = "error";
        snackbarText.value = error.response._data.message;
        isSnackbarVisible.value = true;
    }
};

const openAddUser = () => {
    isAddNewServiceDrawerVisible.value = true;
    selectedService.value = null;
};

const openEditUser = user => {
    isAddNewServiceDrawerVisible.value = true;
    selectedService.value = user;
};

const openDeleteService = item => {
    selectedService.value = item;
    isConfirmDialogVisible.value = true;
};

onMounted(fetchServices);

watch([itemsPerPage, sortBy, orderBy, page, searchQuery], () => {
    fetchServices();
});

watch(isAddNewServiceDrawerVisible, async new_value => {
    if (!new_value) {
        selectedService.value = {};
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

                    <VBtn @click="openAddUser">
                        Agregar nuevo servicio
                    </VBtn>
                </div>
            </VCardText>

            <VDataTableServer
                v-model:items-per-page="itemsPerPage"
                v-model:page="page"
                :items="services"
                item-value="id"
                :items-length="totalServices"
                :headers="headers"
                class="text-no-wrap rounded-0"
                @update:options="updateOptions"
            >
                <template #item.actions="{ item }">
                    <IconBtn size="small" @click="openDeleteService(item)">
                        <VIcon icon="ri-delete-bin-7-line" />
                    </IconBtn>

                    <IconBtn size="small" @click="openEditUser(item)">
                        <VIcon icon="ri-edit-box-line" title="Editar" />
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
                                    totalServices
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
                                        Math.ceil(totalServices / itemsPerPage)
                                "
                                @click="
                                    page >=
                                    Math.ceil(totalServices / itemsPerPage)
                                        ? (page = Math.ceil(
                                              totalServices / itemsPerPage
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

        <AddNewServiceDrawer
            v-model:isDrawerOpen="isAddNewServiceDrawerVisible"
            :item="selectedService"
            @refresh="fetchServices"
        />

        <ConfirmDialog
            v-model:isDialogVisible="isConfirmDialogVisible"
            confirmationQuestion="¿Está seguro que desea eliminar el servicio seleccionado?"
            @confirm="deleteService"
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
