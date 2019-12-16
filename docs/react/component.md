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
*<font color="#d63200">比较： </font>* 如果一个组件只根据 *<font color="#d63200">props</font>* 渲染页面，没有内部的 *<font color="#d63200">state</font>* ，我们完全可以用函数组件的形式来实现( *<font color="#d63200">hooks</font>* 的到来 会改变这个现状)
## Props属性传递
1. 修改 *<font color="#d63200">CompType.js</font>* 中两种组件形式的代码如下：
```js
//  函数类型的组件
export function Welcome1(props) {
    return (
        <div>
        Welcome1,{props.type}
        </div>
    )
}

// 基于类的组件
export class Welcome2 extends React.Component{
    render(){
    return <div>Welcome2,{this.props.type}</div>

    }
}
```
*<font color="#d63200">注意：</font>* 基于类的组件 使用 *<font color="#d63200">props</font>* 属性值时，要加当前 *<font color="#d63200">this</font>* 实例      
2. 继续修改 *<font color="#d63200">src -> index.js</font>* 导入组件的方式，代码如下：
```js
function App() {
  return (
    <div>
     {/* 使用其他组件 */}
      <Welcome1 type="function"></Welcome1>
      <Welcome2 type="class"></Welcome2>
    </div>
  );
}
```
*<font color="#d63200">注意：</font>* 此时传进来的 *<font color="#d63200">props</font>* 值是只读属性，不可修改，单向数据流
## state 和 setstate
如果数据需要修改，并且同时页面响应变化，我们需要放在 *<font color="#d63200">state</font>*  中，并且使用 *<font color="#d63200">setState</font>* 来修改数据，此处我们以一个钟表为例。        
1. 在 *<font color="#d63200">components</font>* 文件夹中，新建 *<font color="#d63200">Clock.js</font>* ，具体代码如下：  
```js
// 此时我们导入 Component，下面使用时就可以直接使用，
// 如果不导入 Component，则需要使用 React.Component
import React, { Component } from 'react';

class Clock extends Component {
    // 状态 state 是固定的名字
    state = {
        date: new Date()
    }
    // 找到一个合适的 钩子，写一个定时器，让 date 变量每秒更新
    componentDidMount(){
        const timer = setInterval(() => {
            // setState 也是固定的 api，其中参数可以是 obj 或者 fn
            // this.setState(obj,callback)
            // this.setState(fn,callback)
            this.setState({
                date: new Date()
            })
        },1000)
    }
    componentWillUnmount(){
        // 防止内存泄漏，在组件卸载的钩子里面清除定时器
        clearInterval(this.timer);
    }
    render() {
        return (
            <div>
                {this.state.date.toLocaleTimeString()}
            </div>
        );
    }
}

export default Clock;
```
2. 然后在 *<font color="#d63200">src -> index.js</font>* 导入组件，再使用组件，执行代码在浏览器查看结果。

### 注意   

+ 请不要直接修改状态值，如上面 如果直接修改 *<font color="#d63200">date</font>* 变量，如下，是不会生效的，
```js 
this.state.date = '直接修改';
```
+ 批量执行 
1. 在 *<font color="#d63200">components</font>* 文件夹中，新建 *<font color="#d63200">StateTest.js</font>* ，具体代码如下：
```js 
import React, { Component } from 'react';

class StateTest extends Component {
    state = {
        counter: 1
    }

    componentDidMount(){
        //  批量执行
        this.setState({ counter: this.state.counter + 1 });
        this.setState({ counter: this.state.counter + 1 });
        this.setState({ counter: this.state.counter + 1 });      
    }
    render() {
        return (
            <div>
                { this.state.counter}
            </div>
        );
    }
}

export default StateTest;
```
2. 然后在 *<font color="#d63200">src -> index.js</font>* 导入 *<font color="#d63200">StateTest</font>* 组件，并执行会发现就算我们多次执行 输出结果 依然是 *<font color="#d63200">2</font>*，这是因为 *<font color="#d63200">setState</font>* 是批量执行，上面的操作会进入一个队列，进行合并操作，在执行更新之前，发现 *<font color="#d63200">counter</font>* 执行三次是多余的操作，所以只会执行一次，以此提高更新效率。  

如果就是想执行三次 在上一次执行的结果上继续执行(变量的新值依赖于旧值)，请使用函数的方法去实现，具体写法如下：   
```js
componentDidMount(){
    this.setState( prevStatte => ({
        counter: prevStatte.counter + 1
    }))
    this.setState( prevStatte => ({
        counter: prevStatte.counter + 1
    }))
    this.setState( prevStatte => {
        return {
            counter: prevStatte.counter + 1
        }
    })
}
```
此时输出结果为 *<font color="#d63200">4</font>*。



