## 1. Getter 的作用是什么？
 *<font color="#d63200">Getter</font>* 用于对 *<font color="#d63200">Store</font>* 中的数据进行加工处理形成的新的数据，在使用时需要注意  *<font color="#d63200">Getter</font>* 只对  *<font color="#d63200">State</font>* 中的数据起到包装的作用，并不会修改任何数据， *<font color="#d63200">Getter</font>* 有以下特点：
+  *<font>Getter</font>* 可以对  *<font>Store</font>* 中已有对数据加工处理之后形成新的数据，类似于  *<font>Vue</font>* 的计算属性
+  *<font>Store</font>* 中数据发生变化， *<font>Getter</font>* 对数据也会跟着变化
## 2. Getter 要如何使用呢？
示例代码如下：
+ 定义  *<font color="#d63200">Getter</font>*
```js
const store = new Vuex.stroe({
  state:{
    count: 0
  },
  getters: {
    showNum(state){
      return '当前最新的数量是【' + state.count +  '】'
    }
  },
})
```
+ 使用  *<font color="#d63200">Getter</font>* 的第一种方式
```js 
// this.$store.getters.名称
$store.getters.showNum
```
### 使用 getters 的第二种方式：
1. 从  *<font color="#d63200">vuex</font>* 中按需导入  *<font color="#d63200">mapGetters</font>* 函数
```js 
import { mapGetters } from 'vuex'
```
2. 通过刚才导入的  *<font color="#d63200">mapGetters</font>* 函数，将当前组件需要的  *<font color="#d63200">getters</font>* 函数，映射为当前组件的  *<font color="#d63200">computed</font>* 计算属性：
```js 
computed: {
  ...mapGetters(['showNum'])
}
```