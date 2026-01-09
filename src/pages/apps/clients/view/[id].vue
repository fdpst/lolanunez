<script setup>
import ClientBioPanel from "@/views/apps/clients/view/ClientBioPanel.vue";
import ClientTabOverview from "@/views/apps/clients/view/ClientTabOverview.vue";
import ClientDataProtection from "../../../../views/apps/clients/view/ClientDataProtection.vue";

const route = useRoute("apps-user-view-id");

const userTab = ref(null);

const tabs = [
    {
        icon: "ri-calendar-event-line",
        title: "Historial"
    },
    {
        icon: "ri-lock-2-line",
        title: "Protección de datos"
    }
];

const clientData = ref({});
const fetchClient = async () => {
    clientData.value = await $api_app(`/getusuario/${route.params.id}`);
};

onMounted(fetchClient);
</script>

<template>
    <VRow v-if="clientData">
        <VCol cols="12" md="5" lg="4">
            <ClientBioPanel :item="clientData" @update:item="fetchClient" />
        </VCol>

        <VCol cols="12" md="7" lg="8">
            <VTabs v-model="userTab" class="v-tabs-pill">
                <VTab v-for="tab in tabs" :key="tab.icon">
                    <VIcon start :icon="tab.icon" />
                    <span>{{ tab.title }}</span>
                </VTab>
            </VTabs>

            <VWindow
                v-model="userTab"
                class="mt-6 disable-tab-transition"
                :touch="false"
            >
                <VWindowItem>
                    <ClientTabOverview
                        :item="clientData"
                        @update:item="fetchClient"
                    />
                </VWindowItem>

                <VWindowItem>
                    <ClientDataProtection
                        :item="clientData"
                        @update:item="fetchClient"
                    />
                </VWindowItem>
            </VWindow>
        </VCol>
    </VRow>
    <VCard v-else>
        <VCardTitle class="text-center">
            Usuario no encontrado
        </VCardTitle>
    </VCard>
</template>
