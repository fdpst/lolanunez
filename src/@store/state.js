export const useStateStore = defineStore('counter', {
    state: () => ({
        loader: false,
        alert: {
            color: 'success',
            status: false,
            msg: '',
        },
    }),

    actions: {
        success(msg) {
            this.alert.color = 'success'
            this.alert.status = true
            this.alert.msg = msg
        },

        error(msg) {
            this.alert.color = 'error'
            this.alert.status = true
            this.alert.msg = msg
        },

        info(msg) {
            this.alert.color = 'info'
            this.alert.status = true
            this.alert.msg = msg
        },

        set_api_status(status) {
            this.loader = status
        }
    },

    getters: {
        getStatus() {
            return this.alert
        },
    },
});