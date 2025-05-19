<template>
    <UHeader>
        <template #left>
            <ULink class="inline-flex w-full items-center gap-2" to="/">
                <img src="/favicon.png" class="size-10" />

                <span
                    class="truncate font-semibold text-gray-900 dark:text-white"
                    >FiveNet</span
                >
            </ULink>
        </template>

        <template #right>
            <UColorModeButton />
        </template>
    </UHeader>
</template>
