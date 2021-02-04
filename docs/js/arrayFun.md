
## join() 和 toString() 
*<font color="#d63200">join() </font>* 用于把数组中的所有元素转换一个字符串。元素是通过指定的分隔符进行分隔的，返回一个字符串。                  
*<font color="#d63200">toString() </font>* 方法可把数组转换为字符串，并返回结果。    
```JavaScript
// 语法：
array.join(separator)
// separator: 可选。指定要使用的分隔符。如果省略该参数，则使用逗号作为分隔符 
array.toString() // 注意：数组中的元素之间用逗号分隔
``` 
## pop() 和 push()
*<font color="#d63200">pop() </font>* 方法用于删除数组的最后一个元素并返回删除的元素。                               
*<font color="#d63200">push() </font>* 方法可向数组的末尾添加一个或多个元素，并返回新的长度。     
```JavaScript
// 语法：
array.pop()   // 注意：此方法改变数组的长度。
array.push(item1, item2, ..., itemX)
// item1, item2, ..., itemX: 必需。要添加到数组的元素。
// 注意： 
    // 新元素将添加在数组的末尾。   
    // 此方法改变数组的长度。
```  
    
## shift() 和 unshift() 
*<font color="#d63200">shift() </font>*  方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。    
*<font color="#d63200">unshift() </font>*  方法可向数组的开头添加一个或更多元素，并返回新的长度。    
```JavaScript
// 语法：
array.shift() // 注意：此方法改变数组的长度。
array.unshift(item1,item2, ..., itemX) // 注意：此方法改变数组的长度。
// item1, item2, ..., itemX: 可选。向数组起始位置添加一个或者多个元素。
``` 
## slice() 
*<font color="#d63200">slice()</font>* 方法可从已有的数组中返回选定的元素，也可以提取字符串的某个部分，并以新的字符串返回被提取的部分。
```JavaScript
// 语法：
array.slice(start, end)
// start: 可选。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。也就是说，-1 指最后一个元素，-2 指倒数第二个元素 
// end: 可选。规定从何处结束选取。该参数是数组片断结束处的数组下标(不包含此下标)。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素;
``` 
+ <font color="#d63200">注意：</font>     
    *<font color="#d63200">slice()</font>* 方法不会改变原始数组。
## splice() 
*<font color="#d63200">splice() </font>* 方法用于添加或删除数组中的元素。
```JavaScript
// 语法：
array.splice(index,howmany,item1,.....,itemX)
// index: 必需。规定从何处添加/删除元素。该参数是开始插入和（或）删除的数组元素的下标，必须是数字
// howmany: 可选。规定应该删除多少元素。必须是数字，但可以是 "0"。如果未规定此参数，则删除从 index 开始到原数组结尾的所有元素
// item1, ..., itemX：可选。要添加到数组的新元素
``` 
+ <font color="#d63200">注意：</font>     
    *<font color="#d63200">splice()</font>* 方法会改变原始数组。

## forEach() 
*<font color="#d63200">forEach() </font>* 方法用于调用数组的每个元素，并将元素传递给回调函数。
```JavaScript
// 语法：
array.forEach(function(currentvalue,index,arr))
// currentValue: 数组当前项的值; 
// index: 数组当前项的索引;
// arr:  数组对象本身 
``` 
+ <font color="#d63200">注意：</font>     
    *<font color="#d63200">forEach() </font>* 对于空数组是不会执行回调函数的。

## map()
*<font color="#d63200">map() </font>* 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
*<font color="#d63200">map() </font>* 方法按照原始数组元素顺序依次处理元素。
```JavaScript
array.map(function(currentvalue,index,arr))
``` 
+ <font color="#d63200">注意：</font>     
    *<font color="#d63200">map() </font>* 不会对空数组进行检测。     
    *<font color="#d63200">map() </font>* 不会改变原始数组。

## filter() 
*<font color="#d63200">filter() </font>* 创建一个新的数组，数组中的元素是通过检查制定数组中符合条件的所有元素，主要用于筛选数组
注意 此方法直接返回一个新的数组
```JavaScript
array.filter(function(currentvalue,index,arr))
``` 
+ <font color="#d63200">注意：</font>         
    *<font color="#d63200">filter() </font>* 不会对空数组进行检测。    
    *<font color="#d63200">filter() </font>* 不会改变原始数组。

## some() 
*<font color="#d63200">some() </font>* 方法用于检测数组中的元素是否满足制定条件，即查找数组中满足条件的元素。      
*<font color="#d63200">some() </font>* 方法会依次执行数组的每个元素：     
&emsp;  1. 如果有一个元素满足条件，则表达式返回 *<font color="#d63200">true</font>* , 剩余的元素不会再执行检测。     
&emsp;  2. 如果没有满足条件的元素，则返回 *<font color="#d63200">false</font>*。
```JavaScript
array.some(function(currentvalue,index,arr))
``` 
+ <font color="#d63200">注意：</font>      
    *<font color="#d63200">some() </font>* 不会对空数组进行检测。   
    *<font color="#d63200">some() </font>* 不会改变原始数组。   

## every() 
*<font color="#d63200">every()</font>* 方法用于检测数组所有元素是否都符合指定条件。    
*<font color="#d63200">every()</font>* 方法使用指定函数检测数组中的所有元素：    
&emsp;  1. 如果数组中检测到有一个元素不满足，则整个表达式返回 *<font color="#d63200">false</font>* ，且剩余的元素不会再进行检测。   
&emsp;  1. 如果所有元素都满足条件，则返回 *<font color="#d63200">true</font>*。  
```JavaScript
array.every(function(currentvalue,index,arr))
``` 
+ <font color="#d63200">注意：</font>     
    *<font color="#d63200">every()</font>* 不会对空数组进行检测。   
    *<font color="#d63200">every()</font>* 不会改变原始数组。   
