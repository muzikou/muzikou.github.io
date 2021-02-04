### 函数类型接口
接口除了描述带有属性的普通对象外，接口也可以描述函数类型。
**<font color="#d63200">函数类型接口</font>** 是一个只有参数列表和返回值类型的函数定义，下面我们先定义一个接口如下： 
```ts
interface getInfo{
    (name: string, age: number):string;
}
```
定义完成之后，下面是对这个接口的使用方法：
```ts
let info: getInfo;
info = function(name: string, age: number):string{
    return `姓名：${name}，年龄：${age}`
}
console.log(info('muzi', 18)) // 姓名：muzi，年龄：18
```
这样定义之后，后面复用这个接口可以生成很多类似功能的方法，实现批量约束。