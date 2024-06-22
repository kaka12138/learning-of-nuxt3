### How Nuxt Works?
- 1. The Nuxt Interface
- 2. The NuxtAPP Interface
- 3. 两个上下文的对比

### The Nuxt Interface --- 主要指的是nuxt context
- 1. 在使用nuxi dev命令运行app在开发环境时, 或者在使用nuxi build命令运行app在生产环境时,nuxt会创建一个公共的上下文context, 在内部被称为"**nuxt**"， 这是**Nuxt应用的构建核心(Builder Core)**
- 2. 包含的内容
    - 与nuxt.config融合时的配置项
    - 一些内部状态
    - 一个插件系统(由unjs/hookable支持) --- 允许不同组件间的通信
- 3. 这个context可以全局范围内与Nuxt Kit composables一起使用, 因此, 每个进程只允许运行一个 Nuxt 实例
- 4. Nuxt Modules
    - 为了扩展Nuxt接口或者在构建的不同阶段进行hook,可以使用Nuxt Modules
- 5. nuxt context的更多细节
    - https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/core/nuxt.ts

### The NuxtAPP Interface
- 1. 当在浏览器或者服务端器渲染一个页面时, 会创建一个共享的上下文，被称为"**nuxtApp**", 这是**Nuxt的运行时核心(Runtime Core)**
- 2. 包含的内容
    - vue实例, 运行时hooks, 内部状态(像: ssrContext, payload等)
- 3. 这个context可以使用useNuxtApp()在Nuxt Plugins, setup, vue composables中访问
- 4. 这个上下文浏览器中可以全局使用, 服务器中不能全局使用(避免服务)
- 5. 抛错
    - 如果上下文当前不可用，useNuxtApp 会抛出异常
    - 但是可以使用tryUseNuxtApp()来捕获异常,作用和useNuxtApp抛错时一样，只是tryUseNuxtApp()会返回null
- 6. Nuxt Plugins
    - 为了扩展nuxtApp接口或者在不同阶段hook, 或者访问context, 可以使用Nuxt Plugins
- 7. nuxtApp的更多细节
    - https://nuxt.com/docs/api/composables/use-nuxt-app/
    - https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/nuxt.ts

### 两个上下文的对比
- 1. 运行时上下文和构建时上下文是隔离的, 他们不支持状态, 代码, 上下文的共享(出了运行时配置)
- 2. nuxt.config 和 Nuxt Modules用于扩展构建上下文, Nuxt Plugins用于扩展运行时上下文
- 3. 当为生成构建一个应用时, nuxi build会在.output目录下生成一个独立的打包结果, 独立于 nuxt.config 和 Nuxt 模块