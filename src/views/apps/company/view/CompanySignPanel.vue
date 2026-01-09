<template id="">
  <VRow class="mt-4">
    <VCol cols="12">
      <VCard>
        <VCardText class="pt-4 pb-6">

          <h5 class="text-h5 mb-4">
            Firma
          </h5>

          <p>Esta es la firma de la empresa, esta firma saldrá en todos los pdf de fichajes</p>

          <Vue3Signature ref="signature1" :sigOption="option" :w="'400px'" :h="'230px'" :disabled="userData.id_role != 2" class="example"></Vue3Signature>

        </VCardText>

        <VCardActions v-if="userData.id_role == 2" class="mb-4">
          <VBtn @click="save" color="primary" variant="outlined" class="me-4 ml-4">Aceptar</VBtn>
          <VBtn @click="clear" class="me-4" variant="outlined">Nueva firma</VBtn>
        </VCardActions>
      </VCard>
    </VCol>

    <VSnackbar v-model="alert" location="top end" color="success">
      Firma enviada con exito
    </VSnackbar>

  </VRow>
</template>

<script setup>
  const props = defineProps({
    companyData: {
      type: Object,
      required: true,
    },
  })

  const option = ref({
    penColor: "rgb(0, 0, 0)",
    backgroundColor: "rgb(255,255,255)"
  })
  const userData = useCookie('userData')
  const alert = ref(false)

  const disabled = ref(false)

  const signature1 = ref(null)

  const continue_s = ref(true)

  const save = (t) => {
    let base64image = signature1.value.save(t)
    saveSign(base64image)
  }

  const clear = () => {
    disabled.value = false
    signature1.value.clear()
  }

  const getLastSign = async (id) => {
    try {
      const response = await $api(`/get-firma-empresa/${id}`, {
        method: 'GET'
      })
      signature1.value.fromDataURL(response)
    } catch (e) {
      console.log(e);
    }
  }

  const saveSign = async (base64image) => {
    try {
      const response = await $api(`/save-firma-empresa/${props.companyData.id}`, {
        method: "POST",
        body: {
          archivo: base64image,
        }
      })
      alert.value = true
    } catch (error) {

    }
  }

  const emit = defineEmits([
    'submit',
    'update:isSignModalOpen',
  ])

  const dialogVisibleUpdate = val => {
    emit('update:isSignModalOpen', val)
  }

  watch(() => props.companyData, (n) => {
    getLastSign(n.id)
  })
</script>