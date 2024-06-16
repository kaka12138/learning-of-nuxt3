<script setup lang="ts">
const id = ref(null)

const { data, pending, status } = useFetch(() => `https://jsonplaceholder.typicode.com/todos/${id.value}`, {
  watch: [id],
})
</script>

<template>
  <div>
    <!-- disable the input while fetching -->
    <input v-model="id" type="number" />

    <div v-if="status === 'idle'">
      Type an user ID
    </div>

    <div v-else-if="pending">
      Loading ...
    </div>

    <div v-else>
      {{ data }}
    </div>
  </div>
</template>
