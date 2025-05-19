<script setup lang="ts">
const items: NavigationMenuItem[] = [
    {
        label: "FiveNet Homepage",
        href: "https://fivenet.app/",
        external: true,
        icon: "i-mdi-home",
    },
];
</script>

<template>
    <UHeader :links="links">
        <template #title>
            <ULink class="inline-flex w-full items-center gap-2" to="/">
                <img src="/favicon.png" class="size-10" />

                <span
                    class="truncate font-semibold text-gray-900 dark:text-white"
                    >FiveNet</span
                >
            </ULink>
        </template>

        <UNavigationMenu :items="items" />

        <template #right>
            <UColorModeButton />
        </template>
    </UHeader>
</template>
