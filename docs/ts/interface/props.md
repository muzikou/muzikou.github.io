
在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规范的作用。接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它只规定这批类里必须提供某些方法，提供这些方法的类就可以满足实际需要。            

**<font color="#d63200">TypeScript</font>**  中的接口类似于 ```java```，对复杂的对象类型进行标注的一种方式，或者给其它代码定义一种契约，同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等。

接口的基础语法定义结构特别简单，通过 **<font color="#d63200">interface</font>** 来定义，如下：
```typescript
interface User {
    name: string,
    age: number
}
```
上面的代码定义了一个接口，该接口包含两个属性，一个 ```string``` 类型的 ```name``` 和一个 ```number``` 类型的 ```age```，接口中多个属性之间可以使用 <u>逗号</u> 或者 <u>分号</u> 进行分隔。

知道了基础的定义方法，我们就来学习属性接口吧：
## 属性接口
属性接口 可以理解为对 json 的约束，我们可以通过上面定义的接口 User 来对批量方法的参数进行约束：
```typescript

function InterFun(data: User):void{
    // 必须传入对象，同时具有 x 和 y 属性
    console.log(data)
    console.log(`当前用户姓名：${data.name}，年龄：${data.age}`)
}
InterFun({name: 'muzi',age: 18})
```
但是如果参数多一个属性就会报错，如下：
```ts
InterFun({name: 'muzi',age: 18, sex: '女'}) // 对象文字可以只指定已知属性，并且“sex”不在类型“User”中
```
所以此时 需要换成下面这种写法：
```ts
let dataObj = {name: 'muzi',age: 18, sex: '女'}
InterFun(dataObj)
// 
```
这种写法要求传入的参数 dataObj 必须包含 接口User 的属性。
#### 注意
+ **接口是一种类型，不能作为值去使用**
```ts
let u = User; // “User”仅表示类型，但在此处却作为值使用
```
+ **接口中不存在的属性 ，也会返回错误**
```ts
let u: User = {
    sex: '女', //报错：不能将类型“{ sex: '女'; }”分配给类型“User”。 对象文字可以只指定已知属性，并且“sex”不在类型“User”中
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