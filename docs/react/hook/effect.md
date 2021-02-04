### 副作用钩子

**<font color="#d63200">Effect</font>** 就是一个 **副作用钩子**，给函数组件增加了操作副作用的能力。  
它跟 class 组件中的 ```componentDidMount```、```componentDidUpdate```、```componentWillUnmount``` 具有相同的用途，只不过被合并成了一个 ```API```。

**<font color="#d63200">副作用</font>** 就是当前操作对 组件的状态 或者 UI样式 会有所更改，例如数据订阅时，数据改变就要更新响应就可以理解为 副作用。

**<font color="#d63200">副作用</font>** 这个钩子会在每次渲染时都执行：

```js
import React, { useState, useEffect } from 'react'
useEffect(() => {
        document.title = `你点击了${count} 次`
    })
```

如果副作用钩子只打算执行一次，那么传递第二个参数为 **```空数组 []```**，此时相当于 ```class``` 组件中的 ```compnentDidMount```：

```js
useEffect(() => {
    console.log('只执行一次')
}, [])
```

上面的代码中每次渲染都会执行，如果状态过多或者更新的过于频繁是，副作用钩子会一直执行，这样就很不合理，所以当我们想要实现当组件中某一个状态更新，副作用钩子才执行，就要声明一下依赖，下面以 ```count``` 状态为例：

```js
useEffect(() => {
    document.title = `你点击了${count} 次`
}, [count])
```

**<font color="#d63200">注意：```useEffect``` 的第二个参数是个数组，所以可以添加多个状态依赖。</font>**
