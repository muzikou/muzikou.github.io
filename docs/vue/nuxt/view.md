## 布局
**<font color="#d63200">Nuxt.js</font>** 允许你扩展默认的布局，或在 **<font color="#d63200">layouts</font>** 目录下创建自定义的布局。
### 默认布局
可通过添加 **```layouts/default.vue```** 文件来扩展应用的默认布局。
```HTML
<template>
  <nuxt/>
</template>
```
注意: 一定要在布局文件中添加 ```<nuxt/>``` 组件用于显示页面的主体内容。
## 自定义布局
**<font color="#d63200">layouts</font>** 目录中的每个文件 (顶级) 都将创建一个可通过页面组件中的 ```layout``` 属性访问的自定义布局。
假设要创建 用户相关的布局页，在 **<font color="#d63200">layouts</font>** 文件下创建 ```user.vue```
```HTML
<template>
    <div>
        <h1>用户相关的布局页</h1>
        <nuxt></nuxt>
    </div>
</template>
```
然后告诉需要引用该布局的页面(即 ```pages/user.vue```)使用自定义的布局
 ```HTML
<template>
<!-- Your template -->
</template>
<script>
export default {
  layout: 'user'
  // page component definitions
}
</script>
```
## 错误页面
在 **<font color="#d63200">layouts</font>** 文件下创建 ```error.vue``` 文件来定制化错误页面。代码可以定制如下：
```html
<template>
    <div class="container">
        <h1 v-if="error.statusCode == 404">页面不存在</h1>
        <h1 v-else>{{error.message || '应用发生错误异常'}}</h1>
        <nuxt-link to="/">首页</nuxt-link>
    </div>
</template>
<script>
    export default {
        props: ['error'],
        layout: 'user' // 同时也可以为错误页面指定自定义的布局
    }
</script> 
```
注意: 这个布局文件不需要包含 ```<nuxt/>``` 标签。
## 页面
页面组件实际上是 ```Vue``` 组件，只不过 **<font color="#d63200">Nuxt.js</font>** 为这些组件添加了一些特殊的配置项（对应 ```Nuxt.js``` 提供的功能特性）以便快速开发通用应用。
```html
<template>
  <h1>Hello {{ name }}!</h1>
</template>
<script>
export default {
  asyncData (context) {
    // 每次组件加载前调用
    return { name: 'World' }
  }, 
  head () {
    // 设置页面 meta
  },
  // 其他功能
  ...
}
</script> 
```

**<font color="#d63200">Nuxt.js</font>** 为页面提供的特殊配置项：
属性名 | 描述   
:-: | :-:
asyncData | 最重要的一个键, 支持 异步数据处理，另外该方法的第一个参数为当前页面组件的 上下文对象。
 fetch | 与 ```asyncData``` 方法类似，用于在渲染页面之前获取数据填充应用的状态树（```store```）。不同的是 ```fetch``` 方法不会设置组件的数据。
 head | 配置当前页面的 ```Meta``` 标签。
 layout | 指定当前页面使用的布局（```layouts``` 根目录下的布局文件）。
 loading | 如果设置为 ```false```，则阻止页面自动调用``` this.$nuxt.$loading.finish()``` 和 ```this.$nuxt.$loading.start()```, 仅适用于在 ```nuxt.config.js``` 中设置 ```loading``` 的情况下。
 transition | 指定页面切换的过渡动效。
 scrollToTop | 布尔值，默认: ```false```。 用于判定渲染页面前是否需要将当前页面滚动至顶部。这个配置用于 嵌套路由的应用场景。
 validate | 校验方法用于校验 动态路由的参数。
 middleware | 指定页面的中间件，中间件会在页面渲染之前被调用。
