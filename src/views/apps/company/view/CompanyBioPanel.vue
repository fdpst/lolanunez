<template>
  <VRow>
    <VSnackbar v-model="alert.status" location="top end" :color="alert.color">
      {{alert.message}}
    </VSnackbar>
    <!-- SECTION User Details -->
    <VCol cols="12">
      <VCard v-if="props.companyData">
        <VCardText class="text-center pt-12 pb-6">
          <!-- 👉 Avatar -->
          <VAvatar rounded :size="120" :color="!props.companyData.url_imagen ? 'primary' : undefined" :variant="!props.companyData.url_imagem ? 'tonal' : undefined">
            <VImg v-if="props.companyData.url_imagen" :src="props.companyData.url_imagen" />
            <span v-else class="text-5xl font-weight-medium">
              {{ avatarText(props.companyData.nombre) }}
            </span>
          </VAvatar>

          <!-- 👉 User fullName -->
          <h5 class="text-h5 mt-4">
            {{ props.companyData.nombre }}
          </h5>

          <VChip v-if="userData.id_role == 1" size="small" class="text-capitalize mt-4">
            {{ props.companyData.url }}
          </VChip>
        </VCardText>


        <VCardText class="pb-6">
          <h5 class="text-h5">
            Detalles
          </h5>

          <VDivider class="my-4" />


          <VList class="card-list">
            <VListItem>
              <VListItemTitle class="text-sm">
                <span class="font-weight-medium">Nombre: </span>
                <span class="text-body-1">
                  {{ props.companyData.nombre }}
                </span>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle class="text-sm">
                <span class="font-weight-medium">
                  C.I.F:
                </span>
                <span class="text-body-1">{{ props.companyData.cif }}</span>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle class="text-sm">
                <span class="font-weight-medium">
                  CCC:
                </span>
                <span class="text-body-1">{{ props.companyData.ccc }}</span>
              </VListItemTitle>
            </VListItem>

            <template v-if="userData.id_role == 1">
              <VListItem>
                <VListItemTitle class="text-sm">
                  <span class="font-weight-medium">
                    Tipo:
                  </span>
                  <span class="text-body-1">{{ props.companyData.tipo }}</span>
                </VListItemTitle>
              </VListItem>

              <VListItem>
                <VListItemTitle class="text-sm">
                  <span class="font-weight-medium">
                    Externo:
                  </span>
                  <span class="text-body-1">{{ props.companyData.externo ? 'Si' : 'No' }}</span>
                </VListItemTitle>
              </VListItem>
            </template>

          </VList>
        </VCardText>

        <!-- 👉 Edit and Suspend button -->
        <VCardText class="d-flex justify-center">
          <VBtn variant="elevated" class="me-4" @click="isCompanyInfoEditDialogVisible = true">
            Editar
          </VBtn>
        </VCardText>
      </VCard>
    </VCol>
    <!-- !SECTION -->
  </VRow>

  <!-- 👉 Edit user info dialog -->
  <CompanyInfoEditDialog v-model:isDialogVisible="isCompanyInfoEditDialogVisible" :company-data="props.companyData" @submit="updateCompanyData" />
</template>

<script setup>
  const props = defineProps({
    companyData: {
      type: Object,
      required: true,
    },
  })

  const alert = ref({
    status: false,
    color: 'success',
    message: ''
  })

  const emit = defineEmits([
    'update:companyData',
  ])

  const isCompanyInfoEditDialogVisible = ref(false)

  const updateCompanyData = async companyData => {
    try {
      await $api(`/save-empresa`, {
        method: 'POST',
        body: companyData.value,
      })

      alert.value = {
        color: 'success',
        status: true,
        message: 'Información actualizada con éxito'
      }

      emit('update:companyData', companyData)
    } catch (e) {
      alert.value = {
        color: 'error',
        status: true,
        message: 'Error actualizando datos de empresa'
      }
    }
  }

  const userData = useCookie('userData')
</script>

<style lang="scss" scoped>
  .card-list {
    --v-card-list-gap: .5rem;
  }

  .current-plan {
    border: 2px solid rgb(var(--v-theme-primary));
  }

  .text-capitalize {
    text-transform: capitalize !important;
  }
</style>