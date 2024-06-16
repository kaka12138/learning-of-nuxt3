// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // pageTransition: { name: "page", mode: "out-in" },
    // layoutTransition: { name: "layout", mode: "out-in" }
  },
  devtools: { enabled: true },
  runtimeConfig: {
    apiSecrt: "666",
    public: {
      apiBase: "/kaka"
    }
  },
  typescript: {
    typeCheck: true
  }
})
