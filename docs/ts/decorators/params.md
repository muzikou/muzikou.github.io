### 参数装饰器
**<font color="#d63200">参数装饰器</font>** 表达式会在运行时当作函数被调用，传入下列3个参数：
1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
2. 参数的名字。
3. 参数在函数参数列表中的索引。

```ts
function decoratorsParams(params:any){
    return function(target:any,methodName:any,paramsIndex:any){
        console.log(params); // xxxxx
        console.log(target);
        console.log(methodName); // getData
        console.log(paramsIndex);  // 0
        target.desc = params;
    }   
}
class paramsClass{  
    public url:any | undefined;
    constructor(){
    }           
    getData(@decoratorsParams('xxxxx') id:any){               
        console.log(id);  // 123456
    }
}
var param:any = new paramsClass();
param.getData(123456);
console.log( param.desc);  // xxxxx 
```

**<font color="#d63200">注意：</font>**          
**装饰器执行顺序: 属性 > 方法 > 方法参数 > 类， 如果有多个同样的装饰器，它会先执行后面的。**
