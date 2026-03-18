<script setup lang="ts">
import AppHeader from "~/components/AppHeader.vue";
import "~/assets/css/herofull-pattern.css";

useSeoMeta({
    title: "Error 503 - FiveNet",
    description: "We are sorry but this page could not be found.",
});

useHead({
    htmlAttrs: {
        lang: "en",
    },
});
</script>

<template>
    <AppHeader />

    <UMain>
        <div
            class="hero absolute inset-0 z-[-1] mask-[radial-gradient(100%_100%_at_top,white,transparent)]"
        />

        <UContainer>
            <UPage>
                <slot />
            </UPage>
        </UContainer>
    </UMain>
</template>
