## 函数参数的默认值
**<font color="#d63200">JavaScript</font>** 中函数的参数默认是 ```undefined```。            
但是，在某些情况下可能需要设置一个不同的默认值，传统的写法如下所示：                 
```JavaScript
function fn(a,b){
    typeof b === 'undefined' && (b = 1)
    console.log(a+b)
}
fn(2,1) // 3
fn(2) // 3
```
但是 **<font color="#d63200">ES6</font>** 允许为函数的参数设置默认值之后，就可以直接在参数里面定义，写法如下： 
```JavaScript
function fn(a,b=1){
    console.log(a+b)
} 
fn(2) // 3
```  
+ 上面这种写法会使代码的可读性增高，让阅读者立刻明白到哪些参数可以省略，不用继续查看函数体或者文档；        
+ 还有一点就是有利于将来代码的优化，即使后面版本彻底拿掉这个参数，也不会导致以前的代码无法运行     

但是在使用时，注意以下几点：
1. 参数变量时默认声明的，所以不能用 ```let``` 和 ```const``` 再次声明           
```JavaScript
function foo (x){
    let x = 1; // Error : Identifier 'x' has already been declared
}
```  
2. 使用参数默认值时，函数不能有同名参数
```JavaScript
function foo(x,x,y=1){ } // Error: Duplicate parameter name not allowed in this context
```  
3. 函数默认值不是传值的，而是每次都重新计算默认值表达式的值，也就是说 ```参数默认值``` 是惰性求值的
       
```JavaScript
var x = 99
function fo(p=x+1){
    console.log(p)
}
fo() // 100 
x=100
fo() // 100
``` 
上面的代码中，参数的默认值是 ```x+1``` 。 每次调用函数 *fo*，都会重新计算 ```x+1```, 而不是默认等于 100。       
## 与解构赋值默认值结合使用
参数默认值可以与解构赋值的默认值结合起来使用。 
```JavaScript
function foo({x,y=5}){
    console.log(x,y)
}
foo({}) // undefined 5
foo({x:1}) // 1，5
foo() // Error Cannot destructure property 'x' of 'undefined' as it is undefined
``` 
上面的代码中，只有当 *foo* 的参数是一个对象时，变量 *x* 和 *y* 才能通过 **解构赋值** 而生成，如果参数不是对象时，*x* 和 *y* 不会生成，会报错。                  
如果将上面的代码改写成下面这样， 调用时参数不是对象就不会报错：          
```JavaScript
function foo({x,y=5} = {}){
    console.log(x,y)
} 
foo() // undefined 5
``` 
上面代码出现了双重赋值，*foo* 没有参数时会默认给函数赋值 **空对象**，空对象作为参数时，没有 *x* 和 *y* 属性，所以又会默认给 *y* 赋值 5，*x* 没有默认值所以输出 *undefined*          
体验下面两种代码的区别：       
```JavaScript
function m1({x=0,y=0} = {}){
    console.log(x,y)
}
function m2({x,y} = {x:0,y:0}){
    console.log(x,y)
}
m1(); // 0,0
m2(); // 0,0
m1({});  // 0,0
m2({});  // undefined,undefined
m1({x:6}); //6,0
m2({x:6}); // 6,undefined
``` 
上面的两种写法都给函数的参数设定了默认值，但是 **m1** 中函数参数的默认值是空对象，同时设置了 *参数对象* 解构赋值的默认值，**m2** 中函数参数的默认值是 ```{x:0,y:0}```,没有设置 *参数对象* 解构赋值 的默认值。
## 参数默认值的位置
通常情况下，定义了默认值的参数应该是函数的尾参数。因为这样比较容易看出到底省略了哪些参数。如果非尾部的参数设置默认值，实际上这个参数是无法省略的。
```JavaScript
function f(x=1, y){
    console.log(x,y)
}
f(undefined,2) // 1, 2
f(null,2) // null, 2
f(,2) // 报错
``` 
## 函数的 length 属性
指定了默认值以后，函数的 **<font color="#d63200">length</font>** 属性将返回没有指定默认值的参数个数。         
也就是说，指定了默认值后， **<font color="#d63200">length</font>** 属性将失真。
```JavaScript
(function (a) {}) . length //1 
        (function (a= 5) {} ).length //0 
``` 
因为 **<font color="#d63200">length</font>** 属性的含义是该函数预期传入的参数个数。某个参数指定默认值以后，预期传入的参数个数就不包括这个参数了，同理 [rest](/ES6/rest.md) 参数也不会计入 **<font color="#d63200">length</font>** 属性。
```JavaScript
(function(...arg){}).length // 0
(function (a , b , c = 5) {}).length //  2
``` 
如果设置了默认值的参数不是尾参数，那么 **<font color="#d63200">length</font>** 属性也不再计入后面的参数
```JavaScript
(function (a= 0, b, c) { }).length // 0
```
   