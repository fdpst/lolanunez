<script setup>
// Data table options
const itemsPerPage = ref(10);
const page = ref(1);
const sortBy = ref();
const orderBy = ref();
const facturas = ref([]);
const totalFacturas = ref(0);

const filtros = ref({
    search: "",
    cliente: { value: null },
    fecha: { start: "", end: "" }
});
const filtros_headers = [
    {
        title: "Fecha de creación",
        type: "date",
        active: true,
        model: "fecha"
    }
];

const isDeleteFacturaVisible = ref(false); // modal de confirmacion de editar factura
const isDeleteAnioFiscalVisible = ref(false); // modal de confirmacion de cambiar anio fiscal
const selectedFactura = ref(null); // factura seleccionada para eliminar
const loadings = ref([]); // loading de botones (0: modal de delete. 1: exportar. 2: cambiar anio fiscal)

// Headers
const headers = [
    {
        title: "Fecha",
        key: "fecha"
    },
    {
        title: "Cliente",
        key: "cliente.nombre"
    },
    {
        title: "Total",
        key: "total"
    }
];

// funciones de facturas
const fetchFacturas = async () => {
    try {
        const response = await $api("/get-facturas-informe", {
            method: "GET",
            params: {
                temp: 1,
                search: filtros.value.search,
                fecha_inicio: filtros.value.fecha.start,
                fecha_fin: filtros.value.fecha.end,
                itemsPerPage: itemsPerPage.value,
                page: page.value,
                sortBy: sortBy.value,
                orderBy: orderBy.value
            }
        });

        // Actualizar los datos de la tabla
        facturas.value = response.data.data;
        totalFacturas.value = response.data.total;

        facturas.value.push({
            cliente: { nombre: "Facturado:" },
            total: response.total
        });
        //importe.value = response.importe;
    } catch (error) {
        console.error(error);
    }
};

// funciones auxiliares
const updateOptions = options => {
    page.value = options.page;
    sortBy.value = options.sortBy[0]?.key;
    orderBy.value = options.sortBy[0]?.order;
};

const search = data => {
    filtros.value = data;
};

const openDeleteDialog = factura => {
    isDeleteFacturaVisible.value = true;
    selectedFactura.value = factura;
};

onMounted(fetchFacturas);

watch([itemsPerPage, sortBy, orderBy, page], () => {
    fetchFacturas();
});

watch(
    filtros,
    (newValue, oldValue) => {
        fetchFacturas();
    },
    { deep: true }
);
</script>

<template>
    <section>
        <VCard title="Filtrar" class="mb-6">
            <VCardText class="d-flex flex-wrap gap-4">
                <!-- 👉 componente personalizado de filtros -->
                <FilterComponent
                    :value="filtros"
                    :headers="filtros_headers"
                    @input="search"
                />
            </VCardText>

            <VDivider />

            <!-- SECTION datatable -->
            <VDataTableServer
                v-model:items-per-page="itemsPerPage"
                v-model:page="page"
                :items="facturas"
                item-value="id"
                :items-length="totalFacturas"
                :headers="headers"
                class="text-no-wrap rounded-0"
                @update:options="updateOptions"
            >
                <template #item.fecha="{ item }">
                    {{ formatDate(item.fecha) }}
                </template>
                <!-- Total -->
                <template #item.total="{ item }">
                    {{ parseFloat(item.total).toFixed(2) }}€
                </template>

                <!-- Actions -->
                <template #item.actions="{ item }">
                    <IconBtn size="small" @click="openDeleteDialog(item)">
                        <VIcon icon="ri-delete-bin-7-line" title="Eliminar" />
                    </IconBtn>

                    <IconBtn
                        size="small"
                        :to="{
                            name: 'apps-bills-view-id',
                            params: { id: item.id }
                        }"
                    >
                        <VIcon icon="ri-edit-box-line" title="Editar" />
                    </IconBtn>
                </template>

                <!-- Pagination -->
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
                                    totalFacturas
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
                                        Math.ceil(totalFacturas / itemsPerPage)
                                "
                                @click="
                                    page >=
                                    Math.ceil(totalFacturas / itemsPerPage)
                                        ? (page = Math.ceil(
                                              totalFacturas / itemsPerPage
                                          ))
                                        : page++
                                "
                            />
                        </div>
                    </div>
                </template>
            </VDataTableServer>
            <!-- SECTION -->

            <!-- <VCardText class="d-flex justify-end">
                <VCard border variant="text">
                    <VCardText> Total: {{ importe }}€ </VCardText>
                </VCard>
            </VCardText> -->
        </VCard>

        <!-- <VDialog v-model="isDeleteFacturaVisible" width="500">
            <VCard class="pa-sm-9 pa-3">
                <DialogCloseBtn
                    variant="text"
                    size="default"
                    @click="isDeleteFacturaVisible = false"
                />

                <VCardText class="pt-5">
                    <div class="text-center pb-6">
                        <h4 class="text-h4 mb-2">
                            Confirmación de eliminación
                        </h4>
                    </div>

                    <VForm @submit.prevent="deleteFactura">
                        <VRow>
                            <VCol cols="12">
                                <div
                                    class="text-center"
                                    style="font-size: 18px"
                                >
                                    ¿Estás seguro que deseas eliminar?
                                </div>
                            </VCol>

                            <VCol
                                cols="12"
                                class="d-flex flex-wrap justify-center gap-4"
                            >
                                <VBtn type="submit" :loading="loadings[0]">
                                    Aceptar
                                </VBtn>

                                <VBtn
                                    color="secondary"
                                    variant="outlined"
                                    @click="isDeleteFacturaVisible = false"
                                >
                                    Cancelar
                                </VBtn>
                            </VCol>
                        </VRow>
                    </VForm>
                </VCardText>
            </VCard>
        </VDialog> -->

        <ConfirmDialog
            v-model:isDialogVisible="isDeleteFacturaVisible"
            confirmationQuestion="¿Está seguro que desea eliminar la factura seleccionada?"
            @confirm="deleteFactura"
        />

        <VDialog v-model="isDeleteAnioFiscalVisible" width="500">
            <VCard class="pa-sm-9 pa-3">
                <!-- 👉 dialog close btn -->
                <DialogCloseBtn
                    variant="text"
                    size="default"
                    @click="isDeleteAnioFiscalVisible = false"
                />

                <VCardText class="pt-5">
                    <div class="text-center pb-6">
                        <h4 class="text-h4 mb-2">
                            Confirmación de cambio de año fiscal
                        </h4>
                    </div>

                    <!-- 👉 Form -->
                    <VForm @submit.prevent="cambiarAnioModal">
                        <VRow>
                            <!-- 👉 First Name -->
                            <VCol cols="12">
                                <div
                                    class="text-center"
                                    style="font-size: 18px"
                                >
                                    ¿Estás seguro que deseas cambiar el año
                                    fiscal?
                                </div>
                            </VCol>

                            <!-- 👉 Submit and Cancel -->
                            <VCol
                                cols="12"
                                class="d-flex flex-wrap justify-center gap-4"
                            >
                                <VBtn type="submit" :loading="loadings[2]">
                                    Aceptar
                                </VBtn>

                                <VBtn
                                    color="secondary"
                                    variant="outlined"
                                    @click="isDeleteAnioFiscalVisible = false"
                                >
                                    Cancelar
                                </VBtn>
                            </VCol>
                        </VRow>
                    </VForm>
                </VCardText>
            </VCard>
        </VDialog>
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
