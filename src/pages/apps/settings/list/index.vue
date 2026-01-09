<script setup>
import { useDropZone, useFileDialog, useObjectUrl } from "@vueuse/core";
import { onMounted, ref } from "vue";

const isSnackbarVisible = ref(false);
const snakbarColor = ref("success");
const snakbarText = ref("");

// const optionCounter = ref(1)
const refForm = ref(null);
const isFormValid = ref(false);
const tiendas = ref([]);

const ajuste = ref({
    id: null,
    activo: false,
    stripe_key: "",
    stripe_secret: "",
    tienda_id: null,
    logo: null
});

const fetchSettings = async () => {
    try {
        const response = await $api("/get-config", {
            method: "GET"
        });

        if (response.config != null) ajuste.value = response.config;
        tiendas.value = response.tiendas;
    } catch (error) {
        console.error("Error de red:", error);
    }
};
onMounted(fetchSettings);

const dropZoneRef = ref();
const fileData = ref(null);
const { open, onChange } = useFileDialog({ accept: "image/*" });
function onDrop(DroppedFiles) {
    /* MULTIPLES IMAGENES
  DroppedFiles?.forEach(file => {
    if (file.type.slice(0, 6) !== 'image/') {
      alert('Only image files are allowed')
      
      return
    }
    fileData.value.push({
      file,
      url: useObjectUrl(file).value ?? '',
    })
  })
  */
    console.log("fileData", fileData.value);
    if (DroppedFiles?.length > 0) {
        const file = DroppedFiles[0]; // Tomar solo el primer archivo si hay múltiples
        if (file.type.slice(0, 6) !== "image/") {
            alert("Only image files are allowed");
            return;
        }

        fileData.value = {
            file,
            url: useObjectUrl(file).value ?? ""
        };
    }
}
onChange(selectedFiles => {
    /* MULTPLES IMAGENES
  if (!selectedFiles)
    return
  for (const file of selectedFiles) {
    fileData.value.push({
      file,
      url: useObjectUrl(file).value ?? '',
    })
  }
  */
    console.log("fileData", fileData.value);

    if (selectedFiles?.length > 0) {
        const file = selectedFiles[0]; // Tomar solo el primer archivo si hay múltiples
        fileData.value = {
            file,
            url: useObjectUrl(file).value ?? ""
        };
    }
});
useDropZone(dropZoneRef, onDrop);

// Para eliminar el archivo actual
const removeFile = () => {
    fileData.value = null;
};

const fetchImageData = async () => {
    try {
        const response = await $api("/get-imagen-inicio", {
            method: "GET"
        });

        if (response instanceof Blob) {
            const file = new File([response], "imagen_inicio.png", {
                type: "image/png"
            });
            // Puedes asignar el blob directamente a fileData
            fileData.value = {
                file,
                url: useObjectUrl(file).value ?? ""
            };
        } else {
            console.error("Error al obtener la imagen");
        }
    } catch (error) {
        console.error("Error de red:", error);
    }
};

// Llama a la función para obtener la imagen cuando sea necesario
// fetchImageData();

const saveAjuste = async () => {
    try {
        const formData = new FormData();

        // Añadir campos al FormData según sea necesario
        formData.append("id", ajuste.value.id);
        formData.append("activo", ajuste.value.activo);
        formData.append("stripe_key", ajuste.value.stripe_key);
        formData.append("stripe_secret", ajuste.value.stripe_secret);
        formData.append("tienda_id", ajuste.value.tienda_id);
        formData.append("logo", fileData.value.file);

        const response = await $api(`/save-config`, {
            method: "POST",
            body: formData
        });

        snakbarText.value = response.message;
        snakbarColor.value = "success";
        isSnackbarVisible.value = true;
    } catch (error) {
        snakbarColor.value = "error";
        snakbarText.value = error.response._data.error;
        isSnackbarVisible.value = true;
    }
};

const onSubmit = () => {
    refForm.value?.validate().then(({ valid }) => {
        if (valid) {
            saveAjuste();
        }
    });
};
</script>

