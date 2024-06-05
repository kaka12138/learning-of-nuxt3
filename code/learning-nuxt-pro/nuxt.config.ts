// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
