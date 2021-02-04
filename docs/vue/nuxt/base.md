### 安装
```shell
npx create-nuxt-app <项目名>
```
安装时会有一些选项，具体请参考 [Nuxt 安装](https://www.nuxtjs.cn/guide/installation)
### 项目目录
> 运行项目：  ```npm run dev```     
> 目录结构：      
> **assets**: 资源目录 ```assets``` 用于组织未变异的静态资源如 ```LESS```、```SASS```、或 ```JavaScript```。      
> **components**: 组件目录 ```components``` 用于组织应用的 ```Vue.js``` 组件，```Nuxt.js``` 不会扩展增强该目录下 ```Vue.js``` 组件，，即这些组件不会像页面组件那样有 ```asyncData``` 方法的特性。           
> **layouts**: 布局目录 ```layouts``` 用于组织应用的布局组件。      
> **middleware**: 中间件目录 ```middleware``` 目录用于存放应用的中间件。      
> **pages**: 页面目录 ```pages``` 用于组织应用的路由及视图。```Nuxt.js``` 框架读取该目录下所有的 ``.vue`` 文件并自动生成对应的路由配置。      
> **plugins**: 插件目录 plugins 用于组织那些需要在 根vue.js应用 实例化之前需要运行的 ```Javascript``` 插件。      
> **static**: 静态文件目录 static 用于存放应用的静态文件，此类文件不会被 ```Nuxt.js``` 调用 ```Webpack``` 进行构建编译处理。 服务器启动的时候，该目录下的文件会映射至应用的根路径 / 下。      
> **store**: store 目录用于组织应用的 Vuex 状态树 文件。 ```Nuxt.js``` 框架集成了 ```Vuex``` 状态树 的相关功能配置，在 ```store``` 目录下创建一个 ```index.js ``` 文件可激活这些配置。      
> **nuxt.config.js**: ```nuxt.config.js``` 文件用于组织 ```Nuxt.js``` 应用的个性化配置，以便覆盖默认配置。      
> **package.json**: ```package.json``` 文件用于描述应用的依赖关系和对外暴露的脚本接口。    

了解了基本的结构目录，下面就请继续学习用法吧 