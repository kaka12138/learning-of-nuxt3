<script setup lang="ts">
const id = ref(1)

// const { data, error, refresh } = await useFetch(`https://jsonplaceholder.typicode.com/todos/${id.value}`, {
//   watch: [id]
// })

// Computed URL
const { data, error, refresh } = await useFetch(() =>`https://jsonplaceholder.typicode.com/todos/${id.value}`, {
  watch: [id]
})
const changeId = () => {
    id.value++
}
</script>


<template>
    <p>useFetch</p>
    <div>
        <button @click="changeId">change id</button>
    </div>
</template>
