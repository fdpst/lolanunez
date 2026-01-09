<script setup>
  import UserBioPanel from '@/views/apps/user/view/UserBioPanel.vue';
  import UserTabOverview from '@/views/apps/user/view/UserTabOverview.vue';
  import UserTabSecurity from '@/views/apps/user/view/UserTabSecurity.vue';
  import UserSchedule from '@/views/apps/user/view/UserSchedule.vue'

  const route = useRoute('apps-user-view-id')

  const userTab = ref(null)

  const tabs = [{
      icon: 'ri-calendar-event-line',
      title: 'Vacaciones',
    },
    {
      icon: 'ri-lock-2-line',
      title: 'Seguridad',
    },
    /*{
      icon: 'ri-bookmark-line',
      title: 'Billing & Plan',
    },
    {
      icon: 'ri-notification-4-line',
      title: 'Notifications',
    },
    {
      icon: 'ri-link-m',
      title: 'Connections',
    },*/
  ]

  const userData = ref({})
  const fetchUser = async () => {
    userData.value = await $api(`/getusuario/${ route.params.id }`)
  }

  onMounted(fetchUser)
</script>

<template>
  <VRow v-if="userData">
    <VCol cols="12" md="5" lg="4">
      <UserBioPanel :user-data="userData" @update:user-data="fetchUser" />
    </VCol>

    <VCol cols="12" md="7" lg="8">
      <VTabs v-model="userTab" class="v-tabs-pill">
        <VTab v-for="tab in tabs" :key="tab.icon">
          <VIcon start :icon="tab.icon" />
          <span>{{ tab.title }}</span>
        </VTab>
      </VTabs>

      <VWindow v-model="userTab" class="mt-6 disable-tab-transition" :touch="false">
        <VWindowItem>
          <UserTabOverview />
          <UserSchedule />
        </VWindowItem>

        <VWindowItem>
          <UserTabSecurity />
        </VWindowItem>

        <!-- <VWindowItem>
          <UserTabBillingsPlans />
        </VWindowItem>

        <VWindowItem>
          <UserTabNotifications />
        </VWindowItem>

        <VWindowItem>
          <UserTabConnections />
        </VWindowItem> -->
      </VWindow>
    </VCol>
  </VRow>
  <VCard v-else>
    <VCardTitle class="text-center">
      Usuario no encontrado
    </VCardTitle>
  </VCard>
</template>