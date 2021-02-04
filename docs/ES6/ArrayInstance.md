## copyWithin()
**<font color="#d63200">copyWithin 方法</font>** 会在当前数组内部将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法会修改当前数组。                                 
```JavaScript
Array.prototype.copyWithin(target, start= 0 , end= this.length)
// target （必选〉 ：从该位置开始替换数据。
// start （可选）：从该位置开始读取数据，默认为 。如果为负值，表示倒数。
// end （可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。
// 这 3个参数都应该是数值，如果不是，会自动转为数值。  
```
举例说明： 
```JavaScript 
[1, 2 , 3 , 4, 5].copyWithin(O , 3) // [4, 5 , 3 , 4, 5] 
``` 
上面的代码表示，将从 **3** 号位置直到数组结束的成员```(4，5)```复制到从 **0** 号位置开始的位置，结果覆盖了原来的 **1** 和 **2** 。       
```JavaScript 
[].copyWithin.call({length: 5 , 3: 1}, 0 , 3) // { 0: 1 , 3 : 1 , length : 5}
``` 
上面的代码表示，将 **3**  号位复制到 **0** 号位
## find() 和 findIndex()
**<font color="#d63200">find 方法</font>** 用于找出第一个符合条件的数组成员，并返回该成员，如果没有符合条件的成员，则返回 ```undefined```。
```JavaScript 
array.find(function(currentValue, index, arr){},thisValue)
// function(currentValue, index,arr)： 一个回调函数，所有数组成员依次执行该回调函数 
// 其中函数有三个参数：
// currentValue 必需。当前元素
// index 可选。当前元素的索引值
// arr 可选。当前元素所属的数组对象
// thisValue 可选。传递给函数的值一般用 "this" 值。如果这个参数为空，值为"undefined"

[2,3,6,8].find(item => item > 5) // 6
```  
**<font color="#d63200">注意：</font>**
+ find() 对于空数组，函数是不会执行的。        
+ find() 并没有改变数组的原始值。   

**<font color="#d63200">findIndex 方法</font>** 返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回 **－1**， 用法与 ```find 方法```非常类似。
```JavaScript 
array.findIndex(function(currentValue, index, arr){}, thisValue)
// function(currentValue, index,arr)： 一个回调函数，所有数组成员依次执行该回调函数 
// 其中函数有三个参数：
// currentValue 必需。当前元素
// index 可选。当前元素的索引值
// arr 可选。当前元素所属的数组对象
// thisValue 可选。 传递给函数的值一般用 "this" 值。如果这个参数为空， 值为"undefined"


[2,3,6,8].findIndex(item => item > 5) // 2
``` 
## fill()
**<font color="#d63200">fill() 方法</font>** 给定值填充 一个数组。
```JavaScript 
array.fill(value, start, end)
// 	value 必需。填充的值。
// start,可选。开始填充位置。 end 可选。停止填充位置
``` 
```fill 方法```用于空数组的初始化时非常方便。
```JavaScript 
new Array(3).fill (7)// [7 , 7, 7]
``` 
```fill 方法```会把数组中已有 元素会被全部抹去。
```JavaScript 
[ 'a','b','c'].fill(7)  // [7 , 7, 7]
``` 
## keys()、values() 和 entries()
**<font color="#d63200">ES6</font>**  提供了3个新方法用于遍历数组，他们都返回一个遍历器对象，可用 ```for ... of```循环遍历。
**<font color="#d63200">keys()</font>**：是对键名的遍历         
**<font color="#d63200">values()</font>**：是对键值的遍历         
**<font color="#d63200">entries()</font>**：是对键值对 遍历   
```JavaScript 
[...[2,3,6,8].keys()] // [0, 1, 2, 3]
[...[2,3,6,8].entries()] // [ [0,2],[1,3],[2,6],[3,8] ]
[...[2,3,6,8].values()] // [ 2,3,6,8 ]
```  
## includes()
**<font color="#d63200">includes() 方法</font>** 返回一个布尔值，表示某个数组是否包含给定的值，如果是返回 *true*，否则 *false*。
```JavaScript 
arr.includes(searchElement, fromIndex)
// searchElement 必须。需要查找的元素值。
// fromIndex 可选。从该索引处开始查找 searchElement。如果为负值，则按升序从 array.length + fromIndex 的索引开始搜索。默认为 0。

[1, 2, 3].includes(2);     // true
```
        
        
        