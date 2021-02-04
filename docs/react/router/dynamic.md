### 动态路由

**<font color="#d63200">动态路由</font>** 以 **```/:id```** 的形式定义参数

```js
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

function Home(){
    return (
        <div>
            <h3>课程列表</h3>
            <ul>
                <li> <Link to="detail/web">web 架构师</Link> </li>
                <li> <Link to="detail/java">Java 架构师</Link> </li>
            </ul>
        </div>
    )
}
function Detail(props){
    console.log(props)
    return (
        <div>
            当前课程：{props.match.params.course}
            <button onClick={props.history.goBack}>后退</button>
        </div>
    )

}

export default function RouterT() {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home}></Route>
                    <Route  path="/detail/:course" component={Detail}></Route>
                </div>
            </BrowserRouter>
        </div>
    )
}
```

```Detail``` 组件传递进来的路由器对象 ```props```，里面包含几个参数，：

- **history**：  导航指令， 如 ```history.back()```
- **location**：  当前 ```url``` 信息
- **match**：  获取参数信息
