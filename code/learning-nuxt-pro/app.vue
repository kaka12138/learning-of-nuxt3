<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  app page
</template>

<script setup lang="ts">
useHead({
  title: "Home",
  titleTemplate: `%s | Nuxt`,
})


const runtimeConfig = useRuntimeConfig()
// console.log("runtimeConfig", runtimeConfig)
const appConfig = useAppConfig()
// console.log("appConfig", appConfig)
const count = ref(0)
// count.value =  "string"
</script>
