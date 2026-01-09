<script setup>
  const props = defineProps({
    companyData: {
      type: Object,
      required: false,
      default: () => ({
        id: null,
        id_tipo: null,
        nombre: '',
        url_imagen: '',
        cif: '',
        ccc: '',
        externo: false,
      }),
    },
    isDialogVisible: {
      type: Boolean,
      required: true,
    },
  })

  const emit = defineEmits([
    'submit',
    'update:isDialogVisible',
  ])

  const companyData = ref(structuredClone(toRaw(props.companyData)))
  const inputFile = ref()

  watch(props, () => {
    companyData.value = structuredClone(toRaw(props.companyData))
  })

  const onFormSubmit = () => {
    emit('update:isDialogVisible', false)
    emit('submit', companyData)
  }

  const onFormReset = () => {
    companyData.value = structuredClone(toRaw(props.companyData))
    emit('update:isDialogVisible', false)
  }

  const dialogVisibleUpdate = val => {
    emit('update:isDialogVisible', val)
  }

  const tipos = await $api(`/get-tipo-empresas`, {
    method: 'GET'
  })

  const changeImage = async () => {
    inputFile.value.click()
  }

  // Método para manejar el cambio de archivo
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const base64 = await convertToBase64(file);
      companyData.value.url_imagen = base64
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    })
  }
  const userData = useCookie('userData')
</script>

<template>
  <VDialog :width="$vuetify.display.smAndDown ? 'auto' : 900 " :model-value="props.isDialogVisible" @update:model-value="dialogVisibleUpdate">
    <VCard class="pa-sm-11 pa-3">
      <!-- 👉 dialog close btn -->
      <DialogCloseBtn variant="text" size="default" @click="onFormReset" />

      <VCardText class="pt-5">
        <div class="text-center pb-6">
          <h4 class="text-h4 mb-2">
            Editar información de la empresa
          </h4>
          <div class="text-body-1">
            Actualizar los detalles de la empresa
          </div>
        </div>

        <!-- 👉 Form -->
        <VForm class="mt-4" @submit.prevent="onFormSubmit">
          <VRow>
            <VCol cols="12" md="2">
              <VAvatar rounded :size="120" :color="!companyData.url_imagen ? 'primary' : undefined" :variant="!companyData.url_imagen ? 'tonal' : undefined" style="cursor: pointer;" @click="changeImage">
                <VImg v-if="companyData.url_imagen" :src="companyData.url_imagen" />
                <span v-else class="text-5xl font-weight-medium">
                  {{ avatarText(companyData.nombre) }}
                </span>
              </VAvatar>

              <VFileInput ref="inputFile" accept="image/*" style="display: none;" @change="handleFileChange" />
            </VCol>
            <VCol cols="12" md="10">
              <VRow>
                <!-- 👉 nombre -->
                <VCol cols="12" md="6">
                  <VTextField v-model="companyData.nombre" label="Nombre" placeholder="John" />
                </VCol>

                <!-- 👉 cif -->
                <VCol cols="12" md="6">
                  <VTextField v-model="companyData.cif" label="C.I.F" placeholder="" />
                </VCol>

                <!-- 👉 ccc -->
                <VCol cols="12" md="6">
                  <VTextField v-model="companyData.ccc" label="CCC" placeholder="" />
                </VCol>

                <!-- 👉 tipo -->
                <VCol v-if="userData.id_role==1" cols="12" md="6">
                  <VSelect v-model="companyData.id_tipo" :items="tipos" label="Tipo" item-value="id" item-title="nombre" placeholder="Selecciona un tipo" />
                </VCol>
              </VRow>
            </VCol>

            <!-- 👉 Language -->
            <VCol v-if="userData.id_role==1" cols="12" md="6">
              <VCheckbox label="Externo" v-model="companyData.externo" />
            </VCol>

            <!-- 👉 Submit and Cancel -->
            <VCol cols="12" class="d-flex flex-wrap justify-center gap-4">
              <VBtn type="submit">
                Aceptar
              </VBtn>

              <VBtn color="secondary" variant="outlined" @click="onFormReset">
                Cancelar
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>