本篇文章我们来学习组件的创建，两种组件的形式，以及如何在组件直接进行通信。
## 两种创建形式
1. 组件有两种创建形式，一种是函数的形式，一种是类的形式，具体如何操作？   
在 *<font color="#d63200">src</font>* 下新建 *<font color="#d63200">components</font>* 文件夹，再新建 *<font color="#d63200">CompType.js</font>* ，具体代码如下：
```js
import React from 'react';

//  函数类型的组件
export function Welcome1() {
    return (
        <div>
        Welcome1
        </div>
    )
}

// 基于类的组件
export class Welcome2 extends React.Component{
    render(){
      return <div>Welcome2</div>
    }
}
```
2. 然后在 *<font color="#d63200">src -> index.js</font>* 导入组件，再使用，具体代码如下：

```js
import { Welcome1, Welcome2 } from './components/CompType'

function App() {
  return (
    <div>
      {/* 使用其他组件 */}
      <Welcome1></Welcome1>
      <Welcome2></Welcome2> 
    </div>
  );
}
```

> **<font color="#d63200">比较： </font>** 
>> 如果一个组件只根据 *<font color="#d63200">props</font>* 渲染页面，没有内部的 *<font color="#d63200">state</font>* ，我们完全可以用函数组件的形式来实现( *<font color="#d63200">hooks</font>* 的到来会改变这个现状)