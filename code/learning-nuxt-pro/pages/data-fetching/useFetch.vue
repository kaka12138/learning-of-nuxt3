<script setup lang="ts">
// import { useTestUseFetch } from "@/hooks/useTestUseFetch";
// // debugger
// const id = ref(1)
// const str = `str${id.value}`
// const { getUrl, _request } = useTestUseFetch(() => `str${id.value}`)
// // const { getUrl, _request } = useTestUseFetch(() =>`str${id.value}`)
// const changeId = () => {
//     // 动态改变url是不行的，因为useFetch在第一次初始化时，已经确定了url,这样便于确定key
//     id.value++
//     getUrl()
// }
// setTimeout(() => {
//     id.value = 2
//     getUrl()
// }, 1000);
const id = ref(1)
const url1 = computed(() => `str${id.value}`)
const str = id.value
const url = computed(() => str)
setTimeout(() => {
    id.value = 2
}, 1000);
</script>

<template>
    <p>useFetch</p>
    {{ url1 }}
    <!-- {{ _request }} -->
    <div>
        <!-- <button @click="changeId">change id</button> -->
    </div>
</template>
