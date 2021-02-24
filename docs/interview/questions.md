## 排序去重

1. 编写一个方法，该方法接收两个参数，分别为 k 和 一个无序的纯数字数组。该方法在执行后，会返回数组中第 k 大的数字。特别注意，如果数组中，有两位数值一样的数字，同数值数字排名并列。如 [3,1,3,2,5,4,5] 中，第 1 大的数字为 5，第2大的数字为 4，第5大的数字为 1。

```js
// 第一种方法
function sortDemo(k, arr){
    // 去重
    const setArr = [...new Set(arr)]
    // 排序并反转
    const sortArr = setArr.sort().reverse()

    if(typeof sortArr[k-1] != 'undefined'){
        return sortArr[k-1]
    }else{
        throw Error('未找到对应的数据')
    }
}
```

排序可以延伸出 冒泡排序，快速排序等

```js
// 冒泡排序
function dubbleSort(){
    for(let j = 0; j < arr.length-1; j++){
        for(let i = 0; i < arr.length-1-j; i++){
            if(arr[i] > arr[i+1]){
                var temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
            }
        }
    }
}
```

```js
// 快速排序
function quickSort(arr){
    if(arr.length <= 1 ){
        return arr
    }
    let flag = arr[0]
    let i = 1
    let j = arr.length - 1
    while(i<j){
        while(arr[j] >= flag && i<j){
            j--
        }
        while(arr[i] <= flag && i<j){
            i++
        }
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    const temp = arr[0]
    arr[0] = arr[j]
    arr[j] = temp
    return [ ...quickSort(arr.slice(0,i)), flag, ...quickSort(arr.slice(j+1))]
}
```

去重也有很多方式

```js
// 如： foreach 和 indexof
let temp = []
arr.forEach((v, i) => {
    if(temp.indexOf(v) != -1){
        return false
    }
    temp.push(v)
});
```

## 2. __proto__ 和 prototype 之前有什么关系？  

JS规定，每一个构造函数都有一个 prototype 属性，指向构造函数的原型对象  
每一个对象都有 __proto__ 属性，指向构造函数的 prototype 原型对象
![原型链](/img/js/prototype.png)  
**总结：**

1. __ proto __ 对象原型和和原型对象 prototype 是等价的。
2. __ proto __ 对象原型的意义就在于 为对象的查找机制提供一个方向，或者说一条线路，但是它是一个非标准属性。因此在实际开发中，不可以使用这个属性，他只是内部指向原型对象 prototype

## 3. call(), .apply() .bind() 的区别和作用？bind 方法如何来实现？

1. 都可以用来改变函数内部 **this** 指向
2. **call** 和 **apply** 会调用函数，**bind** 不会
3. 传参方式不同，**call** 是 ```fun.call(thisArg,arg1,arg2,...)```，**apply** 以数组的形式传参数，```fun.apply(thisArg,[argArrg])```，**bind** 是 ```fun.bind(thisArg,arg1,arg2,...)```
4. **call** 多用于继承，**apply** 多用于数组的操作，**bind** 多用于一些需要改变this 指向又不需要立即调用的函数中

```js
let obj =  {name: 'muzi'}
function fn(){
    console.log(this)
}

Function.prototype.myBind = function(obj){
    // 判断调用对象是否为函数
    if(typeof this !== 'function'){
        throw new Error('Error')
    }
    // 获取参数
    var args = [...arguments].slice(1)
    let fn = this
    return function Fn(){
        // 根据调用方式，传入不同绑定值
        return fn.apply(this instanceof Fn ? new fn : obj, [ ...args, ...arguments])
    }
}
// fn.myBind(obj, 1, 2)(3,4)

let foo = fn.myBind(obj)
let res = new foo()
```

## js 中基础数据类型有哪几种？ 了解包装对象么？

1. JS 中基础数据类型有 ***<font color="#d63200">String, Number, boolean, Null, Undefined</font>*** ，ES6 新增 **<font color="#d63200">Symbol</font>**

2. JS 的三种原始类型的值： 字符串，数值，布尔值，在特定的条件下，可以转为对象，称之为原始类型的 **“包装对象”**  
    所谓的 “包装对象”，就是 字符串，数值，布尔值 分别对应的 Number、String、Boolean 三个原生对象，这三个原生对象把原始类型的值包装成对象

    ```js
    var num = new Number(123);
    var str = new String('abc');
    var boo = new Boolean(true);
    console.log(typeof num, typeof str, typeof boo)
    ```

## 如何判断this？箭头函数的this是什么？

1. 函数中的 ***<font color="#d63200">this</font>*** 一般是在调用的时候确定的，调用方式不同，指向也不同，一般指向调用者

    调用方式 | this指向
    :-: | :-:
    普通函数调用 | window
    构造函数调用 | 实例对象(原型对象里的方法也指向实例对象)
    对象方法调用 | 该方法所属对象
    事件绑定方法 | 绑定事件对象
    定时器函数 | window
    立即执行函数 | window

2. 箭头函数不绑定 ***<font color="#d63200">this</font>*** 关键字，函数体内的 ***<font color="#d63200">this</font>*** 对象就是函数定义时所在位置的上下文对象，而不是使用时所在的对象

