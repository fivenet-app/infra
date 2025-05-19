<script setup lang="ts">
useHead({
    htmlAttrs: {
        lang: "en",
    },
    meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [
        {
            rel: "icon",
            type: "image/png",
            href: "/favicon.png",
        },
    ],
});

useSeoMeta({
    ogSiteName: "FiveNet",
    ogImage: "/social-card.png",
    twitterImage: "/social-card.png",
    twitterCard: "summary_large_image",
});
</script>

<template>
    <UApp>
        <NuxtLoadingIndicator
            color="repeating-linear-gradient(to right, #55dde0 0%, #34cdfe 50%, #7161ef 100%)"
        />

        <UMain>
            <NuxtLayout>
                <NuxtPage />
            </NuxtLayout>
        </UMain>

        <Footer />
    </UApp>
</template>
