### 数组类型
 **<font color="#d63200">TypeScript</font>** 中的数组存储的类型必须一致，所以在标注数组类型的时候，同时要标注数组中存储的数据类。         
标注语法：
```typescript
变量: 类型[]
```
用法如下：
```typescript
let arr: string[] = ['1']
arr.push('2')
arr.push(3) // 错误：类型“3”的参数不能赋给类型“string”的参数

let arr1: Array<number> = []
arr1.push(1)
arr1.push('2') // 报错：类型“"2"”的参数不能赋给类型“number”的参数
```
### 元组类型
元组类似数组，但是存储的元素类型不必相同，但是需要注意：
+ 初始化数据的个数以及对应位置标注类型必须一致
+ 越界数据必须是元组标注中的类型之一（标注越界数据可以不用对应顺序 - 联合类型）

标注语法： 
```typescript
变量: [类型一, 类型二,...]
``` 
用法如下：
```typescript
let data1: [string, number] = ['字符串', 100];
data1.push(100); // 正确
data1.push('100'); // 正确
data1.push(true); // 错误
```
> **<font color="#d63200">注意：</font>** 未开启 ```strictNullChecks: true```，此时定义数组会使用 ```undefined``` 进行初始化。
