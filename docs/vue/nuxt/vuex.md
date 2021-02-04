### 使用状态树
如果项目根目录下如果存在 **<font color="#d63200">store</font>** 目录， **<font color="#d63200">Nuxt.js</font>** 将启用 **<font color="#d63200">vuex</font>** 状态树，做以下事情：
> 1. 引用 ```vuex``` 模块
> 2. 将 ```vuex``` 模块 加到 ```vendors``` 构建配置中去
> 3. 设置 ```Vue``` 根实例的 ```store``` 配置项

在使用时，我们无需配置什么，直接定义各状态树时具名导出 ```state```，```mutations```，```getters```，```actions``` 即可
```JavaScript 
// store/index.js
export const state = () => ({
    counter: 0
})
export const mutations = {
    increment(state) {
        state.counter++
    }
}

// store/index.js
export const state = () => ({
  list: []
});
export const mutations = {
  set(state, list) {
    state.list = list;
  },
  add(state, name) {
    state.list.push({ name });
  }
};
```
同时在 **```*.vue```** 文件中的用法
```html
// pages/user/index.js
<template>
    <div>
        用户列表
        <p @click="increment">计数: {{counter}}</p>
        <p>
            <input type="text" placeholder="添加用户" @keyup.enter="add($event.target.value)">
        </p>
        <ul>
            <li v-for="user in list" :key="user.id">{{user.name}}</li>
        </ul>
    </div>
</template>
<script>
    function getUsers(){
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([ { id: 0, name: 'muzi' }, { id: 1, name: 'ping' } ])
            },1500)
        })
    }
    import {mapState, mapMutations} from 'vuex';
    export default {
        fetch({ store }) {
            // fetch在创建组件前执行填充状态树
            // 提交时注意命名空间
            return getUsers().then(users => store.commit("users/set", users));
        },
        computed: {
            ...mapState(["counter"]),
            ...mapState("users", ["list"])
        },
        methods: {
            ...mapMutations(["increment"]),
            ...mapMutations("users", ["add"])
        }
    }
</script> 
```
### fetch方法
上面代码中我们用到 ```fetch``` 方法，这个方法会在渲染页面前被调用，作用是填充状态树 (```store```) 数据，与 ```asyncData``` 方法类似，不同的是它不会设置组件的数据。
 