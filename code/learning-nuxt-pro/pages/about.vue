<template>
    <div>
        about page     
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: defineNuxtRouteMiddleware((to, from)=> {
        console.log('about page middleware')
    })
})
</script>