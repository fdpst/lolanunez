<script setup>
  import {
    PerfectScrollbar
  } from 'vue3-perfect-scrollbar';

  const props = defineProps({
    isSignDrawerOpen: {
      type: Boolean,
      required: true,
    }
  })

  const count = ref(0)

  const option = ref({
    penColor: "rgb(0, 0, 0)",
    backgroundColor: "rgb(255,255,255)"
  })
  const alert = ref(false)

  const disabled = ref(false)

  const signature1 = ref(null)

  const save = (t) => {
    let base64image = signature1.value.save(t);
    saveSign(base64image)
  }

  const clear = () => {
    signature1.value.clear()
  }

  const saveSign = async (base64image) => {
    try {
      const response = await $api(`/save-firma`, {
        method: "POST",
        body: {
          archivo: base64image,
        }
      })
      alert.value = true
      clear()
      closeNavigationDrawer()
    } catch (error) {
      if (error.response.status == 403) {
        alert(error.response._data)
      }
    }
  };

  const emit = defineEmits([
    "update:isSignDrawerOpen",
    "signData",
  ]);

  const closeNavigationDrawer = () => {
    clear()
    emit('update:isSignDrawerOpen', false);
  }

  const handleDrawerModelValueUpdate = (val) => {
    emit('update:isSignDrawerOpen', val);
  };
</script>

<template>
  <VNavigationDrawer temporary :width="400" location="end" class="scrollable-content" :model-value="props.isSignDrawerOpen" @update:model-value="handleDrawerModelValueUpdate">
    <!-- 👉 Title -->
    <AppDrawerHeaderSection title="Firmar" @cancel="closeNavigationDrawer" />

    <VDivider />

    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat>
        <VCardText>
          <!-- 👉 Form -->
          <VForm>
            <VRow>

              <VCol cols="12">
                <Vue3Signature ref="signature1" :sigOption="option" :w="'400px'" :h="'250px'" :disabled="disabled" class="example"></Vue3Signature>
              </VCol>


              <VCol cols="12">
                <VBtn @click="save" class="me-4">
                  Aceptar
                </VBtn>
                <VBtn @click="clear" class="me-4">
                  Reiniciar
                </VBtn>
                <VBtn type="reset" variant="outlined" color="error" @click="closeNavigationDrawer">
                  Cancelar
                </VBtn>
              </VCol>

            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </PerfectScrollbar>
    <VSnackbar v-model="alert" location="top end" color="success">
      Firma enviada con exito
    </VSnackbar>
  </VNavigationDrawer>
</template>