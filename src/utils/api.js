import {
    ofetch
} from 'ofetch'

import {
    useStateStore
} from '@store/state'

const stateStore = useStateStore()

export const $api = ofetch.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
    async onRequest({
        options
    }) {
        stateStore.set_api_status(true)
        const accessToken = useCookie('accessToken').value
        if (accessToken) {
            options.headers = {
                ...options.headers,
                Authorization: `Bearer ${accessToken}`,
            }
        }
    },

    async onResponse() {
        stateStore.set_api_status(false)
    },
})

export const $api_app = ofetch.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || '/api/app',
    async onRequest({
        options
    }) {
        stateStore.set_api_status(true)
        const accessToken = useCookie('accessToken').value
        if (accessToken) {
            options.headers = {
                ...options.headers,
                Authorization: `Bearer ${accessToken}`,
            }
        }
    },
    async onResponse() {
        stateStore.set_api_status(false)
    },
})