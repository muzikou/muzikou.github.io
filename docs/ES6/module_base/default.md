1. 默认导出语法 *<font color="#d63200">export default</font>*  默认导出的成员,代码如下：
```JavaScript
// 当前模块 为 export1.js
//定义私有成员 a 和 c
let a = 10
let c = 20 

// 外界访问不到 变量 d 因为其没有被 暴露出去
let d = 30
function show(){}

// 将 本模块中的私有成员 暴露出去，供其他模块使用
export default  {
    a,
    c,
    show
}
```
2. 默认导入语法 *<font color="#d63200">import</font>* 接收名称 *<font color="#d63200">from</font>* ‘模块接收符’，代码如下： 
```JavaScript
// 导入模块成员
import export1 from './export1.js'

console.log(export1)

//打印输出结果为 
// { a: 10, c: 20, show: [function show] }
```
**<font color="#d63200">注意：</font>**
+ 在每一个模块中只允许使用唯一的一次 *<font color="#d63200">export default</font>* ，否则会报错
+ 在一个模块中如果没有向外 *<font color="#d63200">export default</font>*，则导入该模块时 默认输出 *<font color="#d63200">{}</font>*
