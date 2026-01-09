/*import Toast from "./Toast.vue"

import {
  createApp
} from 'vue'

const install = (app) => {

  const toast = (msg) => {
    let container

    let toastApp

    const baseProps = {

      close: () => {
        if (toastApp)
          toastApp.unmount(container);

        container = document.querySelector('#ToastPlug');
        if (container)
          document.body.removeChild(container);
      }
    };

    const props = {
      ...baseProps,
      ...msg
    }

    console.log('props:', JSON.stringify(props))

    container = document.createElement('div')
    container.setAttribute('id', 'ToastPlug')
    document.body.appendChild(container)
    toastApp = createApp(Toast, props)
    toastApp.mount(container)
  }

  app.config.globalProperties.$toast = toast

}

export default install*/