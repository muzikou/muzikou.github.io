## apply()

**<font color="#d63200">apply()</font>** 方法调用一个对象，简单理解为调用函数的方式，但是它可以改变函数的 *<font color="#d63200">this</font>* 指向。  
**<font color="#d63200">apply()</font>** 的返回值就是函数的返回值，因为 *<font color="#d63200">apply()</font>* 就是函数的调用

```JavaScript
fun.apply(thisArg,[argArrg])
// thisArg : 在 fun 函数运行时，指定的 this 值
// argArrg：传递的值，必须包含在数组中
var obj = {
    name: '木子'
}
function fn(a,b){
    console.log(this )
    console.log(a+b)
}
fn.apply(obj,[1,2])
```

**<font color="#d63200">apply()</font>**  有两个主要作用：

+ 可以调用函数
+ 可以改变函数内部的 **this** 指向

在实际的开发中， 可以利用  **apply** 借助于 数学内置对象求数组的最大值

```JavaScript
// Math.max()
var arr = [33,22,66,7,9,1]
// var max = Math.max.apply(null,arr);
var max = Math.max.apply(Math,arr);
```

## bind()

**<font color="#d63200">bind()</font>** 不会调用函数，但是可以改变 *<font color="#d63200">apply()</font>* 指向。

**<font color="#d63200">bind()</font>** 的返回值 由指定的 *<font color="#d63200">apply()</font>* 值和初始化参数改造的原函数拷贝

```JavaScript
fun.bind(thisArg,arg1,arg2,...)
// thisArg : 在 fun 函数运行时，指定的 this 值
// arg1,arg2,...：传递的参数
var obj = {
    name: '木子'
}
function fn(a,b){
    console.log(this )
    console.log(a+b)
}
fn.bind(obj,1,2)
```

单纯的这个定义是不会调用函数的，如果想调用 需要这样写：

```JavaScript 
var f = fn.bind(obj,1,2)
f()
```

**<font color="#d63200">比较：</font>** 

+ 相同点： 都可以改变函数内部 **this** 指向  
+ 不同点:
    1. call 和 apply 会调用函数
    2. call 和 apply 传参方式不同   
        call 是 arg1,arg2...，apply 是以数组的类型 [arg1,arg2]
    3. bind 不会调用函数
    4. call 多用于继承，apply 多用于数组的操作，bind 多用于一些需要改变 this 指向又不需要立即调用的函数中
