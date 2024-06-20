### Server Engine
- 1. 概述
- 2. API Layer
- 3. Direct API Calls
- 4. Typed API Routes
- 5. Standalone Server

### 概述
- 1. Nuxt 3 由新的服务器引擎提供支持：Nitr
- 2. 在构建 Nuxt 3 时，我们创建了一个新的服务器引擎：Nitro, 功能如下
    - 对 Node.js、浏览器、service-workers 等的跨平台支持
    - 开箱即用
    - API routes 支持
    - 自动代码分割和异步chunk加载
    - 静态+无服务器站点的混合模式
    - 具有热模块重载功能的开发服务器

### API Layer
- Server API endpoints 和Middleware由内部使用 h3 的 Nitro 添加
    - 1. 处理程序可以直接返回对象/数组以自动处理 JSON 响应
    - 2. 处理程序可以返回将等待的承诺（还支持 res.end() 和 next()）
    - 3. 用于正文解析、cookie 处理、重定向、标头等的辅助函数
    
### Direct API Calls
- 1. Nitro 允许通过全局可用的 $fetch “直接”调用路由。
    - 如果在浏览器上运行，则会对服务器(API route???)进行 API 调用
    - 但如果在服务器上运行，则会直接调用相关函数，从而节省了额外的 API 调用

### Typed API Routes
- 1. 当使用 API 路由（或中间件）时，只要您返回一个值而不是使用 res.end() 发送响应，Nitro 就会为这些路由生成类型

### Standalone Server
- 1. Nitro 生成独立于 node_modules 的独立服务器 dist目录
- 2. 在运行nuxt时, 生成dist服务器目录