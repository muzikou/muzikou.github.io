**<font color="#d63200">react-router</font>** 实现了路由的核心功能  
```RR4``` 本次采用单代码仓库模型架构，这意味者这个仓库里面有若干相互独立的包，分别是：

- **react-router**： ```React Router``` 核心
- **react-router-dom**： 用于 ```DOM``` 绑定的 ```React Router```
- **react-router-native**： 用于 ```React Native``` 的 ```React Router```
- **react-router-redux**： ```React Router``` 和 ```Redux``` 的集成
- **react-router-config**： 静态路由配置的小助手

分析之后发现 **<font color="#d63200">react-router-dom</font>** 是基于 **<font color="#d63200">react-router</font>**，加入了在浏览器运行环境下的一些功能，如 ```<Link>``` ```<BrowserRouter>``` 这样的 ```DOM``` 类组件，因此我们日常基于浏览器环境的开发，只需要安装 **<font color="#d63200">react-router-dom</font>** 这个包就行了。  

### 安装

```shell
npm install --save react-router-dom
```

### 创建路由

安装完成以后，创建 ```RouterT.js``` 组件，代码如下：

```js
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

export default function RouterT() {
    return (
        <div>
            <BrowserRouter>
                <div>BrowserRouter</div>
            </BrowserRouter>
        </div>
    )
}
```

代码中利用 **<font color="#d63200">BrowserRouter</font>** 作为父容器放在最外层包裹这组件的内容

### 应用

然后在 ```app.js``` 中使用 ```RouterT```，```app.js``` 代码如下：

```js
import RouterT from './RouterT';
import { Provider } from 'react-redux'
import store from './store'
function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <RouterT />
            </Provider>
        </div>
    );
}
export default App;
```
