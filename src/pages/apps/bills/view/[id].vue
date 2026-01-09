<script setup>
import BillsBioPanel from "@/views/apps/bills/general/BillsBioPanel.vue";
import BillsTabOverview from "@/views/apps/bills/general/BillsTabOverview.vue";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute("apps-bills-view-id");

// const isSnackbarTopEndVisible = ref(false)

const loadings = ref([]);
const snackbarVisible = ref(false);
const message = ref("");
const factura = ref({
    id: route.params.id,
    total: 0,
    descuento: 0,
    fecha: "",
    id_cliente: null,
    comentario: "",
    nro_factura: 0,
    incluir_iva: true,
    cuenta: null
});
const itemsFactura = ref([]);

const changeData = data => {
    factura.value.descuento = data.descuento;
    // factura.value.incluir_iva = data.incluir_iva;
    factura.value.cuenta = data.cuenta;
    factura.value.fecha = data.fecha;
    factura.value.id_cliente = data.id_cliente;
    factura.value.comentario = data.comentario;
};

const setItemsFactura = data => {
    itemsFactura.value = data.itemsFactura;
};
const setTotal = val => {
    factura.value.total = val;
};
const fetchFactura = async () => {
    try {
        const response = await $api(`/get-factura/${route.params.id}`, {
            method: "GET"
        });
        factura.value.nro_factura = response.nro_factura;
        itemsFactura.value = response.items;
        factura.value.descuento = response.descuento;
        // factura.value.incluir_iva = response.status_iva;
        // this.subTotal();
        //factura.value.cuenta = response.id_cuenta;
        factura.value.comentario = response.comentario;
        factura.value.id_cliente = response.id_cliente;
        factura.value.total = response.total;
        // this.calcula_total();
        factura.value.fecha = response.fecha;
    } catch (error) {
        console.log(error);
    }
};

const guardarFactura = async () => {
    try {
        loadings.value[0] = true;
        const request = {
            id: route.params.id,
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

        const response = await $api("/save-factura", {
            method: "POST",
            body: request
        });
        console.log("res", response);

        loadings.value[0] = false;

        router.push("/apps/bills/list");
    } catch (error) {
        console.log("error", error);
    }
};

/*const duplicarFactura = async () => {
    loadings.value[1] = true;
    const response = await $api_web(`duplicar-factura/${route.params.id}`);
    message.value = response.success;
    loadings.value[1] = false;
    snackbarVisible.value = true;
};*/

onMounted(fetchFactura);
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
                >Actualizar</VBtn
            >
            <!-- <VBtn
                color="primary"
                :loading="loadings[1]"
                variant="outlined"
                @click="duplicarFactura"
                >Duplicar</VBtn
            > -->
        </div>
        <VRow>
            <VCol cols="12" md="5" lg="4">
                <BillsBioPanel @changeData="changeData" :data="factura" />
            </VCol>
            <VCol cols="12" md="7" lg="8">
                <BillsTabOverview
                    :data="factura"
                    :items="itemsFactura"
                    @changeData="setTotal"
                    @changeItems="setItemsFactura"
                />
            </VCol>
        </VRow>

        <VSnackbar location="top end" color="success" v-model="snackbarVisible">
            {{ message }}
        </VSnackbar>
    </div>
</template>
