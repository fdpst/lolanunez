<script setup>
import { toRefs, watch } from "vue";
import CustomerOrderTable from "../../ecommerce/customer/view/CustomerOrderTable.vue";

const props = defineProps({
    data: {
        type: Object,
        default: () => {}
    },
    items: {
        type: Array,
        default: () => []
    }
});

const emit = defineEmits(["changeItems", "changeData"]);

const headers = [
    {
        title: "Descripción",
        key: "descripcion"
    },
    {
        title: "Cantidad",
        key: "cantidad"
    },
    {
        title: "Precio",
        key: "precio"
    },
    {
        title: "Importe",
        key: "total"
    },
    {
        title: "Acciones",
        key: "actions",
        sortable: false
    }
];

// const servicios = ref(structuredClone(toRaw(props.items)))
const servicios = ref([]);
const editing = ref(null);
const objeto = ref({
    id: "",
    id_articulo: null,
    descripcion: "",
    cantidad: 0,
    precio: parseFloat(0).toFixed(2),
    total: parseFloat(0).toFixed(2)
});
const dcto = ref(0);
const iva = ref(parseFloat(0).toFixed(2));
const total = ref(parseFloat(0).toFixed(2));
const incl_iva = ref(true);

const articulos = ref([]); // Initialize articulos as empty array

// Load articulos on component mount
const loadArticulos = async () => {
    try {
        const response = await $api_app("/getallservicios", {
            method: "GET"
        });
        articulos.value = response || []; // Ensure we always have an array
    } catch (error) {
        console.error("Error loading articulos:", error);
        articulos.value = []; // Set empty array on error
    }
};

const LimpiarServicio = () => {
    editing.value = null;
    objeto.value = {
        id: Date.now() + "a",
        id_articulo: null,
        descripcion: "",
        cantidad: 0,
        precio: parseFloat(0).toFixed(2),
        total: parseFloat(0).toFixed(2)
    };
};

const subTotal = () => {
    const total = servicios.value.reduce((acc, arr) => {
        let total = parseFloat(arr.total); // incluye iva
        let importe_sin_iva = total / 1.21;
        acc = parseFloat(acc) + parseFloat(importe_sin_iva);
        acc = parseFloat(acc).toFixed(2);
        return acc;
    }, 0);
    return total;
};
const calcularDescuento = () => {
    let descuentoNeto = (subTotal() * dcto.value) / 100;
    return descuentoNeto;
};
const HandlerIva = calculatotal => {
    if (incl_iva.value == true) {
        const number = parseFloat(subTotal()).toFixed(2);
        const mult = (number * 21) / 100;
        iva.value = mult;
        // let ivacalc = parseFloat(mult).toFixed(2);
        if (calculatotal) {
            calcularTotal();
        }
        return mult;
    } else {
        iva.value = 0;
        if (calculatotal) {
            calcularTotal();
        }
        return 0;
    }
};
const calcularTotal = () => {
    let subtotal = subTotal();
    subtotal = parseFloat(subtotal).toFixed(2);
    let descuento = calcularDescuento();
    descuento = parseFloat(descuento).toFixed(2);
    let iva = HandlerIva(false);
    total.value = subtotal - descuento + iva;
    emit("changeData", total.value);
    return parseFloat(total.value).toFixed(2);
};
const HandlerAdd = () => {
    if (
        objeto.value.id_articulo != "" &&
        objeto.value.cantidad != "" &&
        objeto.value.precio != "" &&
        objeto.value.total != ""
    ) {
        objeto.value.id = Date.now() + "a";

        const descripcion = articulos.value.find(
            ele => ele.id == objeto.value.id_articulo
        ).nombre;

        if (editing.value != null) {
            const linea = servicios.value.find(ele => ele == editing.value);
            const index = servicios.value.findIndex(
                ele => ele == editing.value
            );
            console.log("index", index);
            console.log("linea", linea);

            console.log("descripcion", descripcion);
            linea.id_articulo = objeto.value.id_articulo;
            linea.descripcion = descripcion;

            linea.cantidad = objeto.value.cantidad;
            linea.precio = objeto.value.precio;
            linea.total = objeto.value.total;

            servicios.value[index] = linea;
        } else {
            objeto.value.descripcion = descripcion;
            servicios.value.push(objeto.value);
        }

        LimpiarServicio();
        // editing.value = null
        calcularTotal();
        emit("changeItems", {
            itemsFactura: servicios.value,
            total: total.value,
            descuento: dcto.value
        });
    }
};

const editLinea = item => {
    editing.value = item;
    let elemento_data = JSON.parse(JSON.stringify(item));

    objeto.value.id_articulo = elemento_data.id_articulo;
    objeto.value.descripcion = articulos?.value.find(
        ele => ele.id == elemento_data.id_articulo
    ).nombre;
    objeto.value.cantidad = elemento_data.cantidad;
    objeto.value.precio = elemento_data.precio;
    objeto.value.total = elemento_data.total;
    objeto.value.id = elemento_data.id;

    //this.deleteItem(item);
};
const deleteLinea = item => {
    const search = servicios.value.indexOf(item);
    if (search > -1) {
        servicios.value.splice(search, 1);
        calcularTotal();
    }
};

