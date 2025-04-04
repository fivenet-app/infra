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
    <UPageError
        :error="undefined"
        :status="200"
        name="Healthz Endpoint"
        message="Why are you on this page? You shouldn't be here!"
        :clear-button="{
            label: 'Go to FiveNet Homepage',
            to: 'https://fivenet.app/',
            external: true,
        }"
        :ui="{ message: 'mx-auto max-w-screen-md' }"
    />
</template>
