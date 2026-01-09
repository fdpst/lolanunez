<script setup>
import BillsBioPanel from "@/views/apps/bills/general/BillsBioPanel.vue";
import BillsTabOverview from "@/views/apps/bills/general/BillsTabOverview.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const loadings = ref([]);
const factura = ref({
    total: 0,
    descuento: 0,
    fecha: "",
    id_cliente: null,
    comentario: "",
    nro_factura: 0,
    // incluir_iva: true,
    cuenta: null
});
const itemsFactura = ref([]);

const changeData = data => {
    factura.value.descuento = data.descuento;
    // factura.value.incluir_iva = data.incluir_iva
    factura.value.cuenta = data.cuenta;
    factura.value.fecha = data.fecha;
    factura.value.id_cliente = data.id_cliente;
    factura.value.comentario = data.comentario;
};

const setItemsFactura = data => {
    itemsFactura.value = data.itemsFactura;
    factura.value.total = data.total;
};

const guardarFactura = async () => {
    try {
        loadings.value[0] = true;
        const request = {
            total: factura.value.total,
            descuento: factura.value.descuento,
            fecha: factura.value.fecha,
            // id_cuenta: factura.value.cuenta,
            items: itemsFactura.value,
            // status_iva: factura.value.incluir_iva,
            nro_factura: factura.value.nro_factura,
            // tipo: this.tipo,
            id_cliente: factura.value.id_cliente,
            comentario: factura.value.comentario
        };

        await $api("/save-factura", { method: "POST", body: request });
        loadings.value[0] = false;
        router.push("/apps/bills/list");
    } catch (error) {
        console.log("error", error);
    }
};
</script>

<template>
    <div>
        <!-- 👉 Header  -->
        <div
            class="d-flex justify-end align-center flex-wrap gap-4 gap-y-4 mb-6"
        >
            <VBtn
                variant="outlined"
                color="secondary"
                :to="{ name: 'apps-bills-list' }"
            >
                Volver
            </VBtn>
            <VBtn color="primary" :loading="loadings[0]" @click="guardarFactura"
                >Guardar</VBtn
            >
        </div>
        <VRow>
            <VCol cols="12" md="5" lg="4">
                <BillsBioPanel @changeData="changeData" />
            </VCol>
            <VCol cols="12" md="7" lg="8">
                <BillsTabOverview
                    :data="factura"
                    @changeItems="setItemsFactura"
                />
            </VCol>
        </VRow>
    </div>
</template>