watch(
    () => objeto.value.cantidad,
    (newValue, oldValue) => {
        objeto.value.total = parseFloat(newValue * objeto.value.precio).toFixed(
            2
        );
    }
);
watch(
    () => objeto.value.precio,
    (newValue, oldValue) => {
        objeto.value.total = parseFloat(
            objeto.value.cantidad * newValue
        ).toFixed(2);
    }
);
watch(props, val => {
    dcto.value = val.data.descuento;
    incl_iva.value = val.data.incluir_iva;
    servicios.value = val.items;
    calcularTotal();
});

// Watch for changes in props.data.descuento
watch(
    () => props.data.descuento,
    newValue => {
        dcto.value = parseFloat(newValue) || 0;
        calcularTotal();
    },
    { immediate: true }
);
onMounted(async () => {
    await loadArticulos();
});
</script>

<template>
    <VRow class="match-height">
        <VCol>
            <VCard>
                <VCardText>
                    <div
                        class="d-flex align-center justify-sm-space-between justify-start flex-wrap gap-4"
                    >
                        <div class="text-h5">Datos del servicio a facturar</div>
                    </div>
                </VCardText>

                <VCardText>
                    <VRow>
                        <VCol cols="12" md="6">
                            <!-- <VTextField
                                label="Descripción"
                                v-model="objeto.descripcion"
                            />-->
                            <VSelect
                                label="Servicio"
                                v-model="objeto.id_articulo"
                                :items="articulos"
                                item-title="nombre"
                                item-value="id"
                            />
                        </VCol>
                        <VCol cols="12" md="2">
                            <VTextField
                                label="Cantidad"
                                type="number"
                                v-model="objeto.cantidad"
                            />
                        </VCol>
                        <VCol cols="12" md="2">
                            <VTextField
                                label="Precio"
                                type="number"
                                v-model="objeto.precio"
                            />
                        </VCol>
                        <VCol cols="12" md="2">
                            <VTextField
                                label="Importe"
                                type="number"
                                v-model="objeto.total"
                                readonly
                            />
                        </VCol>
                        <VCol class="d-flex gap-4">
                            <VBtn @click="HandlerAdd" v-if="editing == null"
                                >Agregar servicio</VBtn
                            >
                            <VBtn @click="HandlerAdd" v-else
                                >Actualizar servicio</VBtn
                            >
                            <VBtn
                                color="sevcundary"
                                variant="outlined"
                                @click="LimpiarServicio"
                                >Limpiar Servicio</VBtn
                            >
                        </VCol>
                    </VRow>
                </VCardText>

                <VDataTable
                    :headers="headers"
                    :items="servicios"
                    class="text-no-wrap rounded-0"
                >
                    <!-- Actions -->
                    <template #item.actions="{ item }">
                        <IconBtn size="small" @click="deleteLinea(item)">
                            <VIcon
                                icon="ri-delete-bin-7-line"
                                title="Eliminar"
                            />
                        </IconBtn>
                        <IconBtn size="small" @click="editLinea(item)">
                            <VIcon icon="ri-edit-box-line" title="Editar" />
                        </IconBtn>
                    </template>

                    <!-- Pagination -->
                    <template #bottom>
                        <VDivider />
                    </template>
                </VDataTable>
            </VCard>
        </VCol>

        <VCol cols="12">
            <VCard>
                <VCardText class="d-flex gap-2 justify-center">
                    <div class="d-flex gap-4 align-center">
                        <VAvatar
                            variant="tonal"
                            color="primary"
                            style="width: 100px; height: 100px"
                        >
                            <VIcon
                                style="width: 85px; height: 85px"
                                icon="ri-money-euro-circle-line"
                            />
                        </VAvatar>

                        <div>
                            <h6 class="text-lg font-weight-medium">Totales</h6>
                            <p class="mb-0 text-base">
                                Subtotal:
                                <span
                                    class="text-primary font-weight-medium text-lg me-1"
                                >
                                    {{ parseFloat(subTotal()).toFixed(2) }}€
                                </span>
                            </p>
                            <p class="mb-0 text-base">
                                Descuento:
                                <span
                                    class="text-primary font-weight-medium text-lg me-1"
                                >
                                    {{
                                        parseFloat(calcularDescuento()).toFixed(
                                            2
                                        )
                                    }}€
                                </span>
                            </p>
                            <p class="mb-0 text-base">
                                Iva:
                                <span
                                    class="text-primary font-weight-medium text-lg me-1"
                                >
                                    {{
                                        parseFloat(HandlerIva(false)).toFixed(
                                            2
                                        )
                                    }}€
                                </span>
                            </p>
                            <p class="mb-0 text-base">
                                Total:
                                <span
                                    class="text-primary font-weight-medium text-lg me-1"
                                >
                                    {{ parseFloat(total).toFixed(2) }}€
                                </span>
                            </p>
                        </div>
                    </div>
                </VCardText>
            </VCard>
        </VCol>
    </VRow>
</template>
