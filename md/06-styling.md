### Styling
- 1. 样式处理方式：CSS预处理器, CSS框架, UI库, Nuxt modules
- 2. 本地样式
- 3. 外部样式


### Local Stylesheets
- 1. 存放本地样式的位置应该为/asstes文件夹
- 2. 局部导入：这些样式资源可以直接导入到pages,layouts,components
    - 直接在导入(兼容服务端): import './assets/style.css'
    - js动态导入(不兼容服务端)：import('./assets/style.css')
    - style导入：@import url('./assets/style.css')
- 3. 全局导入：nuxt.config中的css选项, nuxt会将样式注入应用的全部页面
```ts
export default defineNuxtConfig({
  css: ['~/assets/css/main.css']
})
```
- 4. 使用来自npm的样式资源
    - npm install animate.css
    - 局部导入：import 'animate.css'
    - 全局导入：nuxt.config中的css选项, nuxt会将样式注入应用的全部页面
- 5. 使用字体
    - 将本地字体文件放入public, 在css中通过url()导入，再使用定义的字体

### External Stylesheets
- 1. 在html的head中引入外部样式表
    - 在nuxt.config.app.head.link中配置
    - 使用useHead()动态设置
    - 在Nitro Plugin中，提供的"render:html" hook中设置


### 使用预处理器
- 1. 样式存放位置：/assets
- 2. 局部导入/全局导入
- 3. 注入公共样式
    - 在nuxt.config.vite.css.preprocessorOptions.scss.additionalData中配置
    - 可以注入一些公共样式，预处理器的变量，混入等


### 单文件组件使用样式
- 1. style block
- 2. class, style attribute
- 3. css preprocessor
- 4. dynamic styles with v-bind(动态样式)
```vue
<script setup>
const color = ref('red')
</script>
<style>
.text {
    color: v-bind(color);
}
</style>
```
- 5. CSS Modules
```vue
<template>
    <p :class="$style.red"></p>
</template>
<style module>
    .red {
        color: red;
    }
</style>
```

### 使用PostCSS
- 1. nuxt内置PostCSS, 可以在nuxt.config.postcss中配置
- 2. nuxt中针对PostCSS的默认插件
    - postcss-import
    - postcss-url
    - autoprefixer
    - cssnano

### 通过第三方库或者modules引入样式
- 1. 根据第三方库集成到nuxt
- 2. 使用第三方库对应的modules引入(nuxt modules生态)

### 进阶
- 1. 过渡动画: <Transition />
    - 所有页面的过渡配置
        - nuxt.config.app.pageTransition: { name: 'fade', mode: 'out-in' }
        - 在app.vue添加过渡样式
    - 单个页面的过渡配置
    ```vue
    <script setup lang="ts">
        definePageMeta({
            pageTransition: { name: 'fade', mode: 'out-in' }
        })
    </script>
    ```
    - layout的过渡配置
        - 所有布局的过渡配置
            - nuxt.config.app.layoutTransition: { name: 'fade', mode: 'out-in' }
        - 单个页面中layout的过渡配置
            ```vue
            <script setup lang="ts">
                definePgaeMeta({
                    layout: "about-page-layout",
                    layoutTransition: { name: 'fade', mode: 'out-in' }
                })
            </script>
            ```

### 字体的进阶优化
- 1. FOIT(Flash of Invisible Text)
    - 当使用Web字体时，浏览器在下载字体文件时，会显示一段时间的空白文本，直到字体文件完全加载完成。这段时间内，用户可能会看到页面上出现了空白文本，然后突然闪现出字体样式
- 2. FOUT(Flash of Unstyled Text)
    - 当使用Web字体时，浏览器可能会先显示系统默认字体，然后在字体文件加载完成后，突然将文本样式化为所需的Web字体, 会因为字体的不同在切换字体时产生样式上的闪烁
- 3. 使用
    - 添加nuxt module：fontaine
- 4. 原理
    - 解决FOIT, 自动生成本地备用字体，在远程字体加载失败时，使用本地备用字体
    - 解决FOUT， 保证字体切换时的平滑过渡
- 5. 原生层面的解决方式
    - 使用font-display属性
        - swap: 这将在字体加载完成之前显示备用字体，然后在字体加载完成后再切换为所需的字体
        - fallback: 这将在字体加载完成之前显示备用字体，然后在字体加载完成后应用所需的字体样式，但可能会导致文本布局变化
        - optional: 这允许浏览器自行决定是否加载和显示字体，可以提高页面加载性能，但可能会导致字体样式稍后应用

### LCP的进阶优化
- 1. CDN
- 2. 资源压缩
- 3. Http2/3
- 4. 资源放到同一域名下，而不是不同子域名（http请求数量）
