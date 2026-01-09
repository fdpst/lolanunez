<template>
  <VNavigationDrawer temporary :width="400" location="end" class="scrollable-content" :model-value="props.isDrawerOpen" @update:model-value="handleDrawerModelValueUpdate">
    <!-- 👉 Title -->
    <AppDrawerHeaderSection :title="
        props.incidence != null ? 'Editar Incidencia' : 'Agregar Incidencia'
      " @cancel="closeNavigationDrawer" />

    <VDivider />

    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat>
        <VCardText>
          <!-- 👉 Form -->
          <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
            <VRow>
              <!-- 👉 Incidence -->

              <VCol v-if="userData.id_role < 3" cols="12">
                <VSelect v-model="incidenceData.usuario_id" label="Usuario" placeholder="Selecciona un usuario" :items="users" item-value="id" item-title="name" />
              </VCol>

              <VCol cols="12">
                <VSelect v-model="incidenceData.tipo_incidencia_id" label="Tipo de incidencia" placeholder="Selecciona un tipo" :items="incidence_types" item-value="id" item-title="nombre" />
              </VCol>

              <!-- 👉 Fecha -->
              <VCol cols="12">
                <AppDateTimePicker v-model="incidenceData.fecha" label="Fecha" placeholder="Selecciona una fecha" :config="datePickerConfig" />
              </VCol>

              <!-- 👉 Hora -->
              <VCol cols="12">
                <AppDateTimePicker v-model="incidenceData.hora_inicio" label="Hora Inicio" placeholder="Selecciona una hora" :config="{
                    enableTime: true,
                    noCalendar: true,
                    dateFormat: 'H:i',
                  }" />
              </VCol>

              <VCol cols="12">
                <AppDateTimePicker v-model="incidenceData.hora_final" label="Hora Fin" placeholder="Selecciona una hora" :config="{
                    enableTime: true,
                    noCalendar: true,
                    dateFormat: 'H:i',
                  }" />
              </VCol>
              <VCol cols="12">
                <VFileInput @change="setFileData" label="Justificante" />
              </VCol>

              <!-- 👉 Submit and Cancel -->
              <VCol cols="12">
                <VBtn type="submit" class="me-4"> Aceptar </VBtn>
                <VBtn type="reset" variant="outlined" color="error" @click="closeNavigationDrawer">
                  Cancelar
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>

<script setup>
  import {
  datePickerConfig
} from '@/utils/baseDateSelectFormat';
import {
  PerfectScrollbar
} from "vue3-perfect-scrollbar";
  const props = defineProps({
    isDrawerOpen: {
      type: Boolean,
      required: true,
    },
    incidence: {
      type: Object,
      default: () => null,
    },
    incidence_types: {
      type: Array,
      default: () => [],
    },
    users: {
      type: Array,
      default: () => [],
    },
  });

  const emit = defineEmits(["update:isDrawerOpen", "incidenceData"]);

  let formData = new FormData();

  const incidenceData = ref({
    id: null,
    usuario_id: null,
    tipo_incidencia_id: null,
    fecha: "",
    hora_inicio: "",
    hora_final: "",
  });

  const isFormValid = ref(false);
  const refForm = ref();

  // 👉 drawer close
  const closeNavigationDrawer = () => {
    emit("update:isDrawerOpen", false);
  };

  const onSubmit = () => {
    refForm.value.validate().then(({
      valid
    }) => {
      if (valid) {
        for (let key in incidenceData.value) {
          formData.append(key, incidenceData.value[key]);
        }

        emit("incidenceData", formData);

        emit("update:isDrawerOpen", false);
        nextTick(() => {
          refForm.value.reset();
          refForm.value.resetValidation();
        });
      }
    });
  };

  const setFileData = (file) => {
    formData.append("justificante", file.target.files[0]);
    console.log(formData.get("justificante"));
  };

  const resetincidenceData = () => {
    formData.delete("justificante");
    incidenceData.value = {
      id: null,
      usuario_id: null,
      tipo_incidencia_id: null,
      fecha: "",
      hora_inicio: "",
      hora_final: "",
      // justificante: "",
    };
  };

  watch(
    () => props.incidence,
    () => {
      console.log(props.incidence, "props");
      if (props.incidence != null) {
        incidenceData.value = null;
        incidenceData.value = JSON.parse(JSON.stringify(props.incidence));
        console.log(incidenceData, "incidenceData");
      } else {
        resetincidenceData();
      }
    }
  );

  const userData = useCookie("userData");

  const handleDrawerModelValueUpdate = (val) => {
    emit("update:isDrawerOpen", val);
  };
</script>
