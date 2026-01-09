<script setup>
  import {
    useTheme
  } from 'vuetify';

  const props = defineProps({
    companyData: {
      type: Object,
      required: false,
      default: () => ({
        id: null,
        provincia_id: null,
        direccion: '',
        localidad: '',
        codigo_postal: '',
      }),
    },
  })

  const alert = ref({
    status: false,
    color: 'success',
    message: ''
  })

  const emit = defineEmits([
    'update:companyData'
  ])

  const {
    name
  } = useTheme()
  const isEditAddressDialogVisible = ref(false)

  const updateCompanyData = async addressCompanyData => {
    try {
      await $api(`/save-empresa`, {
        method: 'POST',
        body: addressCompanyData.value,
      })

      emit('update:companyData', addressCompanyData)

      alert.value = {
        color: 'success',
        status: true,
        message: 'Información actualizada con éxito'
      }
    } catch (e) {
      alert.value = {
        color: 'error',
        status: true,
        message: 'Error actualizando dirección'
      }
    }
  }
</script>

<template>
  <VRow>
    <VSnackbar v-model="alert.status" location="top end" :color="alert.color">
      {{alert.message}}
    </VSnackbar>
    <VCol cols="12">
      <VCard title="Dirección">
        <template #append>
          <VBtn size="small" @click="isEditAddressDialogVisible = !isEditAddressDialogVisible">
            Editar
          </VBtn>
        </template>

        <VCardText>
          <VRow>
            <VCol cols="12" lg="6">
              <VTable class="billing-address-table">
                <tr>
                  <td>
                    <h6 class="text-h6 text-no-wrap mb-2">
                      Dirección:
                    </h6>
                  </td>
                  <td>
                    <p class="text-body-1 mb-2">
                      {{ props.companyData.direccion }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 class="text-h6 text-no-wrap mb-2">
                      Provincia:
                    </h6>
                  </td>
                  <td>
                    <p class="text-body-1 mb-2">
                      {{ props.companyData.provincia }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 class="text-h6 text-no-wrap mb-2">
                      Localidad:
                    </h6>
                  </td>
                  <td>
                    <p class="text-body-1 mb-2">
                      {{ props.companyData.localidad }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 class="text-h6 text-no-wrap mb-2">
                      Codigo postal:
                    </h6>
                  </td>
                  <td>
                    <p class="text-body-1 mb-2">
                      {{ props.companyData.codigo_postal }}
                    </p>
                  </td>
                </tr>
              </VTable>
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>

  <!-- 👉 Edit Address dialog -->
  <AddEditAddressCompanyDialog v-model:isDialogVisible="isEditAddressDialogVisible" :address="props.companyData" @submit="updateCompanyData" />
</template>