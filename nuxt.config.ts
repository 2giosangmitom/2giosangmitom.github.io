export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_colors.scss" as *;',
        },
      },
    },
  },
  modules: ["@pinia/nuxt", "@nuxt/eslint", "@nuxt/test-utils/module"],
});
