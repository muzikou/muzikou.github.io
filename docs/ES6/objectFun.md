## 方法的 name 属性
函数的 ```name``` 属性返回函数名。对象方法也是函数，因此也有 ```name``` 属性。
```JavaScript
const person = { 
    sayName() { 
        console.log(' hello !')
    }
};
console.log(person.sayName.name) // sayName
```
有两种特殊情况： 
1. ```bind``` 方法创造的函数， ```name``` 属性返回 ```bound``` 加上原函数的名字; 
2. ```Function``` 构造函数创造的函数， ```name``` 属性返回 ```anonymous``` 
```JavaScript
(new Function()).name // "anonymous"
var doSomething = function() {}
doSomething.bind().name //  "bound doSomething"
```
如果对象的方法是一个 ```Symbol``` 值，那么 ```name``` 属性返回的是这个 ```Symbol``` 值的描述。
```JavaScript
const keys = Symbol('description')
let obj = { 
    [keys] () { } , 
}
obj[keys].name //  [description]
```
## Object.is()
在传统的 ```JavaScript``` 语言中，有两个运算符可以比较两个值是否相等：             
        相等运算符<font color="#d63200">(==)</font> 和 严格相等运算符<font color="#d63200">(===)</font>。      
但是前者会自动转换数据类型，后者的 **NaN** 不等于自身，以及 **＋0** 等于 **－0**。        
**<font color="#d63200">ES6</font>** 提出了```'Same-value equality'```（同值相等）算法用来解决这个问题。                 
```Object.is``` 就是部署这个算法的新方法。它用来比较两个值是否严格相等，与严格相等运算符<font color="#d63200">(===)</font>的行为基本一致。
```JavaScript
Object.is(+O , -0) // false
Object.is(NaN,NaN) // true
```
## Object.assign()
```Object.assign``` 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象，然后将目标对象返回。如果目标对象中的属性具有相同的键，则属性将被源对象中的属性覆盖。后面的源对象的属性将类似地覆盖前面的源对象的属性。
```JavaScript
Object.assign(target, ...sources)
// target：目标对象。
// sources：源对象。 
```
**<font color="#d63200">注意: </font>** ```Object.assign()``` 方法实行的是浅复制，而不是深复制。也就是说，如果源对象某个属性的值是对象，那么目标对象复制得到的是这个对象的引用。
## 属性的遍历 
**<font color="#d63200">ES6</font>** 一共有5种方法可以遍历对象的属性。         
**1. for...in：** 循环遍历对象自身的和继承的可枚举属性（不含 ```Symbol``` 属性）。
```JavaScript
const mapObj = {
    a: 1,
    b: 2,
    fn(){ },
    [Symbol()]: 3,
}
for(let key in mapObj){
    console.log(key,mapObj[key]) 
}
// a 1  // b 2 //fn ƒ fn(){ }
```
**2. Object.keys(obj)、Object.values()、Object.entries()**        
```Object keys``` 方法返回一个数组，包括对象自身的(不含继承)所有可枚举属性(不含 ```Symbol``` 属性)。                 
```Object values``` 方法返回一个数组，成员是参数对象自身的(不含继承)所有可遍历(```enumerable```)属性的键值。           
```Object entries``` 方法返回一个数组，成员是参数对象自身的(不含继承)所有可遍历(```enumerable```)属性的键值对数组。
```JavaScript
Object.keys(mapObj)    //["a", "b", "fn"]
Object.values(mapObj)  // [1, 2, ƒ]
Object.entries(mapObj) // [["a", 1],["b", 2],["fn", ƒ]]
```
**3. Object.getOwnPropertyNames(obj)：** 返回 一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性。      
```JavaScript
Object.getOwnPropertyNames(mapObj)  //["a", "b", "fn"]
```                 
**4. Object.getOwnPropertySymbols(obj)：** 返回 一个数组，包含对象自身的所有 ```Symbol``` 属性。           
```JavaScript
Object.getOwnPropertySymbols(mapObj) //[Symbol()]
```  
**5. Reflect.ownKeys(obj)：** 返回一个数组，包含对象自身的所有属性，不管是属性名是 ```Symbol``` 或字符串，也不管是否可枚举。
```JavaScript
Object.Reflect.ownKeys(mapObj) //["a", "b", "fn", Symbol()]
``` 
以上 5种方法遍历对象的属性时都遵守同样的属性遍历次序规
+ 首先遍历所有属性名为数值的属性 按照数字排序
+ 其次遍历所有属性名为字符串的属性，按照生成时间排序。
+ 最后遍历所有属性名为 ```Symbol``` 值的属性，按照生成时间排序。
```JavaScript
Reflect.ownKeys({ [Symbol()]:0, b:0, 10:0, 1:0, a:0 }) // ['2', '10', 'b', 'a', Symbol()]
```
上面代码中，```Reflect.ownKeys``` 方法返回一个数组，包含了参数对象的所有属性。这个数组的属性次序是这样的，首先是数值属性2和10，其次是字符串属性 **b** 和 **a**，最后是 ```Symbol``` 属性。
