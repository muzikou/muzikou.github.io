### 导航守卫
```vue-router``` 提供的导航守卫主要用来通过跳转或取消的方式守卫导航。    
## 全局守卫
```JavaScript
const router = new VueRouter({ ... })
// 全局前置守卫
// 当一个导航触发时，全局前置守卫按照创建顺序调用
router.beforeEach((to,from,next) => {
    console.log('beforeEach',to ,from) 
    next()
})
// 全局解析守卫
//router.beforeResolve 注册一个全局守卫。这和 router.beforeEach 类似，区别是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用。
router.beforeResolve((to,from,next) => {
    console.log('beforeResolve',to ,from)
    next()
})
// 全局后置钩子
// 和守卫不同的是，这些钩子不会接受 next 函数也不会改变导航本身：
router.afterEach((to,from) => {
    console.log('afterEach',to ,from) 
})
``` 
## 路由独享的守卫
你可以在路由配置上直接定义 **<font color="#d63200">beforeEnter</font>** 守卫：
```JavaScript
const router = new VueRouter({
  routes: [
    {
      path: '/user',
      component: user,
      // 在进入这个组件之前调用
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
})
``` 
## 组件内的守卫
你可以在路由组件内直接定义以下路由导航守卫：
```JavaScript
export default{ 
    created() {},
    beforeRouteEnter (to, from, next) {
         // 在渲染该组件的对应路由被 confirm 前调用
        // ... 不可以访问组件实例 `this`，因为当守卫执行前，组件实例还没被创建
        console.log('beforeRouteEnter',this)
        next()
    },
    beforeRouteUpdate(to, from, next){
        // 在当前路由改变，但是该组件被复用时调用
        // 可以访问组件实例 `this`
        console.log('beforeRoteUpdate',this)
        next()
    },
    beforeRouteLeave (to, from, next) {
        // 导航离开该组件的对应路由时调用
        // ... 可以访问组件实例 `this`
        console.log('beforeRouteLeave',this)
        next()
    }
}
``` 
### 完整的导航解析流程
1. 导航被触发。
2. 在失活的组件里调用 ```beforeRouteLeave``` 守卫。
3. 调用全局的 ```beforeEach``` 守卫。
4. 在重用的组件里调用 ```beforeRouteUpdate``` 守卫。
5. 在路由配置里调用 ```beforeEnter```。
6. 解析异步路由组件。
7. 在被激活的组件里调用 ```beforeRouteEnter```。
8. 调用全局的 ```beforeResolve``` 守卫。
9. 导航被确认。
10. 调用全局的 ```afterEach``` 钩子。
11. 触发 ```DOM``` 更新。
12. 用创建好的实例调用 ```beforeRouteEnter``` 守卫中传给 ```next``` 的回调函数。