// Convertir el mixin a un composable
import {
    ref
} from 'vue'

export const useDataMixin = () => {
    const tiendas = ref([])
    const tienda = ref(null)
    const empleados = ref([])
    const servicios = ref([])
    const clientes = ref([])

    const getTiendas = async () => {
        try {
            const response = await $api('/get-config', {
                method: 'GET'
            })
            tiendas.value = response.tiendas
            tienda.value = response.config.tienda_id
        } catch (error) {
            console.error('Error obteniendo tiendas:', error)
        }
    }

    const getData = async (tipo, tienda) => {
        try {
            const response = await $api_app(`/getdata/${tipo}/${tienda}`, {
                method: 'GET',
            })
            empleados.value = response.empleados || []
            clientes.value = response.clientes || []
            
            // Cargar todos los servicios desde el endpoint del menú de servicios
            await getServicios();
        } catch (error) {
            console.error('Error obteniendo empleados:', error)
        }
    }

    const getServicios = async () => {
        try {
            const response = await $api_app('/getservicios', {
                method: 'GET',
                params: {
                    itemsPerPage: -1
                }
            })
            servicios.value = response.data || response || []
        } catch (error) {
            console.error('Error obteniendo servicios:', error)
            servicios.value = []
        }
    }

    return {
        tienda,
        tiendas,
        empleados,
        servicios,
        clientes,
        getTiendas,
        getData,
        getServicios
    }
}