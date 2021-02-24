## 栈和堆

在学习 深浅拷贝之前，我们先来了解一下 **<font color="#d63200">JS</font>** 中 **栈** 和 **堆** 的概念  
**<font color="#d63200">栈(stack)</font>** 会自动分配内存空间，会自动释放。  
**<font color="#d63200">堆(heap)</font>** 动态分配的内存，大小不定也不会自动释放。

## 数据类型

在 *JS* 中 数据类型划分为 **基本数据类型** 和 **引用数据类型**。  

+ **<font color="#d63200">基本数据类型</font>**:  *String, Number, boolean, Null, Undefined,Symbol(ES6新增)*

指的是简单的数据段，将实际数据值存放在栈内存中，占据固定大小的空间  

+ **<font color="#d63200">引用数据类型</font>**:  *Array,Object,Function*  
指那些可能由多个值构成的对象。在栈中存储该对象的引用，真实数据值存放在堆内存中，占据空间大小不固定。

分析可知，引用数据类型 在栈中存储了对象的 **引用地址** (即指针)，该指针指向堆内存中该实体的起始地址  
如果两个变量存储的是同一个对象的引用地址，当修改其中的一个变量属性时，另一个也会受到影响，如下图：

![原型链](/img/js/copy1.png)

### 浅拷贝

**<font color="#d63200">浅拷贝</font>** 只拷贝一层，更深层次对象级别的只拷贝引用。  
简单点解释就是，例如 **B** 拷贝了 **A** ：  
如果 **A** 是基本数据类型， 会直接赋值给 **B**，当 **A** 改变时， **B** 不会跟着改变，反之 **B** 改变，**A** 也不会改变，此时拷贝当是 **A** 本身  
如果 **A** 是引用数据类型，将 **A** 的引用地址赋值给 **B**，而不是 **A** 的值。此时 **A** 改变时， **B** 也会跟着改变，如下所示：

```JavaScript
const obj = { name: 'muzi' }
var o = {}
for(let key in obj){
    // key 是属性名， obj[key] 是属性˙值
    o[key] = obj[key]
}
o.name  = '测试'
console.log(o) // {name: "测试"}
console.log(obj) // {name: "muzi"}
```

上面只是简单的数据类型，如果是 *引用数据类型* 你就会发现：

```JavaScript
const obj = { name: 'muzi' , children: { age: 18 }}
var o = {}
for(let key in obj){
    // key 是属性名， obj[key] 是属性˙值
    o[key] = obj[key]
}
o.children.age  = 28
console.log(o) // {name: "muzi", children: {age: 28}}
console.log(obj) // {name: "muzi", children: {age: 28}}
// 此时是因为 o 复制的只是 obj 的引用地址，当该地址对应的值改变时，指向改地址的变量都会变
```

### Object.assign方法

**<font color="#d63200">Object.assign方法</font>** 是 *<font color="#d63200">ES6</font>* 新增方法可以实现浅拷贝，*<font color="#d63200">Object.assign方法</font>* 方法可以把任意多个的源对象自身的可枚举属性拷贝给目标对象，然后返回目标对象。但是 *<font color="#d63200">Object.assign方法</font>* 进行的是浅拷贝，拷贝的是对象的属性的引用，而不是对象本身。

```JavaScript
Object.assign(target, ...sources)
// target：目标对象。
// sources：任意多个源对象。
// 返回值：目标对象会被返回
```

### 深拷贝

**<font color="#d63200">深拷贝</font>** 拷贝多层，每一级别的数据都会拷贝

1. 利用递归实现深拷贝

```JavaScript
const obj = { name: 'muzi' , children: { age: 18 }}
var deepObj = {}
function deepCopy(newobj,oldobj){
    for (var key in oldobj){
        var item = oldobj[key]
        // 判断 属性值的数据类型
        if(item instanceof Array){  // 如果是 数组类型
            newobj[key] = []
            deepCopy(newobj[key],item)
        }else if(item instanceof Object){ // 如果是 对象
            newobj[key] = {}
            deepCopy(newobj[key],item)
        }else{ // 是简单数据类型
            newobj[key] = item
        }
    }
  }
deepCopy(deepObj,obj)
deepObj.children.age = '20'
console.log(deepObj);   // { name: 'muzi' , children: { age: 20 }}
console.log(obj);   // { name: 'muzi' , children: { age: 18 }}
// 此时 deepObj 就是深拷贝，deepObj在栈中存储的 指针，指向 堆中新开辟了一个内存地址 
```

2. 利用 JSON 对象  
**<font color="#d63200">JSON</font>** 对象是 *ES5* 中引入的新的类型（支持的浏览器为IE8+）  
*JSON* 对象 *<font color="#d63200">parse</font>*  方法可以将 *JSON* 字符串反序列化成 *JS* 对象，*<font color="#d63200">stringify</font>* 方法可以将 *JS* 对象序列化成 *JSON* 字符串，借助这两个方法，也可以实现对象的深拷贝

```JavaScript
var source = { name:"source", child:{ name:"child" } } 
var target = JSON.parse(JSON.stringify(source));
target.name = "target";  //改变target的name属性
console.log(source.name); //source 
console.log(target.name); //target
```
