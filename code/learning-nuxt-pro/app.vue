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


<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>