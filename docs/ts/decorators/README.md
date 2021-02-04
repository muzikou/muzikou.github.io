需要注意 若要启用实验性的装饰器特性，你需要在 ```tsconfig.json``` 里启用 ```experimentalDecorators: true``` 编译器选项 或者 执行以下命令行：
```shell
tsc --target ES5 --experimentalDecorators
```
### 装饰器
**<font color="#d63200">装饰器</font>** 是一种特殊类型的声明，它能够被附加到类声明，方法，属性或参数上，可以修改类的行为。 通俗的讲装饰器就是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能。   

**<font color="#d63200">装饰器</font>** 的使用是通过 **```@decoratorsName```** 这种形式，```decoratorsName``` 是装饰器的名称，本质上是一个函数，在运行时调用这个函数，这个函数传入一个参数，就是当前被装饰的声明信息

如下我们定义一个 ```@decoratorsName``` 装饰器：
```ts
function decoratorsName(params:any){
    console.log(params) 
}
```
使用：
```ts
@decoratorsName
```
### 装饰器工厂
上面这种形式的装饰器在使用时是(无法传参)的， 如果想要传参数，就要用到 **<font color="#d63200">装饰器工厂</font>**。
              
**<font color="#d63200">装饰器工厂</font>** 就是一个简单的函数，它返回一个表达式，以供装饰器在运行时调用。如下所示:
```ts
function decoratorsName(params:string){
    return function(target:any){
        console.log(target);
        console.log(params);
        target.prototype.desc=params;
    }
}
```
使用：
```ts
@decoratorsName('装饰器工厂（可传参')
```
 
