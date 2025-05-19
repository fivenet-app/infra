<script lang="ts" setup>
useHead({
    title: "FiveNet Infra healthz",
});
definePageMeta({
    title: "FiveNet Infra healthz",
    layout: "error",
});
</script>

<template>
    <UError
        :error="undefined"
        :status="200"
        name="Healthz Endpoint"
        message="Why are you on this page? You shouldn't be here!"
        :clear-button="{
            label: 'Go to the FiveNet Homepage',
            to: 'https://fivenet.app/',
            external: true,
        }"
        :ui="{ message: 'mx-auto max-w-(--breakpoint-md)' }"
    />
</template>
