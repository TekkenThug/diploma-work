// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  typescript: {
    strict: true
  },
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap' }
      ]
    }
  },

  css: ['normalize.css', '@splidejs/vue-splide/css'],

  modules: ['nuxt-icon'],

  plugins: [
    '@/plugins/vue-splider'
  ],

  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "@/assets/sass/_global.sass" as *'
        }
      }
    }
  }
})
