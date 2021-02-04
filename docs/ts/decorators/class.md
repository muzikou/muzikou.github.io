常见的装饰器有：类装饰器、属性装饰器、方法装饰器、参数装饰器等

### 类装饰器 
**<font color="#d63200">类装饰器</font>** 在类声明之前被声明(紧靠着类声明)。 类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。 下面我们定义两种不同形式的 **```@decoratorsClass```** 装饰器，    
#### 类装饰器:普通装饰器（无法传参）
```ts
function decoratorsClass(params:any){
    console.log(params) 当前 className 类
}
@decoratorsClass
class className{ }
let http = new className()
```
#### 类装饰器:装饰器工厂（可以传参数）
```ts
function decoratorsClass(params:any){
    return function(target: any){
        console.log(target);  当前 className 类
        console.log(params); 类装饰器:装饰器工厂（可以传参数）
        target.prototype.desc=params; 
    }
}
@decoratorsClass('类装饰器:装饰器工厂（可以传参数）')
class className{}
let http = new className() 
```
类装饰器还可以修改当前类的构造函数，类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。 如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明。
```ts
function decoratorsClass(target:any){
    console.log(target);
    return class extends target{
        desc:any='我是修改后的数据';
        getData(){
            this.desc=this.desc+'----';
            console.log(this.desc);
        }
    }
}
@decoratorsClass
class className{
    public desc:string | undefined;
    constructor(){
        this.desc='我是构造函数里面的desc';
    }
    getData(){
        console.log(this.desc);
    }
}
var c=new className();
c.getData(); 
```

