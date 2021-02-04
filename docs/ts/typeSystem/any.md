### 任意类型
有的时候，我们并不确定这个值到底是什么类型或者不需要对该值进行类型检测，就可以标注为 **<font color="#d63200">any</font>** 类型
```ts
// 标注语法:
变量: any

//用法
let any1: any;
any1 = 3;
let any2: string;
any2 = any1
```
- 任何值都可以赋值给 ```any``` 类型
- ```any``` 类型也可以赋值给任意类型
- ```any``` 类型有任意属性和方法

> <font color="#d63200">注意：</font>标注为 ```any``` 类型，也意味着放弃对该值的类型检测，同时放弃 ```IDE``` 的智能提示。           
> <font color="#d63200">小技巧：</font> 指定 ```noImplicitAny: true```，当函数参数出现隐含的 ```any``` 类型时报错

### 未知类型
**<font color="#d63200">unknown</font>**，3.0 版本中新增，属于安全版的 ```any```，但是与 ```any``` 不同的是：
- ```unknown``` 仅能赋值给 ```unknown```、```any```
- ```unknown``` 没有任何属性和方法
```ts
// 标注语法:
变量: unknown

//用法
let unknown1:unknown;
unknown1.indexof()  报错
``` 