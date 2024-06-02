### 默认值配置
- 项目根目录下的nuxt.config.ts

### TODO:环境覆盖？？？

### 环境变量
- 1. runtimeConfig可以向App暴露环境变量
    - 默认配置服务端的
    - public下可以配置客户端的
- 2. 这些值可以使用环境变量控制文件覆盖
- 3. 在App中使用useRuntimeConfig获取环境变量

### App配置
- 1. 项目根目录下的app.config.ts
- 2. 作用：用于在构建时暴露一下公共变量
- 3. 使用：useAppconfig获取配置
- 4. 这些变量不能被环境变量文件覆盖

### runtimeConfig VS appConfig
- 1. 使用时机
    - 构建后使用：runtimeConfig
    - 构建时使用：appConfig
- 2. 存储信息
    - 私有或者公共的配置信息：runtimeConfig
    - 公共配置信息
- 3. 信息是否敏感
    - 是：runtimeConfig
    - 否：appConfig
    
### 如何外部配置文件
- 1. 对于Nitro, PostCSS，Vite, webpack这些配置是在nuxt.config.ts中进行配置的, nuxt会忽略他们的外部配置文件
- 2. 对于TypeScript, ESLint, Prettier, StyleLint, TailwindCSS, Vitest这些是使用外部配置文件


### Vue配置
- 1. 构建工具中的Vue配置
    - 使用Vite
        - vite.vue: {}
    - 使用Webpack
        - webpack.loaders.vue: {}
- 2. Vue实验性特性配置
    - vue: {}