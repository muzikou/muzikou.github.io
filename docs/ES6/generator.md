# 概述

**<font color="#d63200">Generator</font>** 是 **```ES6```** 提供的 种异步编程解决方案。

```function*``` 这种声明方式( function 关键字后跟一个星号）会定义一个生成器函数 (generator function)，它返回一个 ```Generator``` 对象。在函数体内部使用 **```yield```** 吾句定义不同的内部状态。

## 基本用法

```JavaScript
// 定义生成器函数
function* g() {
    yield 'a';
    yield 'b';
    return 'ending';
}
// 返回Generator对象
var gen = g(); // g {<suspended>}
```

上面的代码中定义了一个 **<font color="#d63200">Generator</font>** 函数 ```g```，内部有两个 **```yield```** 语句 ```"a"``` 和 ```"b"```，即该函数有三个状态 ```a``` ```b``` ```return``` 语句，其中 ```return``` 是结束时执行的。  

调用 **```g()```** 并不会执行函数，而是返回一个 ```遍历器``` 对象，需要调用遍历器对象的 **```next```** 方法，每次调用 ```next``` 方法，会从函数的头部或者上一次停下来的地方开始执行，知道遇到下一条 **```yield```** 语句为止。可以理解成 **<font color="#d63200">Generator</font>** 函数是分段执行的。**```yield```** 语句是暂停执行的标记 **```next```** 方法可以恢复执行，如下所示：

```JavaScript
gen.next() // {value: "a", done: false}
gen.next() // {value: "b", done: false}
gen.next() // {value: "ending", done: true}
```

上面的代码共调用了三次 **```next```** 方法，前两次执行时，value 就是当前 **```yield```** 语句的值，```done``` 是 ```false```，因为遍历还没结束。第三次执行时，```done``` 是 ```true```，这时候遍历已经结束。

上面的代码中，一次次手动调用 **```next```** 会很繁琐，所以可以对 **```next```** 方法进行改进，然后通过递归来实现，具体操作如下：

```JavaScript
// 利用递归执行生成器中所有步骤
function next(){
    const {value, done} = gen.next();
    console.log(value) // // 依次打印输出 a b c end
    if(!done) next()
}
next()
```

通过 ```done``` 的值来判断是否遍历结束，如果没有继续执行 ```next``` 方法。

## 传值

**```yield```** 语句本身没有返回值，或者说总是返回 ```undefined```。 ```next``` 方法可以带有一个参数，该参数会被当作上 **```yield```** 语句的返回值。如下所示：

```JavaScript
// 通过next()传值
function* say(){
    let a = yield 1
    console.log(a)
    let b = yield 2
    console.log(b)
}
let s = say()
s.next() // {value: 1, done: false}

s.next('第一次传值')
// 第一次传值
// {value: 2, done: false}

s.next('第二次传值')
// 第二次传值
// {value: undefined, done: true}
```

上面的代码中 ```a``` 的值并不是我们认为的 ```1```，而是第二次执行 ```next``` 时传入的值 ```'第一次传值'```，同样的 ```b``` 的值是第三次执行 ```next``` 时传入的值 ```'第二次传值'```。

### 结合Promise使用

```JavaScript
function * r(num){
    const r1 = yield compute(num)
    console.log(r1, 'r1')
    yield compute(r1)
}
function compute(num){
    return new Promise(resolve => {
        setTimeout(() => {
            const res = num * num;
            console.log(res); // 输出处理结果
            resolve(res); // 操作成功
        },1000)
    })
}
let n = r(2)
console.log(n)

// // 不使用递归函数调用
// n.next().value.then(res =>  n.next(res))

//修改为可处理Promise的next
function next(num){
    let {value, done} = n.next(num)
    if(!done){
        value.then(res => next(res))
    }
}
next()
```
