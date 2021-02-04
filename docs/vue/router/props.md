### 参数属性传递
除了动态路径参数，还可以通过设置 **<font color="#d63200">props</font>**  属性来获取路由的变量，此时和普通的属性传递没什么区别：
### 布尔模式
如果 **<font color="#d63200">props</font>**  被设置为 ```true```，```route.params``` 将会被设置为组件属性
```JavaScript
const router = new VueRouter({
    routes: [
        { path: '/user/:id', props: true, component: User }
    ]
})

``` 
```JavaScript
export default{
    props: ['id'],
    created() {
        console.log(this.id)
         console.log(this.$route)
    } 
}
```
### 对象模式
如果 **<font color="#d63200">props</font>**  是一个对象，它会被按原样设置为组件属性。当 ```props``` 是静态的时候有用。
```JavaScript
const router = new VueRouter({
    routes: [
        { path: '/user/:id', component: User, props: { isRegister: false } }
    ]
})
``` 
### 对象模式
如果 **<font color="#d63200">props</font>**  返回一个函数，这样便可以将参数转换成另一种类型，将静态值与基于路由的值结合等等。
```JavaScript
const router = new VueRouter({
  routes: [
    { path: '/user', component: User, props: (route) => ({ query: route.query.q }) }
  ]
})
``` 