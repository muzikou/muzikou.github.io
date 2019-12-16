本篇文章我们来学习组件之间的通信，继续以上篇文章中提到的 添加并展示商品列表 为案例，将其功能复杂化为一个小购物车案例，即拆分一个购物车列表的子组件，跟购物车父组件进行通信。
### 父组件传值给子组件，通过 props 传值
1. 在 *<font color="#d63200">src -> components</font>* 文件夹中，新建子组件 *<font color="#d63200">Cart.js</font>* ，我们创建基于类的子组件，父组件传过来的值通过 *<font color="#d63200">this.props</font>* 调用中，具体代码如下：
```js
import React, { Component } from 'react';
// 基于类的组件
export default class Cart extends Component {
    render() {
        return (
            <table>
                <tbody>
                    {this.props.list.map(item  => (
                        <tr key={item.id}>
                            <td>名称：{item.name}</td>
                            <td>数量：{item.count}</td>
                        </tr>
                    ))} 
                </tbody>
            </table>
        );
    }
}
```
上面的代码中我们给出的是基于类的组件的传值方式，如果你更习惯于函数类型的组件创建，那在函数中直接使用属性传过来的值即可，具体代码如下：
```js
import React, { Component } from 'react';
//  函数类型的组件
export function Cart({list}){
    return (
        <table>
            <tbody>
                {list.map(item  => (
                <tr key={item.id}>
                    <td>名称：{item.name}</td>
                    <td>数量：{item.count}</td>
                </tr>
                ))} 
            </tbody>
        </table> 
    )
}
```
2.  打开 *<font color="#d63200">src -> components -> CartSample.js</font>* 文件，导入上一步创建的 *<font color="#d63200">Cart</font>* 组件，并通过 *<font color="#d63200">props</font>* 传值，同时在商品列后新增 加购 按钮，点击实现加入购物车效果，并展示在页面，具体代码实现如下：
```js
import React, { Component } from 'react';
// 基于类的组件 导入方式
import Cart from './Cart';
// 函数类型的组件 导入方式
// import { Cart } from './Cart';

export default class CartSample extends Component {
    //  状态的初始化一般放在构造器中
    constructor(props){
        super(props);
        this.state = {
            text: '',
            goods: [],
            cartList: []
        }
        this.textChange = this.textChange.bind(this)
    }
    // 当 input 的值 text 发生变化的时候，我们让 textChang 去切换 input 的值
    textChange (event){
        this.setState({text: event.target.value})
    }
    addGoods = () => {
        this.setState(prevstate => {
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
    // 加购
    addToCart = (good) => {
        // 创建一个新的购物车列表
        const newCartList = [ ...this.state.cartList ]
        // 根据 商品ID 判断购物车内有无传入的商品
        const idx = newCartList.findIndex( c => c.id === good.id)
        // 找到该 idx 对应的商品 
        const item = newCartList[idx]
        if(item){
            // 如果购物车内有该商品，则商品数量 +1
            // 删除 idx 项，再新增一项，新增项的属性和 item 一样，唯独修改 count
            newCartList.splice(idx,1,{ ...item,count: item.count +1 })
        }else{
            // 如果购物车内没有该商品
            newCartList.push({...good,count:1})
        }
        //更新
        this.setState({cartList:newCartList})
    }
    render() {
        return (
            <div>
                {/* 事件处理 */}
                <div>
                    <input type="text" value={this.state.text} onChange={this.textChange}/> 
                    <button onClick={this.addGoods}>加入商品</button>
                </div>
                <h1>商品列表</h1>
                <ul>
                   {this.state.goods.map((good) => (
                       <li key={good.id}> 
                            {good.name} 
                            {/* 新增 加购按钮 */}
                            <button onClick={() => this.addToCart(good)}>加入购物车</button>
                        </li>
                   ))}
                </ul>
                {/* 购物车 */}
                <h1>购物车列表</h1>
                 {/* 通过 list 属性吧购物车列表传给 cart 组件 */}
                <Cart list={this.state.cartList}></Cart>
            </div>
        );
    }
}
```
### 子组件传值给父组件
在 *<font color="#d63200">React</font>* 中子组件想传值给父组件，是父组件把回调函数直接通过 属性的方式传给子组件，称之为状态提升，即把子组件的状态提升出来，派发到父组件上，告诉子组件数据发生变化时应该调用哪个函数，那要怎么实现呢？      
1. 继续以上面的代码为例，新增子组件中商品的数量可以加减的需求，那就要求我们把修改子组件 *<font color="#d63200">Cart.js</font>* 的代码，在数量 *<font color="#d63200">count</font>* 标签前后新增 *<font color="#d63200">-</font>* 和 *<font color="#d63200">+</font>* 的按钮，把原先 *<font color="#d63200">tr</font>* 标签中的代码改成如下：
```js
<td>名称：{item.name}</td>
<td>数量：
    <button onClick={() => minus(item)}>-</button>
        {item.count}
    <button onClick={() => add(item)}>+</button>
</td>
 ```  
2. 打开 *<font color="#d63200">src -> components -> CartSample.js</font>* 文件,在原有代码的基础上修改以下代码：
```js
// 新增函数，处理数量的更新
add = (good) =>{
    const newCartList = [ ...this.state.cartList ]
    const idx = newCartList.findIndex( c => c.id === good.id)
    const item = newCartList[idx]
    // 点击 + 按钮其实就是购物车内有该商品，然后该商品数量 +1
    newCartList.splice(idx,1,{ ...item,count: item.count +1 })
    this.setState({cartList:newCartList})
}
minus = (good) =>{
    const newCartList = [ ...this.state.cartList ]
    const idx = newCartList.findIndex( c => c.id === good.id)
    const item = newCartList[idx]
    // 点击 + 按钮其实就是购物车内有该商品，然后该商品数量 -1
    newCartList.splice(idx,1,{ ...item,count: item.count -1 })
    this.setState({cartList:newCartList})
}

{/* 原本 cart 标签新增 add 和 minus 属性 */}
<Cart list={this.state.cartList} add={this.add} minus={this.minus}></Cart>
```
其实上面的重复代码有很多，是可以优化的，下面我们来做一下优化：
```js
// Cart.js 中修改 + - 按钮的点击事件
<td>数量：
    <button onClick={() => this.props.countChange(item)}>-</button>
        {item.count}
    <button onClick={() => this.props.countChange(item,1)}>+</button>
</td>

// CartSample.js 中删除 add 和 minus 函数，新增 countChange
countChange = (good,type) =>{
    const newCartList = [ ...this.state.cartList ]
    const idx = newCartList.findIndex( c => c.id === good.id)
    const item = newCartList[idx]
    // 购物车列表中肯定有该商品，因为不需要判断 item 是否存在，只需要对 count 进行操作即可 
    if(type){// 有 type 即是 点击 + 按钮，商品数量 +1
        newCartList.splice(idx,1,{ ...item,count: item.count +1 })
    }else{ // 否则就是点击 - 按钮，商品数量 -1
        newCartList.splice(idx,1,{ ...item,count: item.count -1 })
    }
    this.setState({cartList:newCartList})
}
{/* 删除 add 和 minus 函数，新增 countChange 的属性*/}
<Cart list={this.state.cartList} countChange={this.countChange}></Cart>
```