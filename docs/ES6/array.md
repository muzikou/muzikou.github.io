## Array.from()
在 **Array 构造函数**下，有一个 **from** 的方法，接受一个伪数组作为参数，返回转换后的一个数组。                                   
**<font color="#d63200">Array from</font>** 方法用于将两类对象转为真正的数组：        
+ 数组对象```(array-like object) ```              
+ 可遍历对象``iterable对象``             
包括 **ES6** 新增数据解构 ```Set和Map``` 。 
          
下面是一个类似数组的对象， ```Array.from``` 将它转为真正数组。                 
```JavaScript
let arrayLike = { 
    '0': 1, 
    '1': 2, 
    '2' : 3, 
    length: 3
}
// ESS 的写法
var arrl = [].slice.call(arrayLike); // [1,2,3] 
// ES6 的写法
let arr2 = Array.from(arrayLike) ; // [ 1,2,3]
``` 
此方法还可以接受第二个参数，作用类似于数组的 map 方法，用来对每个元素进行处理，将处理后的值放入返回的数组。              
```JavaScript
Array.from(arrayLike,item => item*2) // [2,4,6]
``` 
## Array.of()
**<font color="#d63200">Array.of</font>** 方法用于将一组值转换为数组。
```JavaScript
Array.of(3 , 11 , 8) // (3 , 11 , 8]
``` 
这个方法的主要目的是弥补数组构造函数 ```Array()``` 的不足，因为参数个数的不同会导致 ```Array(）```的行为有差异。
```JavaScript
Array () // [] 
Array ( 3) // [ , , , J 
Array (3, 11 , 8) // [3 , 11 , 8] 
``` 
上面的代码中， ```Array``` 方法没有参数、有 一个参数或有 多个参数时，返回结果都不一样。         
只有当参数个数不少于 2个时，```Array()```才会返回由参数组成的新数组。参数个数只有 1个时，实际上是指定数组的长度。                    
**<font color="#d63200">Array.of</font>** 基本上可以用来替代 ```Array()``` 或 ```new Array()```，井且不存在由于参数不同而导致的重载。它的行为非常统一。
        