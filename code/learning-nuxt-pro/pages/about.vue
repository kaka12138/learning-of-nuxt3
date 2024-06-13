<template>
    <div>
        <h1>about page</h1>
        <div>contentcontentcontentcontentcontentcontent</div>     
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
    pageTransition: {
        name: 'rotate',
    }
})
</script>