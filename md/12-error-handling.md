### Error Handling
- 1. 产生错误的地方
- 2. Vue Errors
- 3. Startup Errors
- 4. Nitro Server Errors
- 5. Errors with JS chunks
- 6. Error Page
- 7. Error Utils
- 8. Render Error in Component

### 产生错误的地方
- 1. 发生在Vue渲染的生命周期(SSR + CSR)
- 2. 服务端和客户端启动错误(SSR + CSR)
- 3. 发生在Nitro 服务器生命周期的错误(即：server目录下的API)
- 4. 发生在JS chunks下载过程中

### Vue Errors
- 1. 捕获方式
    - Vue提供的onErrorCaptured钩子函数: 捕获后代组件传递上来的错误
    - Nuxt提供的vue:error hook: 基于onErrorCaptured实现的
    - nuxtApp.vueApp.config.errorHandler: 全局的错误捕获
    ```ts
    // plugins/error-handler.ts
    export default defineNuxtPlugin((nuxtApp) => {
        nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
            // handle error, e.g. report to a service
        }

        // Also possible
        nuxtApp.hook('vue:error', (error, instance, info) => {
            // handle error, e.g. report to a service
        })
    })
    ```

### Startup Errors
- 1. 在启动Nuxt App时, 可以使app:error hook来捕获启动错误, 错误捕获范围包括：
    - 运行Nuxt plugins
    - 在执行app:created 和 app:beforeMount Hooks时
    - 将Vue app渲染成HTML(SSR)
    - 在客户端挂在app时
    - 在执行app:mounted hook时

### Nitro Server Errors
- 1. 您当前无法为这些错误定义服务器端处理程序，但可以呈现错误页面

### Errors with JS chunks
- 1. 错误发送的场景
    - 在下载chunk时, 网络连接失败或者在新部署时导致老的js chunk失效
- 2. Nuxt内置处理
    - Nuxt 提供内置支持，通过在路由导航期间加载块失败时执行硬重新加载来处理块加载错误
    - 可以使用experimental.emitRouteChunkError:false来关闭此功能
- 3. 自定义的手动处理
    - 定义插件手动处理: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/plugins/chunk-reload.client.ts

### Error Page
- 1. 当Nuxt遇到错误时，要么返回一个JSON response，要么渲染一个错误页面
- 2. 在根目录下自定义error.vue可展示错误页面，使用clearError方法清除错误状态,并跳转到正确页面
- 3. 建议
    - 使用onErrorCaptured去处理页面/组件setup中的错误
    - 定义Nuxt plugin去处理vue:error的错误

### Error Utils
- 1. useError
    - 返回正在被处理的全局的Nuxt错误
- 2. createError
    - 创建一个错误对象
    - 在服务端抛出将出发全屏的错误页面, 在客户端抛出时，需要设置fatal:true再处理错误页面
- 3. showError
    - 可以在客户端,服务端,中间件,插件, setup中调用, 会触发全屏错误页面
    - 建议使用 throw creteError()抛错
- 4. clearError
    - 清除当前的Nuxt error,可传一个路径跳转到安全页

### Render Error in Component
- 1. Nuxt提供<NuxtErrorBoundary/>处理组件级别的错误(发生在客户端的), 而不是使用一个完整的错误页面
- 2. 会阻止错误向上传递,使用#error插槽去捕获错误
```vue
    <template>
        <!-- some content -->
        <NuxtErrorBoundary @error="someErrorLogger">
            <!-- You use the default slot to render your content -->
            <template #error="{ error, clearError }">
            You can display the error locally here: {{ error }}
            <button @click="clearError">
                This will clear the error.
            </button>
            </template>
        </NuxtErrorBoundary>
    </template>
```