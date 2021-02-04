### 动态路由 
有的时候我们需要根据路由的不同参数来展示不同的信息，例如根据用户```ID``` 来展示用户详情页面，那么，我们可以在 ```vue-router``` 的路由路径中使用 "动态路径参数"(```dynamic segment```) 来达到这个效果：
```JavaScript
const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/user/:id', component: User }
  ]
})
```
一个 "路径参数" 使用冒号 ``` : ``` 标记。当匹配到一个路由时，参数值会被设置到 ```this.$route.params```，可以在每个组件内使用。比如可以在用户详情页面，输出当前用户的 ```ID```：
```JavaScript
export default{ 
    created() {
        console.log(this.$route.params)
    }, 
}
```
提醒一下，当使用路由参数时，例如从 ```/user/1``` 导航到 ```/user/2```，**原来的组件实例会被复用**。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，**这也意味着组件的生命周期钩子不会再被调用**。

复用组件时，想对路由参数的变化作出响应的话，你可以简单地 **<font color="#d63200">watch</font>** (监测变化) ```$route ```对象：
```JavaScript
watch: {
    $route(to, from) { 
        console.log(to, from)
    }
}
```
或者使用 ```beforeRouteUpdate``` 导航守卫：
```JavaScript
beforeRouteUpdate (to, from, next) {
    console.log(to, from, next)
 }
```