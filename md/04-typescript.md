### typescript support
- 1. nuxt3 模式为用户提供类型化的支持
- 2. 类型检测
- 3. 自动生成类型
- 4. 严格类型检查


### 类型检查
- 1. 因为考虑性能, nuxt在nuxi dev 和 nuxi build时不会进行类型检查
- 2. 开发环境类型检查
    - 安装 vue-tsc 和 typescript 作为开发依赖, 进行类型检查
    - 进行检查脚本命令：npx nuxi typecheck
- 3. 生产环境类型检查
```ts
export default defineNuxtConfi({
    typescript: {
        typeCheck: true
    }
})
```

### 自动生成类型
- 1. 当运行nuxi dev或者nuxi build时, nuxt会自动.nuxt/nuxt.d.ts, .nuxt/tsconfig.json文件， 给IDE用于类型检查
- 2. .nuxt/nuxt.d.ts
    - 包括正在使用的modules类型和nuxt3的关键类型
- 3. .nuxt/tsconfig.json
    - TODO:给项目推荐的基础ts配置，包括nuxt或modules注入的别名

### 严格类型检查
- 1. nuxt3默认开启严格类型检查
- 2. 关闭严格类型检查
```ts
export default defineNuxtConfig({
    typescript: {
        strict: false
    }
})
```