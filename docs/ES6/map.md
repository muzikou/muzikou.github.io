## 概述
**<font color="#d63200">Map</font>** 是 **<font color="#d63200">ES6</font>** 新提供的数据结构，它类似于对象，也是键值对的集合，但是键的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
**<font color="#d63200">Map</font>** 本身是一个构造函数，可以接受一个数组作为参数。该数组的成员是 一个个表示键值对的数组。
```JavaScript
const map1= new Map([ ['a',1], ['b',2] ])
``` 
事实上，不仅仅是数组，任何具有 ```Iterator``` 接口且每个成员都是一个双元素数组的数据结构，都可以当作 **<font color="#d63200">Map</font>**  构造函数的参数。也就是说， **Set** 和 **Map** 都可以用来生成新的 **Map**。
```JavaScript
const set = new Set([ 
    [ 'a',1], 
    [ 'b', 2]
]) 
const m1 = new Map(set) ; 
console.log(m1.get('a')) // 1

const m2 = new Map([['c',3]])
const m3 = new Map(m2)
console.log(m3.get('c')) // 3
``` 
如果对同 **1** 个键多次赋值，后面的值将覆盖前面的值。
```JavaScript
const m4 = new Map() ; 
m4.set(1,'a').set(1,'b') ; 
console.log(m4.get(1)) // b
``` 
如果读取一个未知的键，则返回 undefined
```JavaScript
console.log(new Map().get ('aa') )   // undefined
``` 
只有对同一个对象的引用， **<font color="#d63200">Map</font>** 结构才将其视为同一个键。
```JavaScript
const map= new Map(); 
map.set(['a'], 555); 
map.get(['a']) // undefined
``` 
上面的 **set** 和 **get** 方法表面上是针对同一个键，实际上却是两个值，内存地址是不一样的，因此 **get** 方法无法读取该键，返回 **undefined**。
```JavaScript
const k = ['a']
map.set(k, 666); 
console.log(map.get(k)) // 666
``` 
**<font color="#d63200">Map</font>** 的键实际上是和内存地址绑定的，只要内存地址不 一样，就视为两个键。
## 实例的属性和操作方法
**<font color="#d63200">size属性：</font>** 返回 **Map** 结构的成员总数。
```JavaScript
const m5 = new Map([['c',3]]) ; 
console.log(m5.size) // 1
``` 
**<font color="#d63200">set(key, value)：</font>** **set** 方法设置 **key** 所对应的键值，然后返回整个 **Map** 结构。如果 **key** 已经有值，则键值会被更新，否则就新生成该键。
```JavaScript
m5.set('a', 1).set('b', 2); 
``` 
**<font color="#d63200">get(key)：</font>** **get** 方法读取 **key** 对应的键值，如果找不到 **key** ，则返回 **undefined**。
```JavaScript
console.log(m5.get('a'),m5.get('d'))  // 1 undefined
``` 
**<font color="#d63200">has(key)：</font>**  **has** 方法返回一个布尔值，表示某个键是否在 **Map** 数据结构中。
```JavaScript
console.log(m5.has('b')) // true
``` 
**<font color="#d63200">delete(key)：</font>** **delete** 方法删除某个键，返回 **true** 。如果删除失败 ，则返回 **false**。
```JavaScript
m5.delete('a')
console.log(m5.size) // 2
``` 
**<font color="#d63200">clear()：</font>** **clear** 方法清除所有成员，没有返回值。
```JavaScript
m5.clear()
console.log(m5.size) // 0
``` 
## 遍历方法
**<font color="#d63200">keys：</font>** 返回键名的遍历器。
**<font color="#d63200">values()：</font>** 返回键值的遍历器。
**<font color="#d63200">entries()：</font>** 返回所有成员的遍历器。
**<font color="#d63200">forEach()：</font>** 遍历 **Map** 的每个成员,不改变原数据结构。
```JavaScript
const m6 = new Map([['c',3],['b',2],['a',1]]) ; 
for (let item of m6.keys() ) { console.log(item) };  //  c b a
for (let item of m6.values() ) {  console.log(item) };  // 3 2 1
for (let item of m6.entries() ) { console.log(item) };  // ['c',3] ['b',2] ['a',1]

m6.forEach((value,key,map) => {console.log(value,key,map)})
// 3 "c" Map(3) {"c" => 3, "b" => 2, "a" => 1} 
// 2 "b" Map(3) {"c" => 3, "b" => 2, "a" => 1}
// 1 "a" Map(3) {"c" => 3, "b" => 2, "a" => 1} 
```     

## WeakMap
**<font color="#d63200">WeakMap</font>**  结构与 **Map** 结构类似，也用于生成键值对的集合。它与 **Set** 有两个区别：
1. WeakMap 只接受对象作为键名（ null 除外），不接受其他类型的值作为键名。
2. WeakMap 的键名所指向的对象不计入垃圾回收机制。、
### WeakMap 的语法
```JavaScript
const wm = new WeakMap();
``` 
**<font color="#d63200">WeakMap</font>** 只有 **4** 个方法可用： ```get()```、 ```set()```、 ```has()```、```delete()```,  ```size```，```forEach```，```clear``` 法都不存在