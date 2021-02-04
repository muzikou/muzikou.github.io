### 组件跨层级通信

**<font color="#d63200">上下文</font>** 提供一种不需要每层设置 ```props``` 就能跨多级组件传递数据的方式，

### 创建上下文

```js
const MyContext = React.createContext()
```

代码中用 **<font color="#d63200">React.createContext</font>** 来创建上下文，创建之后要如何使用呢？  

我们就需要一个提供者，来提供上下文，如下

### 提供上下文

```js
const { Provider } = MyContext;
export default function App() {
    return (
        <div>
            <Provider value={{foo: "bar"}}>
                <Child />
            </Provider>
        </div>
    );
}
```

代码中首先把 **```Provider```** 从 **```MyContext```** 中解构出来，然后通过 **```Provider```** 来提供上下文，把 **```Child```** 用 **```Provider```** 包裹起来，里面嵌套多少层没有限制。  

有了数据的提供，要怎么消费使用数据呢？如下：

### 消费上下文

```js
import React, { useContext } from 'react'

const MyContext = React.createContext()
const { Provider, Consumer } = MyContext;
export default function App() {
    return (
        <div>
            <Provider value={{ foo: "bar" }}>
                <Consumer>
                    {value => <Child {...value}></Child>}
                </Consumer>
            </Provider>
        </div>
    );
}
```

上面代码展示了 **<font color="#d63200">Consumer</font>** 方法，首先把 **```Consumer```** 从 **```MyContext```** 中解构出来，然后把想要获取值的 ```Child``` 用 ```Consumer``` 包裹起来，同时注意写法的特殊性。

除了上面的 **<font color="#d63200">Consumer</font>** 方法，还可以使用 **<font color="#d63200">useContext</font>** 钩子，如下：

```js
import React, { useContext } from 'react'
const MyContext = React.createContext()
const { Provider } = MyContext;
// 使用 Hook 消费
function Child(){
    const ctx = useContext(MyContext)
    return (
        <div>
            child: { ctx.foo }
        </div>
    )
}
export default function App() {
    return (
        <div>
            <Provider value={{ foo: "bar" }}>
                <Child />
            </Provider>
        </div>
    );
}
```

还有可以使用 **```class```** 指定静态 **<font color="#d63200">contextType</font>**，如下：

```js
import React, { Component } from 'react'
const MyContext = React.createContext()
const { Provider } = MyContext;
class Child extends Component{
    static contextType = MyContext;
    render(){
        return <div>  child: { this.context.foo } </div>
    }
}
export default function App() {
    return (
        <div>
            <Provider value={{ foo: "bar" }}>
                <Child />
            </Provider>
        </div>
    );
}
```

上面代码中指定静态 **```contextType```** 之后，就会在 ```this``` 实例中挂载 ```context```，使用时 ```this.context``` 就可以。  

**<font color="#d63200">注意：</font>** 此时必须用 ```context```， 不然会出错
