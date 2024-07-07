export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "~/assets/css/variables.css"],
  modules: ["@nuxt/fonts", "@nuxt/image"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === "iconify-icon",
    },
  },
});
