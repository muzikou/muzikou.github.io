### 组件复合

**<font color="#d63200">组件复合</font>** 的使用可以更加敏捷的去定义自定义组件的外观和行为，而且是以一种明确和安全的方式进行，如果组件间有公用的 **非UI逻辑**，将它们抽取为 **JS模块** 导入使用而不是继承它。

```js
// Dialog作为容器不关心内容和逻辑
function Dialog(props) {
  return (
    <div style={{ border: `4px solid ${props.color || 'blue'}` }}></div>
  );
}
// WelcomeDialog通过复合提供内容
function WelcomeDialog(props) {
  return (
    <Dialog {...props}>
      <p>感谢使用react</p>
    </Dialog>
  );
}
export default function(){
    return (
        <div>
            <WelcomeDialog color="red" />  
        </div>
    )
}
```

### 具名插槽

其实上面的代码等同于 ```vue``` 中 ```slot``` ，我们都知道 ```vue``` 中有 **<font color="#d63200">具名插槽</font>**，```react``` 中要怎么样操作呢，继续往下走：  

给上面的 ```Dialog``` 组件，添加一个页脚，再给这个页脚添加事件，改动代码如下：

```js
// Dialog作为容器不关心内容和逻辑
function Dialog(props) {
  return (
    <div style={{ border: `4px solid ${props.color || 'blue'}` }}>
        {/*  children 可以是任意的js 表达式 */}
        {props.children}
        <div className="footer">
            {props.footer}
        </div>
    </div>
  );
}
export default function(){
    const footer = <button onClick={() => alert('123244')}>底部按钮</button>
    return (
        <div>
            <WelcomeDialog color="red" footer={footer}/>
        </div>
    )
}
```

代码中 **```WelcomeDialog```** 组件有一个 **```footer```** 属性，其实是一串 ```JSX``` ，可以把 ```footer``` 往下传递。

### props.children

上面代码中的 **<font color="#d63200">props.children</font>** 当成属性来用的，但其实它所能代表的不只是属性，也可以是方法：

```js
//  模拟接口
const Api = {
    getUser(){
        return {name: 'muzi', age: 20}
    }
}
// 定义组件
function Fetcher(props){
    const user = Api[props.name]()
    return <h1>{props.children(user)}</h1>
}
export default function(){
    return (
        <div>
            <Fetcher name="getUser">
                {({name, age}) => <p>{name} -- {age}</p>}
            </Fetcher>  
        </div>
    )
}
```

**<font color="#d63200">props.children</font>**  除了以上使用之外，也可以是普通的 JS 表达式，比如 数组，下面我们来实现一个可以过滤掉指定标签类型的过滤器组件，对 ```props.children``` 进行操作：

```js
// 过滤 children
function Filter({type, children}){
    return (
        <div>
            {React.Children.map(children, child => {
                if(child.type != type){
                    return;
                }
                return child;
            })}
        </div>
    )
}
export default function(){
    return (
        <div>
            <Filter type="p">
                <h1>React</h1>
                <h1>不错哦</h1>
                <p>我是 p 标签</p>
                <h2>我是 h2 标签</h2>
            </Filter>
        </div>
    )
}
```

代码中想要对 ```children``` 进行循环操作时，可以使用 **<font color="#d63200">React.Children</font>** 接口提供的静态方法 **```map```**，传入两个参数：  

- 第一个参数是要操作的对象
- 第二个参数是个函数，函数的参数是操作对象 ```props.children``` 的每个元素，然后执行函数进行判断过滤。

除了上面对 ```props.children``` 的操作之外，还可以对传递进来对 ```children``` 进行修改  
下面我们定义一个 **```RadioGroup```** 组件，给每一个 ```children``` 添加 ```name``` 属性：

```js
function RadioGroup(props){
    return (
        <div>
            {React.Children.map(props.children, child => {
                // vdom 不可更改， 克隆一个 新的 去改才行
                // child.props.name = props.name
                // return child
                return React.cloneElement(child, { name: props.name })
            })}
        </div>
    )
}  
function Radio(props){
    const {children, ...rest} = props
    return (
        <label >
            <input type="radio" {...rest}/>
            {children}
        </label>
    );
}
export default function(){
    return (
        <div>
            <RadioGroup name="mvvm">
                <Radio value="vue"><span>vue</span></Radio>
                <Radio value="React"><span>React</span></Radio>
                <Radio value="angular"><span>angular</span></Radio>
            </RadioGroup>
        </div>
    )
}
```

代码中需要特别注意到的是  ```props.children``` 中的每个元素 ```child```，其实是 ```creatElement``` 最后返回的虚拟 ```DOM```，本质是一个 ```JSX```，所以 **<font color="#d63200">不能直接更改</font>**  
如果想要修改需要使用 **<font color="#d63200">React.cloneElement</font>** 去克隆一个新的 ```child```，同时把这个 ```child``` 的所有属性作为第二个参数传递过去，最后需要把克隆的这个对象进行 ```return``` 出去才能实现修改。
