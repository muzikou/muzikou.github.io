**<font color="#d63200">ES6</font>**  允许使用 **"箭头"(＝＞)** 定义函数，主要是用来简化函数定义语法的。                           
```JavaScript
// 定义
() => {}
const fn = () => {}
// 使用 
const f = () => {
    console.log(888);
}
f()
```
如果函数体内只有一句代码，且代码的执行结果就是返回值，可以省略大括号。
```JavaScript
const sum = (a,b) => a+b;
// 等同于 
const sum = (a,b) => { return a+b; }
//  其实这种写法等同于传统的写法如下
var sum = function(a,b){
    return a+b;
} 
```
如果 **箭头函数** 的代码块部分多于一条语句，就要使用大括号将其括起来，井使用 ```return``` 语句返。      
如果形参只有一个，形参外侧的小括号可以省略。 
```JavaScript 
var f = function(v){
    return v;
}
// 等同于 下面的写法
var f = v => v ; 
```
如果 **箭头函数** 不带参数或者带多个参数，参数放在 ```圆括号内``` 。       
箭头函数可以与变量解构结合使用。
```JavaScript  
const full = ({ first , last }) => first +''+ last;
// 等同于
function full(person) { 
    return person.first +''+ person.last; 
}
```
**<font color="#d63200">注意事项</font>**
1. 箭头函数不绑定 *<font color="#d63200">this</font>* 关键字，函数体内的 *<font color="#d63200">this</font>* 对象就是函数定义时所在位置的上下文对象，而不是使用时所在的对象。
```JavaScript  
const full = ({ first , last }) => first +''+ last;
// 等同于
const obj = { name: 'muzi'}
function fn(){
    console.log(this)  //  { name: 'muzi'}
    console.log(arguments)
    return () => {
        console.log(this) //  { name: 'muzi'}
        console.log(arguments)
    }
}
const f = fn.call(obj);
f()
```
箭头函数定义在 *fn* 函数体内，所以箭头函数中的 *this* 指向的是 *fn* 中的 *this* 对象，*fn* 中的 *this* 指向的是 *obj*，所以 箭头函数 中的 *this* 也是 *obj*。           
2. 不可以当作构造函数。 就是说 不可以使用 ```new``` 命令 否则会抛出 个错误。          
3. 不可以使用 ```arguments 对象```，该对象在函数体内不存在。如果要用，可以用 ```rest 参数``` 代替。             
4. 不可以使用 ```yield``` 命令，因此箭头函数不能用作 ```nerator 函数```。         

下面我们来看个例子：
```JavaScript  
const obj = { 
name: 'muzi',
    say: () => {
        console.log(this) // window
        console.log(this.name) // undefined
    }
} 
obj.say()
```
此时箭头函数定义在 *obj* 里面，所以 *this* 指向 *obj*，但是 *obj* 是一个对象，没有作用域，所以此时 箭头函数被定义在 全局作用域 下，所以此时 *this* 输出的是 *Window* 对象，但是 *window* 没有 *name* 属性，所以打印的是 ```undefined```