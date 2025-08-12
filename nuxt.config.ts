export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/content',
    '@vueuse/nuxt'
  ],
  typescript: {
    typeCheck: false
  },
  app: {
    head: {
      titleTemplate: '%s - Vo Quang Chien'
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'tokyo-night',
          langs: ['lua', 'javascript', 'cpp', 'java', 'typescript', 'bash', 'shell']
        }
      }
    }
  },
  icon: {
    mode: 'svg'
  },
  routeRules: {
    '/': { prerender: true }
  }
});
