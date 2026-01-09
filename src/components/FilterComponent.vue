<script setup>
const props = defineProps({
    value: {
        type: Object,
        default: () => {}
    },
    headers: {
        type: Array, // Usar el constructor Array para indicar un tipo de array
        default: () => [] // Puedes proporcionar un valor predeterminado, por ejemplo, un array vacío
    }
});

const emit = defineEmits(["input"]);

const dialog = ref(false);
const result = ref({});
const opciones_fecha = ref([
    { value: 1, title: "Desde" },
    { value: 2, title: "Hasta" },
    { value: 3, title: "Entre" }
]);
const locations = ref(["top", "bottom", "start", "end", "center"]);
const location = ref("end");
const open = ref([]);

// const changeCliente = (item) => {
//     result.value[item.model].nombre = this.clientes.find((element) => {
//         return element["id"] == result.value[item.model].value;
//     })["nombre"];
// }

const changeRes = item => {
    result.value[item.model].nombre = item.items.find(element => {
        return (
            element[item.item_value ?? "value"] ==
            result.value[item.model].value
        );
    })[item.item_title];
    // emit("input", result.value)
};

const getChipData = (value, key) => {
    let result = `${key}, `;
    if ((value.nombre != null) & (value.nombre != "")) {
        result += value.nombre;
    } else if (
        (value.start != null || value.end != null) &
        (value.start != "" || value.end != "")
    ) {
        if ((value.start != null) & (value.start != "")) result += value.start;
        if (
            (value.start != null) &
            (value.start != "") &
            ((value.end != null) & (value.end != ""))
        )
            result += " - ";
        if ((value.end != null) & (value.end != "")) result += value.end;
    } else {
        result += value.value;
    }

    return result;
};
const deleteItem = key => {
    result.value[key].value = "";
    result.value[key].start = "";
    result.value[key].end = "";
    result.value[key].nombre = "";
};
const updateTipo = (model, value) => {
    model.tipo = value;
    const resultado = JSON.stringify(result.value);
    result.value = [];
    result.value = JSON.parse(resultado);
    // emit("input", result.value)
};
const checkItems = () => {
    let changed = false;
    props.headers.forEach(element => {
        if (result.value[element.model ?? element.title] == null) {
            result.value[element.model ?? element.title] = { tipo: 1 };
            changed = true;
            if (element.type == "date") {
                result.value[element.model ?? element.title].end = "";
                result.value[element.model ?? element.title].start = "";
            } else {
                result.value[element.model ?? element.title].value = "";
            }
        }
        element.item = result.value[element.model ?? element.title];
    });
    if (changed) result.value = JSON.parse(JSON.stringify(result.value));
};
// const activarItem = (_item) => {
//     props.headers.forEach((item) => {
//         if (item == _item) {
//             item.active = !item.active;
//         } else {
//             item.active = false;
//         }
//     });
// }

onMounted(() => {
    result.value = props.value ?? {};
    open.value = props.headers.map(element => element.title);
    checkItems();
});

watch(props.value, val => {
    result.value = val;
    checkItems();
});

watch(
    result,
    (newValue, oldValue) => {
        emit("input", newValue);
    },
    { deep: true }
);
</script>

<template>
    <div style="inline-size: 24.0625rem" class="mr-2">
        <VTextField
            v-model="result.search"
            label="Búsqueda"
            density="compact"
        ></VTextField>
    </div>
    <VMenu :location="location" :close-on-content-click="false">
        <template #activator="{ props }">
            <VBtn v-bind="props">
                <VIcon icon="ri-filter-line" />
            </VBtn>
        </template>

        <VList style="min-width: 20rem" v-model:opened="open">
            <VListGroup
                v-for="(item, index) in headers"
                :key="index"
                :value="item.title"
            >
                <template #activator="{ props }">
                    <VListItem v-bind="props" :title="item.title" />
                </template>

                <VListItem v-if="item.type == 'date'">
                    <VAutocomplete
                        density="compact"
                        v-model="item.item.tipo"
                        @update:modelValue="
                            val => {
                                updateTipo(item.item, val);
                            }
                        "
                        label="Tipo"
                        :items="opciones_fecha"
                        class="pt-1"
                    ></VAutocomplete>

                    <AppDateTimePicker
                        v-if="item.item.tipo != 2"
                        density="compact"
                        class="pt-3"
                        label="Desde"
                        v-model="result[item.model].start"
                    />
                    <AppDateTimePicker
                        v-if="item.item.tipo != 1"
                        density="compact"
                        class="pt-3"
                        label="Hasta"
                        v-model="result[item.model].end"
                    />
                </VListItem>

                <VListItem v-else-if="item.type == 'select'">
                    <VAutocomplete
                        density="compact"
                        class="pt-1"
                        v-model="result[item.model].value"
                        label="Seleccione uno"
                        @update:modelValue="changeRes(item)"
                        :items="item.items"
                        :item-title="item.item_title"
                        :item-value="item.item_value"
                    ></VAutocomplete>
                </VListItem>

                <!-- <VListItem v-else-if="item.type == 'cliente'">
                    <ClienteSelect
                        v-model="result[item.model].value"
                        @input="changeCliente(item)"
                        label="Seleccione uno"
                    >
                    </ClienteSelect>
                </VListItem> -->
            </VListGroup>
        </VList>
    </VMenu>

    <div style="width: 100%; display: flex; flex-wrap: wrap">
        <template v-for="(key, index) in Object.keys(result)" :key="index">
            <template v-if="result[key]">
                <VChip
                    style="margin-bottom: 0.25rem"
                    v-if="
                        (result[key].value != '') &
                            (result[key].value != null) ||
                            (result[key].nombre != '') &
                                (result[key].nombre != null) ||
                            (result[key].start != '') &
                                (result[key].start != null) ||
                            (result[key].end != '') & (result[key].end != null)
                    "
                >
                    <div style="display: flex; align-items: center">
                        <div style="padding-right: 1rem">
                            {{ getChipData(result[key], key) }}
                        </div>
                        <div
                            style="cursor: pointer; display: flex; align-items: center"
                            @click="deleteItem(key)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                class="icon"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </div>
                    </div>
                </VChip>
            </template>
        </template>
    </div>
</template>

<style>
.menu {
    overflow: hidden;
    max-height: 0px;
    transition: max-height 0.3s;
}

.menu.active {
    display: block;
    max-height: 200px;
}
.icon {
    width: 1rem;
    height: 1rem;
    transition: transform 0.3s;
}

.icon.upside-down {
    transform: rotate(180deg);
}
</style>
