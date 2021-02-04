### 模块
在 **<font color="#d63200">TypeScript</font>** 中，模块分为 ```内部模块``` 和 ```外部模块```，但是在 ```TypeScript 1.5``` 里术语名已经发生了变化， "外部模块" 现在则简称为 **<font color="#d63200">"模块"</font>**，"内部模块" 现在称做 **<font color="#d63200">"命名空间"</font>**。

模块在其自身的作用域里执行，而不是在全局作用域里，所以在模块内定义的变量，函数，类等等在模块外部是不可见的，除非通过 **<font color="#d63200">export</font>** 把他们导出，同时如果想在其他模块使用导出的变量，函数，类，接口等的时候，也必须要 通过 **<font color="#d63200">import</font>** 引入模块才能使用。 

## export 导出 
下面我们来定义一个模块，并通过 **```export```** 将其中的变量、函数导出
```ts
// ./modules/user.ts 
export let userList:{}[] = [];
export function setUser(item: {}): {}[]{
    console.log(item)
    userList.push(item)
    return userList 
} 
```
当我们导出若干个变量和函数时，还可以如下方式导出：
```ts
// ./modules/user.ts 
let userList:{}[] = [];
function setUser(item: {}): {}[]{
    console.log(item)
    userList.push(item)
    return userList 
}
export  { userList, setUser }
```
## import 导入 
同时在需要用到该模块的文件中通过 **```import```** 引入
```ts 
import { userList, setUser } from './modules/user'
setUser({name: 'muzi'})
console.log(userList)  
```
当我们想要换个变量名称接收，可以使用 **```as```** 来起别名
```ts 
import { userList, setUser  as set} from './modules/user'
set({name: 'muzi'})
``` 
每个模块都可以有一个默认导出。 默认导出使用 **```default```** 关键字标记，如下：
```ts 
// ./modules/user.ts 
export let userList:{}[] = [];
function setUser(item: {}): {}[]{
    console.log(item)
    userList.push(item)
    return userList 
}
export default setUser;
```  
**<font color="#d63200">注意：</font>** 在一个模块中，**```export default```** 只允许向外暴露一次，同时允许同时和 ```export``` 一起使用。           
并且需要使用一种特殊的导入形式来导入 ```default``` 导出。
```ts 
import setUser from './modules/user'; 
``` 
