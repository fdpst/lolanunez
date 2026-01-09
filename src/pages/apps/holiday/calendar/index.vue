<template>
  <section>
    <VCard title="Filtros" class="mb-6">
      <VCardText class="d-flex flex-wrap gap-4">
        <div class="app-user-search-filter d-flex align-center">

          <VAutocomplete v-if="userData.id_role == 1" style="width: 200px" v-model="selected_company" density="compact" class="me-2" label="Empresas" placeholder="Empresa" :items="response_companies" item-value="id" item-title="nombre" />

          <VAutocomplete style="width: 200px" v-model="filters.usuario_id" density="compact" class="me-2" label="Usuarios" placeholder="Usuario" :items="response_users" item-value="id" item-title="name" />

          <VBtn @click="openDrawer">Agregar vacaciones </VBtn>
        </div>
      </VCardText>
      <VCardText class="pa-4">
        <FullCalendar ref="refCalendar" :options="calendarOptions" />
      </VCardText>
    </VCard>

    <AddNewHolidayDrawer v-model:isDrawerOpen="isDrawerOpen" :users="response_users" @holiday-data="saveHolidays" />

    <EditHolidayDrawer v-model:isEditDrawerOpen="isEditDrawerOpen" :holiday="selectedHoliday" @holiday-data="reloadCalendar" />
  </section>
</template>

<script setup>
  import _ from "lodash";

  import dayGridPlugin from "@fullcalendar/daygrid";
  import interactionPlugin from "@fullcalendar/interaction";
  import FullCalendar from "@fullcalendar/vue3";

  import AddNewHolidayDrawer from "@/views/apps/holiday/calendar/AddNewHolidayDrawer.vue";
  import EditHolidayDrawer from "@/views/apps/holiday/calendar/EditHolidayDrawer.vue";

  const refCalendar = ref();

  const holidayObject = ref({});

  const isDrawerOpen = ref(false);

  const selected_company = ref(null)

  const response_users = ref([])

  const userData = useCookie('userData')

  const selectedHoliday = ref({
    id: null,
    fecha: null,
    nombre: null,
  });

  const isEditDrawerOpen = ref(false);

  const filters = ref({
    usuario_id: null,
    selected_date: null,
    id_empresa: null
  });

  selected_company.value = userData.value.id_role == 2 ? userData.value.id_empresa : null

  const calendarApi = ref(null);

  const fetchHolidays = async (month, year, user_id, id_empresa) => {
    try {
      const response = await $api(
        `/get-all-vacaciones?month=${month}&year=${year}&usuario_id=${user_id}&id_empresa=${id_empresa}`, {
          method: "GET",
        }
      );

      let events = calendarApi.value?.getEvents();

      events.forEach((item) => {
        let event = calendarApi.value?.getEventById(item.id);
        event.remove();
      });

      holidayObject.value = _.countBy(response, "date");

      response.forEach((item) => calendarApi.value?.addEvent(item));
    } catch (error) {
      console.error(error);
    }
  };

  const saveHolidays = async (data) => {
    const vacaciones = data.fechas.split(",");

    await $api("/save-vacaciones", {
      method: "POST",
      body: {
        vacaciones: vacaciones,
        id_usuario: data.usuario_id,
      },
    });
    reloadHolidays();
  };

  const response_companies = await $api(`/empresas-all`, {
    method: "GET",
  })

  const fetchUsers = async (id_company) => {
    try {
      const response = await $api(`/get-usuarios-empleados-all/${id_company}`, {
        method: "POST",
      })

      response.unshift({
        id: null,
        name: 'Todos',
      })

      response_users.value = response
    } catch (e) {

    }
  }

  const reloadCalendar = () => {
    isEditDrawerOpen.value = false;
    let month = filters.value.selected_date.getMonth() + 1;
    let year = filters.value.selected_date.getFullYear();
    fetchHolidays(month, year, filters.value.usuario_id);
  };

  const handleMonthChange = (data) => {
    filters.value.selected_date = new Date(
      (data.start.getTime() + data.end.getTime()) / 2
    );
  };

  const calendarOptions = ref({
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: "dayGridMonth",
    datesSet: handleMonthChange,
    locale: "es",
    firstDay: 1,
    events: [],
    eventClassNames({
      event: calendarEvent
    }) {
      return holidayObject.value[calendarEvent.startStr] &&
        holidayObject.value[calendarEvent.startStr] >= 2 ?
        "bg-light-red pointer" :
        "bg-light-green pointer";
    },
    eventClick: function(info) {
      selectedHoliday.value = {
        id: info.event.id,
        fecha: info.event.startStr,
        nombre: info.event.title,
      };
      isEditDrawerOpen.value = true;
    },
  });

  const openDrawer = () => (isDrawerOpen.value = true);

  onMounted(() => {
    calendarApi.value = refCalendar.value.getApi();
  });

  const reloadHolidays = () => {
    let month = filters.value.selected_date.getMonth() + 1;
    let year = filters.value.selected_date.getFullYear();
    fetchHolidays(month, year, null);
  };

  watch(selected_company, async (n, o) => {
    filters.value.usuario_id = null
    filters.value.id_empresa = n
    fetchUsers(n)
  }, {
    immediate: true,
  })

  watch(filters, async (n, o) => {
    let month = n.selected_date.getMonth() + 1;
    let year = n.selected_date.getFullYear();

    fetchHolidays(month, year, n.usuario_id, n.id_empresa)
  }, {
    deep: true,
  })
</script>

<style>
  .bg-light-green {
    background-color: #009bd9;
    border-color: #009bd9;
  }

  .bg-light-red {
    background-color: #ff5151;
    border-color: #ff5151;
  }
</style>