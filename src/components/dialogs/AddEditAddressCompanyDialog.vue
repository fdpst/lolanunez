<script setup>
const props = defineProps({
  address: {
    type: Object,
    required: false,
    default: () => ({
      id: null,
      provincia_id: null,
      localidad: '',
      direccion: '',
      codigo_postal: '',
    }),
  },
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits([
  'update:isDialogVisible',
  'submit',
])

const provincias = await $api(`/get-provincias`, { method: 'GET' })

const address = ref(structuredClone(toRaw(props.address)))

const resetForm = () => {
  emit('update:isDialogVisible', false)
  address.value = structuredClone(toRaw(props.address))
}

const onFormSubmit = () => {
  emit('update:isDialogVisible', false)
  emit('submit', address)
}
</script>

<template>
  <VDialog
    :width="$vuetify.display.smAndDown ? 'auto' : 900 "
    :model-value="props.isDialogVisible"
    @update:model-value="val => $emit('update:isDialogVisible', val)"
  >
    <VCard
      v-if="props.address"
      class="pa-sm-11 pa-3"
    >
      <VCardText class="pt-5">
        <!-- 👉 dialog close btn -->
        <DialogCloseBtn
          variant="text"
          size="default"
          @click="resetForm"
        />

        <!-- 👉 Title -->
        <div class="text-center mb-6">
          <h4 class="text-h4 mb-2">
            Actualizar dirección de la empresa
          </h4>

          <!-- <p class="text-body-1">
            Actualizar dirección de la empresa
          </p> -->
        </div>

        <!-- 👉 Form -->
        <VForm @submit.prevent="onFormSubmit">
          <VRow>
            <!-- 👉 direccion -->
            <VCol
              cols="12"
              md="12"
            >
              <VTextarea
                v-model="address.direccion"
                label="Direccion"
                rows="2"
                placeholder=""
              />
            </VCol>

            <!-- 👉 provincia -->
            <VCol cols="12" md="4">
              <VSelect
                v-model="address.provincia_id"
                label="Provincia"
                placeholder="Seleccioar una provincia"
                :items="provincias"
                item-value="id"
                item-title="nombre"
              />
            </VCol>

            <!-- 👉 localidad -->
            <VCol
              cols="12"
              md="4"
            >
              <VTextField
                v-model="address.localidad"
                label="Localidad"
                placeholder=""
              />
            </VCol>

            <!-- 👉 codigo postal -->
            <VCol cols="12" md="4">
              <VTextField
                v-model="address.codigo_postal"
                label="Codigo postal"
                placeholder=""
              />
            </VCol>

            <!-- 👉 Submit and Cancel button -->
            <VCol
              cols="12"
              class="text-center"
            >
              <VBtn
                type="submit"
                class="me-3"
              >
                Aceptar
              </VBtn>

              <VBtn
                variant="outlined"
                color="secondary"
                @click="resetForm"
              >
                Cancelar
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>
