### 泛型接口
前面我们学过定义一个函数类型接口，如下：
```ts
interface ajaxFun{
    (url: string, type: string, data: {}): {}
}
var sendAjax: ajaxFun = function(url: string, type: string, data: {}): {}{
    return { url, type, data } 
} 
sendAjax('www.baidu.com','GET',{name: '泛型接口'})
```
下面我们把这个函数类型接口改成泛型接口，如下：
```ts
interface ajaxFun<T>{
    (value: T): T
}
var sendAjax: ajaxFun<{}> = function(value: {}): {}{
    return value
} 
console.log(sendAjax({url: 'www.baidu.com',type: 'GET',data: {name: '泛型接口'}})) 
```
或者改成如下写法：
```ts 
interface ajaxFun{
    <T>(value: T): T
}
var sendAjax: ajaxFun = function<T>(value: T): T{
    return value
}  
console.log(sendAjax({url: 'www.baidu.com',type: 'GET',data: {name: '泛型接口'}}))
```


  