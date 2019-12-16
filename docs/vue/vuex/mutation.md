当我们在遇到需要更新 *<font color="#d63200">State</font>* 中变量的需求时，要如何更改呢，如上一篇文章中我们定义了 *<font color="#d63200">count</font>* 变量，如果我们想要实现 *<font color="#d63200">count</font>* 数可以 *<font color="#d63200">+1</font>*，你的惯性思路可能是是如下：
1. 我们在 *<font>src -> components</font>* 下面创建 *<font>Add</font>* 组件，并定义一个 *<font>+1</font>* 的按钮，同时给 *<font>+1</font>* 按钮定义 *<font>click</font>* 事件，点击按钮实现，*<font>count</font>* 数值 *<font>+1</font>*，具体操作如下：
```html
<button @click="btnHandler1">+1</button>
```
2. 在 *<font>methods</font>* 中定义处理事件实现 *<font>count++</font>*，代码如下：
```js
methods: {
        btnHandler1(){
            this.$store.state.count ++ 
        }
    },
```
然后执行代码会发现结果可以正常运行，这时你可能想自己这种操作是合法的，其实这种操作是完全不正确的，这是因为我们在组件中之间通过 *<font color="#d63200">$store</font>* 修改了 全局数据，但是在 *<font color="#d63200">Vue</font>* 中是不允许组件去直接修改 *<font color="#d63200">Store</font>* 里面的数据，所以千万不能这样写，正确的写法应该是用 *<font color="#d63200">Mutation</font>* 修改数据。
## 1. Mutation 的作用是什么？
*<font color="#d63200">Mutation</font>* 用于变更 *<font color="#d63200">Store</font>* 中的数据，在 *<font color="#d63200">Vuex</font>* 中推荐我们使用 *<font color="#d63200">Mutation</font>* 更新数据，特点有以下几点：
+ 只能通过 *<font>Mutation</font>* 变更 *<font>Store</font>* 数据，不可以直接操作 *<font>Store</font>* 中的数据
+ 通过这种方式虽然操作起来稍微繁琐一些，但是可以集中监控所有数据的变化，方便后期的维护
## 2. Mutation 要如何使用呢？
示例代码如下：
+ 定义 *<font color="#d63200">Mutation</font>* 
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
    // 如果再触发时需要传递参数，那就可以如下定义
    // add(state, step){
    //  state.count += step
    // }
  }
})
```
+ 通过 *<font color="#d63200">commit</font>* 触发 *<font color="#d63200">Mutation</font>*
```js
methods: {
    handle(){
        //触发 mutation 的第一种方式
        this.$store.commit('add')
        //在调用 commit 函数，触发 mutation 时携带参数，需要如下触发
        // this.$store.commit('addN',3)
    }
}
```
### 触发 mutations 的第二种方式
1. 从 *<font color="#d63200">Vuex</font>* 中按需导入 *<font color="#d63200">mapMutations</font>* 函数
```js
import { mapMutations } from 'vuex'
```
2. 通过刚才导入的 *<font color="#d63200">mapMutations</font>* 函数，将当前组件需要 *<font color="#d63200">Mutations</font>* 函数，映射为当前组件的 *<font color="#d63200">methods</font>* 方法：
```js
methods: {
  ...mapMutations(['add','addN'])
}
```
在使用 *<font color="#d63200">mutations</font>* 时，请注意不要在 *<font color="#d63200">mutations</font>* 函数中执行异步操作，如果有执行异步操作的需求要如何实现呢？请看下一篇文章 [Action](/vue/vuex/action.md)

