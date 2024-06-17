### Prerendering
- 1. 概述
- 2. Crawl-based Pre-rendering
- 3. Selective Pre-rendering
- 4. Runtime prerender configuration

### 概述
- 1. Nuxt允许在构建时预渲染页面, 这样可以提升某些性能或则SEO指标
- 2. 在构建时预先渲染好页面,在请求时,Nuxt直接提供这些预先构建好的页面而不是动态生产这些页面
- 3. **应用场景**
  - 一般用于生成静态的页面
  - 也可以通过动态内容+预渲染的方式来生成页面（即：在构建阶段获取数据，然后将这些数据预先注入到页面中）

### Crawl-based Pre-rendering
- 1. 预渲染app是使用的Nitro crawler
- 2. 预渲染方式
  - nuxi generate命令
  - nuxt build(nitro.static: true)
  - nuxt build --prerender
- 3. Nitro crawler的原理：
  - 1. 加载应用根路由(/)的HTML, pages目录下的非动态页面, 和在nitro.prerender.routes数组中路由
  - 2. 保存HTML和payload.json到~/.output/public/目录, 以便提供静态服务(访问)
  - 3. 找到HTML中的所有的锚点标签(<a href="...">)以便可以导航到其他路由
  - 4. 对每个锚点标签重复1-3步骤，直到处理完所有锚点标签
- 4. 理解
  - 上述步骤中未被锚点标签链接到的页面就不会被预渲染

### Selective Pre-rendering
- 1. 可以在nuxt.config.nitro.prerender.routes数组中指定需要预渲染的路由,以及uxt.config.nitro.prerender.ignore数组中指定需要忽略的路由(一般是动态路由)
- 2. 这些预渲染的页面是会被爬虫抓取到的，但是可以设置nuxt.config.nitro.prerender.crwalLinks:true, 这样爬虫就不会爬取到(类似于：/sitemap.xml 或者 /robots.txt的作用)
- 3. 在nuxt.config.routeRules中也可以对路由配置预渲染规则
- 4. 在页面中，也可以使用defineRouteRules配置预渲染规则(实验性功能)

### Runtime prerender configuration
- prerenderRoutes
  - 1. 您可以在运行时在 Nuxt context中调用,来添加更多 Nitro 预渲染的路由
  - 2. Nuxt context
    -  plugins, Nuxt hooks, Nuxt middleware, and setup functions (in pages and components)
  - 3. 注意
    - 生效
      - prerenderRoutes只能在Nuxt context中调用，并且只在prerendering时生效(即:当前页面/路由是预渲染页面，才能继续调用prerenderRoutes[Crawl-based Pre-rendering的原理])
    - 无效
      - 在浏览器，在prerendering之外都无效
  - 4. 示例
  ```vue
  <script setup>
    prerenderRoutes(["/some/other/url"]);
    </script>

    <template>
      <div>
        <h1>This will register other routes for prerendering when prerendered</h1>
      </div>
    </template>
  ```
- prerender:routes Nuxt hook
  - 作用
    - 在预渲染其他路由之前,调用次hook(这是针对其他预渲染的路由)
- prerender:generate Nitro hook
  - 作用
    - 在每个路由预渲染时,都会调用次hook(这是针对当前路由的预渲染)

