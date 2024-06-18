<template>
    <div>login</div>
</template>

<script setup lang="ts">
const event = useRequestEvent()
definePageMeta({
    validate: async(route) => {
        return true
        // return createError({
        //     statusCode: 403,
        //     statusMessage: "You are not authorized to access this page."
        // })
    }
})
</script>