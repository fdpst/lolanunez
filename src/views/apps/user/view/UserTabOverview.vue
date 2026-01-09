<template>
  <VRow>
    <DeleteDialog v-model:isDialogVisible="isDeleteDialogVisible" :id="select_vacation?.id" @submit="deleteVacation" />

    <VSnackbar v-model="alert.status" location="top end" :color="alert.color">
      {{alert.message}}
    </VSnackbar>

    <VCol cols="12">
      <VCard title="Agregar vacaciones">
        <VCardText>
          <VRow>
            <VCol cols="12" md="6">
              <AppDateTimePicker v-model="picker" label="Fecha" placeholder="Selecciona una o mas fechas" :config="{ mode: 'multiple', dateFormat: 'Y-m-d', altFormat: 'd-m-Y', altInput: true, locale: Spanish}" />
            </VCol>
            <VCol cols="12" md="2">
              <VBtn @click="saveVacations">Añadir</VBtn>
            </VCol>
          </VRow>

        </VCardText>

        <VDivider />

        <h3 class="text-center">{{ year }}</h3>
        <!-- SECTION Datatable -->
        <VCardText>
          <VDataTable :search="search" :headers="headers" :items="vacations" item-value="id" class="text-no-wrap rounded-0" v-model:items-per-page="itemsPerPage" v-model:page="page" @update:options="updateOptions">
            <!-- Actions -->
            <template v-if="userData.id_role != 3" #item.actions="{ item }">
              <IconBtn size="small" @click="openDeleteDialog(item)">
                <VIcon icon="ri-delete-bin-7-line" />
              </IconBtn>
            </template>

          </VDataTable>
        </VCardText>

        <!-- !SECTION -->
      </VCard>
    </VCol>
  </VRow>
</template>


<script setup>
  const alert = ref({
    status: false,
    color: 'success',
    message: ''
  })
  import {
    Spanish
  } from "flatpickr/dist/l10n/es.js"

  const {
    proxy
  } = getCurrentInstance()

  const itemsPerPage = ref(8)
  const page = ref(1)
  const sortBy = ref()
  const orderBy = ref()

  const isDeleteDialogVisible = ref(false)

  const updateOptions = options => {
    page.value = options.page
    sortBy.value = options.sortBy[0]?.key
    orderBy.value = options.sortBy[0]?.order
  }

  const route = useRoute('apps-user-view-id')

  const headers = [{
      title: 'Fecha',
      key: 'fecha',
    },
    {
      title: 'Acciones',
      key: 'actions',
    },
  ]

  const picker = ref('')

  const year = ref(new Date().getFullYear())

  const vacations = ref([])

  const select_vacation = ref({});

  const fetchVacations = async () => {
    try {
      const response = await $api("/get-vacaciones", {
        method: "GET",
        params: {
          id_usuario: route.params.id,
          year: year.value,
        },
      })

      vacations.value = response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const saveVacations = async () => {
    const vacaciones = picker.value.split(',')
    await $api('/save-vacaciones', {
      method: 'POST',
      body: {
        vacaciones: vacaciones,
        id_usuario: route.params.id,
      }
    })
    alert.value = {
      color: 'success',
      status: true,
      message: 'Fecha guardada con éxito'
    }

    fetchVacations()
  }

  const openDeleteDialog = (item) => {
    select_vacation.value = item
    isDeleteDialogVisible.value = true
  }

  const deleteVacation = async id => {

    try {
      await $api(`/delete-vacaciones/${id}`, {
        method: 'GET'
      })
      alert.value = {
        color: 'success',
        status: true,
        message: 'Fecha eliminada con éxito'
      }
    } catch (e) {
      alert.value = {
        color: 'success',
        status: true,
        message: 'Error eliminando fecha'
      }
    }


    fetchVacations()
  }

  onMounted(fetchVacations)

  const userData = useCookie('userData')
</script>