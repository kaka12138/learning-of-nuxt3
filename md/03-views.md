### 视图
- app.vue
- pages
- layouts
- Extending the HTML template

### app.vue
- 1. 默认情况下, app.vue将作为nuxt应用的入口文件
- 2. vue应用一般是main.js作为入口，nuxt在内部处理了, 从而面向开发者的是app.vue

### components
- 1. 该目录下创建的组件将被自动导入

### pages
- 1. 该目录下创建的页面将被自动注册为路由

### layouts
- 1. 默认layout为layouts/default.vue, 内部定义slot, 作为page/routea的容器
- 2. 自定义layout
    - 替换默认layout的情况
        - NuxtLayout 组件使用name属性
    - 具体page页面的layout
        - 页面使用defindMeta方法设置layout属性

### Extending the HTML template
- head层面的SEO
    - 如果只需要修改<head>标签，就不需要此拓展
- 作用：在服务发端发送HTML给客户端之前，可以对HTML进行修改(可以让开发者拥有HTML渲染时的更多控制)，比如添加一些额外的meta标签、修改title等。
- 使用：添加Nitro此插件，在render:html hook中进行修改