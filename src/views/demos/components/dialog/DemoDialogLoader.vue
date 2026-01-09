<script setup>
    const isDialogVisible = ref(false)
</script>

<template>


    <VDialog persistent v-model="isDialogVisible" width="300">
        <VCard color="primary" width="300">
            <VCardText class="pt-3 text-white">
                Please stand by
                <VProgressLinear indeterminate class="mt-4" color="#fff" />
            </VCardText>
        </VCard>
    </VDialog>
</template>