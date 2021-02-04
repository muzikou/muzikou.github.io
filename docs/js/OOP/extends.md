
生活中：子承父业，比如继承父亲的姓氏。程序中，子类可以继承父类的一些属性和方法。 
```JavaScript
// 语法：
class Father {}
class Son extends Father{}
```
下面我们通过一个简单的例子来更直观的学习：
```JavaScript
//代码示例：
class Father{
    constructor(){ }
    eat(){
        console.log('父类教子类吃饭')
    }
}
class Son extends Father{ }
var son1 = new Son()
son1.eat()
```
由上面的例子，我们可以知道，子类继承来 父类的方法，当我们需要 子类传递给父类一些参数，并且调用 父类的方法时，要怎么做呢？你可能会做如下定义：
```JavaScript
//代码示例：
class Father{
    constructor(x,y){ 
        this.x = x;
        this.y = y;
    }
    sum(){
        console.log(this.x + this.y)
    }
}
class Son extends Father{ 
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}
var son1 = new Son(1,2)
son1.sum()
```
然后运行代码，会发现浏览器报错，这是为什么呢？  
其实仔细分析，不难发现，子类 是可以调用 父类的 *<font color="#d63200">sum</font>* 方法，但是 *<font color="#d63200">sum</font>* 方法中的 使用的是父类本身的 *<font color="#d63200">this.x</font>* 和 *<font color="#d63200">this.y</font>* ，但是我们 实例化 *<font color="#d63200">son</font>* 对象时，只是把参数传给了子类的，此时的父类并没有接收到参数，自然调用 *<font color="#d63200">sum</font>* 方法时就会报错，那要怎么更改呢?
## super
*<font color="#d63200">super</font>* 关键字用于访问和调用对象父类上的函数，可以调用父类的构造函数，也可以调用父类的普通函数。
#### 调用父类的构造函数
我们将上面子类的定义改成如下，便不会报错
```JavaScript
class Son extends Father{ 
    constructor(x,y){
        super(x,y)
    }
}
```
#### 调用父类的普通函数
```JavaScript
class Father{
    say(){
        return '我是爸爸'
    }
}
class Son extends Father{ 
    say(){
        return '我是儿子' 
    }
}
var son2 = new Son()
console.log(son2.say())
```
如果我们按照右上面定义，会发现 *<font color="#d63200">son</font>* 实例对象调用的是自己的 *<font color="#d63200">say</font>* 方法，而不是父类，这是因为 *<font color="#d63200">就近原则</font>* 。
> 继承中属性或者方法的查找原则：
>> 继承中，如果实例化对象输出一个方法，会先看子类本身有木有这个方法，如果有就执行自己的方法，如果没有就会向上查找父类中有木有这个方法，如果有就会执行

但是我还想让子类也继承父类的 say 方法，做如下定义即可： 
```JavaScript
class Father{
    say(){
        return '我是爸爸'
    }
}
class Son extends Father{ 
    say(){
        return super.say() + '的儿子'
    }
}
var son2 = new Son()
console.log(son2.say())
```
<font color="#d63200">注意：子类在构造函数中使用 *super* ，必须放在 *this* 前面，即必须先调用父类的构造函数再调用子类的构造函数</font>。 

