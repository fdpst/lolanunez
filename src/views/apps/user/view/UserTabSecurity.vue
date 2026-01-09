<template>
  <VRow>
    <VSnackbar v-model="alert.status" location="top end" :color="alert.color">
      {{alert.message}}
    </VSnackbar>
    <VCol cols="12">
      <!-- 👉 Change password -->
      <VCard title="Cambiar Contraseña">
        <VCardText>
          <VAlert variant="tonal" color="warning" closable class="mb-6">
            <VAlertTitle>Asegurese de que estos requerimientos se cumplan</VAlertTitle>
            <span>Mínimo 8 caracteres, mayúscula y símbolos</span>
          </VAlert>

          <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onFormSubmit">
            <VRow>
              <VCol cols="12" md="6">
                <VTextField v-model="password" label="Nueva Contraseña" placeholder="············" :type="isNewPasswordVisible ? 'text' : 'password'" :append-inner-icon="isNewPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                  @click:append-inner="isNewPasswordVisible = !isNewPasswordVisible" :rules="[passwordValidator]" />
              </VCol>
              <VCol cols="12" md="6">
                <VTextField v-model="confirmPassword" label="Confirmar Contraseña" placeholder="············" :type="isConfirmPasswordVisible ? 'text' : 'password'" :append-inner-icon="isConfirmPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                  @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible" :rules="[passwordValidator, confirmedValidator(confirmPassword, password)]" />
              </VCol>

              <VCol cols="12">
                <VBtn type="submit">
                  Cambiar Contraseña
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>

  <VSnackbar v-model="isSnackbarTopEndVisible" location="top end" color="success">
    {{ message }}
  </VSnackbar>

  <!-- 👉 Enable One Time Password Dialog -->
  <!-- <TwoFactorAuthDialog
    v-model:isDialogVisible="isTwoFactorDialogOpen"
    :sms-code="smsVerificationNumber"
  /> -->
</template>

<script setup>
  const route = useRoute('apps-user-view-id')

  const alert = ref({
    status: false,
    color: 'success',
    message: ''
  })

  const isNewPasswordVisible = ref(false)
  const isConfirmPasswordVisible = ref(false)
  const isSnackbarTopEndVisible = ref(false)

  const password = ref('')
  const confirmPassword = ref('')
  const isFormValid = ref(false);
  const refForm = ref();
  const message = ref('');

  const onFormSubmit = () => {
    refForm.value?.validate().then(({
      valid
    }) => {
      if (valid) {
        $api('/change-password', {
          method: 'POST',
          body: {
            userId: route.params.id,
            password: password.value
          }
        }).then((response) => {
          isSnackbarTopEndVisible.value = true
          message.value = response.success
          alert.value = {
            color: 'success',
            status: true,
            message: 'Contraseña actualizada con éxito'
          }
        })


        nextTick(() => {
          refForm.value?.reset()
          refForm.value?.resetValidation()
        })
      }
    })
  }
</script>