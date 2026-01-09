<template>
  <VRow>
    <VSnackbar v-model="alert.status" location="top end" :color="alert.color">
      {{alert.message}}
    </VSnackbar>

    <VCol cols="12">
      <VCard title="Jornada Laboral">
        <VCardText>

          <VRow>
            <VCol cols="12" md="4">
              <VTextField :disabled="disabled" v-model="item.lunes" label="Lunes" type="number" step="0.1" />
            </VCol>
            <VCol cols="12" md="4">
              <VTextField :disabled="disabled" v-model="item.martes" label="Martes" type="number" step="0.1" />
            </VCol>
            <VCol cols="12" md="4">
              <VTextField :disabled="disabled" v-model="item.miercoles" label="Miércoles" type="number" step="0.1" />
            </VCol>

            <VCol cols="12" md="4">
              <VTextField :disabled="disabled" v-model="item.jueves" label="Jueves" type="number" step="0.1" />
            </VCol>
            <VCol cols="12" md="4">
              <VTextField :disabled="disabled" v-model="item.viernes" label="Viernes" type="number" step="0.1" />
            </VCol>
            <VCol cols="12" md="4">
              <VTextField :disabled="disabled" v-model="item.sabado" label="Sábado" type="number" step="0.1" />
            </VCol>


            <VCol cols="12" md="4">
              <VTextField :disabled="disabled" v-model="item.domingo" label="Domingo" type="number" step="0.1" />
            </VCol>
          </VRow>

          <VRow>
            <VCol cols="12" md="4">
              <VBtn v-if="authUserData.id_role == 1 || authUserData.id_role == 2" @click="saveSchedule" class="me-2">
                guardar
              </VBtn>
            </VCol>
          </VRow>

        </VCardText>

      </VCard>
    </VCol>
  </VRow>
</template>

<script setup>
  const alert = ref({
    status: false,
    color: 'success',
    message: 'Horario guardado con exito'
  })

  const route = useRoute('apps-user-view-id')

  const user_id = route.params.id

  const disabled = ref(true)

  const authUserData = useCookie('userData')

  if (authUserData.value.id_role != 3) {
    disabled.value = false
  }

  const item = ref({
    id: null,
    usuario_id: null,
    domingo: 0,
    lunes: 0,
    martes: 0,
    miercoles: 0,
    jueves: 0,
    viernes: 0,
    sabado: 0
  })

  const fetchSchedule = async () => {
    try {
      const response = await $api(`/get-jornada/${user_id}`, {
        method: "GET",
      })

      if (response.id) {
        item.value = response
      }

    } catch (error) {
      console.error(error)
    }
  }

  const saveSchedule = async () => {
    try {
      const response = await $api(`/save-jornada/${user_id}`, {
        method: 'POST',
        body: item.value
      })

      item.value = response

      alert.value = {
        color: 'success',
        status: true,
        message: 'Jornada guardada con exito'
      }
    } catch (e) {

      alert.value = {
        color: 'error',
        status: true,
        message: 'Error guardando horario'
      }
    }
  }

  onMounted(fetchSchedule)
</script>