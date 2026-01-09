<script setup>
import { debounce } from "../@layouts/utils";

const props = defineProps({
    modelValue: {},
    extra: {},
    label: {},
    "item-text": {},
    hint: {},
    "persistent-hint": {},
    "return-object": {},
    classe: {}
});

const emit = defineEmits(["update:modelValue"]);

const id_cliente = ref(props.modelValue);
const valor_anterior = ref(null);
const currentPage = ref(1);
const clientes = ref([]);

// Function to load clients
const loadClientes = async () => {
    try {
        currentPage.value = 1;
        const response = await $api_app("/getusuarios?itemsPerPage=15&page=1");
        //console.log("response", response);
        clientes.value = response.data;
        if (props.extra) {
            clientes.value.push(props.extra);
        }
    } catch (error) {
        console.error("Error loading clients:", error);
    }
};

const SearchCliente = debounce(async val => {
    if (valor_anterior.value !== val) {
        if (val != null) {
            try {
                currentPage.value = 1;
                const response = await $api_app(
                    `/getusuarios?itemsPerPage=15&page=1&busqueda=${val}`
                );
                clientes.value = response.data;
            } catch (error) {
                console.error("Error searching clients:", error);
            }
        }
        valor_anterior.value = val;
    }
}, 500);

const endIntersect = async (entries, observer, isIntersecting) => {
    if (isIntersecting) {
        //$store.dispatch("getClientesNext", this);
        currentPage.value += 1;
        const res = await $api_app(
            `/getusuarios?itemsPerPage=15&page=${currentPage.value}`
        );
        // Append new items to existing list
        clientes.value = [...clientes.value, ...res.data];
    }
};

onMounted(async () => {
    if (props.value != null) {
        id_cliente.value = props.value;
    }
    await loadClientes();
});

// Watch para sincronizar el valor externo con el interno
watch(
    () => props.modelValue,
    newValue => {
        if (newValue !== id_cliente.value) {
            id_cliente.value = newValue;
        }
    }
);

// Watch para emitir cambios cuando cambia el valor interno
watch(
    () => id_cliente.value,
    newValue => {
        emit("update:modelValue", newValue);
    }
);
</script>
<template>
    <VAutocomplete
        @update:search-input="SearchCliente"
        v-model="id_cliente"
        :items="clientes"
        item-title="full_name"
        item-value="id"
        :label="props.label"
        :hint="props.hint"
        :persistent-hint="props.persistentHint"
        :return-object="props.returnObject"
        :class="props.classe"
    >
        <template v-slot:append-item>
            <div v-intersect="endIntersect" />
        </template>
    </VAutocomplete>
</template>
