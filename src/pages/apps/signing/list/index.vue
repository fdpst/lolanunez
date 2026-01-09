<template>
  <section>
    <VSnackbar v-model="snackbar" location="top end" color="error">
      {{ snackbar_text }}
    </VSnackbar>

    <VCard title="Filtros" class="mb-6">
      <VCardText>
        <VRow>
          <!-- 👉 usuarios -->
          <VCol v-if="userData.id_role != 3" cols="12" sm="3">
            <VAutocomplete v-model="userId" label="Usuario" placeholder="Selecciona un usuario" :items="users" item-value="id" item-title="name" />
          </VCol>
          <!-- 👉 Fecha de inicio -->
          <VCol cols="12" sm="3">
            <AppDateTimePicker :config="dateConfig" v-model="fechaInicio" label="Fecha de inicio" placeholder="Selecciona una fecha" />
          </VCol>
          <!-- 👉 Fecha fin -->
          <VCol cols="12" sm="3">
            <AppDateTimePicker :config="dateConfig" v-model="fechaFin" label="Fecha de fin" placeholder="Selecciona una fecha" />
          </VCol>

          <VCol cols="12" sm="3">
            <VBtn @click="openAddSigning" class="me-2 mt-1">
              Agregar nuevo fichaje
            </VBtn>
          </VCol>
        </VRow>
      </VCardText>

      <VDivider />

      <h3 class="mt-2 ml-4">Exportar a PDF</h3>

      <VCardText v-if="userData.id_role != 3" class="d-flex flex-wrap">


        <VCol cols="12" sm="3" class="pl-0">
          <VAutocomplete v-model="userpdfId" label="Usuario" placeholder="Selecciona un usuario" :items="users" item-value="id" item-title="name" />
        </VCol>

        <VCol cols="12" sm="2" class="pl-0">
          <VAutocomplete v-model="year" label="Año" placeholder="Selecciona un año" :items="years" />
        </VCol>

        <VCol cols="12" sm="3">
          <VAutocomplete v-model="month" label="Mes" placeholder="Selecciona un mes" :items="months" item-value="value" item-title="label" />
        </VCol>


        <VSpacer />
        <VBtn @click="sendSignReminder" class="me-2 mt-4">
          Enviar recordatorio
        </VBtn>
        <!-- 👉 PDF button -->
        <VBtn variant="outlined" color="secondary" prepend-icon="ri-file-pdf-2-line" @click="geneatePdf" class="mt-4">
          PDF
        </VBtn>
      </VCardText>

      <!-- SECTION datatable -->
      <VDataTableServer v-model:items-per-page="itemsPerPage" v-model:page="page" :items="fichaes" item-value="id" :items-length="totalFichaes" :headers="computed_headers" class="text-no-wrap rounded-0" @update:options="updateOptions">
        <!-- direccion -->
        <template v-slot:item.address="{ item }">
          <div class="custom-column">{{ item.address }}</div>
        </template>
        <!-- Actions -->
        <template #item.actions="{ item }">
          <IconBtn size="small">
            <a target="__blank" :href="`https://www.google.es/maps?q=${item.lat} ${item.lon}`" style="color: rgb(var(--v-theme--secondary))">
              <VIcon icon="ri-map-pin-line" title="Mapa" />
            </a>
          </IconBtn>

          <IconBtn size="small" @click="openDeleteSigning(item)" title="Eliminar">
            <VIcon icon="ri-delete-bin-7-line" />
          </IconBtn>

          <IconBtn size="small" @click="openEditSigning(item)">
            <VIcon icon="ri-edit-box-line" title="Editar" />
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
              {{ paginationMeta({ page, itemsPerPage }, totalFichaes) }}
            </p>

            <div class="d-flex gap-x-2 align-center me-2">
              <VBtn class="flip-in-rtl" icon="ri-arrow-left-s-line" variant="text" density="comfortable" color="high-emphasis" :disabled="page <= 1" @click="page <= 1 ? (page = 1) : page--" />

              <VBtn class="flip-in-rtl" icon="ri-arrow-right-s-line" density="comfortable" variant="text" color="high-emphasis" :disabled="page >= Math.ceil(totalFichaes / itemsPerPage)" @click="
                  page >= Math.ceil(totalFichaes / itemsPerPage)
                    ? (page = Math.ceil(totalFichaes / itemsPerPage))
                    : page++
                " />
            </div>
          </div>
        </template>
      </VDataTableServer>
      <!-- SECTION -->
    </VCard>
    <!-- 👉 Agregar nuevo usuario -->
    <AddNewSigningDrawer v-model:isDrawerOpen="isAddNewSigningDrawerVisible" :signing="selecetedSigning" :users="users" @signing-data="addNewSigning" />

    <!-- Eliminar fichaje -->
    <DeleteDialog v-model:isDialogVisible="isDeleteDialogVisible" :id="selecetedSigning?.id" @submit="deleteSigning" />

    <SignDrawer v-model:isSignDrawerOpen="isSignDrawerOpen" />

    <SignModal v-model:isSignModalOpen="isSignModalOpen" :lastSign="lastSign" @submit="confirmPDF" />
  </section>
