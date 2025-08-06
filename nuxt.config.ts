// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/ui', '@nuxt/image'],
  css: ['~/assets/css/main.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  content: {
    build: {
      markdown: {
        toc: {
          depth: 3
        },
        highlight: {
          theme: {
            default: 'catppuccin-latte',
            ['dark-mode']: 'catppuccin-mocha'
          },
          langs: ['lua', 'javascript', 'cpp', 'java', 'typescript', 'bash', 'shell']
        }
      }
    }
  }
});