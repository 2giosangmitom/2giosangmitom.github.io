export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxt/fonts"],
  fonts: {
    defaults: {
      weights: [400],
      styles: ["normal"],
    },
  },
});
