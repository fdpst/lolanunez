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
            empleados.value = response.empleados
            servicios.value = response.servicios
            clientes.value = response.clientes
        } catch (error) {
            console.error('Error obteniendo empleados:', error)
        }
    }

    return {
        tienda,
        tiendas,
        empleados,
        servicios,
        clientes,
        getTiendas,
        getData
    }
}