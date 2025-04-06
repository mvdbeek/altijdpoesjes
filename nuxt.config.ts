// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  vite: {
    server: {
      host: '0.0.0.0',
      port: 3000
    }
  },
  app: {
    baseURL: '/altijdpoesjes/',
    head: {
      title: 'altijdpoesjes - Handmade Art',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Handmade art and crafts by altijdpoesjes' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
