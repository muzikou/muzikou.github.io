# 概述

**<font color="#d63200">Promise</font>** 是异步编程的一种解决方案，简单来说，**<font color="#d63200">Promise</font>** 是一个容器，里面保存这某个未来才会结束的事件（通常是一个异步操作）的结果。

**<font color="#d63200">Promise</font>** 是一个对象，可以获取异步操作的消息，有以下特点：

1. 对象的状态不受外界影响。 **```Promise```** 对象代表一个异步操作，有 **3** 种状态： **```Pending(进行中)```**、 **```Fulfilled(己成功)```** 和 **```Rejected(己失败)```**。只有异步操作的结果可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。  
2. －旦状态改变就不会再变，任何时候都可以得到这个结果。 **```Promise```** 对象的状态改变只有两种可能：从 **```Pending```** 变为 **```Fulfilled```** 和从 **```Pending```** 变为 **```Rejected```**。只要这两种情况发生，状态就凝固了，不会再变，而是一直保持这个结果，这时就称为 **```Resolved(己定型)```** 就算改变己经发生，再对 **```Promise```** 对象添加回调函数，也会立即得到这个结果。这与事件 **```(Event)```** 完全不同。事件的特点是，如果错过了它，再去监听是得不到结果的。

**<font color="#d63200">Promise</font>** 也有一些缺点：

1. 无法取消 **```Promise```**，一旦新建就会立即执行，无法中途取消；  
2. 当处于 **```Pending```** 状态时，无法获取当前进展到哪个阶段(刚刚开始还是即将完成)；  
3. 如果不设置回调函数，**```Promise```** 内部抛出的错误不会反应到外部。

## 基本用法

**```ES6```** 规定， **<font color="#d63200">Promise</font>** 对象是 个构造函数，用来生成 **<font color="#d63200">Promise</font>** 实例

```JavaScript
new Promise(function(resolve , reject) {
    if(true){
        resolve(123) ;
    }else{
        reject(error);
    }
});
```

**<font color="#d63200">Promise</font>** 构造函数接受一个函数作为参数，该函数的两个参数分别是 **```resolve```** 和 **```reject```**：

1. **<font color="#d63200">resolve</font>**  函数的作用是，将 **```Promise```** 对象的状态从“未完成”变为“成功”（即从 **```Pending```** 变为 **```Resolved```**)，在异步操作成功时调用，并将异步操作的结果作为参数传递出去。
2. **<font color="#d63200">reject</font>**  函数的作用是，将 **```Promise```** 对象的状态从“未完成”变为“失败”（即从 **```Pending```** 变为  **```Rejected```**),在异步操作失败时调用，并将异步操作报出的错误作为参数传递出去。  

## Promise.prototype.then()

**<font color="#d63200">Promise</font>** 实例生成以后 ，可以用 ```then``` 方法分别指 ```Resolved``` 态和 ```Rejected``` 态的回调函数。  
```then``` 方法可以接受两个回调函数作为参数，第一个回调函数是 ```Promise``` 对象的状态变为 ```Resolved``` 时调用， 第二个回调函数是 ```Promise``` 对象的状态变为  **```Rejected```** 时调用，这个函数是可选的。

```JavaScript
let promise2 = new Promise(function(resolve , reject) {
    console.log ('Promise ing');
    resolve();
} )
promise2.then(function() {
    console.log ('Resolved');
});
console.log( '外部');
// Promise ing // 外部 // Resolved
```

代码中， **<font color="#d63200">Promise</font>** 建后会立即执行，所以首先输出的是 ```Promise``` 。然后 ```then``` 方法指定的回调函数将在当前脚本所有同步任务执行完成后才会执行，所以 ```Resolved``` 最后输出。  
```then``` 方法返回的是一个新的 ```Promise``` 实例(注意，不是原来那个 ```Promise``` 实例)。因此可以采用链式写法，即 ```then``` 方法后面再调用另一个 ```then``` 方法。

```JavaScript
promise2.then(function() {
    return 'Resolved1'
}).then(function(data) {
    console.log (data + ' Resolved2');// Resolved1 Resolved2
})
```

代码使用 ```then``` 方法依次指定了两个回调函数。第一个回调函数完成以后，会将返回结果作为参数传入第二个回调函数。

## Promise.prototype.catch()

**<font color="#d63200">Promise.prototype.catch</font>** 方法用于指定发生错误时的回调函数,异步操作抛出错误，状态就会变为 ```Rejected```，然后调 ```catch``` 方法指定的回调函数处理这个错误。另外 ```then``` 方法指定的回调函数如果在运行中抛出错误，也会被 ```catch``` 方法捕获。

