### Assets
1. nuxt处理Assets资源文件的两种方式: public和assets
2. Assets一般指的是stylesheets, fonts or images

### public
- 1. 内容
    - public中的内容将按原样在服务器根目录中提供
- 2. 访问
    - 可以在代码/浏览器中通过"/"访问其中的资源文件

### assets
- 1. 内容
    - assets中的内容包含你希望构建工具处理的资源
- 2. 存储
    - 默认情况下, nuxt只会提供assets文件夹用于存储资源文件, 并不会自动扫描/处理这些文件
- 3. 访问
    - 通过正确的路径访问即可, 如"@/assets/img1.png", "~/assets/img1.png"
    - 这些文件不像public, 在浏览地址栏中不能被访问, 因为没在服务器根目录下
- 3. 处理
    - 想要处理这些文件，为构建工具配置相应功能处理这些资源文件

### 全局样式导入
- 1. 全局的样式注入可以在nuxt.config中的vite.css选项下配置