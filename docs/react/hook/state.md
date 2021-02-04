### 状态钩子

状态钩子 -- **<font color="#d63200">useState</font>**

```js
// 需要导入 useState
import React, { useState } from 'react'

export default function HookTest() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>点击了{count}次</p>
            <button onClick={() => setCount(count + 1)}>click</button>
        </div>
    )
}
```

代码中 **```useState(0)```** 接收一个参数 ```0```，这个参数的代表要声明的状态 **```count```** 的初始值为 ```0```，同时这个 **```useState()```** 返回一个数组，包含两个成员，第一个是声明的状态变量 **```count```** 的值，第二个是更新这个状态的函数 **```setCount```**。

上面的代码我们只定义了一个状态 ```count```，下面我们来看看定义多个状态怎么操作：

```js
// 需要导入 useState
import React, { useState } from 'react'

export default function HookTest() {
     // 多个状态
    const [score, setScore ] = useState(99)
    const [input, setInput ] = useState("")
    const [scores, setScores] = useState([99, 100])

    function HsetScores(score){
        setScores([...scores, score])
        setInput("")
    }
    return (
        <div>
            <p>选择的成绩： {score}</p>
            <p>
                <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
                <button onClick={() => HsetScores(input)}>新增成绩</button>
            </p>
            <ul>
                成绩列表：{scores.map(res =>  (<li key={res} onClick={() => setScore(res)}>{res}</li>))}
            </ul>
        </div>
    )
}
```

代码中定义了 **``score``** **```input```** **```scores```** 三个状态：  

- 当点击成绩列表的成绩时，需要调用 ```setScore()``` 去更新当前选择的 ```score``` 成绩状态  
- 当我们新增成绩时，需要调用 ```setScores()``` 更新 ```scores``` 成绩列表状态，同时调用 ```setInput()``` 置空 ```input``` 的状态。
