## 数组解构
**<font color="#d63200">数组解构</font>** 允许我们按照一一对应的关系从数组中提取值，然后将值赋值给变量        

    let [ a, b, c ] = [ 1, 2, 3 ]  // a=1 b=2 c=3

如果解构不成功 值为 undefined

    let [ a, b, c ] = [ 1, 2 ]  // a=1 b=2 c=undefined

解构赋值允许指定默认值。
```JavaScript
let [ foo = true ] = [];
console.log(foo) // true

let [ x, y = 2 ] =  [ 1 ]
console.log(x,y) // 1，2
let [ x, y = 2 ] =  [ 1, undefined ]
console.log(x,y) // 1，2
```
这里需要注意 *<font color="#d63200">ES6</font>* 内部使用严格相等运算符（＝＝＝）判断一个位直是否有值 所以，如果一个数组成员不严格等于 *<font color="#d63200">undefined</font>* ，默认位是不会生效的

    let [ x = 1 ] = [ null ];  // x=null 因为 null 不严格 等于 undefined，所以输出值 为 null

默认值可以引用解构赋值的其他变量，但该变量必须己经声明。
```JavaScript
let [x = 1 , y = x] = []; //  x=1 , y=1
let [x = 1 , y = x] = [2]; //  x=2 , y=2
let [ x = y , y = l] = [ ] ; // ReferenceError  报错，是因为 用到默认值 时， 还没有声明
```
## 对象解构
**<font color="#d63200">对象解构</font>** 允许我们使用变量的名字匹配对象的属性，匹配成功将对象属性赋值给变量
```JavaScript
let Obj = {
    name: 'muzi', age: 18
}
let { name, age } = Obj
console.log(name, age) // muzi 18
```
需要注意的是对象解构时，等号左边的变量的次序与等号右边同名属性的次序不需要一致，但是等号左边的变量名与等号右边的属性名必须相同，不同会导致取不到值，最后等于 *<font color="#d63200">undefined</font>*，如下代码所示：
```JavaScript
let { baz } = { foo: 'aaa', bar : 'bb'}; 
console.log(baz) //  undefined
```
如果变量名与属性名不 致，必须写成下面这样
```JavaScript
let { foo: baz } = { foo: 'aaa', bar : 'bb'}; 
console.log(baz) //  aaa
```
实际上，对象的解构赋值是下面形式的简写          

    let { foo : foo , bar : bar } = { foo: 'aaa', bar : 'bb'};

也就是说，对象的解构赋值的内部机制是先找到同名属性，然后再赋值给对应的变量。真正被赋值的是后者，而不是前者。     
与数组一样，解构也可以用于嵌套结构的对象。
```JavaScript
let obj = {
    p: [ 'Hello',  { y :'World' } ]
}
let { p: [ x, {y} ] } = obj; 
// x=Hello ,y=World
```
注意，这时 **<font color="#d63200">p</font>**   是模式，不是变量，因此不会被赋值。如果 也要作为变量赋值，可以写成下面这样。
```JavaScript
let obj={
    p: [  'Hello',  { y :'World' } ]
}
let { p, p: [ x, {y} ] } = obj;
// x = Hello ,y = World, p = [  'Hello',  { y :'World' } ]
```
对象的解构也可以指定默认值。 
```JavaScript
let { x = 3 } = {} // x = 3
let { x: y = 3 } = { x: 5 } //y=5
```
对象的解构与数组解构有一个重要的不同：     
数组的元素是按次序排列的，变量的取值是由它的位置决定的；   
而对象的属性没有次序，变量必须与属性同名才能取到正确的值。
 