// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', 'overlayscrollbars/overlayscrollbars.css'],
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],
  content: {
    build: {
      markdown: {
        highlight: {
          themes: ['github-dark', 'github-light']
        }
      }
    }
  },
  site: {
    url: 'https://2giosangmitom.is-a.dev'
  }
});
