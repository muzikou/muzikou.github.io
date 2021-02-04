## 安装 Vue Router 依赖包
在终端中运行如下命令中的一个，安装 *<font color="#d63200">Vue Router</font>* 依赖包
```shell
npm install  vue-router -S
//或
vue add router
```
## 导入 vuex 包
新建 *<font color="#d63200">user.vue</font>* 组件页面，然后将组件映射到路由 routes 中，即在 **<font color="#d63200">router -> index.js</font>** 中引入这个页面, 最后在 *<font color="#d63200">main.js</font>* 中引入 *<font color="#d63200">router</font>*，具体写法如下:
```JavaScript
// router -> index.js 
// 1. 定义 (路由) 组件。
import  user from '../components/user.vue'; 
// 2. 定义路由
const routes = [
  {
    path: '/user',
    name: 'user',
    component: user
  } 
]
// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes
})
export default router

// main.js
import router from './router' // 引入
// 4. 创建和挂载根实例。
const app = new Vue({
  router
}).$mount('#app')
```
## 导航
在需要引入的页面(以 app.vue 为例)，使用  **<font color="#d63200">router-link</font>** 作为导航按钮，通过传入 ```to```  属性指定链接。``` router-link```默认会被渲染成一个 `<a>` 标签
```HTML
<!--  let 所声明的变量只在 let 命令所在的代码块内有效。 -->
<div > 
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link> 
</div>
```