<template>
  <VNavigationDrawer temporary :width="400" location="end" class="scrollable-content" :model-value="props.isDrawerOpen" @update:model-value="handleDrawerModelValueUpdate">
    <!-- 👉 Title -->
    <AppDrawerHeaderSection :title="props.phrase != null ? 'Editar Tipo' : 'Agregar Tipo'" @cancel="closeNavigationDrawer" />

    <VDivider />

    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat>
        <VCardText>
          <!-- 👉 Form -->
          <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
            <VRow>

              <VCol v-if="userData.id_role == 1" cols="12">
                <VSelect v-model="incidenceData.id_empresa" label="Empresa" placeholder="Selecciona una empresa" :items="empresas" item-value="id" item-title="nombre" />
              </VCol>

              <VCol cols="12">
                <VTextField v-model="incidenceData.nombre" :rules="[requiredValidator]" label="Nombre" placeholder="" />
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
    PerfectScrollbar
  } from 'vue3-perfect-scrollbar';

  const props = defineProps({
    isDrawerOpen: {
      type: Boolean,
      required: true,
    },
    type: {
      type: Object,
      default: () => null,
    },
    empresas: {
      type: Array,
      default: () => [],
    },
  })

  const emit = defineEmits([
    "update:isDrawerOpen",
    "incidenceData",
  ]);

  const incidenceData = ref({
    id: null,
    id_empresa: null,
    nombre: "",
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
        emit('typeData', incidenceData)
        emit('update:isDrawerOpen', false)
        nextTick(() => {
          refForm.value?.reset()
          refForm.value?.resetValidation()
        })
      }
    })
  }

  const resetIncidenceData = () => {
    incidenceData.value = {
      id: null,
      nombre: "",
    };
  };

  watch(() => {
    if (props.type != null) {
      incidenceData.value = JSON.parse(JSON.stringify(props.type))
    } else {
      resetIncidenceData();
    }
  });
  const userData = useCookie('userData')
  const handleDrawerModelValueUpdate = (val) => {
    emit('update:isDrawerOpen', val);
  };
</script>