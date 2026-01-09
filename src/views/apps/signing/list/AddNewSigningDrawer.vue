<template>
  <VNavigationDrawer temporary :width="400" location="end" class="scrollable-content" :model-value="props.isDrawerOpen" @update:model-value="handleDrawerModelValueUpdate">
    <!-- 👉 Title -->
    <AppDrawerHeaderSection :title="props.signing != null ? 'Editar Fichaje' : 'Agregar Fichaje'" @cancel="closeNavigationDrawer" />

    <VDivider />

    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat>
        <VCardText>
          <!-- 👉 Form -->
          <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
            <VRow>
              <!-- 👉 Frase -->
              <VCol cols="12">
                <!-- <VTextarea
                  v-model="signingData.nombre"
                  :rules="[requiredValidator]"
                  label="Nombre"
                  placeholder=""
                /> -->
                <VSelect v-model="signingData.usuario_id" label="Usuario" placeholder="Selecciona un usuario" :items="users" item-value="id" item-title="name" />
              </VCol>

              <!-- 👉 Fecha -->
              <VCol cols="12">
                <AppDateTimePicker :config="datePickerConfig" v-model="signingData.fecha" label="Fecha" placeholder="Selecciona una fecha" />
              </VCol>

              <!-- 👉 Hora -->
              <VCol cols="12">
                <AppDateTimePicker v-model="signingData.hora" label="Hora" placeholder="Selecciona una hora" :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }" />
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

<script setup>
  import {
    datePickerConfig
  } from '@/utils/baseDateSelectFormat'

  import {
    PerfectScrollbar
  } from 'vue3-perfect-scrollbar';

  const props = defineProps({
    isDrawerOpen: {
      type: Boolean,
      required: true,
    },
    signing: {
      type: Object,
      default: () => null,
    },
    users: {
      type: Array,
      default: () => [],
    },
  })

  const alert = ref('false')

  const emit = defineEmits([
    "update:isDrawerOpen",
    "signingData",
  ]);

  const signingData = ref({
    id: null,
    usuario_id: null,
    fecha: "",
    hora: "",
  });

  const isFormValid = ref(false);
  const refForm = ref();

  // 👉 drawer close
  const closeNavigationDrawer = () => {
    emit('update:isDrawerOpen', false);
  }

  const onSubmit = () => {
    refForm.value?.validate().then(({
      valid
    }) => {
      if (valid) {
        emit('signingData', signingData)
        emit('update:isDrawerOpen', false)
        nextTick(() => {
          refForm.value?.reset()
          refForm.value?.resetValidation()
        })
      }
    })
  }

  const resetsigningData = () => {
    signingData.value = {
      id: null,
      nombre: "",
    };
  };

  watch(() => {
    // Esta función se ejecutará cada vez que currentCompany cambie
    if (props.signing != null) {
      signingData.value = props.signing;
    } else {
      resetsigningData();
    }
  });

  const handleDrawerModelValueUpdate = (val) => {
    emit('update:isDrawerOpen', val);
  };
</script>