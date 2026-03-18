<script lang="ts" setup>
import Logo from "./Logo.vue";

const year = new Date().getFullYear();

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
    <UFooter :items="items">
        <template #left>
            <Logo class="mr-1 h-auto w-8" />

            <span>Copyright © {{ year }} Galexrt All rights reserved.</span>
        </template>

        <UNavigationMenu :items="items" variant="link" />

        <template #right>
            <UButton
                icon="i-simple-icons-github"
                color="neutral"
                variant="ghost"
                to="https://github.com/fivenet-app/fivenet"
                target="_blank"
            />
            <UButton
                icon="i-simple-icons-discord"
                color="neutral"
                variant="ghost"
                to="https://discord.gg/ASRPPr8CeT"
                target="_blank"
            />
        </template>
    </UFooter>
</template>
