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
                        Agregar nuevo usuario
                    </VBtn>
                </div>
            </VCardText>

            <VDataTableServer
                v-model:items-per-page="itemsPerPage"
                v-model:page="page"
                :items="users"
                item-value="id"
                :items-length="totalUsers"
                :headers="headers"
                class="text-no-wrap rounded-0"
                @update:options="updateOptions"
            >
                <template #item.role="{ item }">
                    {{ roles[item.role] }}
                </template>

                <template #item.actions="{ item }">
                    <IconBtn size="small" @click="openDeleteUser(item)">
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
                                    totalUsers
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
                                    page >= Math.ceil(totalUsers / itemsPerPage)
                                "
                                @click="
                                    page >= Math.ceil(totalUsers / itemsPerPage)
                                        ? (page = Math.ceil(
                                              totalUsers / itemsPerPage
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

        <AddNewUserDrawer
            v-model:isDrawerOpen="isAddNewUserDrawerVisible"
            :user="selectedUser"
            @user-data="updateTable"
        />

        <DeleteDialog
            v-model:isDialogVisible="isDeleteDialogVisible"
            :id="selectedUser?.id"
            @submit="deleteUser"
        />
    </section>
</template>

<script setup>
import { useStateStore } from "@store/state";

const store = useStateStore();

import AddNewUserDrawer from "@/views/apps/user/list/AddNewUserDrawer.vue";
import DeleteDialog from "../../../../components/dialogs/DeleteDialog.vue";

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
        title: "Usuario",
        key: "name"
    },
    {
        title: "Email",
        key: "email"
    },
    {
        title: "Perfil",
        key: "role"
    },
    {
        title: "Actions",
        key: "actions",
        sortable: false
    }
];

const roles = {
    1: "administrador",
    2: "usuario",
    3: "turno"
};

const isAddNewUserDrawerVisible = ref(false);
const selectedUser = ref(null);
const users = ref([]);
const totalUsers = ref(0);

const isDeleteDialogVisible = ref(false);

const fetchUsers = async () => {
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
        console.log(response);
        users.value = response.data;
        totalUsers.value = response.total;
    } catch (error) {
        console.error(error);
    }
};

const updateTable = user => {
    let index = users.value.findIndex(element => element.id == user.id);

    if (index > -1) {
        return (users.value[index] = user);
    }
    users.value.unshift(user);
};

const deleteUser = async id => {
    await $api(`/api/delete-user/${id}`, {
        method: "GET"
    });

    let user_index = users.value.findIndex(x => x.id == id);
    if (user_index > -1) {
        users.value.splice(user_index, 1);
    }
};

const openAddUser = () => {
    isAddNewUserDrawerVisible.value = true;
    selectedUser.value = null;
};

const openEditUser = user => {
    isAddNewUserDrawerVisible.value = true;
    selectedUser.value = user;
};

const openDeleteUser = user => {
    selectedUser.value = user;
    isDeleteDialogVisible.value = true;
};

onMounted(fetchUsers);

watch([itemsPerPage, sortBy, orderBy, page, searchQuery], () => {
    fetchUsers();
});

watch(isAddNewUserDrawerVisible, async new_value => {
    if (!new_value) {
        selectedUser.value = {};
    }
});
</script>

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
