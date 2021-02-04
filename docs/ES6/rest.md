## Arguments 对象          
在学习 **<font color="#d63200">rest参数</font>** 之前，我们先来了解一下 ```Arguments 对象```。             
**<font color="#d63200">Arguments</font>** 是一个对应于传递给函数的参数的类数组对象，是所有（非箭头）函数中都可用的局部变量。你可以通过 ```arguments对象``` 拿到函数的所有实参。         
此对象包含传递给函数的每个参数，第一个参数在索引 **0** 处。例如，如果一个函数传递了三个参数，你可以用如下方式引用他们：
```JavaScript
arguments[0]
arguments[1]
arguments[2]
```
参数也可以被赋值   
```JavaScript
arguments[1] = 'new value'
```
**<font color="#d63200">Arguments 对象</font>** 不是一个 *Array* 。它类似于 *Array*，但除了 *length* 属性和 *索引元素* 之外没有任何 *Array* 属性。            
可以使用 ```Array.from()``` 方法或扩展运算符将参数转换为真实数组：
```JavaScript
var args = Array.from(arguments);
var args = [...arguments];
```
举例说明：
```JavaScript
function argsSum(){
    let total = 0, len = arguments.length;
    for(let i=0; i<len; i++){
        total += arguments[i]
    }
    return total
}
console.log(argsSum(1,2)) // 3
console.log(argsSum(1,2,3))  // 6
```
## rest参数 
```ES6```引入了 **<font color="#d63200">rest参数</font>** (剩余参数)（形式为 ...变量名 )，用于获取函数的多余参数，这样就可以不使用 ```arguments``` 对象了。                            
**<font color="#d63200">剩余参数</font>** 语法允许我们将一个不定数量的参数表示为一个数组，当函数的 **实参** 个数大于 **形参** 个数的时候，我们可以将剩余的 **实参** 放到一个数组中。  
```JavaScript
const sum = (...arg) => {
    let total = 0
    arg.forEach(res => total += res)
    return total
}
console.log(sum(1,2)) // 3
console.log(sum(1,2,3)) // 6
```
### 解构剩余参数
剩余参数可以被解构，这意味着他们的数据可以被解包到不同的变量中。
```JavaScript
const [num1, ...num2] = [1,2,4,5,6]
console.log(num1,num2) // 1 , [2, 4, 5, 6]

function f(...[a, b, c]) {
    return a + b + c;
}
f(1)          // NaN (b and c are undefined)
f(1, 2, 3)    // 6
f(1, 2, 3, 4) // 6 (the fourth parameter is not destructured)
```
### 区别
**剩余参数** 和 **arguments对象** 之间的区别主要有三个：
+ ```剩余参数```只包含那些没有对应形参的实参，而 ```arguments对象``` 包含了传给函数的所有实参。
+ ```arguments对象```不是一个真正的数组，而剩余参数是真正的 Array实例，也就是说你能够在它上面直接使用所有的数组方法，比如 ```sort```，```map```，```forEach```或```pop```。
+ ```arguments对象``` 还有一些附加的属性 （如callee属性）。
 