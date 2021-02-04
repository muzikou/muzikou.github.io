 
### 属性装饰器
**<font color="#d63200">属性装饰器</font>**  表达式会在运行时当作函数被调用，传入下列2个参数：
1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
2. 成员的名字。
```ts
function decoratorsProp(params:any){
    return function(target:any, name:any){
        console.log(name);
        target[name] = params;
        console.log(target)
        // 在这里扩展当前类的属性以及方法 
        target.extendAttr = '扩展当前类的属性'
        target.extendFun = function(){
            console.log('扩展当前类的 方法')
        }
    }
}
class propName{
    @decoratorsProp('属性装饰器')
    public desc: string | undefined;
    constructor(){}
}
var prop:any = new propName(); 
console.log(prop.extendAttr)
prop.extendFun()
```


 