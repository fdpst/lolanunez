<template>
  <VRow v-if="companyData">
    <VCol cols="12" md="5" lg="4">
      <CompanyBioPanel :company-data="companyData" @update:company-data="fetchCompany" />
    </VCol>

    <VCol cols="12" md="7" lg="8">
      <VTabs v-model="companyTab" class="v-tabs-pill">
        <VTab v-for="tab in tabs" :key="tab.icon">
          <VIcon start :icon="tab.icon" />
          <span>{{ tab.title }}</span>
        </VTab>
      </VTabs>
      <VWindow v-model="companyTab" class="mt-6 disable-tab-transition" :touch="false">
        <VWindowItem>
          <CompanyTabOverview :company-data="companyData" @update:company-data="fetchCompany" />
        </VWindowItem>
      </VWindow>

      <CompanySignPanel :company-data="companyData" />

    </VCol>

  </VRow>
  <VCard v-else>
    <VCardTitle class="text-center">
      Empresa no encontrado
    </VCardTitle>
  </VCard>
</template>

<script setup>
  import CompanyBioPanel from '@/views/apps/company/view/CompanyBioPanel.vue';
  import CompanyTabOverview from '@/views/apps/company/view/CompanyTabOverview.vue';
  import CompanySignPanel from '@/views/apps/company/view/CompanySignPanel.vue';

  const route = useRoute('apps-company-view-id')
  const companyTab = ref(null)

  const tabs = [{
    icon: 'ri-calendar-event-line',
    title: 'Información',
  }, ]

  const companyData = ref({})
  const fetchCompany = async () => {
    companyData.value = await $api(`/get-empresa/${ route.params.id }`)
  }

  onMounted(fetchCompany)
</script>