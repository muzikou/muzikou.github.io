### 路由懒加载
在日常的开发时，当项目过大，打包构建时，会影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。          
通过 ```Vue``` 的异步组件和 ```Webpack``` 的代码分割功能，轻松实现路由组件的懒加载。 
```JavaScript
const router = new VueRouter({
  routes: [
    {
        path: '/user/:id',
        name: 'user',
        props: true,
        component: () => import('../components/user.vue')
    }
  ]
})
```