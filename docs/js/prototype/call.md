

ES6 之前并没有提供 extends 继承，可以通过 <font color="#d63200">构造函数+原型对象</font> 模拟实现继承，被称为 <font color="#d63200">组合继承</font> 。
## 1.call()
在学习继承之前要先熟悉运用 *<font color="#d63200">call()</font>* 方法。    
+ 定义：     
    调用这个函数，并修改函数运行时的 *<font color="#d63200">this</font>* 指向
```JavaScript
// 语法：
fun.call(this,arg1,arg2,...)
// 用法 如下
function test(a,b){
    console.log(this) // 不改变指向，this 指向 Window
    console.log(a+b)
}
// test() // 一般调用函数的方法

// 1. call() 可以调用函数
test.call()  // Window

// 2. call() 可以改变这个函数的 this 指向，
var Obj = {
    name: '改变 this 指向'
}
test.call(Obj) // this 指向 Obj

// 3. call(this,arg1,arg2) 可以传参数
test.call(Obj,12,34) // Obj,46
```

## 2. 构造函数继承
+ 核心原理：     
    通过 *<font color="#d63200">call()</font>* 把父类型的 *<font color="#d63200">this</font>* 指向子类型的 *<font color="#d63200">this</font>*，这样就可以实现 子类型 继承 父类型的属性。
```JavaScript
// 1、父构造函数
function Father(name,age){
    this.name = name;
    this.age = age;
}
// 2、子构造函数
function Son(name,age,score){
    Father.call(this,name,age)
    this.score = score
}
var son = new Son('Tom',8,100)
console.log(son)
``` 
注意：这种方法虽然能实现继承，但是只继承父类的构造函数里面的属性和方法，如果父类的原型链上有方法和属性，并不能继承。
## 3.原型对象继承 
子类想要继承父类原型链上有方法和属性，你可能会想到把 父类的原型对象赋值给子类就可以了，那就操作看看，具体如下：
```JavaScript
// 1、父构造函数
function Father(name){
    this.name = name;
    this.age = age;
}
// 父构造函数 原型对象的方法
Father.prototype.say = function(){
    console.log(this);
}
// 2、子构造函数
function Son(){ }
Son.prototype = Father.prototype 
let s = new Son('12324')
s.say() // undefined
``` 
这时我们会发现，虽然继承了父类原型链上有方法和属性，但是子类的 this 指向为 undefined，所以这种写法也不全面，那要怎么实现呢？
## 4.组合继承 
上面的两种方法都有缺点，如果两种方法组合使用，效果会怎么样呢？ 具体如下：
```JavaScript
// 1、父构造函数
function Father(name,age){
    this.name = name;
    this.age = age;
}
// 父构造函数 原型对象的方法
Father.prototype.say = function(){
    console.log('say something');
}
// 2、子构造函数
function Son(name,age,score){
    Father.call(this,name,age)
    this.score = score
}
Son.prototype = Father.prototype 
``` 
此时可以实现继承，但是如果我们定义一个只属于 子构造函数的方法，如下：
```JavaScript
// 定义一个只属于 子构造函数的方法
Son.prototype.study = function(){
    console.log('子构造函数需要学习')
}
console.log(Father.prototype)
``` 
最后输出我们发现，父构造函数也同时具备了 *<font color="#d63200">study</font>* 方法，所以此方式继承是不对的。    
这种方式，表面上可以实现子构造函数继承父构造函数的方法，但实际上，子构造函数的指向父构造函数的地址，当子构造函数改变时，父构造函数也会改变。  
正确的写法是把 <font color="#d63200">父类的实例对象赋值给子类的原型对象</font>，这是因为父类对象的 *<font color="#d63200">__ proto __</font>* 属性指向 父类构造函数的原型对象，所以可以实现子类继承父类的方法，同时子类的原型方法改变父类也不受影响，具体做法如下：   
```JavaScript
Son.prototype = new Father()
// 但是此时，子构造函数的实例对象的原型指向的是 父构造函数，
// 所以要记得利用 constructor 指回原来的构造函数
Son.prototype.constructor = Son;
``` 