```JavaScript
new Promise((resolve,reject) => {
    throw new Error('test1 error')
}).catch(error => {
    console.log(error) // Error: test1 error
})
// 等同于
new Promise((resolve,reject) => {
    try {
        throw new Error('test2 error')
    } catch (error) {
        reject(error)
    }
}).catch(error => {
    console.log(error) // Error: test2 error
})
new Promise((resolve,reject) => {
    reject(new Error('test3 error'))
}).catch(error => {
    console.log(error) // Error: test3 error
})
```

一般说来，不要在 ```then``` 方法中定义 ```Rejected``` 状态的回调函数(即 ```then``` 的第二个参数)，而应总是使用 ```catch``` 方法,因为 ```catch``` 可以捕获前面 ```then``` 方法执行中的错误。

## Promise.all()

**<font color="#d63200">Promise.all()</font>** 方法用于将多个 ```Promise``` 实例包装成一个新的 ```Promise``` 实例。接收一个数组作为参数，参数都是 ```Promise``` 对象的实例，如果不是,就会先调用 ```Promise.resolve()``` 方法将参数转为 ```Promise``` 再进一步处理。  
**<font color="#d63200">Promise.all()</font>** 方法的参数不一定是数组，但是必须具有 ```Iterator``` 接口,且返回的每个成员都是 ```Promise``` 实例。  

```JavaScript
var a = Promise.all([a1 , a2 , a3]) ;
```

**a** 的状态由 ```a1, a2, a3``` 决定 分成两种情况。

1. 只有 ```a1, a2, a3``` 的状态都变成 ```Fulfilled``` 的状态才会变成 ```Fulfilled```，此 ```a1, a2, a3``` 的返回值组成一个数组，传递给 **a** 的回调函数。   
2. 只要 ```a1, a2, a3``` 中有一个被 ```Rejected``` 的状态，**a** 就变成 ```Rejected``` 此时第一个被 ```Rejected``` 的实例的返回值会传递给 **a** 的回调函数。

```JavaScript
const p1 = new Promise((resolve,reject) => resolve('这里是 p1')).then(res => res).catch(err => err)
const p2 = new Promise((resolve,reject) => reject(new Error('p2 error'))).then(res => res).catch(err => err)
const p3 = new Promise((resolve,reject) => resolve('这里是 p3')).then(res => res).catch(err => err)
const ps = Promise.all([p1, p2, p3]).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})
```

上面的代码中，**p1** 执行 ```resolve```，**p2** 虽然执行 ```reject```，但是 **p2** 会走到自己的 ```catch``` 方法中返回一个新的 ```Promise``` 实例，最后状态也会变成 ```resolve```，因此 ```p1, p2, p3``` 都会执行 ```resolve```，所以 **ps** 会进入 ```then``` 方法，而不是 ```catch```。  
如果 **p2** 没有自己的 ```catch``` 方法，**ps** 就会进入 ```catch``` 方法，此时 **p2** 的返回值会传入 **ps** 的 ```catch``` 方法中。  

## Promise.race()

```JavaScript
var a = Promise.all([a1 , a2 , a3]) ;
```

**<font color="#d63200">Promise.race</font>** 方法同样是将多个 ```Promise``` 实例包装成一个新的 ```Promise``` 实例。与 **```Promise.all()```** 不同的是：
```a1, a2, a3``` 中只要有一个改变状态，那么改变状态的这个实例的返回值就会传入 **a** 的回调函数中.

```JavaScript
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
});
const promise11 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
});
Promise.race([promise1, promise11]).then((value) => {
    console.log(value); // two ，promise11实例的状态先改变，所以 two 传入回调函数
});
```

## Promise.resolve()

**<font color="#d63200">Promise.resolve(value)</font>** 方法返回一个以给定值解析后的 ```Promise``` 对象。

+ 如果参数是一个 ```Promise``` 实例 ，那 ```Promise.resolve``` 将不做任何修改，原封不动地返回这个实例。  
+ 如果参数是一个 ```thenable```（具有 then 方法）对象，```Promise.resolve``` 方法会将这个对象转为 ```Promise``` 对象，然后立即执行 ```thenable``` 对象 ```then``` 方法。  
+ 如果参数是一个原始值，或者是一个不具有 ```then``` 方法的对象，那么 ```Promise.resolve``` 方法返回一个新的 ```Promise``` 对象，状态为 ```Resolved```。  
+ 如果不带任何参数，直接返回一个 ```Resolved``` 状态的 ```Promise``` 对象。

## Promise.reject()

**<font color="#d63200">Promise.reject(value)</font>** 方法返回一个新的 ```Promise``` 的实例，状态为 ```reject```。

```JavaScript
Promise.reject('error')

// 等同于
new Promise((resolve, reject) => reject('error'))
```