</template>

<script setup>
  import {
    datePickerConfig
  } from "@/utils/baseDateSelectFormat";

  import moment from "moment";

  import AddNewSigningDrawer from "@/views/apps/signing/list/AddNewSigningDrawer.vue";
  import SignDrawer from "@/views/apps/signing/list/SignDrawer.vue";
  import SignModal from "@/views/apps/signing/list/SignModal.vue";
  import {
    VAutocomplete
  } from "vuetify/lib/components/index.mjs";
  import DeleteDialog from "../../../../components/dialogs/DeleteDialog.vue";
  const dateConfig = ref(datePickerConfig);

  const searchQuery = ref("");

  const itemsPerPage = ref(10);
  const page = ref(1);
  const sortBy = ref();
  const orderBy = ref();

  const count = ref(0);

  const option = ref({
    penColor: "rgb(0, 0, 0)",
    backgroundColor: "rgb(255,255,255)",
  });

  const disabled = ref(false);

  const years = ["2024", "2025"];

  const year = ref("2024");

  const month = ref(parseInt(moment().format("MM")));

  const months = ref([{
      label: "Enero",
      value: 1,
    },
    {
      label: "Febrero",
      value: 2,
    },
    {
      label: "Marzo",
      value: 3,
    },
    {
      label: "Abril",
      value: 4,
    },
    {
      label: "Mayo",
      value: 5,
    },
    {
      label: "Junio",
      value: 6,
    },
    {
      label: "Julio",
      value: 7,
    },
    {
      label: "Agosto",
      value: 8,
    },
    {
      label: "Septiembre",
      value: 9,
    },
    {
      label: "Octubre",
      value: 10,
    },
    {
      label: "Noviembre",
      value: 11,
    },
    {
      label: "Diciembre",
      value: 12,
    },
  ]);

  const updateOptions = (options) => {
    page.value = options.page;
    sortBy.value = options.sortBy[0] ? options.sortBy[0].key : null;
    orderBy.value = options.sortBy[0] ? options.sortBy[0].order : null;
  };

  const response_users = await $api(`/get-usuarios-empleados-all`, {
    method: "POST",
  });

  const sendSignReminder = async () => {
    try {
      const response = await $api("/enviar-recordatorio-firma", {
        method: "GET",
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const headers = [{
      title: "Usuario",
      key: "nombre",
      role: [1, 2],
    },
    {
      title: "Fecha",
      key: "fecha_fichaje",
      role: [1, 2, 3],
    },
    {
      title: "Hora",
      key: "hora",
      role: [1, 2, 3],
    },
    {
      title: "IP",
      key: "ip_add",
      role: [1, 2],
    },
    {
      title: "S.O.",
      key: "os",
      role: [1, 2],
    },
    {
      title: "Navegador",
      key: "browser",
      role: [1, 2],
    },
    {
      title: "Direccion",
      key: "address",
      class: "custom-column-header",
      role: [1, 2],
    },
    {
      title: "Actions",
      key: "actions",
      sortable: false,
      role: [1, 2],
    },
  ];

  const isSignDrawerOpen = ref(false);
  const isSignModalOpen = ref(false);
  const showModal = ref(false);

  const lastSign = ref("");

  const snackbar = ref(false);
  const snackbar_text = ref(null);

  const isAddNewSigningDrawerVisible = ref(false);
  const selecetedSigning = ref(null);
  const fichaes = ref([]);
  const totalFichaes = ref(0);

  const date = new Date();

  const fechaInicio = ref(moment().startOf("month").format("YYYY-MM-DD"));

  const fechaFin = ref(moment().endOf("month").format("YYYY-MM-DD"));

  const userData = useCookie("userData")

  const userId = ref(null)

  const userpdfId = ref(null)

  const isDeleteDialogVisible = ref(false);

  const fetchSigning = async () => {
    try {

      if (userId.value == null && userData.value.id_role == 3) {
        userId.value = useCookie("userData").value.id;
      }

      const response = await $api(userId.value ? `/get-fichajes-by-user/${userId.value}` : `/get-fichajes-by-user`, {
        method: "POST",
        body: {
          itemsPerPage: itemsPerPage.value,
          page: page.value,
          sortBy: sortBy.value,
          orderBy: orderBy.value,
          fechaInicio: fechaInicio.value,
          fechaFin: fechaFin.value,
        },
      });

      fichaes.value = response.data;
      totalFichaes.value = response.total;
    } catch (error) {
      console.error(error);
    }
  };

  const addNewSigning = async (signingData) => {
    await $api("/save-fichaje", {
      method: "POST",
      body: signingData.value,
    });
    fetchSigning();
  };

  const deleteSigning = async (id) => {
    await $api(`/delete-fichaje/${id}`, {
      method: "GET",
    });

    fetchSigning();
  };

  const openSign = () => {
    isSignDrawerOpen.value = true;
  };

  const openAddSigning = () => {
    isAddNewSigningDrawerVisible.value = true;
    selecetedSigning.value = null;
  };

  const openEditSigning = (user) => {
    isAddNewSigningDrawerVisible.value = true;
    selecetedSigning.value = user;
  };

  const openDeleteSigning = (data) => {
    selecetedSigning.value = data;
    isDeleteDialogVisible.value = true;
  };

  const confirmPDF = () => {
    showModal.value = false;
    isSignModalOpen.value = false;
    geneatePdf();
  };

  const geneatePdf = async () => {
    if (showModal.value == true) {
      return (isSignModalOpen.value = true);
    }

    try {
      const response = await $api("/crear-pdf-fichajes", {
        method: "POST",
        body: {
          year: year.value,
          month: month.value,
          usuario: userpdfId.value,
        },
      });

      showModal.value = false;

      const url = response.url_name;
      const baseUrl = window.location.origin;
      const fullUrl = `${baseUrl}/storage/fichajes/${url}`;

      // Create an anchor element
      const link = document.createElement("a");
      link.href = fullUrl;
      link.target = "_blank";
      link.download = ""; // Optional: instructs browser to download if possible

      // Append to the document and click
      document.body.appendChild(link);
      link.click();

      // Clean up: remove the anchor element after the click
      document.body.removeChild(link);
      getLastSign();
    } catch (e) {
      if (e.status == 403) {
        snackbar.value = true;
        snackbar_text.value = "Firma de empresa no encontrada";
      }
    }
  };

  onMounted(fetchSigning);

  watch(
    [
      itemsPerPage,
      sortBy,
      orderBy,
      page,
      searchQuery,
      userId,
      fechaInicio,
      fechaFin,
    ],
    () => {
      fetchSigning();
    }
  );

  watch(isAddNewSigningDrawerVisible, async (new_value) => {
    if (!new_value) {
      selecetedSigning.value = {};
    }
  });



  const getLastSign = async () => {
    try {
      const response = await $api(
        `/get-firma-empresa/${userData.value.id_empresa}`, {
          method: "GET",
        }
      );

      if (response == "") {
        return (showModal.value = true);
      }

      lastSign.value = response;
    } catch (e) {
      console.log(e);
    }
  };

  if (userData.value.id_role == 2) {
    getLastSign();
  }

  const users = computed(() => {
    if (userData.value.id_role == 1 || userData.value.id_role == 2) {
      response_users.unshift({
        id: null,
        name: "Todos",
      });
    }
    return response_users;
  });

  const computed_headers = computed(() => {
    return headers.filter((element) => {
      return element.role.includes(userData.value.id_role);
    });
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

  .custom-column-header {
    width: 320px !important;
    /* Ancho del encabezado */
  }

  .custom-column {
    width: 320px;
    /* Ancho de la columna */
    white-space: normal;
    /* Permitir el ajuste de texto */
    word-wrap: break-word;
    /* Ajustar palabras largas */
  }
</style>