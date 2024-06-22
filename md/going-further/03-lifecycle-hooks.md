### Lifecycle Hooks
1. Nuxt Hooks(Build Time)
2. App Hooks(Runtime)
3. Server Hooks(Runtime)
4. Additional Hooks
5. All Hooks
    - https://nuxt.com/docs/api/advanced/hooks#nuxt-hooks-build-time

### Nuxt Hooks(Build Time)
- 1. 这些hooks在Nuxt Modlues 和 build context中可获得
- 2. 在nuxt.config.hooks中使用，或者在Nuxt Modules中使用
- 3. 常用hooks
    - ready: Nuxt初始化后, Nuxt示例准备好时调用
    - close: 当Nuxt实例正常关闭时调用
    - restart: Nuxt实例重启时调用
    - app:resolve: 在app实例解析后调用
    - build:before: 在Nuxt打包之前调用
    - build:done: 在Nuxt打包完成后调用
    - pages:extend: 在pages routes解析后调用
    ...

### App Hooks(Runtime)
- 1. 这些hooks主要用于nuxt plugins，在渲染生命周期中hook和用在Vue Composables中
- 2. 常用hooks
    - app:created: 在app实例创建后调用
    - app:rendered：在app实例渲染完成后调用
    - app:redirected：在 SSR 重定向之前调用
    - page:start: 在Suspense组件pendding事件时调用
    - page:finish: 在Suspense组件resolve事件后调用
    - page:loading:start: 页面setup函数运行时调用
    ...

### Server Hooks(Runtime)
- 1. 这些hooks主要用于server plugins, 在Nitro的运行时进行hook
- 2. 常用hooks
    - dev:ssr-logs: 在开发模式下, ssr服务日志
    - render:response: 在发送response之前调用
    - render:html: 在构建HTML之前调用
    - request: 当一个请求被接收时调用
    - afterResponse:在发送response之后调用
    ...

### Additional Hooks
- 1. 您可以通过扩展 Nuxt 提供的类型来添加其他挂钩。这对于模块很有用
```ts
import { HookResult } from "@nuxt/schema";

declare module '#app' {
  interface RuntimeNuxtHooks {
    'your-nuxt-runtime-hook': () => HookResult
  }
  interface NuxtHooks {
    'your-nuxt-hook': () => HookResult
  }
}

declare module 'nitropack' {
  interface NitroRuntimeHooks {
    'your-nitro-hook': () => void;
  }
}
```