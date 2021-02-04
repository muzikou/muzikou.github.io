### 无值类型
表示没有任何数据的类型，通常用于标注无返回值函数的返回值类型，函数默认标注类型位：**<font color="#d63200">void</font>** 

标注语法：
```typescript 
变量: void

// 用法
function fn():void {
    // 没有 return
}
``` 
### Never类型
当一个函数永远不可能执行 ```return``` 的时候，返回的就是 **<font color="#d63200">never</font>**，与 **<font color="#d63200">void</font>**  不同，**<font color="#d63200">void</font>** 是执行了 ```return```， 只是没有值，**<font color="#d63200">never</font>** 是不会执行 ```return```，比如抛出错误，导致函数终止执行
```typescript 
function fn1(): never {
    throw new Error('error');
}
let never1: string ;
never1 = fn1()

let never2: never;
let never3: string = '1';
let never4: any;
never2 = never3; // 报错
never2 = never4; // 报错
```
- ```never``` 类型是所有其它类型的子类
- 其它类型 不能赋值给 ```never``` 类型，即使是 ```any```