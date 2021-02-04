**<font color="#d63200">高阶函数</font>** 英文叫 **<font color="#d63200">Higher-order function</font>**                      
**<font color="#d63200">高阶函数</font>** 是对其他函数进行操作的函数，它接受函数作为参数或者将函数作为返回值输出。            
```JavaScript
function fun(callback){
    callback && callback()
}
/// 函数可以作为参数传递
function fn(x,y,f){
    console.log(f(x,y))
}
fn(2,3,Math.pow) // 8
```
介绍几个常见的内置高阶函数的例子：
1. **<font color="#d63200">map()</font>**
```JavaScript
var arr = [1,2,3,4]
/// 函数可以作为参数传递
function pow(x){
    return x * x;
}
console.log(arr.map(pow)) // [1, 4, 9, 16]
```
2. **<font color="#d63200">reduce()</font>**                  
**Array** 的 **reduce()** 把一个函数作用在这个 **Array** 的 [x1, x2, x3...] 上，这个函数必须接收两个参数，**reduce()** 把结果继续和序列的下一个元素做累积计算，其效果就是:
```JavaScript
[x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)
```    
比方说对一个 **Array** 求和，就可以用 **reduce()** 实现：
```JavaScript
var arr = [1,2,3,4]
/// 函数可以作为参数传递
function pow(x){
    return x + x;
}
console.log(arr.reduce(pow)) // 8
```
3. **<font color="#d63200">filter()</font>**                  
*filter()* 用于把Array的某些元素过滤掉，然后返回剩下的元素。                  
*filter()* 把传入的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素。
```JavaScript
//例如，在一个Array中，删掉偶数，只保留奇数，可以这么写：
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var r = arr.filter(res => res % 2 !== 0)
console.log(r) // [1, 3, 5, 7]
```
4. **<font color="#d63200">sort()</font>**                       
*<font color="#d63200">JavaScript</font>* 的 *<font color="#d63200">Array</font>* 的 *<font color="#d63200">sort()</font>* 方法就是用于排序的，但是排序结果可能可能和你预期的不太一样：
```JavaScript
// 看上去正常的结果:
['Google', 'Apple', 'Microsoft'].sort(); // ['Apple', 'Google', 'Microsoft'];

// apple排在了最后:
['Google', 'apple', 'Microsoft'].sort(); // ['Google', 'Microsoft", 'apple']

// 无法理解的结果:
[10, 20, 1, 2].sort(); // [1, 10, 2, 20]
```
第二个排序把 *apple* 排在了最后，是因为字符串根据 *ASCII* 码进行排序，而小写字母 *a* 的 *ASCII* 码在大写字母之后。   
第三个排序结果是什么鬼？简单的数字排序都能错？   
这是因为 *Array* 的 *sort()* 方法默认把所有元素先转换为 *String* 再排序，结果 '10' 排在了 '2'的前面，因为字符 '1' 比字符 '2' 的 *ASCII* 码小。   
但其实 *sort()* 方法也是一个高阶函数，它还可以接收一个比较函数来实现自定义的排序。
```JavaScript
var arr = [10, 20, 1, 2];
arr.sort(function (x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
});
console.log(arr); // [1, 2, 10, 20]
```