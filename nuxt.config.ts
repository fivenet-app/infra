// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    telemetry: false,

    ssr: false,

    modules: ['@nuxt/ui-pro', '@nuxt/fonts', '@nuxtjs/fontaine', '@nuxtjs/fontaine', 'nuxt-single-html', '@nuxtjs/mdc'],

    future: {
        compatibilityVersion: 4,
    },

    compatibilityDate: '2024-07-05',

    css: ['~/assets/css/main.css'],

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

    nitro: {
        prerender: {
          routes: ['/', '/503', '/404'],
        },
      },
});
