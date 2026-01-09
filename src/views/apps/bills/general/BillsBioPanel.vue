<script setup>
import rocketImg from "@images/eCommerce/rocket.png";
import { onMounted } from "vue";

const props = defineProps({
    data: {
        type: Object,
        default: () => null
    }
});

const emit = defineEmits(["changeData"]);

const isUserInfoEditDialogVisible = ref(false);
const isUpgradePlanDialogVisible = ref(false);

const cuentas = ref([]);
const clientes = ref([]);
const data = ref({
    id_cliente: null,
    fecha: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
    comentario: "",
    cuenta: null,
    incluir_iva: true,
    descuento: 0
});

onMounted(() => {
    //
});

watch(data.value, val => {
    emit("changeData", val);
});

watch(() => {
    if (props.data != null) {
        data.value = props.data;
    }
});
</script>

<template>
    <VRow>
        <!-- SECTION Customer Details -->
        <VCol cols="12">
            <VCard>
                <!-- 👉 Customer Details -->
                <VCardText>
                    <h5 class="text-h5">Datos del cliente y fecha</h5>
                    <VDivider class="my-4" />

                    <!-- <VSelect
                        label="Cliente"
                        v-model="data.id_cliente"
                        :items="clientes"
                        item-title="nombre"
                        item-value="id"
                        class="mt-3"
                    />-->
                    <ClienteSelect
                        label="Cliente"
                        v-model="data.id_cliente"
                        class="mt-3"
                    />
                    <AppDateTimePicker
                        label="Fecha"
                        v-model="data.fecha"
                        class="mt-3"
                    />
                    <VTextarea
                        label="Descripción-notas"
                        placeholder="Escribe aquí lo necesario"
                        class="mt-3"
                        v-model="data.comentario"
                    />
                </VCardText>
            </VCard>
        </VCol>
        <!-- !SECTION -->

        <!-- SECTION  Upgrade to Premium -->
        <VCol cols="12">
            <VCard flat>
                <VCardText>
                    <div class="d-flex align-center">
                        <div>
                            <h5 class="text-h5 text-white mb-4">
                                Descuentos y cuentas
                            </h5>
                        </div>
                    </div>

                    <VTextField label="Descuento %" v-model="data.descuento" />

                    <!--<VSelect
                        label="Banco"
                        class="mt-3"
                        v-model="data.cuenta"
                        :items="cuentas"
                        item-title="nombre_banco"
                        item-value="id"
                    />

                     <VSelect
            label="Cuenta bancaria"
            class="mt-3"
            v-model="data.cuenta"
            :items="cuentas"
            item-title="cuenta"
            item-value="id"
          />

          <VCheckbox
            label="Incluir IVA 21%"
            class="mt-3"
            v-model="data.incluir_iva"
          />-->
                </VCardText>
            </VCard>
        </VCol>
        <!-- !SECTION -->
    </VRow>
    <UserInfoEditDialog v-model:isDialogVisible="isUserInfoEditDialogVisible" />
    <UserUpgradePlanDialog
        v-model:isDialogVisible="isUpgradePlanDialogVisible"
    />
</template>

<style lang="scss" scoped>
.card-list {
    --v-card-list-gap: 0.5rem;
}
</style>
