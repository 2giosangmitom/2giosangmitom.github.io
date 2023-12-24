// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts'
  ],
  devtools: { enabled: true },
  eslint: {
    lintOnStart: false
  },
  googleFonts: {
    families: {
      Roboto: true
    }
  }
})
