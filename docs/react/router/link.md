### 导航链接

用 **<font color="#d63200">Link</font>** 来做导航，如下：

```js
import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
export default function RouterT() {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Link to="/">首页</Link>
                    <Link to="about">关于</Link>
                </div>
            </BrowserRouter>
        </div>
    )
}
```

### 配置

- **路由配置**  
在 **<font color="#d63200">React</font>** 中 路由即组件，所以引入 **<font color="#d63200">Route</font>** 之后直接在组件内配置，且 **<font color="#d63200">Route</font>** 至少有两个属性，**```path```** 和 **```component```**，**```path```** 代表的是组件的路径， **```component```** 代表要渲染的组件名称， 如下：

```js
import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
function Home(){
    return (
        <div>
            <h3>首页</h3>
        </div>
    )
}
// 当前用户信息
function Aoubt(){
    return (
        <div>
            <h3>个人中心</h3>
        </div>
    )
}
export default function RouterT() {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <div>
                        <Link to="/">首页</Link>
                        <Link to="about">关于</Link>
                    </div>
                    <Route  path="/" component={Home}></Route>
                    <Route path="/about" component={Aoubt}></Route>
                </div>
            </BrowserRouter>
        </div>
    )
}
```

- **包容式路由**  
此时运行代码会发现 ```about``` 页面也有 ```home``` 页面的内容，这是因为 ```react``` 的路由是包容式路由， ```/about``` 中含有 ```/```，就是 ```Home``` 页面的的路径，所以页面也有 ```home``` 页面的内容，想要只展示 ```about``` 页面内容，需要给  **<font color="#d63200">Route</font>** 添加  **<font color="#d63200">exact</font>** 属性，如下：

```js
<Route exact path="/" component={Home}></Route>
```
