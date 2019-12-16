在 *<font color="#d63200">Vuex</font>* 中的主要核心概念如下：
+ *<font>[State](/vue/vuex/state.md)</font>*
+ *<font>[Mutation](/vue/vuex/nutation.md)</font>*
+ *<font>[Action](/vue/vuex/action.md)</font>*
+ *<font>[Getter](/vue/vuex/getter.md)</font>*

下面我们来具体分析：
## 1. State 是什么？
*<font color="#d63200">State</font>* 提供了唯一的公共数据源，所有共享的数据都要统一放到 *<font color="#d63200">Store</font>* 的 *<font color="#d63200">State</font>* 中进行存储，使用代码如下：
```js
// 创建 store 数据源，提供唯一公共数据
const store = new Vuex.store({
 state: { count: 0 }
})
```
## 2. 组件访问 state 中数据的
+ 想在组件中防伪 *<font color="#d63200">state</font>* 中数据，有两种方式，第一种方式是：
```js 
// this.$store.state.全局数据名称
this.$store.state.count
```
+ 第二种方式是使用 *<font color="#d63200">Vuex</font>* 中自带的方法实现，如下
1. 从 *<font color="#d63200">Vuex</font>* 中按需导入 *<font color="#d63200">mapState</font>* 函数
```js
import { mapState } from 'vuex'
```
2. 通过刚才导入的 *<font color="#d63200">mapState</font>* 函数，将当前组件需要的全局数据，映射为当前组件的 *<font color="#d63200">computed</font>* 计算属性：
```js
computed: {
  ...mapState(['count'])
}
```
知道了如何定义与使用之后，你是否在想我要是需要更新数据改如何做呢，直接更新吗？请看下一篇文章 [Mutation](/vue/vuex/mutation.md)