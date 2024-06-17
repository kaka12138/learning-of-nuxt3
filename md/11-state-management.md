### State Management
- 1. 概述
- 2. 最佳实践
- 3. useState定义的数据的初始化
- 4. Pinia

### 概述
- 1. Nuxt提了强大的状态管理库, 可以使用useState Composable去创建一个响应式的并且SSR友好的共享状态
- 2. useSate是ref的替代方案并且对SSR更友好, 其创建的值在服务端渲染后/在客户端水合作用期间会被保留,并且在所有组件中使用唯一key共享
- 3. 注意
    - useState创建的数据将被序列化成JSON,所以，数据不能包含不能被序列化的,如 classes, functions or symbols

### 最佳实践
- **在<script setup> or setup() function外部定义数据时,不要使用ref,而应该使用useState**

### useState定义的数据的初始化
- 使用callOnce来填充初始值
```ts
<script setup lang="ts">
const websiteConfig = useState('config')

await callOnce(async () => {
  websiteConfig.value = await $fetch('https://my-cms.com/api/website-config')
})
</script>

```

### Pinia
```ts
export const useWebsiteStore = defineStore('websiteStore', {
  state: () => ({
    name: '',
    description: ''
  }),
  actions: {
    async fetch() {
      const infos = await $fetch('https://api.nuxt.com/modules/pinia')

      this.name = infos.name
      this.description = infos.description
    }
  }
})
```