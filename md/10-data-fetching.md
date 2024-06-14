### Data Fetching
- 1. 概述
- 2. useFetch, $fetch, useAsyncData
- 3. 为什么使用特殊的composables处理数据获取
- 4. useFetch
- 5. $fetch
- 6. useAsyncData
- 7. 总结
- 8. 返回值
- 9. 请求配置项 --- options

### 概述
- 1. Nuxt提供composables去处理应用内的数据获取
- 2. Nuxt在浏览器端使用两个composables和一个内置库去处理浏览器端请求, 使用useFetch, useAsyncData and $fetch处理服务端请求
- 3. **Nuxt SSR的数据传递流程: 在服务端请求数据 -> 将数据加到payload中传递到客户端 -> 客户端在水合的时候才能获取到数据并使用**
- 4. TODO:payload

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
- 5. ***使用的地方***
    - setup
    - 生命周期hooks的顶层调用

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
    - data
        - 异步数据
    - pending
        - 等待状态
    - refresh/execute
        - 重新执行请求, 更新data
        - 默认情况下, 如何有正在执行的请求, 则会等待请求完成后再refresh
    - clear
        - 清除已请求的数据，将data -> undefined，error -> null, pending -> false, status -> idle
    - error
        - 数据获取失败时的错误信息
    - status
        - 反应数据请求完成的状态(idle, pending, error, success)

### 请求配置项 --- options
- useFetch和useAsyncData公共的请求配置项
- 1. 只在客户端请求
    - lazy
        - 默认值false, 
            - 即：在异步数据返回前是不会进行路由跳转到对应页面的, 其实就是在跳转到页面时，页面数据是否已经准备好了
        - true
            - 在异步数据返回前，就进行路由跳转, 这时就要手动处理等待状态，使用pending属性标识
            - 相关hooks: useLazyFecth, useLazyAsyncData
    - server
        - 默认值true
            - 即：数据获取将在服务端和客户端都执行(这里不是指重复请求)
        - false
            - 表示只在客户端发生数据获取, 执行时机如下 
            - **在初始化页面时**, 异步数据的获取要等待水合完成再执行, 所以要处理水合的等待状态, 并且如果存在先导航再渲染页面的情况(lazy:true)，还要处理这种等待状态 
    - ***lazy和server结合的应用场景***
        - **对于页面初始化不需要的数据时/SEO不敏感的数据，可以将lazy:true, server: false, 这样这种数据就会只在客户端获取**,
        - **可以避免不必要的服务端请求, 加载服务的渲染, 减少页面的首次加载时间, 提升用户体验**
        ```ts
        /* This call is performed before hydration */
        const data = await useFetch("/api/1")
        const { pending, dat } = await useFetch("/api/2", { lazy: true, server: false })
        ```
- 2. 最小化payload
    - pick
        - 使用：从response中选择数据放到payload中
        - ***优化：该选项可以从response中选择需要的数据字段, 再将指定数据放到payload中, 可以减少payload的大小, 避免非必要的数据从服务端传递到客户端, 减少了从服务端传递ayload到客户端的流量，提升了传递速度***
    - transform
        - 作用同pick,但是可以更详细操作response数据, 再选择性的将数据添加到payload中
        ```ts
        // pick
        const { data: mountain } = await useFetch('/api/mountains/everest', {
        pick: ['title', 'description']
        })
        // transform
        const { data: mountains } = await useFetch('/api/mountains', {
            transform: (mountains) => {
                return mountains.map(mountain => ({ title: mountain.title, description: mountain.description }))
            }
            })
        ```
- 3. 缓存和重新获取