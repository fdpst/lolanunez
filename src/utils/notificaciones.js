// Convertir el mixin a un composable
import { ref } from 'vue'

export const useNotificaciones = () => {
    
    // Estado reactivo
    const notificaciones = reactive({
        sin_confirmar: 0
    })

    // Métodos
    const getNotificaciones = async () => {
        try {
            const response = await $api('/app/get-notificaciones', {
                method: 'GET'
            })
            notificaciones.sin_confirmar = response.data.sin_confirmar
        } catch (err) {
            console.error('Error obteniendo notificaciones:', err)
        }
    }

    const setNotificaciones = (data) => {
        Object.assign(notificaciones, data)
    }

    return {
        notificaciones,
        getNotificaciones,
        setNotificaciones
    }
}
