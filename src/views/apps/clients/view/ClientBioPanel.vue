<script setup>
const props = defineProps({
    item: {
        type: Object,
        required: true
    }
});

const alert = ref({
    status: false,
    color: "success",
    message: ""
});

//const authUserData = useCookie("userData");

const emit = defineEmits(["update:item"]);

const isClientInfoEditDialogVisible = ref(false);

const updateClientData = async clientData => {
    try {
        const response = await $api_app("/saveusuario", {
            method: "POST",
            body: clientData.value
        });

        alert.value = {
            color: "success",
            status: true,
            message: "Cliente actualizado con éxito"
        };

        emit("update:item", clientData);
    } catch (e) {
        alert.value = {
            color: "error",
            status: true,
            message: "Error actualizando cliente"
        };
    }
};
</script>

<template>
    <VRow>
        <VSnackbar
            v-model="alert.status"
            location="top end"
            :color="alert.color"
        >
            {{ alert.message }}
        </VSnackbar>

        <!-- SECTION User Details -->
        <VCol cols="12">
            <VCard v-if="props.item">
                <VCardText class="text-center pt-12 pb-6">
                    <!-- 👉 Avatar -->
                    <VAvatar
                        rounded
                        :size="120"
                        :color="!props.item.avatar ? 'primary' : undefined"
                        :variant="!props.item.avatar ? 'tonal' : undefined"
                    >
                        <VImg
                            v-if="props.item.avatar"
                            :src="props.item.avatar"
                        />
                        <span v-else class="text-5xl font-weight-medium">
                            {{ avatarText(props.item.nombre) }}
                        </span>
                    </VAvatar>

                    <!-- 👉 User fullName -->
                    <h5 class="text-h5 mt-4">
                        {{ props.item.nombre }} {{ props.item.apellidos }}
                    </h5>

                    <!-- 👉 Role chip -->
                    <!-- <VChip
                    :color="resolveUserRoleVariant(props.item.role).color"
                    size="small"
                    class="text-capitalize mt-4"
                  >
                    {{ props.item.role }}
                  </VChip> -->

                    <!-- <VChip size="small" class="text-capitalize mt-4">
                    {{ props.item.rol }}
                  </VChip>-->
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
                                <span class="font-weight-medium">DNI: </span>
                                <span class="text-body-1">
                                    {{ props.item.dni }}
                                </span>
                            </VListItemTitle>
                        </VListItem>

                        <VListItem>
                            <VListItemTitle class="text-sm">
                                <span class="font-weight-medium"
                                    >Teléfono:
                                </span>
                                <span class="text-body-1">
                                    {{ props.item.telefono }}
                                </span>
                            </VListItemTitle>
                        </VListItem>

                        <VListItem>
                            <VListItemTitle class="text-sm">
                                <span class="font-weight-medium">
                                    Email:
                                </span>
                                <span class="text-body-1">{{
                                    props.item.email
                                }}</span>
                            </VListItemTitle>
                        </VListItem>

                        <VListItem>
                            <VListItemTitle class="text-sm">
                                <span class="font-weight-medium">
                                    Fecha de nacimiento:
                                </span>
                                <span class="text-body-1">{{
                                    props.item.fecha_nacimiento
                                }}</span>
                            </VListItemTitle>
                        </VListItem>

                        <VListItem>
                            <VListItemTitle class="text-sm">
                                <span class="font-weight-medium"
                                    >Profesión:
                                </span>
                                <span class="text-body-1">
                                    {{ props.item.profesion }}
                                </span>
                            </VListItemTitle>
                        </VListItem>
                    </VList>
                </VCardText>

                <!-- 👉 Edit and Suspend button -->
                <VCardText class="d-flex justify-center">
                    <VBtn
                        variant="elevated"
                        class="me-4"
                        @click="isClientInfoEditDialogVisible = true"
                    >
                        Editar
                    </VBtn>
                </VCardText>
            </VCard>
        </VCol>
        <!-- !SECTION -->
    </VRow>

    <!-- 👉 Edit user info dialog -->
    <ClientInfoEditDialog
        v-model:isDialogVisible="isClientInfoEditDialogVisible"
        :item="props.item"
        @submit="updateClientData"
    />
</template>

<style lang="scss" scoped>
.card-list {
    --v-card-list-gap: 0.5rem;
}

.current-plan {
    border: 2px solid rgb(var(--v-theme-primary));
}

.text-capitalize {
    text-transform: capitalize !important;
}
</style>
