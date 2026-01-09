<script setup>
    import ScrollToTop from "@core/components/ScrollToTop.vue";
    import initCore from "@core/initCore";
    import {
        initConfigStore,
        useConfigStore
    } from "@core/stores/config";
    import {
        hexToRgb
    } from "@layouts/utils";
    import {
        useTheme
    } from "vuetify";

    const {
        global
    } = useTheme();

    // ℹ️ Sync current theme with initial loader theme
    initCore();
    initConfigStore();

    const configStore = useConfigStore();

    import {
        useStateStore
    } from '@store/state'

    const store = useStateStore()
</script>
<style>
    .pointer {
        cursor: pointer;
    }
</style>
<template>
    <VLocaleProvider :rtl="configStore.isAppRTL">
        <!-- ℹ️ This is required to set the background color of active nav link based on currently active global theme's primary -->
        <VApp :style="`--v-global-theme-primary: ${hexToRgb(
        global.current.value.colors.primary
      )}`">
            <VSnackbar v-model="store.alert.status" location="top end" :color="store.alert.color">
                {{store.alert.msg}}
            </VSnackbar>

            <RouterView />

            <ScrollToTop />
        </VApp>
    </VLocaleProvider>
</template>