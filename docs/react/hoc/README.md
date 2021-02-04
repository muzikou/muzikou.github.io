# 高阶组件

提高组件复用率，首先想到的就是抽离相同逻辑，在 **<font color="#d63200">React</font>** 里就有了 **```HOC (Higher-Order Components)```**  的概念
  
**<font color="#d63200">高阶组件</font>** 也是一个组件，但是他返回另外一个组件，产生新的组件可以对属性进行包装，也可以重写部分生命周期

首先我们来定义一个展示组件，只用来做展示，然后导出：

```js
// 定义组件 Say
class Say extends Component{
    render(){
        return (
            <div>{this.props.stage} - {this.props.name}</div>
        )
    }
}
// 导出组件
export default class Hoc extends Component {
    render() {
        return (
            <div>
                <Say stage="R学习 react 之 " />
            </div>
        )
    }
}
```

上面的代码中，并没有属性 ```name``` 值，如果我们想让 ```name``` 动态获取，可以定义一个新的组件来强化现有的 ```say``` 组件，如下：

```js
// 强化后的高阶组件
const HocSay = Comp => {
    // 设置 name 属性,  name 可能来自于接口或其他组件
    const name = '高阶组件'
    return (props) => <Comp {...props} name={name}></Comp>
}
// 原有组件
function Say(props){
    return (
            <div>{props.stage} - {props.name}</div>
        )
}
// 创建一个新的组件
const NewHoc = HocSay(Say)
// 导出
export default class Hoc extends Component {
    render() {
        return (
            <div>
                <NewHoc stage="学习 react 之 " />
            </div>
        )
    }
}
```

上面代码中代码中定义了高阶组件 ```HocSay```， 在导出时使用强化过的组件 ```HocSay```，这样就有了 ```name``` 属性。  

除了包装属性以外，还可以重写部分生命周期，下面我们对上面对 ```HocSay``` 高阶组件进行改装:

```js
const HocSay = Comp => {
    // 设置 name 属性,  name 可能来自于接口或其他手段
    const name = '高阶组件'
    return class NewComp extends Component{
        componentDidMount(){
            console.log('do somethimg')
        }
        render(){
            return <Comp {...this.props} name={name}></Comp>
        }
    }
}
```
