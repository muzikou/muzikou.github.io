### 可索引接口 
与使用接口描述函数类型差不多，我们也可以描述那些能够“通过索引得到”的类型，可索引类型具有一个 ```索引签名```，它描述了对象索引的类型，还有相应的索引返回值类型。

```TypeScript``` 支持两种索引签名：字符串和数字。
#### 数字类型索引
```ts
interface UserArr{
    [index: number]: string
}
var arrInter:UserArr = ['a','b']
console.log(arrInter)
```
我们定义了一个 ```UserArr``` 接口，它的索引签名表示 当用 ```number``` 去索引 ```UserArr``` 时会得到 ```string``` 类型的返回值。

#### 字符串类型索引
```typescript
interface Inter {
    [index: string]: number;
}
```
我们定义了一个 ```Inter``` 接口，它的索引签名表示当用 ```string``` 去索引 ```Inter``` 时会得到 ```number``` 类型的返回值。
#### 注意事项
- 索引签名参数类型必须为 **```string```** 或 **```number```** 之一，但两者可同时出现:
```typescript
interface Inter {
    [prop1: string]: string;
    [prop2: number]: string;
}
```
- 当同时存在 **<font color="#d63200">数字类型索引</font>** 和 **<font color="#d63200">字符串类型索引</font>** 的时候，数字类型的值类型 必须是字符串类型的值类型 或子类型
```typescript
interface Inter {
    [prop1: string]: string;
    [prop2: number]: number;	// 错误
}
interface InterObj {
    [prop1: string]: Object;
    [prop2: number]: Date;	// 正确
}
``` 
