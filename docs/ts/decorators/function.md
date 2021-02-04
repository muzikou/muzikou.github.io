 

### 方法装饰器
它会被应用到方法的 属性描述符上，可以用来监视，修改或者替换方法定义。

**<font color="#d63200">方法装饰器</font>** 会在运行时传入下列3个参数：
1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
2. 成员的名字。
3. 成员的属性描述符。 
```ts
function decoratorsFun(params:any){
    return function(target:any, name:any, desc:any){
        console.log(target)
        console.log(name);
        console.log(desc);

        // 在这里扩展当前类的属性以及方法 
        target.extendAttr = '扩展当前类的属性'
        target.extendFun = function(){
            console.log('扩展当前类的 方法')
        }
        // 同时也可以 修改 get 方法
        target.get = function (){
            console.log('修改 get 方法')
        }
    }
}
class funClass{
    public desc: string | undefined;
    constructor(){}
    @decoratorsFun('方法装饰器get')
    get(){
        console.log('get')
    }                  
}  
let f:any = new funClass();
f.extendFun()
f.get() 
```
上面的写法是可以修改 ```get``` 方法, 但是 ```get``` 方法被替换掉， 并不能执行之前的 ```get``` 方法，如果只是单纯的修改，就需要对上面的代码进行改造，如下：
```ts
function decoratorsFun(){
    return function(target:any, name:any, desc:any){
        console.log(target)
        console.log(name);
        console.log(desc);

        // 在这里扩展当前类的属性以及方法 
        target.extendAttr = '扩展当前类的属性'
        target.extendFun = function(){
            console.log('扩展当前类的 方法')
        }
        // 同时也可以 修改 get 方法
        var oMethod=desc.value;
        desc.value = function (){
            console.log('修改 get 方法')
            oMethod.apply(this);
        }
    }
}
class funClass{
    public desc: string | undefined;
    constructor(){}
    @decoratorsFun()
    get(){
        console.log('get')
    }                  
}  
let f:any = new funClass();
f.extendFun() 
f.get() 
``` 
