export default [
    {
        title: 'Calendario',
        icon: { icon: 'ri-calendar-line' },
        to: 'apps-citas-list',
        auth: [1, 2],
    },
    {
        title: 'Clientes',
        icon: {
            icon: 'ri-group-line'
        },
        auth: [1, 2],
        to: 'apps-clients-list',
    },
    {
        title: 'Empleados',
        auth: [1, 2],
        icon: {
            icon: 'ri-user-2-line'
        },
        to: 'apps-employee-list',
    },
    {
        title: 'Servicios',
        icon: {
            icon: 'ri-service-line'
        },
        auth: [1, 2],
        to: 'apps-services-list',
    },
    {
        title: 'Configuración',
        icon: {
            icon: 'ri-settings-5-line'
        },
        auth: [1, 2],
        to: 'apps-settings-list',
    },
    {
        title: 'Localizaciones',
        icon: {
            icon: 'ri-store-line'
        },
        auth: [1, 2],
        to: 'apps-stores-list',
    },
    {
        title: 'Horario Localizaciones',
        icon: {
            icon: 'ri-calendar-schedule-line'
        },
        auth: [1, 2],
        to: 'apps-schedule-list',
    },
    {
        title: 'Usuarios',
        icon: {
            icon: 'ri-user-line'
        },
        auth: [1, 2],
        to: 'apps-user-list',
    },
    {
        title: 'Facturas',
        icon: {
            icon: 'ri-bill-line'
        },
        auth: [1, 2],
        to: '',
        children: [
            { title: 'Listado', to: 'apps-bills-list' },
            { title: 'Informe', to: 'apps-bills-report' },
          ],
    },
]