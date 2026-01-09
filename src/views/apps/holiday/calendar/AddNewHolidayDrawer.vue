<script setup>
  import {
    PerfectScrollbar
  } from 'vue3-perfect-scrollbar';

  import {
    Spanish
  } from "flatpickr/dist/l10n/es.js"

  const props = defineProps({
    isDrawerOpen: {
      type: Boolean,
      required: true,
    },
    users: {
      type: Array,
      default: () => [],
    },
  })

  const emit = defineEmits([
    "update:isDrawerOpen",
    "holidayData",
  ]);

  const picker = ref('')

  const usuario_id = ref(null)

  const year = ref(new Date().getFullYear())

  const isFormValid = ref(false)

  const refForm = ref()

  const closeNavigationDrawer = () => emit('update:isDrawerOpen', false)

  const onSubmit = () => {
    refForm.value.validate().then(({
      valid
    }) => {

      if (valid) {

        emit('holidayData', {
          usuario_id: usuario_id.value,
          fechas: picker.value
        })

        emit('update:isDrawerOpen', false)
        nextTick(() => {
          refForm.value.reset()
          refForm.value.resetValidation()
          picker.value = ''
        })
      }
    })
  }

  const handleDrawerModelValueUpdate = (val) => {
    emit('update:isDrawerOpen', val);
  }
</script>

<template>
  <VNavigationDrawer temporary :width="400" location="end" class="scrollable-content" :model-value="props.isDrawerOpen" @update:model-value="handleDrawerModelValueUpdate">
    <!-- 👉 Title -->
    <AppDrawerHeaderSection title="Agregar vacaciones" @cancel="closeNavigationDrawer" />

    <VDivider />

    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat>
        <VCardText>
          <!-- 👉 Form -->
          <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
            <VRow>
              <!-- 👉 Incidence -->
              <VCol cols="12">

                <VSelect v-model="usuario_id" label="Usuario" placeholder="Selecciona un usuario" :items="users" item-value="id" item-title="name" />
              </VCol>

              <!-- 👉 Fecha -->
              <VCol cols="12">
                <AppDateTimePicker v-model="picker" label="Fecha" placeholder="Selecciona una o mas fechas" :config="{ mode: 'multiple', dateFormat: 'Y-m-d', altFormat: 'd-m-Y', altInput: true, locale: Spanish}" />
              </VCol>

              <!-- 👉 Submit and Cancel -->
              <VCol cols="12">
                <VBtn type="submit" class="me-4">
                  Aceptar
                </VBtn>
                <VBtn type="reset" variant="outlined" color="error" @click="closeNavigationDrawer">
                  Cancelar
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>