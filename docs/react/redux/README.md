学习 **<font color="#d63200">redux</font>** 之前我们首先通过一张图来认识一下：

![redux](/img/react/redux.png)

- **<font color="#d63200">store</font>** 用来存储数据，具有全局唯一性，所有的数据都在这一个数据源里进行管理，但是本身 ```redux``` 和  ```react``` 并没有直接的联系 可以单独使用。  
- **<font color="#d63200">Reducers</font>** 是用来初始化或更新状态的一个函数。当状态发生改变的时候通过 ```store``` 告知 ```reducers``` ，```reducers``` 更新完成之后返回全新的状态，```store``` 再通过订阅去通知组件。

复杂的项目才需要 **<font color="#d63200">redux</font>** 来管理数据，简单项目，```state + props + context``` 足矣，这是因为 **```redux```** 相对较难上手，这里用一个累加器举例：

1. 需要 一个 ```store``` 来存储数据
2. ```store``` 里的 ```state``` 是放置数据的地方
3. 通过 ```dispatch``` 一个 ```action``` 来提交对数据的修改
4. 请求提交到 ```reducer``` 函数里，根据传入的 ```action``` 和 ```state``` ，返回新的 ```state```

## 安装

```shell
npm install redux -s
```

## 使用

安装完成以后，在根目录创建 ```store.js``` 文件，代码如下：

```js
import { createStore } from 'redux'
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
const  store = createStore(counterReducer)
export default store;  
```

**<font color="#d63200">注意：</font>** ```Reducers``` 中每次返回的都要是全新的状态，而不是在原有状态上的更改。

## 应用

创建完成了之后，在需要用到的组件中引入，如下：

```js
import React from 'react'
import store from './store'

export default function ReduxTest() {
    return (
        <div>
            <p>{store.getState()}</p>
            <button onClick={() => store.dispatch({type: "add"})}>+</button>
            <button onClick={() => store.dispatch({type: "minus"})}>-</button>
        </div>
    )
}
```

## 订阅

此时运行代码并没有效果，这是因为 **```store```** 并没有订阅状态的更新，所以此时我们还需要去修改入口文件的 ```index.js``` 中的代码：

```js
import store from './store';

const render = () => {
    ReactDOM.render(<App />, document.getElementById('root'));
}
render()
store.subscribe(render)
```

代码中把 **```store```** 引入之后，通过 **```store.subscribe```** 方法实现订阅， **```store```** 中有状态发生更新时，就会触发这个方法的回调函数，这样就可以实现界面的更新了。
