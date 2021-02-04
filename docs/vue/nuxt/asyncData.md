### 异步数据
**<font color="#d63200">Nuxt.js</font>** 扩展了 ```Vue.js```，增加了一个叫 **<font color="#d63200">asyncData</font>** 的方法，使得我们可以在设置组件的数据之前能异步获取或处理数据。
```HTML
<!-- pages/user.vue -->
<template>
  <div>
    用户列表页面
    <nuxt-child></nuxt-child>
    <ul>
        <li v-for="user in users" :key="user.id">{{user.name}}</li>
    </ul>
  </div>
</template>
<script>
function getUsers() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([{ name: "tom", id: 1 }, { name: "jerry", id: 2 }]);
        }, 1500);
    });
}
export default { 
    async asyncData() { 
        // 使用async/await
        const users = await getUsers();
        // return的数据最终回合data中的合并
        return { users };
    }
};
</script> 
```
> **<font color="#d63200">注意事项</font>**
> 1. ```asyncData``` 方法会在组件（限于页面组件）每次加载之前被调用。
> 2. ```asyncData``` 可以在服务端和路由更新之前被调用。
> 3. 第一个参数被设置为当前页面的 **上下文对象**。
> 4. nuxt 会将 ```asyncData``` 返回的数据融合组件 data 返回的数据一并返回给当前组件。
> 5. 由于 ```asyncData``` 方法是在组件初始化之前被调用，所以在方法内是 **没有办法通过 this 来引用组件的实例对象** 。

### 对上下文对象的使用
可以通过从上下文获取参数、错误处理函数、重定向函数等有用对象
```HTML
<!-- pages/user/detail.vue -->
<template>
  <div>用户详情id：{{$route.query.id}}</div>
</template>
</template>
<script>
export default {
  async asyncData({ query, error }) {
        if (query.id) {
            return { user: {name:'tom'} };
        }        
        error({ statusCode: 400, message: '请传递用户id' })
      }
};
</script>
```  