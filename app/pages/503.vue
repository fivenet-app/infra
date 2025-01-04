<script setup lang="ts">
definePageMeta({
    layout: "error",
});
</script>

<template>
    <UPageError
        :error="undefined"
        :status="503"
        name="Service Unavailable"
        message="Seems like this Fivenet instance is having some issues. We suggest you come back later to try again."
        :clear-button="{
            label: 'Go to FiveNet Homepage',
            to: 'https://fivenet.app/',
            external: true,
        }"
    />
</template>
