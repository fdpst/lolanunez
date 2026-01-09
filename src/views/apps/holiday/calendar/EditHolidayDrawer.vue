<template>
  <VNavigationDrawer temporary :width="400" location="end" class="scrollable-content" :model-value="props.isEditDrawerOpen" @update:model-value="handleDrawerModelValueUpdate">
    <!-- 👉 Title -->
    <AppDrawerHeaderSection title="Editar fecha" @cancel="closeNavigationDrawer" />

    <VDivider />

    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat>
        <VCardText>
          <!-- 👉 Form -->
          <VRow>
            <VCol cols="12">
              <VTextField v-model="item.nombre" disabled label="Nombre" placeholder="nombre" />
            </VCol>

            <VCol cols="12">
              <AppDateTimePicker v-model="item.fecha" label="Fecha" placeholder="Selecciona una fecha" :config="datePickerConfig" />
            </VCol>

            <!-- 👉 Submit and Cancel -->
            <VCol cols="12">
              <VBtn @click="saveHoliday" class="me-4">
                Guardar
              </VBtn>
              <VBtn @click="openDeleteDialog" class="me-4">
                Eliminar
              </VBtn>
              <VBtn type="reset" variant="outlined" color="error" @click="closeNavigationDrawer">
                Cancelar
              </VBtn>
            </VCol>
          </VRow>

        </VCardText>
      </VCard>

      <DeleteDialog v-model:isDialogVisible="isDeleteDialogVisible" :id="holiday.id" @submit="deleteVacaciones" />

    </PerfectScrollbar>
  </VNavigationDrawer>
</template>

<script setup>
  import {
    datePickerConfig
  } from '@/utils/baseDateSelectFormat'
  import {
    PerfectScrollbar
  } from 'vue3-perfect-scrollbar';

  import {
    Spanish
  } from "flatpickr/dist/l10n/es.js"

  const props = defineProps({
    isEditDrawerOpen: {
      type: Boolean,
      required: true,
    },
    holiday: {
      type: Object,
      default: () => {},
    },
  })

  const emit = defineEmits([
    "update:isEditDrawerOpen",
    "holidayData",
  ]);

  const isDeleteDialogVisible = ref(false)

  const item = ref({
    id: null,
    fecha: null,
    nombre: null,
  })

  const closeNavigationDrawer = () => emit('update:isEditDrawerOpen', false)

  const handleDrawerModelValueUpdate = val => emit('update:isEditDrawerOpen', val)

  const openDeleteDialog = () => isDeleteDialogVisible.value = true

  const deleteVacaciones = async () => {
    try {
      const response = await $api(`/delete-vacaciones/${item.value.id}`, {
        method: 'GET',
      })
      reload()
    } catch (e) {

    }
  }

  const saveHoliday = async () => {
    try {
      const response = await $api(`/editar-vacaciones`, {
        method: 'POST',
        body: item.value
      })
      reload()
    } catch (e) {

    }
  }

  const reload = () => {
    emit('holidayData')
    isDeleteDialogVisible.value = false
    item.value = {
      id: null,
      fecha: null,
      nombre: null
    }
  }
  watch(() => props.holiday, (n) => {
    if (n.id) {
      item.value = n
    }
  })
</script>