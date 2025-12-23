// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@pinia/nuxt'
    ],
    css: [
        '~/assets/main.css'
    ],
    // Auto-import components from these directories
    components: [
        { path: '~/components/atoms', pathPrefix: false },
        { path: '~/components/molecules', pathPrefix: false },
        { path: '~/components/organisms', pathPrefix: false },
        '~/components'
    ]
})
