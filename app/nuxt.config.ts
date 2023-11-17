// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: { strict: true },
  css: ["bootstrap/dist/css/bootstrap.min.css", "bootstrap-icons/font/bootstrap-icons.css"],
  build: {
    transpile: ["trpc-nuxt"],
  },
})
