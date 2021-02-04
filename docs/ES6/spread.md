## 扩展运算符
**<font color="#d63200">扩展运算符</font>** 是三个点(...), 类似于 ```rest 参数``` 的逆运算，将 数组/对象 转为用 **逗号** 分割的参数序列。            
但是，在某些情况下可能需要设置一个不同的默认值，传统的写法如下所示：                 
```JavaScript
let arr = [1,2,3]
console.log(...arr) // 1 2 3
```
下面是几个应用实例，主要用于函数调用
```JavaScript
function pushArr(arr,...item){
    arr.push(...item)
}
function add(a,b){
    console.log(a+b)
}
const numArr = [11,33] 
add(...numArr) // 44
```       
上面的代码中，```arr.push(...items )```和 ``add(...numbers)``这两行都是函数的调用，它们都使用了 **扩展运算符** 。                          
 **扩展运算符** 与正常的函数参数可以结合使用，非常灵活。
```JavaScript
function f (a, b, c , d , e) { } 
var args = [0 , 1] ; 
f(-1, ... args , 2 , ... [3]);
```  
 **扩展运算符** 后面还可以放置表达式。
```JavaScript
const arr = [ 
    ...(x > 0 ? [ 'a' ]:[]),
    'b' 
];
``` 
如果 **扩展运算符** 后面是 一个空数组，则不产生任何效果
```JavaScript
[ ...[],1 ] // [ 1 ]
```
## 替代 apply 方法
在 **<font color="#d63200">ES6</font>** 之前，如果你想要一个数组的各项值直接作为参数使用，需要借助数组的 ```apply``` 方法，写法如下：
```JavaScript
function fn(a,b,c){
    console.log(a+b+c);
}
var args = [1, 2, 3] ; 
fn.apply(null, args); // 6
```
但是，有了 **扩展运算符** 之后，就不需要这么写了
```JavaScript
fn(...args) 
```
## 扩展运算符的应用
+ 合并数组          
 **扩展运算符** 提供了数组合并的新写法。
```JavaScript
const arr1 =[1,2]
const arr2 =[3,4]
const arr3 =[5,6]
const arrs = [ ...arr1, ...arr2, ...arr3] // [1, 2, 3, 4, 5, 6]

arr2.push(...arr3,...arr1)
console.log(arr2) // [3, 4, 5, 6, 1, 2]
```
+ 与解构赋值结合         
 **扩展运算符** 可以与解构赋值结合起来，用于生成数组。
```JavaScript
const [first, ...rest] = [1 , 2 , 3 , 4 , 5]; 
console.log(first) // 1 
console.log(rest) // [2 , 3 , 4 , 5]

const [ a, ...b] = [] ; 
console.log(a)  // undefined 
console.log(b)  // []
```
如果将 **扩展运算符** 用于数组赋值，则只能将其放在参数的最后一位，否则会报错。
```JavaScript
const [ x, ...y , z] = [ 1 , 2 , 3 , 4 , 5];  // Uncaught SyntaxError: Rest element must be last element
```
+ 函数的返回值               
**<font color="#d63200">JavaScript</font>** 的函数只能返回一个值，如果需要返回多个值只能返回数组或对象。 **扩展运算符** 提供了解决这个问题的 一种变通方法。
```JavaScript
var dateFields = readDateFields(database) ; 
var d = new Date( ...dateFields );
```
上面的代码从数据库取出 行数据，通过 **扩展运算符**  直接将其传入构造函数 ```Date```
+ 字符串          
 **扩展运算符** 还可以将字符串转为真正的数组。
```JavaScript
[...'abcd']  // ['a','b','c','d']
```
+ 实现了 **<font color="#d63200">Iterator</font>** 接口的对象        
任何 ```Iterator``` 接口的对象，都可以用 **扩展运算符** 转为真正的数组。
```JavaScript
var oDivs = document.getElementsByTagName('div')
var arr = [ ...oDivs ]
console.log(arr)
```
+  **<font color="#d63200">Map</font>** 和  **<font color="#d63200">Set</font>** 结构、 **<font color="#d63200">Generator</font>** 函数         
**扩展运算符** 内部调用的是数据结构的 ```Iterator``` 接口，因此只要具有 ```Iterator``` 接口的对象，都可以使用扩展运算符，如 ```Map``` 结构。
```JavaScript
let map = new Map ( [ 
    [ 1,'a'], 
    [ 2,'b']
])
let arr= [ ...map.keys()] ;  // [1,2]
```
```Generator``` 函数运行后会返回一个遍历器对象，因此可以使用 **扩展运算符**。
```JavaScript
var go = function*() { 
    yield 1; 
    yield 2; 
    yield 3; 
}
console.log([ ...go()]) // [1, 2, 3]
```
上面的代码中变量 *go* 是一个 *Generator* 函数，执行后返回的是一个遍历器对象，对这个遍历器对象执行 **扩展运算符** 即可将内部遍历得到的值转为一个数组。                      
对于没有 ```Iterator``` 接口的对象，使用 **扩展运算符** 将会报错。
```JavaScript
var obj= {a : 1 , b: 2} ; 
let arr= [ ...obj ] // 报错
```
        