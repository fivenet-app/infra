// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    telemetry: false,

    ssr: false,

    extends: ['@nuxt/ui-pro'],

    modules: ['@nuxt/ui', '@nuxt/fonts', '@nuxtjs/fontaine', '@nuxtjs/fontaine', 'nuxt-single-html'],

    future: {
        compatibilityVersion: 4,
    },

    compatibilityDate: '2024-07-05',

    ui: {
        safelistColors: ['primary', 'malibu'],
    },
    icon: {
        collections: ['mdi', 'simple-icons'],
        serverBundle: 'local',
    },

    fonts: {
        families: [{ name: 'DM Sans', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], global: true }],
    },

    devtools: {
        enabled: true,
    },

    typescript: {
        strict: false,
    },

    vue: {
        compilerOptions: {
            comments: false,
        },
    },
});
