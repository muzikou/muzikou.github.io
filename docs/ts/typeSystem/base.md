### 基础类型
基础类型包含：**```string```**  **```number```**  **```boolean```** 

标注语法如下：
```typescript
变量: string;
变量: number;
变量: boolean;
```
定义代码如下：
```typescript
let title: string = '字符串类型';
let n: number = 100;
let isOk: boolean = true;

title = 100;	//错误
```
> 上面代码报错，因为 ```title``` 的标注类型是 ```string``` ，不能将 ```number``` 类型赋值给 ```string``` 类型。