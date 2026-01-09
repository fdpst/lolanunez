<template>
    <VRow>
        <VCol cols="12">
            <VTabs v-model="itemTab" class="v-tabs-pill">
                <VTab v-for="tab in tabs" :key="tab.icon">
                    <VIcon start :icon="tab.icon" />
                    <span>{{ tab.title }}</span>
                </VTab>
            </VTabs>

            <VWindow
                v-model="itemTab"
                class="mt-6 disable-tab-transition"
                :touch="false"
            >
                <VWindowItem>
                    <UsualSchedule
                        @fetch-employee="fetchEmployee"
                        :days_names="days_names"
                        :horario="item.horario"
                        :tiendas="tiendas"
                        :days="days"
                    />
                </VWindowItem>

                <VWindowItem>
                    <SpecificSchedule
                        @fetch-employee="fetchEmployee"
                        :fechas="item.fechas"
                        :tiendas="tiendas"
                    />
                </VWindowItem>
            </VWindow>
        </VCol>
    </VRow>
</template>

<script setup>
import { days, days_names } from "@/utils/days";

import UsualSchedule from "@/views/apps/employee/view/UsualSchedule.vue";
import SpecificSchedule from "@/views/apps/employee/view/SpecificSchedule.vue";

const route = useRoute("apps-employee-view-id");

const itemTab = ref(null);

const tabs = [
    {
        icon: "ri-calendar-event-line",
        title: "Horario habitual"
    },
    {
        icon: "ri-calendar-event-line",
        title: "Horario Específico"
    }
];

const item = ref({
    fechas: [],
    horario: []
});

const tiendas = ref([]);

const fetchEmployee = async () => {
    try {
        const response = await $api(`/api/app/getempleado/${route.params.id}`);
        item.value = response.empleado;
        tiendas.value = response.tiendas;
    } catch (e) {}
};

onMounted(fetchEmployee);
</script>
