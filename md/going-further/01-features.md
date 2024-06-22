### Featuring
- features: 默认的功能
    - 1. inlineStyles
    - 2. noScripts
- future: 可选的功能
    - 1. compatibilityVersion
    - 2. typescriptBundlerResolution

### TODO:inlineStyles
- 1. 在rendering HTML时使用内联样式a。这个目前只在选择vite作为打包器时使用
- 2. 默认为true, 可以接收一个函数, 函数接收一个Vue组件路径，通过返回boolean值来决定是否使用内联样式

### noScripts
- 1. 禁用Nuxt脚本和JS资源的渲染
- 2. 默认为false

### compatibilityVersion
- 1. 是否启动Nuxt4的功能

### typescriptBundlerResolution
- 1. 让打包器的模块解析模式为TypeScript, 当在使用现在库时, 使用exprots时, 提供类型支持