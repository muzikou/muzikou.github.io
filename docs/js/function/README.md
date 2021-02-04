## 函数的定义
函数有几种定义方式，具体如下：
1. 函数声明方式 function 关键字(命名函数)
```JavaScript
function fun(){ }
```
2. 函数表达式（匿名函数）
```JavaScript
 var fun2 = function () {}
```
3. 利用 new Function('参数1','参数2','函数体')
```JavaScript
var f = new Function('a','b','console.log(a+b)')
f(2,3)
```

**<font color="#d63200">注意：</font>** 所有的函数都是 Function 的实例对象，因此函数也属于对象函数也属于对象
## 函数的调用
1. 普通函数
```JavaScript
function fun(){ 
    console.log('普通函数的调用方式')
}
fun()
```
2. 对象的方法
```JavaScript
var obj = {
    fun:function(){
        console.log('对象的方法的调用方式')
    }
};
obj.fun()
```
3. 构造函数
```JavaScript
function Constru(){}
new Constru()
```
4. 绑定事件函数
```JavaScript
DOM.onclick = function(){
    console.log('绑定事件函数,点击标签就可以调用')
}
```
5. 定时器函数
```JavaScript
setTimeout(function(){
    console.log('一次性定时器，一秒后自动调用')
},1000)
```
5. 立即执行函数
```JavaScript
(function(){
    console.log('立即执行的函数，自动调用！')
})()
```