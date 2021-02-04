### 嵌套路由
实际生活中的应用界面，通常由多层嵌套的组件组合而成。       
嵌套路由就是自路由的概念，要在嵌套的出口中渲染组件，需要在 ```VueRouter``` 的参数中使用 **<font color="#d63200">children</font>** 配置：
```JavaScript
const router = new VueRouter({
    routes: [
        {
            path: '/User/:id',  
            component: User,
            children: [
                {
                    path: 'childA',
                    components: userChild
                }
            ]
        }
    ]
})
```