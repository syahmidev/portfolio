// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        }
    },
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    css: ["@/assets/main.css", "animate.css/animate.min.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ['@hypernym/nuxt-anime'],
})
