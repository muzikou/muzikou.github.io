## Object.assign()
<code>Object.assign</code>方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象，然后将目标对象返回。       
如果目标对象中的属性具有相同的键，则属性将被源对象中的属性覆盖。后面的源对象的属性将类似地覆盖前面的源对象的属性。

```JavaScript
Object.assign(target, ...sources)
// target：目标对象。
// sources：源对象。 
```
<code>Object.assign</code> 方法只会拷贝源对象自身的并且可枚举的属性到目标对象(浅拷贝)。    

## Object.create()
<code>Object.create</code> 方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。     
如果目标对象中的属性具有相同的键，则属性将被源对象中的属性覆盖。后面的源对象的属性将类似地覆盖前面的源对象的属性。

```JavaScript
Object.create(proto, propertiesObject)
//proto：新创建对象的原型对象。  
```
<code>Object.assign</code> 方法只会拷贝源对象自身的并且可枚举的属性到目标对象(浅拷贝)。 

## Object.keys(obj) 
<code>Object.keys</code> 用于获取对象自身的所有属性，方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和使用 *<font color="#d63200">for...in</font>*  循环遍历该对象时返回的顺序一致 。

```JavaScript
var obj = {
    id: 1,
    name: 'Object.keys()',
    desc: '用于获取对象自身的所有属性'
}
console.log(Object.keys(obj))
``` 
## Object.defineProperty() 
<code>Object.defineProperty</code> 定义对象的新属性或者修改原有属性。
```JavaScript
Object.defineProperty(obj, prop, descriptor)
``` 
+ ***<font color="#d63200">obj:</font>*** 要在其上定义属性的对象。  
+ ***<font color="#d63200">prop:</font>*** 要定义或修改的属性的名称。   
+ ***<font color="#d63200">descriptor:</font>*** 将被定义或修改的属性描述符, 以对象的形式 { } 书写：          
    *<font color="#d63200">value:</font>* 该属性对应的值，默认为 *<font color="#d63200">undefined</font>*。        
    *<font color="#d63200">writable:</font>* 当且仅当该属性的 *writable* 为 *<font color="#d63200">true</font>* 时，*value* 才能被赋值运算符改变。默认为 *<font color="#d63200">false</font>*。     
    *<font color="#d63200">configurable:</font>* 当且仅当该属性的 *configurable* 为 *<font color="#d63200">true</font>* 时，该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除。默认为 *<font color="#d63200">false</font>*    
    *<font color="#d63200">enumerable:</font>* 当且仅当该属性的 *enumerable* 为 *<font color="#d63200">true</font>* 时，该属性才能够出现在对象的枚举属性中。默认为 *<font color="#d63200">false</font>*   
     
```JavaScript
// 修改 name 属性值
Object.defineProperty(obj,'name',{
    value: 'Object.defineProperty()'
})
// 新增 age 属性
Object.defineProperty(obj,'age',{
    value: '18',
    writable: false,// 不允许修改
    enumerable: false,// enumerable 值为 false，不允许被遍历，默认是 false
    configurable: true,// configurable 值为 false，不允许被删除，默认是 false
})
``` 