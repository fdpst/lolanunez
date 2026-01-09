<template>
  <section>
    <VCard title="Filtros" class="mb-6">
      <VCardText class="d-flex flex-wrap gap-4">
        <div class="app-user-search-filter d-flex align-center">
          <!-- 👉 Search  -->
          <VTextField v-model="searchQuery" placeholder="Buscar" density="compact" class="me-4" />
          <!-- 👉 Add user button -->
          <VBtn @click="openAddCompany" v-if="userData.id_role == 1">
            Agregar nueva empresa
          </VBtn>
        </div>
      </VCardText>

      <!-- SECTION datatable -->
      <VDataTableServer v-model:items-per-page="itemsPerPage" v-model:page="page" :items="empresas" item-value="id" :items-length="totalEmpresas" :headers="headers" class="text-no-wrap rounded-0" @update:options="updateOptions">
        <!-- Actions -->
        <template #item.actions="{ item }">
          <IconBtn v-if="userData.id_role == 1" size="small" @click="openDeleteEmpresa(item)">
            <VIcon icon="ri-delete-bin-7-line" />
          </IconBtn>

          <IconBtn size="small" @click="openEditEmpresa(item)">
            <VIcon icon="ri-edit-box-line" title="Editar" />
          </IconBtn>

          <IconBtn size="small" :to="{ name: 'apps-company-view-id', params: { id: item.id } }">
            <VIcon icon="ri-eye-line" />
          </IconBtn>
        </template>

        <!-- Pagination -->
        <template #bottom>
          <VDivider />

          <div class="d-flex justify-end flex-wrap gap-x-6 px-2 py-1">
            <div class="d-flex align-center gap-x-2 text-medium-emphasis text-base">
              Filas por página:
              <VSelect v-model="itemsPerPage" class="per-page-select" variant="plain" :items="[10, 20, 25, 50, 100]" />
            </div>

            <p class="d-flex align-center text-base text-high-emphasis me-2 mb-0">
              {{ paginationMeta({ page, itemsPerPage }, totalEmpresas) }}
            </p>

            <div class="d-flex gap-x-2 align-center me-2">
              <VBtn class="flip-in-rtl" icon="ri-arrow-left-s-line" variant="text" density="comfortable" color="high-emphasis" :disabled="page <= 1" @click="page <= 1 ? page = 1 : page--" />

              <VBtn class="flip-in-rtl" icon="ri-arrow-right-s-line" density="comfortable" variant="text" color="high-emphasis" :disabled="page >= Math.ceil(totalEmpresas / itemsPerPage)"
                @click="page >= Math.ceil(totalEmpresas / itemsPerPage) ? page = Math.ceil(totalEmpresas / itemsPerPage) : page++ " />
            </div>
          </div>
        </template>
      </VDataTableServer>
      <!-- SECTION -->
    </VCard>
    <!-- 👉 Agregar nueva empresa -->
    <AddNewCompanyDrawer v-model:isDrawerOpen="isAddNewCompanyDrawerVisible" @company-data="addNewEmpresa" :provincias="provincias" :company="selecetedEmpresa" :tipos="tipos" />

    <!-- Eliminar empresa -->
    <DeleteDialog v-model:isDialogVisible="isDeleteDialogVisible" :id="selecetedEmpresa?.id" @submit="deleteEmpresa" />
  </section>
</template>

<script setup>
  import {
    useCookie
  } from '@/@core/composable/useCookie';
  import AddNewCompanyDrawer from '@/views/apps/company/list/AddNewCompanyDrawer.vue';

  const userData = useCookie('userData')

  // 👉 Store
  const searchQuery = ref('')

  // Data table options
  const itemsPerPage = ref(10)
  const page = ref(1)
  const sortBy = ref()
  const orderBy = ref()

  const updateOptions = options => {
    page.value = options.page
    sortBy.value = options.sortBy[0]?.key
    orderBy.value = options.sortBy[0]?.order
  }

  // Headers
  const headers = [{
      title: 'Empresa',
      key: 'nombre',
    },
    {
      title: 'URL',
      key: 'url',
    },
    {
      title: 'Fecha alta',
      key: 'fecha_alta',
    },
    {
      title: 'Actions',
      key: 'actions',
      sortable: false,
    },
  ]

  const response_provincias = await $api(`/get-provincias`, {
    method: "GET"
  });
  const provincias = computed(() => response_provincias);

  const response_tipos = await $api(`/get-tipo-empresas`, {
    method: "GET"
  });
  const tipos = computed(() => response_tipos);

  const isAddNewCompanyDrawerVisible = ref(false)
  const selecetedEmpresa = ref(null);
  const empresas = ref([])
  const totalEmpresas = ref(0)

  const isDeleteDialogVisible = ref(false)

  const fetchCompany = async () => {
    try {
      const response = await $api("/empresas", {
        method: "GET",
        params: {
          search: searchQuery.value,
          itemsPerPage: itemsPerPage.value,
          page: page.value,
          sortBy: sortBy.value,
          orderBy: orderBy.value,
        },
      });

      // Actualizar los datos de la tabla
      empresas.value = response.data;
      totalEmpresas.value = response.total;
    } catch (error) {
      console.error(error);
    }
  };

  const addNewEmpresa = async empresaData => {
    // userListStore.addUser(empresaData)
    await $api('/save-empresa', {
      method: 'POST',
      body: empresaData.value,
    })

    // refetch User
    fetchCompany()
  }

  const deleteEmpresa = async id => {
    await $api(`/delete-empresa/${id}`, {
      method: 'GET'
    })

    // refetch User
    fetchCompany()
  }

  const openAddCompany = () => {
    isAddNewCompanyDrawerVisible.value = true;
    selecetedEmpresa.value = null;

  };
  const openEditEmpresa = (empresa) => {
    isAddNewCompanyDrawerVisible.value = true;
    selecetedEmpresa.value = empresa;
  };

  const openDeleteEmpresa = (empresa) => {
    selecetedEmpresa.value = empresa
    isDeleteDialogVisible.value = true;
  }

  onMounted(fetchCompany);

  watch([itemsPerPage, sortBy, orderBy, page, searchQuery], () => {
    fetchCompany();
  });

  watch(isAddNewCompanyDrawerVisible, async (new_value) => {
    if (!new_value) {
      selecetedEmpresa.value = {}
    }
  })
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