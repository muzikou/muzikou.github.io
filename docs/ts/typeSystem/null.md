### 空和未定义类型
因为 **<font color="#d63200">Null</font>** 和 **<font color="#d63200">Undefined</font>** 这两种类型有且只有一个值，如果标注一个变量为 ```Null``` 和 ```Undefined``` 类型，那就表示该变量不能修改了，如下所示：
```typescript
let un: undefined;
un = 1;	// 错误: 不能将类型“1”分配给类型“undefined”
let nul: null;
nul = 1; //错误: 不能将类型“1”分配给类型“null”
```
默认情况下 ```null``` 和 ```undefined``` 是所有类型的子类型。 所以可以把 ```Null``` 和 ```undefined``` 赋值给其它类型的变量，如下所示：
```typescript
let aa: string = '字符串类型';
aa = null; // 可以
aa = undefined; // 可以
``` 
> **<font color="#d63200">提示：</font>** 如果一个变量声明了，但是未赋值，那么该变量的值为 ```undefined```，但是如果它同时也没有标注类型的话，默认类型为 ```any```。

很多时候在日常的开发过程中为了更有效的检测 ```null``` 值数据，可以在 ```tsconfig.json``` 中配置 ```strictNullChecks: true```，从而避免很多常见问题，使程序更加严谨。                   
配置完成之后，编辑器就会有所提示：
```typescript
let b; // let b: any //提示：变量 "b" 隐式具有 "any" 类型，但可以从用法中推断出更好的类型
```

