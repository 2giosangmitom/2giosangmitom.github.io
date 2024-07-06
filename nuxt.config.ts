export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxt/fonts", "@vueuse/nuxt"],
  future: {
    compatibilityVersion: 4,
  },
  fonts: {
    defaults: {
      weights: [400],
      styles: ["normal"],
    },
  },
  compatibilityDate: "2024-07-06",
});
