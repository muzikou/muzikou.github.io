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
> **<font color="#d63200">注意：</font>**
>> 基于类的组件 使用 *<font color="#d63200">props</font>* 属性值时，要加当前 *<font color="#d63200">this</font>* 实例      
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
> **<font color="#d63200">注意：</font>** 
>> 此时传进来的 *<font color="#d63200">props</font>* 值是只读属性，不可修改，单向数据流