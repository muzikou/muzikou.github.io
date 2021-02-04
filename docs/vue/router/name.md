### 命名路由
我们可以通过给路由设置 **<font color="#d63200">name</font>**，来更方便的识别一个路由。      
可以在创建 ```Router``` 实例的时候，在 ```routes``` 配置中给某个路由设置名称。
```JavaScript
const router = new VueRouter({
    routes: [
        {
            path: '/user/:id', 
            name: 'user', 
            component: User 
        }
    ]
})
```
也可以给 ```router-link``` 的 ```to ```属性传一个对象：
```HTML
<router-link :to="{ name: 'user', params: { id: 123 }}">User</router-link>
```
等同于代码调用 ```router.push()``` ：
```JavaScript
router.push({ name: 'user', params: { id: 123 }})
```