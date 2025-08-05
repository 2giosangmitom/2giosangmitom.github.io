// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/test-utils',
    '@nuxt/scripts',
    '@nuxt/image',
    '@nuxthub/core'
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  hub: {
    database: true,
    workers: true,
    projectKey: 'blog-ehtm'
  },
  nitro: {
    prerender: {
      routes: ['/', '/about', '/projects', '/contact']
    }
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
