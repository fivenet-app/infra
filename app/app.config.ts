export default defineAppConfig({
    ui: {
        colors: {
            primary: "malibu",
            neutral: "slate",
        },

        footer: {
            bottom: {
                left: "text-sm text-gray-500 dark:text-gray-400",
                wrapper: "border-t border-gray-200 dark:border-gray-800",
            },
        },

        icons: {
            // Nuxt UI Pro Icons
            dark: "i-mdi-moon-and-stars",
            light: "i-mdi-weather-sunny",
            system: "i-mdi-computer",
            search: "i-mdi-search",
            external: "i-mdi-external-link",
            chevron: "i-mdi-chevron-down",
            hash: "i-mdi-hashtag",
            menu: "i-mdi-menu",
            close: "i-mdi-window-close",
            check: "i-mdi-check-circle",
        },
    },

    toc: {
        bottom: {
            edit: "https://github.com/fivenet-app/fivenet-app.github.io/edit/main/content",
        },
    },

    links: {
        imprint: "",
        privacyPolicy: "",
    },

    footer: {
        colorMode: false,
    },
});
