// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: [
    "@nuxthub/core",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxt/content",
    "@nuxtjs/color-mode",
  ],
  content: {
    database: {
      type: "d1",
      bindingName: "content-db",
    },
  },
  hub: {
    database: true,
  },
});
