<template>
    <section>
        <VCard title="Logs de Acceso" class="mb-6">
            <VCardText>
                <VDataTableServer
                    v-model:items-per-page="itemsPerPage"
                    v-model:page="page"
                    :items="logs"
                    item-value="id"
                    :items-length="totalLogs"
                    :headers="headers"
                    class="text-no-wrap rounded-0"
                    @update:options="updateOptions"
                    :loading="loading"
                >
                    <template #item.user_name="{ item }">
                        <span class="text-base">{{ item.user_name }}</span>
                    </template>

                    <template #item.access_date="{ item }">
                        <span class="text-base">{{ formatDate(item.access_date) }}</span>
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
                                        totalLogs
                                    )
                                }}
                            </p>

                            <div class="d-flex gap-x-2 align-center me-2">
                                <VBtn
                                    icon
                                    variant="text"
                                    density="compact"
                                    :disabled="page === 1"
                                    @click="page = page - 1"
                                >
                                    <VIcon icon="ri-arrow-left-s-line" />
                                </VBtn>

                                <VBtn
                                    icon
                                    variant="text"
                                    density="compact"
                                    :disabled="page >= Math.ceil(totalLogs / itemsPerPage)"
                                    @click="page = page + 1"
                                >
                                    <VIcon icon="ri-arrow-right-s-line" />
                                </VBtn>
                            </div>
                        </div>
                    </template>
                </VDataTableServer>
            </VCardText>
        </VCard>
    </section>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { $api } from "@core/utils";
import { paginationMeta } from "@core/utils/helpers";
import moment from "moment";

// Data table options
const itemsPerPage = ref(10);
const page = ref(1);
const sortBy = ref();
const orderBy = ref();
const loading = ref(false);

const updateOptions = options => {
    page.value = options.page;
    sortBy.value = options.sortBy[0]?.key;
    orderBy.value = options.sortBy[0]?.order;
};

// Headers
const headers = [
    {
        title: "Usuario",
        key: "user_name",
        sortable: true
    },
    {
        title: "Fecha de Acceso",
        key: "access_date",
        sortable: true
    }
];

const logs = ref([]);
const totalLogs = ref(0);

const formatDate = (date) => {
    if (!date) return '';
    return moment(date).format('DD/MM/YYYY');
};

const fetchLogs = async () => {
    loading.value = true;
    try {
        const response = await $api("/api/get-logs", {
            method: "GET",
            params: {
                per_page: itemsPerPage.value,
                page: page.value,
                sortBy: sortBy.value,
                orderBy: orderBy.value
            }
        });
        logs.value = response;
        totalLogs.value = response.length;
    } catch (error) {
        console.error("Error obteniendo logs:", error);
    } finally {
        loading.value = false;
    }
};

onMounted(fetchLogs);

watch([itemsPerPage, sortBy, orderBy, page], () => {
    fetchLogs();
});
</script>

<style lang="scss">
.text-capitalize {
    text-transform: capitalize;
}
</style>
