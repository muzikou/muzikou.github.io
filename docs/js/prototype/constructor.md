
## 1.定义
*<font color="#d63200">构造函数</font>* 是一种特殊的函数，主要用来初始化对象，即为对象成员变量赋初始值。    
与 *<font color="#d63200">new</font>* 一起使用，可以把对象中一些公共的属性和方法抽取出来，然后封装到这个函数里面。 
```JavaScript
// 写法如下：
function Student(name){
    this.name = name;
    this.say = function (){
        console.log('我叫'+this.name+',是名学生')
    }
}
var stu = new Student('木子～')
```  
* 在 *JS* 中，使用构造函数时要注意以下两点：    
    1. 构造函数用于创建某一类对象，其首字母要 <font color="#d63200">大写</font>。    
    2. 构造函数要和 *<font color="#d63200">new</font>* 一起使用才有意义。    
## 2. new 在执行的时候会做四件事
1. 在内存中创建一个新的空对象     
2. 让 **<font color="#d63200">this</font>** 指向这个新的对象       
3. 执行构造函数里面的代码，给这个对象添加属性和方法        
4. 返回这个新的对象，因此在构造函数中不需要 *<font color="#d63200">return</font>*  

## 3.成员
构造函数中的属性和方法我们称之为 <font color="#d63200">成员</font>。   
成员是可以添加的，成员分为 <font color="#d63200">静态成员</font> 和 <font color="#d63200">实例成员</font>。

**静态成员：** 在构造函数本身直接添加的成员称之为 静态成员， 只能由构造函数本身来访问。    
**实例成员：** 在构造函数内部创建的对象成员（即通过 *<font color="#d63200">this</font>* 添加的）称之为 实例成员，只能由实例化的对象来访问。
```JavaScript
// 定义如下：
function Student(name){
    this.name = name;
    this.say = function (){
        console.log('我叫'+this.name+',是名学生')
    }
}
var stu = new Student('木子～') // stu 是 Student 构造函数的实例对象 
// 1、构造函数中的 name say 都是实例成员，通过实例化的对象 来访问
stu.say()
console.log(stu.name)
console.log(Student.say) // 不能 通过构造函数直接访问实例成员

// 2、如下 age 就是静态成员
Student.age = '18'
console.log(stu.age) // 不能通过 实例对象来 访问静态成员
```  
## 4.存在的问题
构造函数方法虽然很好用，但是 <font color="#d63200">存在浪费内存的问题</font>。     
这是因为在创建构造个函数的时候，我们会把属性和方法在构造函数内部创建，这样我们实例化不同的对象时，都会开辟一个内存空间，来储存同一个方法，这样就比较浪费内存。      
如果想要所有的实例对象共用同一个函数，以此节省内存，要怎么做呢？请看下一篇文章 [原型](/js/prototype/prototype.md)

