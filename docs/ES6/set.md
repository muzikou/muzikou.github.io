## 概述
**<font color="#d63200">Set</font>** 是 **<font color="#d63200">ES6</font>** 新提供的数据结构，它类似于数组，但是成员的值都是唯一的，没有重复。
**<font color="#d63200">Set</font>** 本身是一个构造函数，用来生成 ```Set``` 数据结构 。
```JavaScript
let set1 = new Set();
console.log(set1);  // {}
[2, 3, 5, 4, 5, 2, 2].forEach(x => set1.add(x)) ;
console.log(set1); // 2 3 5 4
// 上面的代码通过 add 方法向 Set 结构加入成员，结果表明 Set 结构不会添加重复的值
``` 
**<font color="#d63200">Set</font>** 函数可以接受一个数组（或者具有 ```iterable``` 接口的其他数据结构）作为参数，用来初始化。
```JavaScript
const items = new Set ([1 , 2 , 3 , 4 , 5 , 5 , 5 , 5]) ; 
        console.log([...items]); // [1, 2, 3, 4, 5]
        console.log([items.size]) // 5
``` 
## Set 实例的属性和方法
**<font color="#d63200">Set</font>** 结构的实例有以下属性。
+ Set.prototype.constructor 构造函数，默认就是 Set 函数。
+ Set.prototype.size ：返回 Set 例的成员总数
**<font color="#d63200">Set</font>** 实例的方法分为两大类：操作方法（用于操作数据〉和遍历方法（用于遍历成员〉。
### 操作方法。                   
**<font color="#d63200">add(value)：</font>** 添加某一个值，返回 Set 结构本身。
```JavaScript
const s2 = new Set()
// 使用 add 向 set 结构中添加值
s2.add(6).add(8).add(8)
console.log(s2) // 6 8
``` 
**<font color="#d63200">delete(value)：</font>** 删除某一个值，返回一个布尔值，表示删除是否成功。
```JavaScript
s2.delete(6)
console.log(s2) // 8
``` 
**<font color="#d63200">has(value)：</font>**  返回 一个布尔值，表示参数是否为 ```Set``` 的成员。 
```JavaScript
console.log(s2.has(8)) // true
console.log(s2.has(6)) // false
``` 
**<font color="#d63200">clear()：</font>**  清除所有成员，没有返回值。 
```JavaScript
s2.clear()
console.log(s2)  // 
``` 
### 遍历方法
**<font color="#d63200">Set</font>** 结构的实例有 **4** 个遍历方法，可用于遍历成员。
+ keys 返回键名的遍历器。
+ values()：返回键值的遍历器
+ entries()：返回键值对的遍历器
+ forEach()：使用回调函数遍历每个成员
1. keys （）、 values （）、 entries()                  
三个方法返回的都是遍历器对象。由于 **<font color="#d63200">Set</font>** 结构没有键名，只有键值（或者说键名和键值是同一个值），所以 **```keys```** 方法和 **```values```** 法的行为完全一致。
```JavaScript
let set = new Set (['a','b','c']); 
for (let item of set.keys() ) { console.log(item) };  //  a b c
for (let item of set.values() ) {  console.log(item) }; // a b c
for (let item of set.entries() ) { console.log(item) }; // ['a','a'] ['b','b']  ['c','c']
``` 
**<font color="#d63200">Set</font>** 结构的实例默认可遍历，其默认遍历器生成函数就是它的 **```values```** 方法。所以，可以省略 values 方法，直接用 for ... of 循环遍历 Set。        
```JavaScript
for (let item of set) { console.log(item) };  //  a b c
``` 
2. forEach()             
**<font color="#d63200">Set</font>**  结构实例的 **```forEach```** 方法用于对每个成员执行某种操作，没有返回值,不影响原数据。    
```JavaScript
set.forEach(res => {console.log('foreach '+res)})// foreach a，foreach b，foreach c
console.log(set)//  a b c
``` 
## 遍历的应用
扩展运算符和 **<font color="#d63200">Set</font>** 结构相结合就可以 **去** 除数组的 **重** 复成员。
```JavaScript
const arr = [2,2,3,4,5,6,6,7]
const s3 = [ ...new Set(arr) ]
console.log(s3) // [2, 3, 4, 5, 6, 7]
``` 
数组的 **```map```** 和 **```filter```** 方法也可以用于 **<font color="#d63200">Set</font>**,所以 使用 **<font color="#d63200">Set</font>**可以实现 **井集**(Union)、**交集**(Intersect)和**差集**(Difference)。
```JavaScript
const a = new Set ( [ 1, 2 , 3] ); 
const b = new Set ( [ 4, 3 , 2 ]);
```
1. 并集
```JavaScript
const U = new Set([ ...a, ...b]);
console.log(U) // 1 2 3 4
```
2. 交集
```JavaScript
const N = new Set([ ...a ].filter(res => b.has(res)));
console.log(N) // 2 3 
```
3. 差集
```JavaScript
const D = new Set([ ...a ].filter(res => !b.has(res)));
console.log(D) // 1 
```
## WeakSet
 **<font color="#d63200">WeakSet</font>**  结构与 **<font color="#d63200">Set</font>** 类似，也是不重复的值的集合，但是它与 ```Set``` 有两个区别：
1. WeakSet 的成员只能是对象，而不能是其他类型的值
2. WeakSet 中的对象都是弱引用，即垃坡回收机制不考虑 ```WeakSet``` 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象是否还存在于 WeakSet 之中
### 语法
**<font color="#d63200">WeakSet</font>**  一个构造函数，可以使用 ```new``` 命令创建 ```WeakSet``` 数据结构。
```JavaScript
const ws = new WeakSet();
```
**<font color="#d63200">WeakSet</font>**  结构有以下几个方法。
**```WeakSet.prototype.add(value)```**： WeakSet 实例添加一个新成员。
**```WeakSet.prototype.delete(value)```**： 清除 ```WeakSet``` 实例 指定成员员。
**```WeakSet prototype.has(value)```**： 返回 个布尔值 表示某个值是否在 ```WeakSet``` 实例中。