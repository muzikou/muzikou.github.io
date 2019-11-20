在 单纯执行 某个模块的代码，并不需要得到模块中向外暴露的成员时，就可以直接导入并执行模块代码
1. 在模块中写一个 *<font color="#d63200">for</font>* 循环为例,代码如下：
```JavaScript
// 当前是 e2.js 模块
for(let i = 0; i < 3; i++){
    console.log(i)
}
```
2. 直接导入并执行模块代码，代码如下： 
```JavaScript
// 直接导入并执行 模块代码
import './e2.js' 
```