<template>
    <div>
        <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
            <div class="d-flex flex-wrap justify-end gap-4 mb-6">
                <div class="d-flex gap-4 align-center flex-wrap ">
                    <VBtn variant="outlined">
                        Descartar
                    </VBtn>
                    <VBtn type="submit">
                        Guardar
                    </VBtn>
                    <!-- <VBtn>Publish Product</VBtn> -->
                </div>
            </div>

            <VRow>
                <VCol md="12">
                    <!-- 👉 Product Information -->
                    <VCard class="mb-6">
                        <VCardText>
                            <VRow>
                                <VCol cols="12" md="6">
                                    <VTextField
                                        label="Stripe Key"
                                        v-model="ajuste.stripe_key"
                                    />
                                </VCol>
                                <VCol cols="12" md="6">
                                    <VTextField
                                        label="Stripe secret"
                                        v-model="ajuste.stripe_secret"
                                    />
                                </VCol>
                                <VCol cols="12" md="6">
                                    <VSelect
                                        label="Tienda"
                                        v-model="ajuste.tienda_id"
                                        :items="tiendas"
                                        item-title="nombre"
                                        item-value="id"
                                    />
                                </VCol>
                                <VCol cols="12" md="6">
                                    <VCheckbox
                                        v-model="ajuste.activo"
                                        label="Activar pago"
                                    />
                                </VCol>
                            </VRow>
                        </VCardText>
                    </VCard>

                    <!-- 👉 Product Image -->
                    <!-- <VCard class="mb-6">
                        <VCardItem>
                            <template #title> Imagen de fondo </template>
                            <template #append>
                                <div
                                    class="text-primary font-weight-medium cursor-pointer"
                                >
                                    Agregar contenido de una URL
                                </div>
                            </template>
                        </VCardItem>

                        <VCardText>
                            <div class="flex">
                                <div class="w-full h-auto relative">
                                    <div
                                        ref="dropZoneRef"
                                        class="cursor-pointer"
                                        @click="() => open()"
                                    >
                                        <div
                                            v-if="fileData === null"
                                            class="d-flex flex-column justify-center align-center gap-y-2 pa-12 border-dashed drop-zone"
                                        >
                                            <VAvatar
                                                variant="tonal"
                                                color="secondary"
                                                rounded
                                            >
                                                <VIcon
                                                    icon="ri-upload-2-line"
                                                />
                                            </VAvatar>
                                            <h4 class="text-h4">
                                                Arrastra y suelta tu imagen
                                                aquí.
                                            </h4>
                                            <span class="text-disabled">o</span>

                                            <VBtn variant="outlined">
                                                Busca imágenes
                                            </VBtn>
                                        </div>

                                        <div
                                            v-else
                                            class="d-flex justify-center align-center gap-3 pa-8 border-dashed drop-zone flex-wrap"
                                        >
                                            <VRow class="match-height w-100">
                                                <template v-if="fileData">
                                                    <VCol cols="12" sm="4">
                                                        <VCard
                                                            :ripple="false"
                                                            border
                                                        >
                                                            <VCardText
                                                                class="d-flex flex-column"
                                                                @click.stop
                                                            >
                                                                <VImg
                                                                    :src="
                                                                        fileData.url
                                                                    "
                                                                    width="200px"
                                                                    height="150px"
                                                                    class="w-100 mx-auto"
                                                                />
                                                                <div
                                                                    class="mt-2"
                                                                >
                                                                    <span
                                                                        class="clamp-text text-wrap"
                                                                        >{{
                                                                            fileData
                                                                                .file
                                                                                .name
                                                                        }}</span
                                                                    >
                                                                    <span
                                                                        >{{
                                                                            fileData
                                                                                .file
                                                                                .size /
                                                                                1000
                                                                        }}
                                                                        KB</span
                                                                    >
                                                                </div>
                                                            </VCardText>
                                                            <VCardActions>
                                                                <VBtn
                                                                    variant="text"
                                                                    block
                                                                    @click.stop="
                                                                        removeFile
                                                                    "
                                                                    >Remover
                                                                    Elemento</VBtn
                                                                >
                                                            </VCardActions>
                                                        </VCard>
                                                    </VCol>
                                                </template>
                                            </VRow>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </VCardText>
                    </VCard> -->
                </VCol>
            </VRow>
        </VForm>

        <VSnackbar
            v-model="isSnackbarVisible"
            location="top end"
            :color="snakbarColor"
        >
            {{ snakbarText }}
        </VSnackbar>
    </div>
</template>

<style lang="scss" scoped>
.drop-zone {
    border: 1px dashed rgba(var(--v-theme-on-surface), 0.12);
    border-radius: 6px;
}
</style>

<style lang="scss">
.inventory-card {
    .v-radio-group,
    .v-checkbox {
        .v-selection-control {
            align-items: start !important;
        }

        .v-label.custom-input {
            border: none !important;
        }
    }
}

.ProseMirror {
    p {
        margin-block-end: 0;
    }

    padding: 0.5rem;
    outline: none;

    p.is-editor-empty:first-child::before {
        block-size: 0;
        color: #adb5bd;
        content: attr(data-placeholder);
        float: inline-start;
        pointer-events: none;
    }
}
</style>
