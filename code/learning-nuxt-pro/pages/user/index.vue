<template>
    <div>
        user page
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "user-layout",
    middleware: "user-route-middleware",
})
</script>