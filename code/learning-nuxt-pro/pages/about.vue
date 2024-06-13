<template>
    <div>
        about page     
    </div>
</template>

<script setup lang="ts">
useHead({
    title: "About",
})
definePageMeta({
    middleware: defineNuxtRouteMiddleware((to, from)=> {
        console.log('about page middleware')
    }),
})
</script>