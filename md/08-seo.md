### SEO
- 1. Nuxt中配置SEO的三种方式
    - head config
    - composables
    - components
- 2. 功能
    - Reactivity
    - Title Template
    - Body Tags

### head config
- 1. nuxt.config.app.head
    - 这是配置app 的入口head标签
    - 只能配置静态的值

### composables
- 1. useHead
    - 可以编程式配置head标签, 可配置动态值
    - 类型定义
    ```ts
    interface MetaObject {
        title?: string
        titleTemplate?: string | ((title?: string) => string)
        templateParams?: Record<string, string | Record<string, string>>
        base?: Base
        link?: Link[]
        meta?: Meta[]
        style?: Style[]
        script?: Script[]
        noscript?: Noscript[];
        htmlAttrs?: HtmlAttributes;
        bodyAttrs?: BodyAttributes;
    }
    ```
- 2. useSafeHead
    - TODO:
- 3. useSeoMeta
    - 定义seo meta标签

### components
- 1. Nuxt提供的Seo组件
    - <Title>, <Base>, <NoScript>, <Style>, <Meta>, <Link>, <Body>, <Html>, <Head>

### Reactivity
- 1. 以这些形式定义的seo都支持传入响应式的值
    - useHead,useSeoMeta,useSafeHead, Components

### Title Template
- 1. 作用
    - useHead的titleTemplate属性，定义网站的title
- 2. 值
    - 一个字符串, 可以使用%s代替title的值
    - 函数

### Body Tags
- 1. 作用
    - 使用tagPosition: 'bodyClose'配置项，将指定的标签加到body标签的尾部
- 2. 示例
```ts
useHead({
    // script标签将会被加到body标签的尾部
  script: [
    {
      src: 'https://third-party-script.com',
      // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
      tagPosition: 'bodyClose'
    }
  ]
})
```