函数中 **<font color="#d63200">this</font>** 的指向，是当我们调用的时候确定的，调用方式不同，指向也不同，一般指向调用者。

调用方式 | this指向
:-: | :-:
普通函数调用 | window
构造函数调用 | 实例对象(原型对象里的方法也指向实例对象)
对象方法调用 | 该方法所属对象
事件绑定方法 | 绑定事件对象
定时器函数 | window
立即执行函数 | window

其实 *<font color="#d63200">JavaScript</font>* 为我们专门提供了一些函数方法，来处理函数内部 **<font color="#d63200">this</font>** 的指向问题，常用的有 *<font color="#d63200">call()</font>*，*<font color="#d63200">bind()</font>*，*<font color="#d63200">apply()</font>* 三种方法。

### call()

**<font color="#d63200">call()</font>** 方法调用一个对象，简单理解为调用函数的方式，但是它可以改变函数的 *<font color="#d63200">apply()</font>* 指向。

```JavaScript
fun.call(thisArg,arg1,arg2,...)
// thisArg  函数内部this 指向，改变这个值 可以改变 this 指向
// arg1,arg2,... 函数的参数
var obj = {
    name: '木子'
}
function fn(a,b){
    console.log(this.name)
    console.log(a+b)
}
fn.call(obj,1,2)
```

**<font color="#d63200">call()</font>**  有两个主要作用：

+ 可以调用函数
+ 可以改变函数内部的 *<font color="#d63200">apply()</font>* 指向  

在实际的开发中， call 主要用来实现继承

```JavaScript 
function Teacher(name) {
    this.name = name 
}
function Student(name) {
    Teacher.call(this,name)
}
var studd = new Student('张三')  
console.log(stu)
```
