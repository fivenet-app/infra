<script setup lang="ts">
import type { NuxtError } from "#app";
import DocsHeader from "./components/DocsHeader.vue";

useSeoMeta({
    title: "Page not found",
    description: "We are sorry but this page could not be found.",
});

defineProps({
    error: {
        type: Object as PropType<NuxtError>,
        required: true,
    },
});

useHead({
    htmlAttrs: {
        lang: "en",
    },
});

const router = useRouter();
</script>

<template>
    <div>
        <DocsHeader />

        <UMain>
            <UContainer>
                <UPage>
                    <UError
                        :error="error"
                        :clear-button="{
                            label: 'Go back',
                            click: () => router.back(),
                        }"
                    />
                </UPage>
            </UContainer>
        </UMain>

        <Footer />

        <UModals />
        <UNotifications />
    </div>
</template>
