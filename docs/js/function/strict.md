## 什么是严格模式？
**<font color="#d63200">JavaScript</font>** 除了由正常的模式之外，还提供了严格模式，**<font color="#d63200">ES5</font>** 的严格模式是采用具有限制性  *<font color="#d63200">JavaScript</font>*  变体的一种方式，即在严格的条件下运行。       
**严格模式** 在 *<font color="#d63200">IE10</font>* 以上的版本才会被执行，低版本浏览器会被忽略
**严格模式** 对正常的 *<font color="#d63200">JavaScript</font>* 语法做了一些更改：
+ 消除了 **JavaScript** 语法的不合理，不严谨之处，减少了一些怪异行为
+ 消除了代码运行的不安全性，保证了代码运行的安全
+ 提高编译效率，增加运行速度
+ 禁用了 在 **ECMAScript** 未来版本中可能定义的一些语法       
比如 class，import，export，extend，super 等不能做变量名

简而言之，严格模式的出现是为了解决现有 **js** 里面一些不合理、不合规的语法，同时也为了下一个版本做一些限定。
## 开启严格模式
**<font color="#d63200">严格模式</font>** 可以应用到整个脚本或者个别函数中，所以严格模式分为 为脚本开启严格模式 和 为函数开启严格模式 两种情况:
1. 为脚本开启严格模式
为整个脚本开启严格模式，需要在 所有语句之前 写一句特定的语句 **<font color="#d63200">'use strict'</font>**      
有些 *<font color="#d63200">script</font>* 是严格模式，有的是正常模式，这样就不利于文件的合并，所以可以讲整个脚本文件放在一个立即执行的函数中，这样独立创建了一个作用域，而不影响其他的 *<font color="#d63200">script</font>* 脚本文件。                 
方法调用一个对象，简单理解为调用函数的方式，但是它可以改变函数的 *<font color="#d63200">apply()</font>* 指向。
```JavaScript
(function(){
    'use strict'
    //下面的代码按照严格模式执行
})();
```
2. 给某个函数开启严格模式 
```JavaScript 
function fn(){
    'use strict';
    //下面的代码按照严格模式执行
}
```
## 严格模式的变化
严格模式对 *<font color="#d63200">js</font>* 的语法和行为都做了一些改变，例如：
1. 变量规定
    + 在正常的模式下，如果变量没有声明就赋值，默认是全局变量。严格模式下，禁止这种这种用法，变量都必须先声明在使用       
    + 严禁删除已经声明变量，如 
```JavaScript 
delete x // 是错误的
```
2. this 指向                 
严格模式下 *<font color="#d63200">this</font>* 指向问题 

函数类型 | 正常模式 | 严格模式   
:-: | :-: | :-:
全局作用域函数 | window | undefined 
构造函数 | 不加 new 也可以调用，this指向 window | 不加 new 调用会报错
定时器 | window | window 
事件/对象 | 调用者 | 调用者 
3. 函数变化
    + 函数不能有重名的参数
    + 严格模式禁止了不在脚本或者函数层面上的函数声明，以下几种都会报错：
```JavaScript 
if (true) {
    function f() { } // !!! 语法错误
    f();
}
for (var i = 0; i < 5; i++) {
    function f2() { } // !!! 语法错误
    f2();
}
function baz() { // 合法
    function eit() { } // 同样合法
}
```

