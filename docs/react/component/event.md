*<font color="#d63200">React</font>* 中使用 *<font color="#d63200">onClick</font>* 类似的写法来监听事件，注意 *<font color="#d63200">this</font>* 绑定问题 *<font color="#d63200">React</font>* 里严格遵循单项数据流，没有数据双向绑定，所以要处理两件事，第一是元素本身值的赋值，第二是值改变以后的事件，例如输入框需要设置 *<font color="#d63200">value</font>* 和 *<font color="#d63200">onChange</font>* 。          
1. 在 *<font color="#d63200">src -> components</font>* 文件夹中，再新建 *<font color="#d63200">CartSample.js</font>* ，具体代码如下：
```js
import React, { Component } from 'react';

export default class CartSample extends Component {
    //  状态的初始化一般放在构造器中
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
        // 为了在回调中使用 `this`，这个绑定是必不可少的
        this.textChange = this.textChange.bind(this)
    }
    // 当 input 的值 text 发生变化的时候，我们让 textChang 去切换 input 的值
    textChange (event){
        this.setState({text: event.target.value})
    }
    render() {
        return (
            <div>
                {/* 事件处理 */}
                <div>
                    <input type="text" value={this.state.text} onChange={this.textChange}/> 
                </div>
            </div>
        );
    }
}
```
> 注意：
>> + *<font color="#d63200">React</font>* 事件的命名采用小驼峰式（camelCase），而不是纯小写。且事件名称之后不能加 ()，否则会直接执行
>> + 不能通过返回 *<font color="#d63200">false</font>* 的方式阻止默认行为。你必须显式的使用 *<font color="#d63200">preventDefault</font>*
2. 然后在 *<font color="#d63200">src -> index.js</font>* 导入组件，并引用组件，查看结果，*<font color="#d63200">input</font>* 可以正常的输入值就是没有问题的。  

我们必须谨慎对待 *<font color="#d63200">JSX</font>* 回调函数中的 *<font color="#d63200">this</font>* ，在 *<font color="#d63200">JavaScript</font>* 中，*<font color="#d63200">class</font>* 的方法默认不会绑定 *<font color="#d63200">this</font>* 。如果你忘记绑定 *<font color="#d63200">this.textChange</font>* 并把它传入了 *<font color="#d63200">onChange</font>* ，当你调用这个函数的时候 *<font color="#d63200">this</font>* 的值为 *<font color="#d63200">undefined。</font>*
如果你觉得使用 *<font color="#d63200">bind</font>* 很麻烦，还可以使用 *<font color="#d63200">箭头函数</font>*。     
下面我们写一个添加并展示商品列表的功能，把 *<font color="#d63200">input</font>* 输入框的值添加到商品列表的数组中，并把列表展示到页面，具体代码如下：
```js
import React, { Component } from 'react';
export default class CartSample extends Component {
    //  状态的初始化一般放在构造器中
    constructor(props){
        super(props);
        this.state = {
            text: '',
            goods: []
        }
        this.textChange = this.textChange.bind(this)
    }
    // 当 input 的值 text 发生变化的时候，我们让 textChang 去切换 input 的值
    textChange (event){
        this.setState({text: event.target.value})
    }
    addGoods = () => {
        this.setState(prevstate => {
            // prevstate.goods.push({
            //     id: prevstate.goods.length + 1,
            //     name: prevstate.text
            // })
            // react 官方希望传入与返回的对象不应该是同一个对象
            return {
                goods: [
                    ...prevstate.goods,
                    {
                        id: prevstate.goods.length + 1,
                        name: prevstate.text
                    }
                ]
            }
        })
    }
    render() {
        return (
            <div>
                {/* 事件处理 */}
                <div>
                    <input type="text" value={this.state.text} onChange={this.textChange}/> 
                    <button onClick={this.addGoods}>添加商品</button>
                </div>
                <ul>
                   {this.state.goods.map((good) => <li key={good.id}> {good.name} </li>)}
                </ul>
            </div>
        );
    }
}
```
> 解析：
>> 在 *<font color="#d63200">addGoods</font>* 中，因为我们添加商品的时候需要拿到之前的 *<font color="#d63200">goods</font>* 数组，并且在点击添加商品按钮时再往 *<font color="#d63200">goods</font>* 数组添加新的商品，此时因为我们需要依赖于之前的值，所以用 *<font color="#d63200">prevstate</font>* ,可能你想到的是用 *<font color="#d63200">push</font>* ，上面代码也有，但是因为这种写法不符合 *<font color="#d63200">React</font>* 官方希望，*<font color="#d63200">React</font>* 希望我们传入与返回的对象不应该是同一个对象，比如在这个例子中我们想要更新的 *<font color="#d63200">goods</font>* 数组，需要是个全新的数组，而不是之前的那个，这就要求我们需要把之前数组的值加进来，然后再把 新的项 加入数组中，也就是代码中的写法。
