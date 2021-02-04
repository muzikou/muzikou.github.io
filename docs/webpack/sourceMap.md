### source map

为了更容易地追踪错误和警告，```JavaScript``` 提供了 ```source map``` 功能，将编译后的代码映射回原始源代码

在 ```dev``` 模式中，默认开启，关闭的话可以在配置⽂件⾥

```js
devtool: "none"
```

[devtool的官方介绍](https://webpack.js.org/configuration/devtool#devtool)

常见的几个值如下：

> ```eval:``` 速度最快，使用 eval 包裹模块代码  
```source-map:``` 产生 .map 文件  
```cheap:``` 较快，不⽤管列的报错  
```Module:``` 第三⽅模块  
```inline:``` 将 .map 作为 DataURI 嵌入，不单独生成 .map 文件  

#### 配置推荐

```js
devtool: "cheap-module-eval-source-map" //开发环境配置
devtool: "cheap-module-source-map" //线上生成环境
```
