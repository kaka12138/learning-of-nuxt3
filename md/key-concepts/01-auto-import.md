### Auto Import
- 1. 概述
- 2. Built-in Auto-improts
- 3. Directory-based Auto-imports
- 4. Auto-import from third-party packages

### 概述
1. Nuxt会自动导入components, composables, helper functions 和 Vue APIs
2. 从目录结构看, nuxt会自动导入Nuxt会自动导入components/, composables/, 和utils/目录下的所有文件
3. server/utils目录下的内容也会被自动导入
4. 自动导入可以配置自定义的文件夹或者第三方包, 在可以在nuxt.config.imports中配置

### Built-in Auto-imports
- 1. 包括以下内容:
    - data fetching: useFetch, useAsyncData等
    - app context: 可以访问Nuxt运行时的共享上下文, useNuxtApp等
    - runtime config: Nuxt 提供了一个运行时配置 API 来公开应用程序中的配置和秘密信息, useRuntimeConfig等
    - state: 内置的状态管理, useStore
    - Vue APIs: ref, computed, watch等
- 2. ***使用这些自动导入的内容时, 要注意使用的上下文(一般是: Nuxt plugin, Nuxt route middleware or Vue setup function)***

### Directory-based Auto-imports
- 1. 基于目录的自动导入:
    - components/
    - composables/
    - utils/
    - server/utils/
    - custome folders
- 2. 显示导入
    - Nuxt 使用 #imports 别名公开每个自动导入，如果需要，可以使用 #imports 使导入显式化
    - import { ref, computed } from '#imports'
- 3. 禁止自动导入(composables and utilities)
    - nuxt.config.imports.autoImport: false
- 4. 禁止导入组件
    - nuxt.config.components.dirs: []

### Auto-import from third-party packages
```ts
export default defineNuxtConfig({
  imports: {
    presets: [
      {
        from: 'vue-i18n',
        imports: ['useI18n']
      }
    ]
  }
})
```