## Let
**<font color="#d63200">ES6</font>** 新增了 *<font color="#d63200">let</font>* 命令，用于声明变量的关键字。其用法类似于 *<font color="#d63200">var</font>*，需要注意以下几点：
1. 具有块级作用域       
*<font color="#d63200">let</font>* 所声明的变量只在 *<font color="#d63200">let</font>* 命令所在的代码块内有效，即块级作用域。 *<font color="#d63200">var</font>* 声明的是全局变量不具备这一点。          
同时 *<font color="#d63200">let</font>* 声明的变量可以有效的防止循环变量变成全局变量。     
```JavaScript
//let 所声明的变量只在 let 命令所在的代码块内有效。
if(true){
    let a = 1
    console.log(a) // 1
}
console.log(a) // a is not defined 
```
2. 不存在变量提升       
我们都知道 *<font color="#d63200">var</font>* 命令会发生“变量提升”现象， 即变量可以在声明之前使用，值为 *<font color="#d63200">undefined</font>* 。其实这样是有些不符合逻辑的，因为按照一般的逻辑，变量应该在声明语句之后才可以使用。          
为了纠正这种现象， *<font color="#d63200">let</font>* 命令改变了语法行为，它所声明的变量一定要在声明后使用，否则便会报错。
```JavaScript
//  不存在变量提升
console.log(b) // undefined
var b = 2
console.log(c) // Cannot access 'b' before initialization
let c = 2 
```
3. 暂时性死区      
只要块级作用域内存在 *<font color="#d63200">let</font>*  命令，它所声明的变量就“绑定”（ binding ）这个区域，不再受外部的影响。
```JavaScript
// 暂时性死区
var d = 4
if(true){
    console.log(d) // Uncaught ReferenceError: Cannot access 'd' before initialization
    let d = 5
}
```
由上面的代码我们可以看出，在代码块内， 使用 *<font color="#d63200">let</font>*  命令声明变量之前，该变量都是不可用的。这在语法上称为“暂时性死区”（ temporal dead one ，简称 TDZ ）。        
4. 不允许重复声明     
*<font color="#d63200">let</font>* 不允许在相同作用域内重复声明同一个变量。
```JavaScript
// let 不允许在相同作用域内重复声明同一个变量。
let e = 6
let e = 6  //Uncaught SyntaxError: Identifier 'e' has already been declared
```
## const 
*<font color="#d63200">const</font>* 声明 个只读的常量。 一旦声明，常量的值就不能改变
```JavaScript
const f = 1;
f = 2 // Uncaught TypeError: Assignment to constant variable.
```
1. 也具有块级作用域
2. 因为 *<font color="#d63200">const</font>* 声明的常量不得改变值。所以 *<font color="#d63200">const</font>* 一旦声明常量，就必须立即初始化，不能留到以后赋值.
```JavaScript
const g  // Uncaught SyntaxError: Missing initializer in const declaration
```
3. *<font color="#d63200">const</font>* 命令声明的常量也不会提升，同样存在暂时性死区，只能在声明后使用。   

**<font color="#d63200">let const var 区别</font>**     
+ *<font color="#d63200">var</font>* 声明变量，其作用域是 *<font color="#d63200">var</font>* 所在的函数内，存在变量提升，值为 *<font color="#d63200">undefined</font>*
+ *<font color="#d63200">let</font>* 声明变量，其作用域是 *<font color="#d63200">let</font>* 所在的代码块内，不存在变量提升 
+ *<font color="#d63200">const</font>* 声明常量，其作用域是所在的代码块内，不存在变量提升 ,不可更改常量的值