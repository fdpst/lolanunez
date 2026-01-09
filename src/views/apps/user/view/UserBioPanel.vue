<template>
  <VRow>
    <VSnackbar v-model="alert.status" location="top end" :color="alert.color">
      {{alert.message}}
    </VSnackbar>
    <!-- SECTION User Details -->
    <VCol cols="12">
      <VCard v-if="props.userData">
        <VCardText class="text-center pt-12 pb-6">
          <!-- 👉 Avatar -->
          <VAvatar rounded :size="120" :color="!props.userData.avatar ? 'primary' : undefined" :variant="!props.userData.avatar ? 'tonal' : undefined">
            <VImg v-if="props.userData.avatar" :src="props.userData.avatar" />
            <span v-else class="text-5xl font-weight-medium">
              {{ avatarText(props.userData.name) }}
            </span>
          </VAvatar>

          <!-- 👉 User fullName -->
          <h5 class="text-h5 mt-4">
            {{ props.userData.name }}
          </h5>

          <!-- 👉 Role chip -->
          <!-- <VChip
            :color="resolveUserRoleVariant(props.userData.role).color"
            size="small"
            class="text-capitalize mt-4"
          >
            {{ props.userData.role }}
          </VChip> -->

          <VChip size="small" class="text-capitalize mt-4">
            {{ props.userData.rol }}
          </VChip>
        </VCardText>

        <!-- 👉 Details -->
        <VCardText class="pb-6">
          <h5 class="text-h5">
            Detalles
          </h5>

          <VDivider class="my-4" />

          <!-- 👉 User Details list -->
          <VList class="card-list">
            <VListItem>
              <VListItemTitle class="text-sm">
                <span class="font-weight-medium">Nombre: </span>
                <span class="text-body-1">
                  {{ props.userData.name }}
                </span>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle class="text-sm">
                <span class="font-weight-medium">
                  Email:
                </span>
                <span class="text-body-1">{{ props.userData.email }}</span>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle class="text-sm">
                <span class="font-weight-medium">
                  NIF:
                </span>
                <span class="text-body-1">{{ props.userData.nif }}</span>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle class="text-sm">
                <span class="font-weight-medium">
                  NAF:
                </span>
                <span class="text-body-1">{{ props.userData.naf }}</span>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle class="text-sm">
                <span class="font-weight-medium">
                  Empresa:
                </span>
                <span class="text-body-1">{{ props.userData.empresa }}</span>
              </VListItemTitle>
            </VListItem>
          </VList>
        </VCardText>

        <!-- 👉 Edit and Suspend button -->
        <VCardText class="d-flex justify-center">
          <VBtn v-if="authUserData.id_role == 1 || authUserData.id_role == 2" variant="elevated" class="me-4" @click="isUserInfoEditDialogVisible = true">
            Editar
          </VBtn>
          <!-- <VBtn
            variant="outlined"
            color="error"
          >
            Suspend
          </VBtn> -->
        </VCardText>
      </VCard>
    </VCol>
    <!-- !SECTION -->
  </VRow>

  <!-- 👉 Edit user info dialog -->
  <UserInfoEditDialog v-model:isDialogVisible="isUserInfoEditDialogVisible" :user-data="props.userData" @submit="updateUserData" />
</template>

<script setup>
  const props = defineProps({
    userData: {
      type: Object,
      required: true,
    },
  })

  const alert = ref({
    status: false,
    color: 'success',
    message: ''
  })

  const authUserData = useCookie('userData')

  const emit = defineEmits([
    'update:userData',
  ])

  const isUserInfoEditDialogVisible = ref(false)

  const updateUserData = async userData => {
    try {

      const response = await $api(`/save-usuario`, {
        method: 'POST',
        body: userData.value,
      })

      alert.value = {
        color: 'success',
        status: true,
        message: 'Usuario actualizado con éxito'
      }

      emit('update:userData', userData)

    } catch (e) {
      alert.value = {
        color: 'error',
        status: true,
        message: 'error guardando usuario'
      }
    }
  }
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