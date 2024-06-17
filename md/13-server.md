### Server
- 1. 概述
- 2. Server Endpoints and Middleware
- 3. 通用部署
- 4. Hybrid Rendering

### 概述
- 1. 使用 Nuxt 的服务器框架构建全栈应用程序, 可以从数据库或者其他服务器获取数据, 创建API, 生成静态服务器内容(SSG)
- 2. Nuxt的服务器时Nitro, Nitro赋予Nuxt的能力
    - 完全控制应用程序的服务器端部分
    - 在任何提供商上进行通用部署（许多零配置）
    - 混合渲染
- 3. Nitro内部使用的时h3库, 一个高性能和可移植性而构建的最小 H(TTP) 框架
- 4. Nitro一般用于SSR, 但是也可以用于pre-rendering

### TODO:Server Endpoints and Middleware

### TODO: 通用部署

### Hybrid Rendering
- 1. Nitro一个特点: 可以读取在nuxt.config.js中定义的routeRules, 根据每个路由规则的配置进行自定义的渲染
- 2. 路由规则配置分类
    - 1. 影响SSR的渲染行为(ssr, appMiddleware,experimentalNoScripts)
    - 2. 影响客户端的渲染行为(appMiddleware, redirect and prerender)