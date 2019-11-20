1. 按需导出   *<font color="#d63200">export let a = 10</font>*,代码如下：
```JavaScript
// 当前模块 为 export1.js

// 向外按需 导出 a
export let a = 'aaa'
// 向外按需 导出 b
export let b = 'bbb'
// 向外按需 导出方法 show
export function say(){
 console.log('say')
}
```
2. 按需导入 *<font color="#d63200">import { a1 } from</font>* '模块接收符’，代码如下： 
```JavaScript
// 默认导入和按需导入同时使用
// import export1,{ a, b, say } from './export1.js'

// 导入模块成员
import { a, b, say } from './export1.js'
console.log(a) // 打印 输出 aaa
console.log(b) // 打印 输出 bbb
console.log(say) // 打印 输出 [Function: say]
```
**<font color="#d63200">注意：</font>**
+ 在每一个模块中 可以使用 *<font color="#d63200">n</font>* 多次按需导出
