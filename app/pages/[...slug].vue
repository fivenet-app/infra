<script setup lang="ts">
definePageMeta({
    layout: "error",
});

const message =
    "Seems like either you tried to find a FiveNet instance that doesn't exist or that the Fivenet instance is having some issues. We suggest you come back later to try again.";

const status = 503;
</script>

<template>
    <UPageError
        :error="undefined"
        :status="status"
        name="Not Found or Service Unavailable"
        :message="message"
        :clear-button="{
            label: 'Go to FiveNet Homepage',
            to: 'https://fivenet.app/',
            external: true,
        }"
        :ui="{ message: 'mx-auto max-w-screen-md' }"
    />
</template>
