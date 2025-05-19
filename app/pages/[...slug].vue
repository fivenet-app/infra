<script setup lang="ts">
definePageMeta({
    layout: "error",
});

const message =
    "Seems like either you tried to find a FiveNet instance that doesn't exist or that the Fivenet instance is having some issues. We suggest you come back later to try again.";

const status = 503;
</script>

<template>
    <UError
        :error="{
            statusCode: status,
            statusMessage: 'Not Found or Service Unavailable',
            message: message,
        }"
        redirect="https://fivenet.app/"
        :clear="{
            color: 'neutral',
            size: 'xl',
            icon: 'i-mdi-home',
            label: 'Go to the FiveNet Homepage',
            external: true,
        }"
        :ui="{ root: 'mx-auto max-w-(--breakpoint-md)' }"
    />
</template>
