// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@vueuse/nuxt'
  ],
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'github-light',
            dark: 'github-dark'
          },
          langs: ['javascript', 'typescript']
        }
      }
    }
  },
  icon: {
    mode: 'svg'
  },
  site: {
    url: 'https://2giosangmitom.is-a.dev',
    name: "2giosangmitom's Personal Blog"
  },
  runtimeConfig: {
    public: {
      DISCORD_WEBHOOK_URL: import.meta.env.NUXT_DISCORD_WEBHOOK_URL
    }
  },
  sitemap: {
    zeroRuntime: true
  }
});
