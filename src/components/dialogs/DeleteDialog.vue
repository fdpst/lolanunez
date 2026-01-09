<script setup>
  const props = defineProps({
    id: {
      type: Number,
      required: true,
      default: null,
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

  const dialogVisibleUpdate = val => {
    emit('update:isDialogVisible', val)
  }

  const close = () => {
    emit('update:isDialogVisible', false)
  }

  const confirm = () => {
    emit('submit', props.id)
    emit('update:isDialogVisible', false)
  }
</script>

<template>
  <VDialog :width="$vuetify.display.smAndDown ? 'auto' : 400 " :model-value="props.isDialogVisible" @update:model-value="dialogVisibleUpdate">
    <VCard class="pa-sm-11 pa-3">
      <VCardTitle class="text-center">
        Aviso
        <!-- 👉 dialog close btn -->
        <DialogCloseBtn variant="text" size="default" @click="close" />
      </VCardTitle>

      <VCardText class="text-center">
        ¿Está seguro que desea eliminar el elemento seleccionado?
      </VCardText>

      <VCardActions class="justify-center">
        <VBtn @click="close" color="secondary" variant="outlined">Cancelar</VBtn>
        <VBtn @click="confirm" color="primary" variant="outlined">Confirmar</VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>