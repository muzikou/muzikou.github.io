## 约定优于配置
**```pages```** 目录中所有 **```*.vue```** 文件生成应用的路由配置，在该目录下新建页面会自动生成相应的路由，例如新建 ```pages/users.vue```
```HTML
<template>
  <div> 
    {{name}}
  </div>
</template>
<script> 
export default {
   data() {
        return {
            name: '这是 user 页面'
        }
    },
};
</script> 
```
可以在 ```.nuxt/router.js``` 文件中查看 自动生成的路由配置 
## 导航
要在页面之间使用路由，使用 ```<nuxt-link>``` 标签，功能和 ```router-link``` 等效
```HTML
<template>
  <nuxt-link to="/user">用户页面</nuxt-link>
</template> 
```
## 基础路由
假设 ```pages``` 的目录结构如下：
```shell
pages/
--| user/
-----| index.vue
--| index.vue
```
那么，**<font color="#d63200">Nuxt.js</font>** 自动生成的路由配置如下：
```JavaScript
router: {
    routes: [
        {
            name: 'index',
            path: '/',
            component: 'pages/index.vue'
        },
        {
            name: 'user',
            path: '/user',
            component: 'pages/user/index.vue'
        }
    ]
}
``` 
## 嵌套路由
如果想要实现嵌套子路由，需要添加一个 ```Vue``` 文件，同时添加一个与该文件 **<font color="#d63200">同名</font>** 的目录来存放子视图组件。
假设 ```pages``` 的目录结构如下：
```shell
pages/
--| user/
-----| index.vue
--| user.vue
```
那么，**<font color="#d63200">Nuxt.js</font>** 自动生成的路由配置如下：
```JavaScript
router: {
    routes: [
        {
            path: '/users',
            component: 'pages/users.vue',
            children: [
                {
                    path: '',
                    component: 'pages/users/index.vue',
                    name: 'users'
                } 
            ]
        }
    ]
}
``` 
需要注意的是，这个时候一定要在父组件(```users.vue```)内增加 **```<nuxt-child/>```** 用于显示子视图内容，```<nuxt-child/>```等效于 ```router-view```。
```HTML
<!-- pages/users.vue -->
<template>
  <div> 
    {{name}}
    <nuxt-child></nuxt-child>
  </div>
</template> 
```
## 动态路由
如果想要定义带参数的动态路由，需要创建对应的以 **<font color="#d63200">下划线(_)</font>** 作为前缀的 ```Vue``` 文件或目录。
假设 ```pages``` 的目录结构如下：
```shell
pages/
--| user/ 
-----| _id.vue 
```
那么，**<font color="#d63200">Nuxt.js</font>**  自动生成的路由配置如下：
```JavaScript
router: {
    routes: [ 
        {
            name: 'users-id',
            path: '/users/:id?',
            component: 'pages/users/_id.vue'
        } 
    ]
}
``` 
此时 ```users-id``` 的路由路径带有 ``` :id?``` 参数，表示该路由是可选的。如果你想将它设置为必选的路由，需要在 ```users/_id``` 目录内创建一个 ```index.vue``` 文件。