<script setup lang="ts">
import DocsHeader from "~/components/DocsHeader.vue";
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
    <DocsHeader />

    <UMain>
        <div
            class="hero absolute inset-0 z-[-1] [mask-image:radial-gradient(100%_100%_at_top,white,transparent)]"
        />

        <UContainer>
            <UPage>
                <slot />
            </UPage>
        </UContainer>
    </UMain>
</template>
