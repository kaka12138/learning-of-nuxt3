### Deployment
- 1. 概述
- 2. Node.js Server(preset Nitro)
- 3. PM2
- 4. Static Hosting
- 5. Hosting Providers
- 6. Presets
- 7. CDN Proxy

### 概述
- Nuxt App可以部署在Node.js服务器上, 预渲染的静态服务器(静态托管), 或者部署到serverless or edge (CDN) environments

### Node.js Server(preset Nitro)
- 1. 使用预设Nitro的Node服务器可以部署在任何Node主机上, 优势
    - 默认的输出格, 或自动检测
    - 按需加载chunks去渲染请求内容,以优化冷启动时间
    - 对于将 Nuxt 应用程序部署到任何 Node.js 托管非常有用
- 2. Entry Point
    - 使用nuxt build后，结果是一个入口,可以在存在预设的Nodeful服务器的任何地方运行


### PM2
- 1. PM2是一种快速、简单的解决方案，用于在服务器或虚拟机上托管 Nuxt 应用程序
- 2. 使用PM2时, 要配置ecosystem.config.cjs
- 3. Clusters Mode
    - 可以使用 NITRO_PRESET=node_cluster 以便使用 Node.js 集群模块来利用多进程性能


### Static Hosting
- 1. 将Nuxt App部署到静态服务器的方式
    - SSG
        - 结合ssr:true, 在构建预渲染路由, nuxi generate命令就是这么做的
    - 静态单页应用
        - 预渲染, 结合ssr:false, 这回产生一个有<div id="__nuxt"></div>的HTML文件, Vue app就可以在这里渲染
        - 这就像传统SPA应用一样, 对SEO不好, 建议使用ClientOnly组件包裹无法用服务器渲染呈现的内容
- 2. 仅客户端渲染
    - 如果不想预渲染路由，可以在nuxt.config.ssr: false, 这也是静态托管的一种方式
    - nuxi generate命令会生成一个如何HTML（.output/public/index.html）和js bundles，像传统的Vue单页应用一样

### Hosting Providers
- 1. Nuxt 3 可以通过最少的配置部署到多个云提供商

### Presets
- 1. 除了 Node.js 服务器和静态托管服务之外，Nuxt 3 项目还可以使用几个经过良好测试的预设和最少的配置进行部署
- 2. 预设可以在nuxt.config.nitro.preset中配置，也可以在nuxt build时使用NITRO_PRESET参数

### CDN Proxy
- 1. 在大多数情况下，Nuxt 可以使用不是由 Nuxt 本身生成或创建的第三方内容, 但有时此类内容可能会导致问题，尤其是 Cloudflare 的"Minification and Security Options"