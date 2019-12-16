当我们有异步操作的需求时，就要使用 *<font color="#d63200">Action</font>*，那 *<font color="#d63200">Action</font>* 要如何使用呢，下面我们一起来学习吧
## 1. Action 的作用是什么？
*<font color="#d63200">Action</font>* 用于处理异步任务。如果需要通过异步操作变更数据，必须通过 *<font color="#d63200">Action</font>*，而不能使用 *<font color="#d63200">Mutation</font>*，但是在 *<font color="#d63200">Action</font>* 中还是要通过触发 *<font color="#d63200">Mutation</font>* 的方式间接变更数据
## 2. Action 要如何使用呢？
示例代码如下：
+ 定义 *<font color="#d63200">Action</font>*
 ```js
const store = new Vuex.stroe({
  state:{
    count: 0
  },
  mutations: {
    add(state){
      // 变更状态
     state.count ++
    }
  },
  actions: {
    addAsync(context){
      setTimeout(() => {
        context.commit('add')
      },1000)
    }
  }
})
```
+ 通过 *<font color="#d63200">dispatch</font>* 触发 *<font color="#d63200">Action</font>*
```js
methods: {
  handle(){
    //触发action 的第一种方式
    this.$store.dispatch('addAsync')
  }
}
```
+ 如果触发 *<font color="#d63200">Action</font>* 异步任务时携带参数，则作如下定义和触发：
```js
//定义 Action
const store = new Vuex.stroe({
  state:{
    count: 0
  },
  mutations: {
    addN(state, step){
     state.count += step
    }
  },
  actions: {
    addNAsync(context,step){
      setTimeout(() => {
        context.commit('addN',step)
      },1000)
    }
  }
})
```
```js
// 触发 action
methods: {
  handle(){
    this.$store.dispatch('addNAsync',5)
  }
}
```
### 触发 action 的第二种方式
1. 从 *<font color="#d63200">vuex</font>* 中按需导入 *<font color="#d63200">mapActions</font>* 函数
```js
import { mapActions } from 'vuex'
```
2. 通过刚才导入的 *<font color="#d63200">mapActions</font>* 函数，将当前组件需要 *<font color="#d63200">Action</font>* 函数，映射为当前组件的 *<font color="#d63200">methods</font>* 方法：
```js
methods: {
  ...mapActions(['addAsync','addNAsync'])
}
```