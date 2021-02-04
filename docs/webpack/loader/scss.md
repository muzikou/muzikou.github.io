### sass-loader

**```sass-loader```** 把 ```sass``` 语法转换成 ```css``` ，依赖 ```node-sass``` 模块

1. 在终端中运行如下命令，安装处理 *<font color="#d63200">scss</font>* 文件的加载器

```Shell
npm install sass-loader node-sass -D
```

2. 打开 *<font color="#d63200">webpack.config.js</font>* ，修改  *<font color="#d63200">module -> rules</font>* 数组(原数组内容不动)，新增规则如下：

```js
module: {
    rules: [
        {
            test: /\.scss$/ ,
            // loader是有执行顺序的，从右到左，从下到上
            use: ['style-loader','css-loader','sass-loader']
        }
    ]
}
```
