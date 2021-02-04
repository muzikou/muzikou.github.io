### 对象类型
 **<font color="#d63200">Object</font>** 类型表示非原始值类型
标注语法
```typescript 
变量: object
```
下面我们来定一个一个对象类型的变量：
```typescript 
let obj: object = {
    x: 1,
     y: 2
}
obj.x = 3
```
这个时候编译器会提示 ```类型“object”上不存在属性“x”```，所以这种定义是不对，正确的定义如下:
```typescript 
let obj: {x: number, y: number} = {
    x: 1,
    y: 2
}
obj.x = 3
```
### 内置对象类型
除了  **<font color="#d63200">Object</font>** 类型，在 **JavaScript** 中还有很多的内置对象，如： **<font color="#d63200">Date</font>**，标注如下：
```typescript 
变量: 内置对象构造函数名

// 定义
let d1: Date = new Date; 
``` 
### 包装对象
这里说的包装对象其实就是 **JavaScript** 中的 ```String```、```Number```、```Boolean```，我们知道 ```字符串类型(string)``` 类型 和 ```字符串对象类型(String)``` 类型并不一样，在  **<font color="#d63200">TypeScript</font>** 中也不一样。
```typescript 
let str1: string;
str1 = '1';
str1 = new String('1');	// 错误

let str2: String;
str2 = new String('2');
str2 = '2';	// 正确
``` 
由上面的代码我们可以看出来，```字符串类型``` 可以赋值给 ```字符串对象类型```，但是 ```字符串对象``` 不能赋值给 ```字符串类型```。