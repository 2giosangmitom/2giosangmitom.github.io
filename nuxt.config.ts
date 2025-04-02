// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@nuxt/ui",
    "@nuxthub/core",
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
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
});
