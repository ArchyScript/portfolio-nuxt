// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Dasaolu Daniel | ArchyScript",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  devtools: { enabled: false },
  css: [
    "~/assets/styles/tailwind.scss",
    "~/assets/styles/variables.scss",
    "~/assets/styles/experience.css",
    "~/assets/styles/global.scss",
  ],

  modules: ["@pinia/nuxt"],

  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
    },
  },

  pinia: {
    autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
