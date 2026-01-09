// import Vue from 'vue'
// export const EventBus = new Vue()

// Nueva implementación para Vue 3

import {
    reactive
} from 'vue'

export const EventBus = reactive({
    on(event, callback) {
        document.addEventListener(event, (e) => callback(e.detail))
    },

    emit(event, data) {
        document.dispatchEvent(new CustomEvent(event, {
            detail: data
        }))
    },

    off(event, callback) {
        document.removeEventListener(event, callback)
    }
});