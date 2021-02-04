上一篇文章虽然实现了页面的更新，但是每次状态更新都重新调用 **```render```**，这样很不合理，想用更方便的方式，需要 **<font color="#d63200">react-redux</font>**  的支持

提供了两个 **api**：

- **```Provider```** 顶级组件，提供数据
- **```connect```** 高阶组件，提供数据和方法

### 安装

```shell
npm install react-redux -s
```

安装完成以后，在需要用到组件的文件中注入 store

例如创建 ```ReduxT.js``` 组件，然后在 ```app.js``` 中使用 ```ReduxT```，```app.js``` 代码如下：

```js
import ReduxT from './ReduxT';
import { Provider } from 'react-redux'
import store from './store'
function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <ReduxT />
            </Provider>
        </div>
    );
}
export default App;
```

代码所示，我们需要利用 **```Provider```** 实现隔代的通信，把 ```store``` 往下传递，这样子组件就不需要再注入 ```store```。

下面是 ```ReduxT.js``` 代码，：

```js
import React from 'react'
import { connect } from 'react-redux'
// 做一系列的映射
const mapStateToProps = state => ({num: state })
const mapDispatchToProps = {
    add: ()  => ({type: 'add'}),
    minus: ()  => ({type: 'minus'})
}
function ReduxT({num, add, minus}) {
    return (
        <div>
            <p>{num}</p>
            <button onClick={add}>+</button>
            <button onClick={minus}>-</button>
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(ReduxT)
```

**<font color="#d63200">connect</font>** 是一个高阶组件，接收一个组件，返回一个强化后的组件，其本质上是个工厂函数，先把配置项当作参数传递进去，然后返回高阶组件之后再去执行操作。

### 装饰器写法

上面的代码也可以用装饰器写法，如下：

```js
import React, {Component} from 'react'
import { connect } from 'react-redux'
// 做一系列的映射
const mapStateToProps = state => ({num: state })
const mapDispatchToProps = {
    add: ()  => ({type: 'add'}),
    minus: ()  => ({type: 'minus'})
}
// 类装饰器写法
@connect(mapStateToProps, mapDispatchToProps)
class ReduxT extends Component{
    render(){
        const {num, add, minus} = this.props
        return (
            <div>
                <p>{num}</p>
                <button onClick={add}>+</button>
                <button onClick={minus}>-</button>
            </div>
        )
    }
}
export default ReduxT
```
