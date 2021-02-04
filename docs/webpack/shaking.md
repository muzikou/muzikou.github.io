```tree shaking``` 是一个术语，通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)。它依赖于 ES2015 模块系统中的静态结构特性，例如 import 和 export。

### 配置

修改配置文件 ```webpack.config.js```，如下：

```js
optimization: {
    usedExports: true
}
```

然后修改 ```package.json```，如下：

```js
"sideEffects": false
```

```sideEffects``` 正常情况下对所有模块进行 ```tree shaking``` ，如果想要排除某些文件，可以做如下操作：

```js
"sideEffects": ['*.css'], // 表示除 .css 文件以外的进行tree shaking  
```

注意： 开发模式设置后，不会帮助我们把没有引用的代码去掉。
