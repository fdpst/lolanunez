<script setup>
const props = defineProps({
    isDialogOpen: {
        type: Boolean,
        default: false
    },
    clientes: {
        type: Array,
        default: []
    },
    app_usuario_id: {
        type: Number,
        default: null
    }
});

defineEmits(["update:isDialogOpen"]);

const dialog = ref(props.isDialogOpen);
const citacli = ref({
    id: null,
    tipo: null,
    empleado: "",
    tienda: null,
    servicios: null,
    start: null,
    start_format: null
});

const cierrabusqueda = () => {
    emit("update:isDialogOpen", false);
};
const busqueda = id => {
    // Busqueda
    citacli.value = {};

    axios.get(`api/app/getcitasbyuser/${id}`).then(
        res => {
            console.log("citas clientes");
            console.log(res.data);
            res.data.cita.forEach(cita => {
                citacli.value = cita;
            });
        },
        err => {}
    );
};
const citaPet = citacli => {
    let base_url =
        citacli.tipo == "peluqueria"
            ? "citas-peluqueria?tipo=peluqueria"
            : "citas-clinica?tipo=clinica";
    this.$router
        .push(
            `${base_url}&fecha=${citacli.start_format}&tienda=${citacli.tienda}`
        )
        .catch(() => {});
    this.cierrabusqueda();
};

const getItemText = item => {
    // Concatena nombre y apellidos para busqueda
    return `${item.nombre} ${item.apellidos}`;
};
</script>
<template>
    <VDialog persistent v-model="dialog" width="600">
        <!-- Buscar Cita Mascota -->
        <template>
            <VCard>
                <VCardTitle>Buscar Cita Cliente</VCardTitle>
                <VCardText class="px-3 py-3">
                    <loader v-if="isloading"></loader>
                    <VRow>
                        <VAutocomplete
                            label="Cliente"
                            v-model="props.app_usuario_id"
                            :items="clientes"
                            :item-text="getItemText"
                            item-value="id"
                            class="col-6"
                        >
                        </VAutocomplete>
                        <!--<VAutocomplete label="Mascota" v-model="mascota" :items="mascotas" 
                                    item-text="nombre" item-value="id" return-object class="col-6">
                                </VAutocomplete>-->
                    </VRow>
                    <strong
                        ><p class="ml-4 my-0 pa-0">Citas cliente</p>
                    </strong>
                    <VRow class="mb-4">
                        <VCol
                            v-if="citacli.id == null"
                            align="center"
                            justify="center"
                            class="mt-2 mb-0"
                        >
                            <strong
                                ><p>
                                    No Existen citas para el cliente
                                    seleccionado
                                </p></strong
                            >
                        </VCol>
                        <VRow
                            id="buscarcita"
                            v-if="citacli.id != null"
                            justify="space-around"
                            class="cita mt-2 mb-4"
                        >
                            <VCol
                                id="buscar"
                                @click="citaPet(citacli)"
                                align="center"
                                justify="center"
                                class="cita-element mb-4"
                            >
                                <VRow justify="center">
                                    <i
                                        >Fecha: {{ citacli.start }} -
                                        {{ citacli.tienda }}</i
                                    >
                                </VRow>
                                <VRow justify="center">
                                    <i
                                        >Servicio: {{ citacli.servicios }} -
                                        Empleado: {{ citacli.empleado }}</i
                                    >
                                </VRow>
                            </VCol>
                        </VRow>
                    </VRow>
                </VCardText>
                <VRow align="center" justify="center" class="pa-4 ma-4">
                    <VBtn
                        small
                        md="3"
                        @click="busqueda(props.app_usuario_id)"
                        rounded
                        depressed
                        color="success"
                        class="white--text mx-1 mt-4 mb-0"
                        >Buscar</VBtn
                    >
                    <VBtn
                        small
                        md="3"
                        @click="cierrabusqueda()"
                        rounded
                        depressed
                        color="red"
                        class="white--text mx-1 mt-4 mb-0"
                        >Cerrar</VBtn
                    >
                </VRow>
            </VCard>
        </template>
    </VDialog>
</template>
