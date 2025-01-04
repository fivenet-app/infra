<script lang="ts" setup>
const year = new Date().getFullYear();
</script>

<template>
    <UFooter :links="[]">
        <template #left>
            <img
                src="/favicon.png"
                alt="FiveNet Logo"
                title="FiveNet"
                class="mr-1 h-auto w-8"
            />

            <span>Copyright © {{ year }} Galexrt All rights reserved.</span>
        </template>

        <template #right>
            <UButton
                icon="i-simple-icons-github"
                color="gray"
                variant="ghost"
                to="https://github.com/fivenet-app/fivenet"
                target="_blank"
            />
            <UButton
                icon="i-simple-icons-discord"
                color="gray"
                variant="ghost"
                to="https://discord.gg/ASRPPr8CeT"
                target="_blank"
            />
        </template>
    </UFooter>
</template>
