### 嵌套路由

```js
import React from 'react'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'

// 当前用户信息
function Aoubt(){
    return (
        <div>
            <h3>个人中心</h3>
            <div>
                <Link to="/about/me">个人信息</Link>
                <Link to="/about/order">订单查询</Link>
            </div>
            <Switch>
                <Route path="/about/me" component={() => (<div>Me</div>)}></Route>
                <Route path="/about/order" component={() => (<div>order</div>)}></Route>
            </Switch>
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
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/about" component={Aoubt}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}
```

### 重定向

当我们想要实现重定向时，需要引入 **<font color="#d63200">Redirect</font>**，修改部分代码如下：

```js
import {BrowserRouter, Link, Route, Switch, Redirect} from 'react-router-dom'

// 当前用户信息
function Aoubt(){
    return (
        <div>
            <h3>个人中心</h3>
            <div>
                <Link to="/about/me">个人信息</Link>
                <Link to="/about/order">订单查询</Link>
            </div>
            <Switch>
                <Route path="/about/me" component={() => (<div>Me</div>)}></Route>
                <Route path="/about/order" component={() => (<div>order</div>)}></Route>
                <Redirect to="/about/me"></Redirect>
            </Switch>
        </div>
    )
}
```
