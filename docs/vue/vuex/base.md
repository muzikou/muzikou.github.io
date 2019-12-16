
## 1. 安装 vuex 依赖包
在终端中运行如下命令，安装 *<font color="#d63200">vuex</font>* 依赖包
```shell
npm install  vuex --save
```
## 2. 导入 vuex 包
在 *<font color="#d63200">src</font>* 文件夹下创建 *<font color="#d63200">store</font>* 文件夹，再在 *<font color="#d63200">store</font>*  文件夹下创建 *<font color="#d63200">index.js</font>*,导入 vuex 包,代码如下:
```js
import Vuex from 'vuex'
Vue.use(Vuex)
```
## 3. 创建 store 对象
继续在 *<font color="#d63200">index.js</font>* 文件夹里创建 store 对象,代码如下:
```js
const store = new Vuex.Store({
    // state 中存放的就是全局共享的数据
    state: { count: 0 }
})
```
## 4. 将 store 对象挂载到 vue 实例中
最后在 main.js 中将 store 对象挂载到 vue 实例中，如下：
```js
new Vue({
  // 将创建的共享数据对象，挂载到 Vue 实例中
  // 所有的组件，就可以直接从 store 中获取全局的数据
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```

