### Routing
- 1. nuxt 路由是基于文件系统的，/pages 目录下的文件对应路由
- 2. pages
- 3. navigation
- 4. route Paramters
- 5. route middleware
- 6. route validation


### pages
1. nuxt会为pages目录下创建的组件生成对应路由
2. 约定使用这些文件的名称创建动态或者嵌套的路由

### navigation
- 1. 使用<NuxtLink>组件导航, 该组件默认渲染成a标签,使用href属性导航到对应页面
- 2. 在客户端端, <NuxtLink>一旦进入视口，会预先加载对应的组件或者页面

### route Paramters
- 1. 获取路由参数: useRoute()

### route middleware
- 1. 作用
    - 在路由导航到对应页面之前, 执行一些逻辑, 如检查用户权限, 验证token等
- 2. 区别
    - Route Middleware在app的Vue部分中运行
    - server Middleware在应用程序的Nitro服务器部分中运行
- 3. 分类
    - Anonymouse Route Middleware
        - 直接在其定义的页面中使用
    - Named Route Middleware
        - 被放在middleware目录下, 在页面使用时会通过异步导入的方式自动加载
        - 命名规则: some-middleware
    - Global Route Middleware
        - 被放在middleware目录下, 使用.global后缀, 每次发生路由导航时都会自动运行
- 4. 定义中间件
    ```ts
    export function defineNuxtRouteMiddleware((to, from) => {
        // 返回值
            // void: 不会阻塞导航，到下一个中间件或者完成导航
            // navigateTo(path): 重定向到执行页面
    })
    ```
- 5. 执行顺序
    - 全局 -> 命名/匿名

### route validation
- 1. 作用
    - 在跳转到页面之前先, 进行验证, 通过验证才会渲染页面, 验证不过会看看有没有其他的页面可以匹配，都没有匹配到，返回404
- 2. 应用场景
    - 验证页面之间传参数是否符合要求
- 3. 使用
    - 在definePageMeta中定义validate字段
    ```ts
    definePageMeta({
        validate: async (route) => {
            // Check if the id is made up of digits
            return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
        }
        })
    ```
- 4. 返回值
    - boolean: true渲染， false会继续匹配，没有匹配成功返回404
    - object: 一个带statusCode/statusMessage的Error对象(由createError生成)，不会进行后续匹配，直接终止
    ```ts
     definePageMeta({
        validate: async(route) => {
            throw createError({
                statusCode: 403,
                statusMessage: "You are not authorized to access this page."
            })
        }
    })
    ```