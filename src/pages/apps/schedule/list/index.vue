<script setup>
import AddNewScheduleDrawer from "@/views/apps/schedule/list/AddNewScheduleDrawer.vue";

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
        title: "Día",
        key: "dia"
    },
    {
        title: "Inicio",
        key: "start",
        sortable: false
    },
    {
        title: "Fin",
        key: "end",
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

const isAddNewScheduleDrawerVisible = ref(false);
const selectedSchedule = ref(null);
const schedules = ref([]);
const totalSchedule = ref(0);

const tiendas = ref([]);
const app_tienda_id = ref(null);

const diasSemana = {
    0: "Domingo",
    1: "Lunes",
    2: "Martes",
    3: "Miércoles",
    4: "Jueves",
    5: "Viernes",
    6: "Sábado"
};

const fetchStores = async () => {
    try {
        const response = await $api_app(`/gettiendas`, { method: "GET" });
        tiendas.value = response;

        if (tiendas.value.length > 0) {
            app_tienda_id.value = tiendas.value[0].id;
        }
    } catch (error) {
        console.error(error);
    }
};

const fetchSchedule = async () => {
    try {
        const response = await $api_app(
            `/get-horario-by-tienda/${app_tienda_id.value}`,
            {
                method: "GET",
                params: {
                    search: searchQuery.value,
                    itemsPerPage: itemsPerPage.value,
                    page: page.value,
                    sortBy: sortBy.value,
                    orderBy: orderBy.value
                }
            }
        );

        schedules.value = response.data;
        totalSchedule.value = response.total;
    } catch (error) {
        console.error(error);
    }
};

const deleteSchedule = async () => {
    try {
        const response = await $api_app(
            `/delete-horario-by-tienda/${selectedSchedule.value.id}`,
            {
                method: "GET"
            }
        );

        let index = schedules.value.findIndex(
            x => x.id == selectedSchedule.value.id
        );
        if (index > -1) {
            schedules.value.splice(index, 1);
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

const openAddSchedule = () => {
    isAddNewScheduleDrawerVisible.value = true;
    selectedSchedule.value = null;
};

const openEditSchedule = user => {
    isAddNewScheduleDrawerVisible.value = true;
    selectedSchedule.value = user;
};

const openDeleteSchedule = item => {
    selectedSchedule.value = item;
    isConfirmDialogVisible.value = true;
};

onMounted(fetchStores);

watch([itemsPerPage, sortBy, orderBy, page, app_tienda_id], () => {
    fetchSchedule();
});

watch(isAddNewScheduleDrawerVisible, async new_value => {
    if (!new_value) {
        selectedSchedule.value = {};
    }
});
</script>

<template>
    <section>
        <VCard title="Filtros" class="mb-6">
            <VCardText class="d-flex ">
                <div class="app-user-search-filter d-flex align-center">
                    <VSelect
                        v-model="app_tienda_id"
                        density="compact"
                        label="Tienda"
                        placeholder="Selecciona una una tienda"
                        :items="tiendas"
                        item-title="nombre"
                        item-value="id"
                        class="me-4"
                    />
                    <VBtn @click="openAddSchedule">
                        Agregar nuevo horario
                    </VBtn>
                </div>
            </VCardText>

            <VDataTableServer
                v-model:items-per-page="itemsPerPage"
                v-model:page="page"
                :items="schedules"
                item-value="id"
                :items-length="totalSchedule"
                :headers="headers"
                class="text-no-wrap rounded-0"
                @update:options="updateOptions"
            >
                <template #item.dia="{ item }">
                    {{ diasSemana[item.dia] }}
                </template>
                <template #item.actions="{ item }">
                    <IconBtn size="small" @click="openDeleteSchedule(item)">
                        <VIcon icon="ri-delete-bin-7-line" />
                    </IconBtn>

                    <IconBtn size="small" @click="openEditSchedule(item)">
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
                                    totalSchedule
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
                                        Math.ceil(totalSchedule / itemsPerPage)
                                "
                                @click="
                                    page >=
                                    Math.ceil(totalSchedule / itemsPerPage)
                                        ? (page = Math.ceil(
                                              totalSchedule / itemsPerPage
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

        <AddNewScheduleDrawer
            v-model:isDrawerOpen="isAddNewScheduleDrawerVisible"
            :item="selectedSchedule"
            :tienda_id="app_tienda_id"
            @refresh="fetchSchedule"
        />

        <ConfirmDialog
            v-model:isDialogVisible="isConfirmDialogVisible"
            confirmationQuestion="¿Está seguro que desea eliminar el horario seleccionado?"
            @confirm="deleteSchedule"
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
