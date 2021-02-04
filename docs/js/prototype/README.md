
## 概述：
在典型的 OOP 的语言中，都存在类的概念，类就是对象的模版，对象就是类的实例，但是在 *<font color="#d63200">ES6</font>* 之前，*<font color="#d63200">JS</font>* 并没有引入类的概念。   
在 *<font color="#d63200">ES6</font>* 之前，对象不是基于类创建的，而是用一种称为构造函数的特殊函数来定义对象和他们的特征。
### 对象的三种创建方式：
#### 1.利用对象字面量创建对象
```JavaScript
var obj = { }
``` 
#### 2.利用 new Object() 创建对象
```JavaScript
var obj = new Object();
``` 
#### 3.利用构造函数创建对象
```JavaScript
function Student(name){
    this.name = name;
    this.say = function (){
        console.log('我叫'+this.name+',是名学生')
    }
}
var stu = new Student('木子～')
```
上面我们用到 构造函数来定义对象，那构造函数具体要怎么用呢？请看下一篇文章 [构造函数](/js/prototype/constructor.md)

