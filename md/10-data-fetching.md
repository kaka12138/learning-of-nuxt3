### Data Fetching
- 1. 概述
- 2. useFetch, $fetch, useAsyncData
- 3. 为什么使用特殊的composables处理数据获取
- 4. useFetch
- 5. $fetch
- 6. useAsyncData
- 7. 总结
- 8. 返回值

### 概述
- 1. Nuxt提供composables去处理应用内的数据获取
- 2. Nuxt在浏览器端使用两个composables和一个内置库去处理浏览器端请求, 使用useFetch, useAsyncData and $fetch处理服务端请求

### useFetch, $fetch, useAsyncData
- 1. useFetch
    - 在组件的setup中, useFetch是最直接的处理数据数据的方式
- 2. $fetch
    - $fetch适合处理发生用户交互时的网络请求
- 3. useAsyncData
    - useAsyncData, 结合$fetch, 在数据请求时提供更细的控制
- 4. 总结
    - TODO:

### 为什么使用特殊的composables处理数据获取
- 1. 数据请求被执行两次
    - Nuxt会将一套代码在客户端和浏览器都运行一次。如果仅使用$fetch在组件的setup中会发生请求，在服务端渲染HTML时发送一次数据请求，在客户端水合时发送一次数据请求
- 2. Nuxt的处理
    - 1. 使用useFetch或者useAsyncData获取数据时，一旦数据获取发生在服务端, 获取完成的数据就会被放在payload中，一并发送到客户端
    - 2. payload可以使用useNuxtApp.payload获取。当代码在客户端执行，进行水合时就不会再次发送请求，而是直接使用payload中的数据
- 3. Suspense
    - 1. 在异步数据在试图可获得之前, Nuxt利用Vue的<Suspense>组件去阻止导航 **(即：数据获取完成后再导航)**
    - 2. 数据获取composables利用这个特性，在每次调用时使用最适合的功能去处理数据获取

### useFetch
- 1. 是最直接的数据获取方式，是useAsyncData和$fetch的一层封装
- 2. 会根据URL和请求的options生成此次请求的唯一key, 根据服务器路由为请求url提供类型提示，并推断API响应类型
- 3. 可以在setup, plugin, route middleware中使用
- 4. 返回的数据是响应式的(refs)[data, pending, error, status]和操作函数[refresh, execute], 并且在请求完成后，会将responses放到Nuxt的payload中, 供客户端水合时使用

### $fetch
- 1. Nuxt内置的ofetch库，会被自动导入， 会以$fetch别名的形式使用
- 2. 重点:
    - **只使用$fetch将会发生重复请求并且不会阻止导航**
    - **建议在客户端发生交互的场景时使用$fetch去进行数据获取**
    - **在服务端渲染时, 可以使用$fetch去调用内部的API Routes, 会节省额外的 API 调用**
    - **在使用$fetch时, 如果不使用useAsyncData包裹, 则会发生重复请求, 因为$fetch不像useFetch一样将数据放入payload传递到客户端**

### useAsyncData
- 1. 作用
    - 包裹一个异步请求逻辑, 一旦结果被解析时，再返回
- 2. 等价
    - useFetch(url) 等价于 useAsyncData(url, () => $fetch(url))
- 3. **useFetch不适合的场景**
    - 在使用第三方库发送请求时(不是使用$fetch), 就要使用useAysncData包裹一层

### 总结
- 1. 服务端渲染时, 在组件中获取数据时, 建议使useFetch 或者 useAsyncData+$fetch的组合

### 返回值
- useFetch和useAsyncData的返回值
    - TODO: