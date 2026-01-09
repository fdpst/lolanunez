export default [{
  title: 'Opciones',
  icon: {
    icon: 'ri-mail-open-line'
  },
  children: [
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
    /*{
      title: 'eCommerce',
      icon: { icon: 'ri-shopping-cart-2-line' },
      children: [
        {
          title: 'Dashboard',
          to: 'apps-ecommerce-dashboard',
        },
        {
          title: 'Product',
          children: [
            { title: 'List', to: 'apps-ecommerce-product-list' },
            { title: 'Add', to: 'apps-ecommerce-product-add' },
            { title: 'Category', to: 'apps-ecommerce-product-category-list' },
          ],
        },
        {
          title: 'Order',
          children: [
            { title: 'List', to: 'apps-ecommerce-order-list' },
            { title: 'Details', to: { name: 'apps-ecommerce-order-details-id', params: { id: '9042' } } },
          ],
        },
        {
          title: 'Customer',
          children: [
            { title: 'List', to: 'apps-ecommerce-customer-list' },
            { title: 'Details', to: { name: 'apps-ecommerce-customer-details-id', params: { id: 478426 } } },
          ],
        },
        {
          title: 'Manage Review',
          to: 'apps-ecommerce-manage-review',
        },
        {
          title: 'Referrals',
          to: 'apps-ecommerce-referrals',
        },
        {
          title: 'Settings',
          to: 'apps-ecommerce-settings',
        },
      ],
    },
    {
      title: 'Academy',
      icon: { icon: 'ri-book-open-line' },
      children: [
        { title: 'Dashboard', to: 'apps-academy-dashboard' },
        { title: 'My Course', to: 'apps-academy-my-course' },
        { title: 'Course Details', to: 'apps-academy-course-details' },
      ],
    },
    {
      title: 'Logistics',
      icon: { icon: 'ri-truck-line' },
      children: [
        { title: 'Dashboard', to: 'apps-logistics-dashboard' },
        { title: 'Fleet', to: 'apps-logistics-fleet' },
      ],
    },
    {
      title: 'Email',
      icon: { icon: 'ri-mail-line' },
      to: 'apps-email',
    },
    {
      title: 'Chat',
      icon: { icon: 'ri-message-line' },
      to: 'apps-chat',
    },
    {
      title: 'Calendar',
      to: 'apps-calendar',
      icon: { icon: 'ri-calendar-line' },
    },
    {
      title: 'Invoice',
      icon: { icon: 'ri-article-line' },
      children: [
        { title: 'List', to: 'apps-invoice-list' },
        { title: 'Preview', to: { name: 'apps-invoice-preview-id', params: { id: '5036' } } },
        { title: 'Edit', to: { name: 'apps-invoice-edit-id', params: { id: '5036' } } },
        { title: 'Add', to: 'apps-invoice-add' },
      ],
    },
    {
      title: 'Usuario',
      icon: {
        icon: 'ri-user-line'
      },
      to: 'apps-user-list',
      roles: [1, 2],
      // children: [
      //   { title: 'List', to: 'apps-user-list' },
      //   { title: 'View', to: { name: 'apps-user-view-id', params: { id: 21 } } },
      // ],
    },
    //vista de empresa para usuario administrador
    {
      title: 'Empresa',
      icon: {
        icon: 'ri-building-2-line'
      },
      to: 'apps-company-list',
      roles: [1],
    },
    //vista de empresa para usuario empresa
    {
      title: 'Empresa',
      icon: {
        icon: 'ri-building-2-line'
      },
      to:{ name: 'apps-company-view-id', params: { id: useCookie('userData').value.id_empresa } },
      roles: [ 2],
    },
    {
      title: 'Frases',
      icon: {
        icon: 'ri-building-2-line'
      },
      to: 'apps-phrases-list',
      roles: [1],
    },
    {
      title: 'Fichaje',
      icon: {
        icon: 'ri-pass-valid-line'
      },
      to: 'apps-signing-list',
      roles: [1, 2, 3],
    },
    {
      title: 'Tipo Incidencia',
      icon: {
        icon: 'ri-mail'
      },
      to: 'ri-file-info-line',
      roles: [1, 2],
    },
    {
      title: 'Incidencias',
      icon: {
        icon: 'ri-error-warning-line'
      },
      to: 'apps-incidence-list',
      roles: [1, 2, 3],
    },
    {
      title: 'Vacaciones',
      icon: {
        icon: 'ri-progress-8-line'
      },
      to: 'apps-holiday-calendar',
      roles: [1, 2],
    },

    {
      title: 'Roles & Permissions',
      icon: { icon: 'ri-shield-user-line' },
      children: [
        { title: 'Roles', to: 'apps-roles' },
        { title: 'Permissions', to: 'apps-permissions' },
      ],
    },*/
  ],
}, ]
