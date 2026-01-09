<script setup>
    import {
        useStateStore
    } from "@store/state"

    const store = useStateStore()
</script>

<template>

    <VDialog persistent v-model="store.loader" width="300">
        <VCard color="primary" width="300">
            <VCardText class="pt-3 text-white">
                Cargando
                <VProgressLinear indeterminate class="mt-4" color="#fff" />
            </VCardText>
        </VCard>
    </VDialog>
</template>