**<font color="#d63200">React</font>** 默认只支持同步，实现异步任务，比如延迟、网络请求等需要中间件的支持，例如较简单的 **```redux-thunk```**, **```redux-logger```**。

### 安装

```shell
npm install redux-thunk redux-logger --save
```

安装完成以后，需要修改 ```store.js``` 配置，应用中间件，如下：

```js
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
const counterReducer = (state=0, actions ) => {
    switch (actions.type) {
        case 'add':
            return state+1;
        case 'minus':
            return state-1;
        default:
            return state;
    }
}
const  store = createStore(counterReducer, applyMiddleware(logger, thunk))
export default store;
```

代码所示，应用中间件 **<font color="#d63200">ReaapplyMiddlewarect</font>**，作为 **<font color="#d63200">createStore</font>** 函数的第二个参数传递，其本质是个函数，可以带参数，根据中间件的顺序来进行传递参数。

下面是应用方法， ```ReduxT.js``` 代码：

```js
import React from 'react'
import { connect } from 'react-redux'
const mapStateToProps = state => ({num: state })
const mapDispatchToProps = {
    add: ()  => ({type: 'add'}),
    minus: ()  => ({type: 'minus'}),
    asynAdd: () => (
        dispatch => {
            setTimeout(() => {
                dispatch({type: 'add'})
            }, 1000)
        }
    )
}
@connect(mapStateToProps, mapDispatchToProps)
class ReduxT extends Component{
    render(){
        const {num, add, minus, asynAdd} = this.props
        return (
            <div>
                <p>{num}</p>
                <button onClick={add}>+</button>
                <button onClick={minus}>-</button>
                <button onClick={asynAdd}>asynAdd</button>
            </div>
        )
    }
}
export default ReduxT
```

上面代码中我们映射一个异步操作 **```asynAdd```** 方法，返回的不再是个对象，而是一个函数，而且这个函数有 ```dispatch``` 参数。可以派发动作，实现异步操作。
