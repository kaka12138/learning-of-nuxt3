### Rendering Modes
- 1. 概述
- 2. universal rendering
- 3. client-side rendering
- 4. Deploying a Static Client-Rendered App
- 5. Hybrid Rendering
- 6. Edge-Side Rendering
- 7. 注意事项

### 概述
- 1. Nuxt支持通用渲染, 客户端渲染, 混合渲染, Edge-Side Rendering
- 2. rendering定义
    - 浏览器和服务器都可以解释 JavaScript 代码，将 Vue.js 组件转换为 HTML 元素
- 3. Nuxt的默认渲染模式: universal rendering(服务端+水合)
    - 默认的渲染模式提供更好的用户体验, 性能, 和搜索引擎优化(SEO)

### universal rendering
- 1. universal rendering: 服务端渲染 + 水合
- 2. 流程
    - 当用户请求一个URL时, 服务端会返回一个已经渲染好的HTML页面到浏览器
    - 下载完HTML后，浏览器加载后台运行的js代码，然后再次解释js代码,完成水合, 随后将控制全交给vue.js
- 3. 优点
    - 性能
    - SEO
- 4. 缺点
    - 服务器和浏览器中APIs不一致, 尽可能编写两端都可用的代码, Nuxt提供了变量区分环境
    - 服务器成本

### client-side rendering
- 1. 简单理解: SPA
- 2. 流程
    - 浏览器下载空的HTML
    - 浏览器下载并执行JS
    - vue.js进行渲染
- 3. 优点
    - 无需考虑服务器环境, 开发速度快
    - 没有服务器成本
    - 一定程度上断网可用
- 4. 缺点
    - 首页初始化慢, 必须等待JS下载并解析完成才开始渲染
    - SEO不友好
- 5. Nuxt配置
    - nuxt.config.ssr: false, 这个Nuxt app将变成客户端渲染(SPA),
    - 创建~/app/spa-loading-template.html文件用于显示加载页面

### Deploying a Static Client-Rendered App
- 1. 使用 nuxi generate生成的结果, 会为每个页面都生成对应的HTML, 如果想只生成像SPA一样的应用，可以进行以下配置:
    ```ts
    export default defineNuxtConfig({
        hooks: {
            'prerender:routes' ({ routes }) {
            routes.clear() // Do not generate any routes (except the defaults)
            }
        },
        })
    ```

### Hybrid Rendering
- 1. 作用
    - 可以使每个路由进行指定的渲染方式，这决定了服务器是怎么响应请求的
- 2. 配置
    - nuxt.config.routeRules
- 3. routeRules配置项
    - redirect: 定义服务端重定向
    - ssr: true(服务端渲染), false(客户端渲染-SPA)
    - cors: 自动添加cors相关的请求头, 可以被覆盖headers
    - headers: 自定义请求头
    - swr
        - 在给服务器的响应结果添加缓存响应头, **将响应结果添缓存到服务器或者代理服务器**，swr就是配置TTL(缓存结果的有效时间), 超过TTL，在后台重新生成页面，不再使用缓存结果
        - 可配置number或boolean, 如果为true表示永久使用缓存结果
    - isr
        - 作用和swr类似，**只是将响应结果添加到CDN缓存中**(目前支持的CDN平台Netlify, Vercel)
        - 可配置number或boolean, 如果为true表示直到下次在CDN部署前, 一直使用缓存
    - prerender: 在构建时预渲染路由, 将其渲染结果包含到打包结果中(作为静态资源)
    - experimentalNoScripts：禁用 Nuxt 脚本和 JS 资源的渲染
    - appMiddleware: 指定路由中间件
    


### Edge-Side Rendering
- 1. 作用
    - 边缘渲染 (ESR) 是 Nuxt 3 中引入的一项强大功能，它允许通过内容分发网络 (CDN) 的边缘服务器将 Nuxt 应用程序渲染得更靠近用户

### 注意事项
- 1. ***请注意，使用 nuxt generated 时混合渲染不可用***