### 功能
- 1. 自动化和约定
    - 基于文件系统的路由
    - code spliting
    - SSR(开箱即用，不用单独设置服务器?)
    - 自动导入（composables, components）
    - 数据获取工具(针对SSR)
    - 零配置TS
    - 配置的打包工具(默认为vite)

- 2. 服务端渲染
    - 更快的初始化页面时间
    - SEO
    - 在低端的设备中具有更好的性能
    - 更好的可访问行性
    - 友好的缓存
    - 渲染策略
        - 静态：nuxt generate
        - 非服务端渲染(spa): ssr: false
        - 混合渲染：路由级别
    
- 3. 服务引擎：Nitro
    - 开发环境
        - server/api
        - server/middleware
    - 生成环境
        - .output

- 4. 部署
    - Node
    - Deno
    - serverless
    - edge

- 5. 模块化
    - 自定义功能扩展Nuxt
    - 集成第三方服务

- 6. Nuxt组成
    - 核心引擎：nuxt
    - 打包器：@nuxt/vite-builder, @nuxt/webpack-builder
    - 命令行工具: nuxi
    - 服务引擎：nitro
    - 开发套件：@nuxt/kit
    - Nuxt 2 Bridge: @nuxt/bridge