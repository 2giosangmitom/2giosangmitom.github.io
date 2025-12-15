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
    'motion-v/nuxt',
    '@vueuse/nuxt',
    'nuxt-booster'
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
  site: {
    url: 'https://2giosangmitom.is-a.dev',
    name: "2giosangmitom's Personal Blog"
  },
  runtimeConfig: {
    public: {
      DISCORD_WEBHOOK_URL: import.meta.env.NUXT_DISCORD_WEBHOOK_URL
    }
  },
  booster: {
    detection: {
      performance: true,
      browserSupport: true
    },
    performanceMetrics: {
      device: {
        hardwareConcurrency: { min: 2, max: 48 },
        deviceMemory: { min: 2 }
      },
      timing: {
        fcp: 800,
        dcl: 1200
      }
    }
  }
});
