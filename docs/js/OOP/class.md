
面向对象更贴近于我们的实际生活，可以使用面向对象描述现实世界的食物，但是事物分为具体事物和抽象事物。 

**面向对象的思维特点：**
1. 抽取（抽象）对象共用的属性和行为组织（封装）成一个类（模版）
2. 对类进行实例化，获取类的对象   

<font color="#d63200">总结：</font>面向对象编程中我们考虑的是有哪些对象，按照面向对象的思维特点，不断的创建对象、使用对象、指挥对象做事情
 但是 对象 和 类 又是什么呢？请继续往下学习

## 1、对象
在现实生活中，万物皆对象，这个对象是 <font color="#d63200">一个具体的事物</font>，看得见摸得着的实物。

<font color="#d63200">在Javascript中，对象是一组无序的相关属性和方法的集合，所有的事物都是对象</font>，例如 字符串，数组，函数等。      

对象是由 <font color="#d63200">属性</font> 和 <font color="#d63200">方法</font> 组成：   
+ 属性：事物的特征，在对象中用属性来表示（常用名词）    
+ 方法：事物的行为，在对象中用 方法来表示（常用动词）   

## 2、类 Class
在 *<font color="#d63200">ES6</font>* 中新增加了类的概念，可以使用 *<font color="#d63200">class</font>* 关键词声明一个类，然后用这个类来实例化对象。

<font color="#d63200">类</font> 抽象了对象的公共部分，泛指某一大类;    
<font color="#d63200">对象</font> 特指某一个，通过实例化一个具体的对象。    

**创建类** 

   
```JavaScript
// 语法：
class name{
    // class body
}
```
```JavaScript
//创建实例：
var xx = new name();
```
<font color="#d63200">注意：类必须使用 new 实例化对象</font>。 

## 3、类的构造函数 constructor 
*<font color="#d63200">constructor()</font>* 是类的构造函数（默认生成），用于传递参数，返回实例对象，通过 *<font color="#d63200">new</font>* 命令生成对象实例时，自动调用该方法。如果没有显示定义，类内部就会自动给我们创建一个 *<font color="#d63200">constructor</font>*
```JavaScript
//代码示例：
class Test{
    constructor(name){
        this.name = name
    }
    say(saysomething){
        console.log('hello，我是'+this.name +','+ saysomething)
    }
}
var test1 = new Test('muzi')
console.log(test1.name)
var test2 = new Test('Lee')
test2.say('我在测试')
console.log(test2.name)
```

<font color="#d63200">注意：</font>   
1. 通过 *<font color="#d63200">class</font>* 关键字创建类，类名我们还是习惯性定义 首字母 大写;    
2. 类里面有一个 *<font color="#d63200">constructor</font>* 函数，可以接受传递过来的参数，并返回实例对象;   
3. 只要 *<font color="#d63200">new</font>* 生成实例时，就会自动调用 *<font color="#d63200">constructor</font>* 函数，如果我们不去定义 *<font color="#d63200">constructor</font>* 函数，实例对象也会默认生成该函数;   
4. 生成实例时 *<font color="#d63200">new</font>* 不能省略;   
5. 最后注意语法规范，创建类的时候，类名后面不要加小括号；生成类的实例时，类名后面要加小括号；构造函数不需要加 *<font color="#d63200">function</font>* ,其实在类里面 所有的函数都不需要加 *<font color="#d63200">function</font>*;   
6. 多个方法之间 不需要 用 逗号 <font color="#d63200">( , )</font> 隔开。   

> 注意
>> 1、在 ES6 中没有变量提升，所以必须先定义类，才能通过类实例化对象   
>> 2、类里面公共的属性和方法一定要加 this 使用   
>> 3、类里面的 this 指向问题： constructor 构造函数中的 this 指向的是 实例化对象，方法里面的this 指向这个方法的调用者  
