# 高阶组件的链式调用

**<font color="#d63200">高阶组件</font>** 还有很强大的一点就是可以 **链式调用**，简单点理解就是可以嵌套多个高阶组件使用  
如下我们再定义另一个高阶组件 **```HocLink```**，然后用链式的方式调用：

```js
const HocLink = Comp => {
    console.log('这里是 高阶链式调用')
    return props => <Comp {...props} ></Comp>
}
// 在调用时
const NewHoc = HocLink(HocSay(HocLink(say)))
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
