### less-loader

1. 在终端中运行如下命令，安装处理 *<font color="#d63200">less</font>* 文件的加载器

```Shell
npm install less-loader less -D
```

2. 打开 *<font color="#d63200">webpack.config.js</font>* ，修改  *<font color="#d63200">module -> rules</font>* 数组(原数组内容不动)，新增规则如下：

```js
module: {
    rules: [
        {
            test: /\.less$/ ,
            use: ['style-loader','css-loader','less-loader']
        }
    ]
}
```
