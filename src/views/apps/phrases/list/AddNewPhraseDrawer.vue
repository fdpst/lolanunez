<script setup>
  import {
    PerfectScrollbar
  } from 'vue3-perfect-scrollbar';

  const props = defineProps({
    isDrawerOpen: {
      type: Boolean,
      required: true,
    },
    phrase: {
      type: Object,
      default: () => null,
    },
  })

  const emit = defineEmits([
    "update:isDrawerOpen",
    "phraseData",
  ]);

  const phraseData = ref({
    id: null,
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
        emit('phraseData', phraseData)
        emit('update:isDrawerOpen', false)
        nextTick(() => {
          refForm.value?.reset()
          refForm.value?.resetValidation()
        })
      }
    })
  }

  const resetPhraseData = () => {
    phraseData.value = {
      id: null,
      nombre: "",
    };
  };

  watch(() => {
    if (props.phrase != null) {
      phraseData.value = JSON.parse(JSON.stringify(props.phrase));
    } else {
      resetPhraseData();
    }
  });

  const handleDrawerModelValueUpdate = (val) => {
    emit('update:isDrawerOpen', val);
  };
</script>

<template>
  <VNavigationDrawer temporary :width="400" location="end" class="scrollable-content" :model-value="props.isDrawerOpen" @update:model-value="handleDrawerModelValueUpdate">
    <!-- 👉 Title -->
    <AppDrawerHeaderSection :title="props.phrase != null ? 'Editar Frase' : 'Agregar Frase'" @cancel="closeNavigationDrawer" />

    <VDivider />

    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat>
        <VCardText>
          <!-- 👉 Form -->
          <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
            <VRow>
              <!-- 👉 Frase -->
              <VCol cols="12">
                <VTextarea v-model="phraseData.nombre" :rules="[requiredValidator]" label="Nombre" placeholder="" />
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