## 属性的简写
**<font color="#d63200">ES6</font>** 允许直接写入变量和函数作为对象的属性和方法。                              
```JavaScript
const foo = 'object prototype'; 
const baz = { foo };
// 等同于
const baz = { foo: foo };
console.log(baz) // { foo: "object prototype" }  
``` 
**<font color="#d63200">ES6</font>** 允许在对象中只写属性名，不写属性值。这时属性值等于属性名所代表的变量。                                       
除了属性简写，方法也可以简写。
```JavaScript
const obj = {
    methods(){
        return 'object function'
    }
}
// 等同于
const obj = {
    methods: function(){
        return 'object function'
    }
}
```
## 属性名表达式
在传统的```JavaScript```语言中，如果使用字面量定义对象(```{}```), 只能使用标识符定义属性名，不能使用表达式定义属性名。                 
**<font color="#d63200">ES6</font>** 做了改变，允许字面量定义对象时，可以用表达式作为属性名 
```JavaScript
const temp = 'object expression'
const expre = {
    [temp] : 'temp'
}
console.log(expre[temp])
```
表达式还可以用于定义方法名
```JavaScript
const funExpre = { 
    [ 'say' + 'Some' ](){ 
        console.log('表达式还可以用于定义方法名')
    }
}; 
funExpre.saySome() // hi
```
**<font color="#d63200">注意: </font>**
1. 属性名表达式与简洁表示法不能同时使用
```JavaScript
const temp = 'object expression'
const expre = { [temp] } // 报错
```
2. 属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串```[object Object]```
```JavaScript
const keyA = {a: 1}; 
const keyB = {b: 2}; 
const myObject = { 
    [keyA]: 'valueA', 
    [keyB]: 'valueB'
}
console.log(myObject) // {[object Object]: "valueB"}
```
```[keyA]```和```[keyB]```得到的都是```[object Object]```，所以```[keyB]```会把 ```[keyA]```覆盖掉，而 ```myObject``` 最后只有一个```[object Object]```属性。              
## 解构赋值
对象的解构赋值用于从一个对象取值，相当于将所有可遍历的、但尚未被读取的属性分配到指定的对象上面。所有的键和它们的值都会复制到新对象上面。
```JavaScript
let { x , y, ...z } = { x : 1, y : 2, a: 3 , b : 4 };
console.log(x,y,z) // 1 2 {a: 3, b: 4}
// 变量 **z** 获取等号右边的除已读取的键 **(x,y)** 以外的所有键，将它们连同值一起复制过来。
```
由于解构赋值要求等号右边是一个对象，所以如果等号右边是 **undefined** 和 **null** 就会报错 因为它们无法转为对象。
```JavaScript
let { x , y, ...z} = null;  // 报错
let { x , y , ...z } = undefined; // 报错
```
解构赋值必须是最后一个参数，否则会报错
```JavaScript
let { ... x , y , z } =obj ;  // 报错
let { x , ...y, ...z } = obj ; // 报错
```
解构赋值的复制是浅复制，如果一个键的值是复合类型的位（数组、对象、函数），那么解构赋值复制的是这个值的引用，而不是这个值的副本。
## 扩展运算符
扩展运算符 ```(...)``` 用于取出参数对象的所有可遍历属性，并将其复制到当前对象之中。
```JavaScript
let z = { a: 1 , b: 3 } ; 
console.log({ ...z })   // { a : 3 , b: 4 }
```
        