## 如何中断ajax请求？

1. 可以 **设置超时时间** 让 Ajax 自动断开
2. 手动去调用 **```XMLHttpRequest```** 对象上的 **<font color="#d63200">abort</font>** 方法 去停止请求

## 什么是同步？什么是异步？

JS 语言是单线程机制。所谓单线程就是按次序执行，执行完一个任务再执行下一个， 不能同时进行多个任务和流程。

所有任务可以分成两种，一种是 **<font color="#d63200">同步任务（synchronous）</font>**，另一种是 **<font color="#d63200">异步任务（asynchronous）</font>**

**同步任务** 指的是，在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务；

**异步任务** 指的是，不进入主线程、而进入"任务队列"（task queue）的任务，只有等主线程任务执行完毕，"任务队列"开始通知主线程，请求执行任务，该任务才会进入主线程执行

## 什么是宏任务？什么是微任务？

**宏任务** 是由宿主(浏览器，Node)发起的，进程的切换就是宏任务

**微任务** 由 JavaScript 自身发起，线程的切换就是微任务

在ES3以及以前的版本中，JavaScript本身没有发起异步请求的能力，也就没有微任务的存在。在ES5之后，JavaScript引入了Promise，这样，不需要浏览器，JavaScript引擎自身也能够发起异步任务了。

|  | 宏任务（macrotask） | 微任务（microtask）
:- | :- | :-
谁发起的 | 宿主（Node、浏览器） | JS引擎
具体事件 | 1. script (可以理解为外层同步代码)  <br/>2. setTimeout/setInterval <br/>3. UI rendering/UI事件 <br/>4. postMessage，MessageChannel<br/>5. setImmediate，I/O（Node.js） | 1. Promise <br/>2. MutaionObserver <br/>3. Object.observe（已废弃；Proxy 对象替代）<br/>4. process.nextTick（Node.js）
谁先运行 |后运行 | 先运行
会触发新一轮Tick吗 | 会 | 不会

## 什么是回调?回调使用中存在什么问题?

当 函数A 作为一个参数传到另一个 主函数B 里面，当那一个 主函数B 执行完之后，再执行传进去的作为参数的 函数A，函数A 就被称之为 回调函数。

在使用回调函数时，存在 this 指向问题

## Promise.allSettled 了解吗？动手实现一下 Promise.allSettled?

**```Promise.allSettled()```** 方法返回一个在所有给定的 promise 都已经 fulfilled 或 rejected 后的 promise，并带有一个对象数组，每个对象表示对应的promise结果。

当您有多个彼此不依赖的异步任务成功完成时，或者您总是想知道每个promise的结果时，通常使用它

```JavaScript
const p1 = new Promise((resolve,reject) => resolve('这里是 p1')).then(res => res).catch(err => err)
const p2 = new Promise((resolve,reject) => reject(new Error('p2 error'))).then(res => res).catch(err => err)
const p3 = new Promise((resolve,reject) => resolve('这里是 p3')).then(res => res).catch(err => err)
const ps = Promise.allSettled([p1, p2, p3]).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})
```

![Promise.allSettled.png](/img/interview/Promise.allSettled.png)

## vue 中组件间有哪些通信方式?

1. **<font color="#d63200">props / $emit</font>**  
    父组件A 通过 props 属性向 子组件B 传递，B to A 通过在 B 组件中 $emit, A 组件中 v-on 的方式实现。
2. **<font color="#d63200">$emit / $on</font>**  
    这种方法通过一个空的 Vue 实例作为中央事件总线（事件中心），用它来触发事件和监听事件,巧妙而轻量地实现了任何组件间的通信，包括父子、兄弟、跨级。
3. **<font color="#d63200">Vuex</font>**  
    **```Vuex```** 是实现组件全局状态（数据）管理的一种机制，可以方便的实现组件之间数据的共享。
4. **<font color="#d63200">provide / inject</font>**  
    **```provide / inject```** 需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效  
    **```provide / inject```** API 主要解决了跨级组件间的通信问题，不过它的使用场景，主要是子组件获取上级组件的状态，跨级组件间建立了一种主动提供与依赖注入的关系。
5. **<font color="#d63200">$attrs / $listeners</font>**  
    **```$attrs```**：包含了父作用域中不被 prop 所识别 (且获取) 的特性绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件。通常配合 interitAttrs 选项一起使用。  
    **```$listeners```**：包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件
6. **<font color="#d63200">$parent / $children与 ref</font>**  
    **```ref```**：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例  
    **```$parent / $children```**：访问父 / 子实例

## vue 中 v-show 和 v-if 的区别是什么？

**```v-show```** 是元素会被渲染，基于 **```css```** 进行隐藏和显示
**```v-if```** 如果条件为 ```false``` 时，不会被渲染，直到条件变为 ```true``` 时才会被渲染  
**```v-if```** 有更高的切换开销，**```v-show```** 有更高的初始渲染开销，所以如果需要频繁切换的使用 **```v-show```** 比较好，如果运行时条件很少改变的就用 **```v-if```**

## keep-alive 组件有什么作用？

**```keep-alive```** 是Vue的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染 **DOM**，可以对组件进行缓存。

**```keep-alive```**  包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们
