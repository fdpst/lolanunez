<script setup>
  import {
    PerfectScrollbar
  } from 'vue3-perfect-scrollbar'
  import {
    datePickerConfig
  } from '@/utils/baseDateSelectFormat'

  const props = defineProps({
    isDrawerOpen: {
      type: Boolean,
      required: true,
    },
    provincias: {
      type: Array, // Usar el constructor Array para indicar un tipo de array
      default: () => [], // Puedes proporcionar un valor predeterminado, por ejemplo, un array vacío
    },
    company: {
      type: Object,
      default: () => null,
    },
    tipos: {
      type: Array,
      default: null,
    },
  })

  const emit = defineEmits([
    "update:isDrawerOpen",
    "companyData",
  ]);

  const companyData = ref({
    id: null,
    nombre: "",
    cif: "",
    ccc: "",
    localidad: "",
    codigo_postal: "",
    provincia_id: null,
    url_image: "",
    id_tipo: null,
    externo: false,
    direccion: ""
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
        emit('companyData', companyData)
        emit('update:isDrawerOpen', false)
        nextTick(() => {
          refForm.value?.reset()
          refForm.value?.resetValidation()
        })
      }
    })
  }

  const resetCompanyData = () => {
    companyData.value = {
      id: null,
      nombre: "",
      cif: "",
      ccc: "",
      localidad: "",
      codigo_postal: "",
      provincia_id: null,
      url_image: "",
      id_tipo: null,
      externo: false,
      direccion: ""
    };
  };

  watch(() => {
    if (props.company != null) {
      companyData.value = JSON.parse(JSON.stringify(props.company))
    } else {
      resetCompanyData();
    }
  });

  const handleDrawerModelValueUpdate = (val) => {
    emit('update:isDrawerOpen', val);
  };
</script>

<template>
  <VNavigationDrawer temporary :width="400" location="end" class="scrollable-content" :model-value="props.isDrawerOpen" @update:model-value="handleDrawerModelValueUpdate">
    <!-- 👉 Title -->
    <AppDrawerHeaderSection :title="props.company != null ? 'Editar Empresa' : 'Agregar Empresa'" @cancel="closeNavigationDrawer" />

    <VDivider />

    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat>
        <VCardText>
          <!-- 👉 Form -->
          <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
            <VRow>
              <!-- 👉 Full name -->
              <VCol cols="12">
                <VTextField v-model="companyData.nombre" :rules="[requiredValidator]" label="Nombre" placeholder="John Doe" />
              </VCol>

              <!-- 👉 CIF -->
              <VCol cols="12">
                <VTextField v-model="companyData.cif" :rules="[requiredValidator]" label="C.I.F" placeholder="" />
              </VCol>

              <!-- 👉 CCC -->
              <VCol cols="12">
                <VTextField v-model="companyData.ccc" :rules="[requiredValidator]" label="CCC" placeholder="" />
              </VCol>

              <!-- 👉 tipo -->
              <VCol cols="12">
                <VSelect v-model="companyData.id_tipo" :rules="[requiredValidator]" label="Tipo" placeholder="Selecciona un tipo de empresa" :items="props.tipos" item-value="id" item-title="nombre" />
              </VCol>

              <!-- 👉 provincia -->
              <VCol cols="12">
                <VSelect v-model="companyData.provincia_id" :rules="[requiredValidator]" label="Provincia" placeholder="Selecciona una provincia" :items="props.provincias" item-value="id" item-title="nombre" />
              </VCol>

              <!-- 👉 localidad -->
              <VCol cols="12">
                <VTextField v-model="companyData.localidad" :rules="[requiredValidator]" label="localidad" placeholder="" />
              </VCol>

              <!-- 👉 codigo postal -->
              <VCol cols="12">
                <VTextField v-model="companyData.codigo_postal" :rules="[requiredValidator]" label="Codigo postal" placeholder="" />
              </VCol>

              <!-- 👉 codigo postal -->
              <VCol cols="12">
                <AppDateTimePicker v-model="companyData.created_at" label="Fecha alta" disabled :config="datePickerConfig" />
              </VCol>

              <!-- 👉 direccion -->
              <VCol cols="12">
                <VTextarea v-model="companyData.direccion" :rules="[requiredValidator]" label="Direccion" placeholder="" />
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