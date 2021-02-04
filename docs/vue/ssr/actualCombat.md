<!-- ### 项目实战
1. 新建项目
```shell
vue create ssr
```
2. 安装 VSR
```shell
npm install vue-server-renderer --save
``` -->
### 构建步骤
下面我们来看一下项目的构建步骤：
![webpack](/img/vue/ssr/gjbz.png) 
有图片可以看出，```Webpack``` 打包的时候，会分别生成服务端和客户端的包，那具体怎么实现的呢，下面就一步步来配置吧
### 路由
单页应用的页面路由，都是前端控制，后端只负责提供数据。
一个简单的单页应用，使用 **<font color="#d63200">vue-router</font>** ，记得安装
```shell
npm install vue-router --save
```
为了方便前后端公用路由数据，在 **```router.js```** 中对外暴露 **<font color="#d63200">createRouter</font>**。 
```JavaScript
// src/router.js
import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Index' 
Vue.use(Router)
export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
        {path:"/",component:Index }, 
        // ...
    ]
  })
}
```
### csr 和 ssr 统一入口
我们在 ```src``` 下新建一个 **<font color="#d63200">csr</font>** 和 **<font color="#d63200">ssr</font>** 统一的入口 ```createapp.js```。
```JavaScript
// /src/createapp.js
import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router' 

export function createApp (context) {
    const router = createRouter() 
    const app = new Vue({
        router,
        store,
        context,
        render: h => h(App)
    })
    return { app, router }
}
```
依然在 ```src``` 下新建一个服务端的文件 ```entry-server.js```，配置代码如下：
```JavaScript
// /src/entry-server.js
import { createApp } from './createapp'

export default context => {
    // 我们返回一个 Promise
    // 确保路由或组件准备就绪
    return new Promise((resolve, reject) => {
        const { app, router } = createApp(context)
        router.push(context.url)
        router.onReady(() => {
            resolve(app)
        }, reject)
    })
}
```
客户端的 ```main.js ```代码如下：
```JavaScript
// /src/main.js
import { createApp } from './createapp'

const { app, router } = createApp()
router.onReady(() => {
    app.$mount('#app')
})
```
### 后端加入 webPack
首先 安装依赖
```shell
npm install cross-env vue-server-renderer webpack-node-externals lodash.merge --save
```
然后配置 vue.config.js
```JavaScript 
// vue.config.js
const VueSSRServerPlugin = require("vue-server-renderer/server-plugin");
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");
const nodeExternals = require("webpack-node-externals");
const merge = require("lodash.merge");
const TARGET_NODE = process.env.WEBPACK_TARGET === "node";
const target = TARGET_NODE ? "server" : "client";

module.exports = {
    css: {
        extract: false
    },
    configureWebpack: () => ({
        // 将 entry 指向应用程序的 server / client 文件
        entry: TARGET_NODE ?`./src/entry-${target}.js`:'./src/main.js',
        // 对 bundle renderer 提供 source map 支持
        devtool: 'source-map',
        target: TARGET_NODE ? "node" : "web",
        node: TARGET_NODE ? undefined : false,
        output: {
        libraryTarget: TARGET_NODE ? "commonjs2" : undefined
        }, 
        // 外置化应用程序依赖模块。可以使服务器构建速度更快，
        // 并生成较小的 bundle 文件。
        externals: TARGET_NODE
        ? nodeExternals({
            // 不要外置化 webpack 需要处理的依赖模块。
            // 你可以在这里添加更多的文件类型。例如，未处理 *.vue 原始文件，
            // 你还应该将修改 `global`（例如 polyfill）的依赖模块列入白名单
            whitelist: [/\.css$/]
            })
        : undefined,
        optimization: {
            splitChunks: undefined
        },
        plugins: [TARGET_NODE ? new VueSSRServerPlugin() : new VueSSRClientPlugin()]
    }),
    chainWebpack: config => {
        config.module
        .rule("vue")
        .use("vue-loader")
        .tap(options => {
            merge(options, {
            optimizeSSR: false
            });
        });
    }
};
```
在根目录下新建 ```server.js```，代码配置如下：
```JavaScript
// /server.js
const fs = require("fs");
const express = require('express')
const app =express()

// 开放dist目录
app.use(express.static('./dist'))

// 第 2 步：获得一个createBundleRenderer
const { createBundleRenderer } = require("vue-server-renderer");
const bundle = require("./dist/vue-ssr-server-bundle.json");
const clientManifest = require("./dist/vue-ssr-client-manifest.json");

const renderer = createBundleRenderer(bundle, {
  runInNewContext: false,
  template: fs.readFileSync("./src/index.temp.html", "utf-8"),
  clientManifest: clientManifest
});

function renderToString(context) {
  return new Promise((resolve, reject) => {
    renderer.renderToString(context, (err, html) => {
      resolve(html);
    });
  });
}

app.get('*',async (req,res)=>{ 
  const context = {
    title:'ssr test',
    url:req.url
  }
  const html = await renderToString(context);
  res.send(html)
})

const port = 3001;
app.listen(port, function() {
  console.log(`server started at localhost:${port}`);
});
```
```package.json``` 配置打包的信息
```JavaScript
// package.json
"scripts": {
    "serve": "vue-cli-service serve",
    "build:client": "vue-cli-service build",
    "build:server": "cross-env WEBPACK_TARGET=node vue-cli-service build --mode server",
    "build": "npm run build:server && mv dist/vue-ssr-server-bundle.json bundle && npm run build:client && mv bundle dist/vue-ssr-server-bundle.json",
    "lint": "vue-cli-service lint"
}
```
### 数据响应Vuex
记得安装 vuex
```shell
npm install vuex --save
```
然后配置``` src/router.js ```和 ```createapp.js```
```JavaScript
// src/router.js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export function createStore () {
    return new Vuex.Store({
        state: {
            count:108
        },
        mutations: {},
        actions: { }
    })
}

// createapp.js
import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import { createStore } from './store'

export function createApp (context) {
    const router = createRouter()
    const store = createStore()
    const app = new Vue({
        router,
        store,
        context,
        render: h => h(App)
    })
    return { app, router }
}
``` 
**<font color="#d63200">总结：</font>**               
**<font color="#d63200">SSR</font>**  模式下，```webpack``` 打包会生成服务端和客户端两个包，在服务端接受到请求的时候，会根据请求的 ```url``` 去客户端的包里查找当前 ```url``` 对应的 ```vue``` 模版，然后解析成 ```DOM``` 节点，填充好数据之后，把整个首屏的 ```html``` 都返回给客户端进行首屏的渲染，这也很好的提高了首屏渲染的性能。


 