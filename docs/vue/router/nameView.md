### 命名视图
有时候想同时 (同级) 展示多个视图，而不是嵌套展示，例如三栏布局，这个时候就要用到命名视图。 
如果 ```router-view``` 没有设置名字，那么默认为 ```default```。
```JavaScript
<router-view></router-view>
<router-view name="a"></router-view>
```
一个视图使用一个组件渲染，因此对于同个路由，多个视图就需要多个组件。确保正确使用 **<font color="#d63200">components</font>** 配置 (带上 s)：
```JavaScript
const router = new VueRouter({
  routes: [
    {
      path: '/',
      components: {
        default: user,
        a: userA 
      }
    }
  ]
})
```