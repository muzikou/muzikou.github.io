前面我们说到，**<font color="#d63200">TypeScript</font>**  的核心之一就是对值（数据）所具有的结构进行类型检查，除了一些前面说到基本类型标注，针对对象类型的数据，除了前面提到的一些方式以外，我们还可以通过： **<font color="#d63200">Interface</font>** <u>(接口)</u>，来进行标注。
在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规范的作用。接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它只规定这批类里必须提供某些方法，提供这些方法的类就可以满足实际需要。 
typescrip 中的接口类似于java，同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等
## 基础语法
**<font color="#d63200">接口：</font>** 对复杂的对象类型进行标注的一种方式，或者给其它代码定义一种契约（比如：类）。             
接口的基础语法定义结构特别简单，如下：
```typescript
interface Inter {
    x: number,
    y: number
}
```
上面的代码定义了一个类型，该类型包含两个属性，一个 ```number``` 类型的 ```x``` 和一个 ```number``` 类型的 ```y```，接口中多个属性之间可以使用 <u>逗号</u> 或者 <u>分号</u> 进行分隔。

我们可以通过这个接口来给一个数据进行类型标注：
```typescript
let I1: Inter = {
    x: 1,
    y: 2 
}
```
这里需要注意一点， **接口是一种类型，不能作为值去使用**
```ts
let I2 = Inter; // “Inter”仅表示类型，但在此处却作为值使用
```
同时需要注意， 如果给一个 **接口中不存在的属性 ，也会返回错误**
```ts
let I3: Inter = {
    z: 3, //报错：不能将类型“{ z: number; }”分配给类型“Inter”。 对象文字可以只指定已知属性，并且“z”不在类型“Inter”中
}
```
## 可选属性
接口也可以定义可选的属性，通过 **<font color="#d63200">?</font>** 来进行标注:
```ts
interface Inter {
    x: number,
    y: number,
    z?: number
}
```
其中的 **```z?```** 表示该属性是可选的。
## 只读属性
我们还可以通过 **<font color="#d63200">readonly</font>** 来标注属性为只读：
```ts
interface Inter {
    readonly x: number,
    readonly y: number,
    z?: string
}
let I4: Inter = {
    x: 1,
    y: 2
}
I4.x = 3  // 无法分配到 "x" ，因为它是只读属性
I4.z = '可选属性可以 赋值'
```
当我们标注了一个属性为只读，那么该属性除了初始化以外，是不能被再次赋值的。

## 任意属性
有的时候，我们希望给一个接口添加任意属性，可以通过 **<font color="#d63200">索引类型</font>** 来实现
### 数字类型索引
```typescript
interface Inter {
    x: number;
    y: number;
    [prop: number]: number;
}
```
### 字符串类型索引
```typescript
interface Inter {
    x: number;
    y: number;
    [prop: string]: number;
}
```
### 注意事项
- 索引签名参数类型必须为 **```string```** 或 **```number```** 之一，但两者可同时出现:
```typescript
interface Point {
    [prop1: string]: string;
    [prop2: number]: string;
}
```
- 当同时存在数字类型索引和字符串类型索引的时候，数字类型的值类型必须是字符串类型的值类型或子类型
```typescript
interface Point1 {
    [prop1: string]: string;
    [prop2: number]: number;	// 错误
}
interface Point2 {
    [prop1: string]: Object;
    [prop2: number]: Date;	// 正确
}
``` 

