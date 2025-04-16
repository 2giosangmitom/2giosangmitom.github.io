// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss"],
  modules: [
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "nuxt-site-config",
    "nuxt-seo-utils",
    "@nuxthub/core",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxt/content",
  ],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  site: {
    url: "https://2giosangmitom.is-a.dev/",
    name: "Vo Quang Chien",
  },
  robots: {
    blockNonSeoBots: true,
  },
  colorMode: {
    preference: "system",
    fallback: "light",
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_variables.scss" as *;',
        },
      },
    },
  },
  hub: {
    database: true,
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: "catppuccin-latte",
            ["dark-mode"]: "catppuccin-mocha",
          },
          langs: [
            "lua",
            "javascript",
            "cpp",
            "java",
            "typescript",
            "bash",
            "shell",
          ],
        },
      },
    },
  },
  seo: {
    meta: {
      description: "Discover the blog of Vo Quang Chien.",
      author: "Vo Quang Chien",
      colorScheme: "dark light",
      applicationName: "Vo Quang Chien",
    },
  },
});
