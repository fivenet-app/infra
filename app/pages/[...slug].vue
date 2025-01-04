<script lang="ts" setup>
useHead({
    title: "Redirecting to FiveNet website",
});
definePageMeta({
    title: "Redirecting to FiveNet website",
    layout: "error",
    requiresAuth: false,
});

navigateTo("https://fivenet.app/", { external: true });
</script>

<template>
    <div></div>
</template>
