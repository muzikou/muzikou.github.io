
## 1.构造函数原型 prototype

构造函数通过 <font color="#d63200">原型</font> 分配的函数是所有对象所共享的。   
*<font color="#d63200">JS</font>* 规定，每一个构造函数里面都有一个 *<font color="#d63200">prototype</font>* 属性，它指向另一个对象，所以这个 *<font color="#d63200">prototype</font>* 就是一个对象，这个对象的所有属性和方法，都会被构造函数所拥有。   
所以可以把一些不变的方法，直接定义在 *<font color="#d63200">prototype</font>* 对象上，这样所有的对象实例 就可以共享这些方法

```JavaScript
function Student(name){
    this.name = name;
}
Student.prototype.say = function(){
    console.log('我叫'+this.name+',是名学生')
}
var stu = new Student('木子')
var stu2 = new Student('学生2')
stu.say() // 我叫木子,是名学生
console.log(stu.say === stu2.say) // true
// 一般情况下，公共的属性定义到构造函数里面，公共到方法放到原型对象里面
```

我们只是把 公共方法定义在 构造函数的 *<font color="#d63200">prototype</font>* 原型对象上，为什么实例化出来的对象，也能访问这个方法呢？  
想要弄明白这个问题，就要知道 *<font color="#d63200">__ proto __</font>* 的存在

## 2.对象的原型 __ proto __

对象都有一个 *<font color="#d63200">__ proto __</font>* 属性，指向构造函数的 *<font color="#d63200">prototype</font>* 原型对象，所以我们实例化出来的对象可以使用构造函数的 *<font color="#d63200">prototype</font>* 原型对象的属性和方法即可。

+ <font color="#d63200">总结：</font>      
    *<font color="#d63200">__ proto __</font>* 对象原型和和原型对象 *<font color="#d63200">prototype</font>* 是等价的。    
    *<font color="#d63200">__ proto __</font>* 对象原型的意义就在于 为对象的查找机制提供一个方向，或者说一条线路，但是它是一个非标准属性。因此在实际开发中，不可以使用这个属性，他只是内部指向原型对象 *<font color="#d63200">prototype</font>* 。   

## 3.constructor 构造函数
对象原型 *<font color="#d63200">__ proto __</font>* 和构造函数 *<font color="#d63200">prototype</font>* 原型对象里面都有一个属性 *<font color="#d63200">constructor</font>* 属性，称之为 <font color="#d63200">构造函数</font>，因为它指回构造函数本身。       
*<font color="#d63200">constructor</font>* 主要用于记录该对象引用于哪个构造函数，也可以让原型对象重新指向原来的构造函数
## 4.原型链

![原型链](/img/js/prototype.png)  

## 5.JS 的成员查找机制
**1. 当访问一个对象的属性（包括方法）时，首先查找这个对象自身有没有该属性**    
**2. 如果没有就查找它的原型（也就是  *<font color="#d63200">__ proto __</font>* 指向的 *<font color="#d63200">prototype</font>* 原型对象）**     
**3. 如果还没有就查找原型对象的原型（也就是  *<font color="#d63200">Object</font>* 的原型对象）**     
**4. 以此类推，一只查找到 *<font color="#d63200">Object</font>* 的原型为止 （ *<font color="#d63200">Object</font>* ）**     
