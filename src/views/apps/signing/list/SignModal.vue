<template>
  <VDialog width="550" :model-value="props.isSignModalOpen" @update:model-value="dialogVisibleUpdate">
    <VCard class="pa-sm-11 pa-3">
      <VCardTitle class="text-center">
        Aviso
        <DialogCloseBtn variant="text" size="default" @click="close" />
      </VCardTitle>

      <VCardText class="text-center">
        <p>
          {{title}}
        </p>
        <br>

        <Vue3Signature ref="signature1" :sigOption="option" :w="'400px'" :h="'230px'" :disabled="disabled" class="example"></Vue3Signature>

      </VCardText>

      <VCardActions class="justify-center">
        <VBtn v-if="continue_s" @click="confirm" color="primary" variant="outlined">Continuar</VBtn>
        <VBtn v-else @click="save" color="primary" variant="outlined" class="me-4">Aceptar</VBtn>
        <VBtn @click="clear" class="me-4" variant="outlined">Firmar de nuevo</VBtn>
        <VBtn @click="close" color="secondary" variant="outlined">Cancelar</VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>

<script setup>
  const props = defineProps({
    lastSign: {
      type: String,
      required: true,
      default: () => null,
    },
    isSignModalOpen: {
      type: Boolean,
      required: true,
    },
  })


  const option = ref({
    penColor: "rgb(0, 0, 0)",
    backgroundColor: "rgb(255,255,255)"
  })

  const title = ref('Esta es la firma configurada, ¿desea continuar o firmar nuevamente?')

  const disabled = ref(true)

  const signature1 = ref(null)

  const continue_s = ref(true)

  const save = (t) => {
    let base64image = signature1.value.save(t);
    saveSign(base64image)
  }

  const clear = () => {
    continue_s.value = false
    disabled.value = false
    signature1.value.clear()
  }
  const userData = useCookie('userData')

  const saveSign = async (base64image) => {
    try {
      const response = await $api(`/save-firma-empresa/${userData.value.id_empresa}`, {
        method: "POST",
        body: {
          archivo: base64image,
        }
      })
      emit('submit')
    } catch (error) {
      if (error.response.status == 403) {
        alert(error.response._data)
      }
    }
  };

  const emit = defineEmits([
    'submit',
    'update:isSignModalOpen',
  ])

  const dialogVisibleUpdate = val => {
    emit('update:isSignModalOpen', val)
  }

  const close = () => {
    emit('update:isSignModalOpen', false)
  }

  const confirm = () => {
    emit('submit')
  }


  watch(() => {
    if (props.lastSign && signature1.value) {
      signature1.value.fromDataURL(props.lastSign)
      title.value = 'Esta es la firma configurada, ¿desea continuar o firmar nuevamente?'
      disabled.value = true
      continue_s.value = true
    } else {
      title.value = 'Por favor introduzca su firma'
      disabled.value = false
      continue_s.value = false
    }
  })
</script>