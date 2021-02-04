当我们在项目 *<font color="#d63200">import</font>* 引入 *<font color="#d63200">css</font>* 文件时，会发现项目报错，提示我们打包失败，需要安装合适的加载器解决问题

### Css-loader 和 Style-loader

**```Css-loader```** 分析css模块之间的关系，并合成⼀个css。  

**```Style-loader```** 会把 css-loader ⽣成的内容，以 style 挂载到⻚⾯的 heade 部分。  

1. 在终端中运行如下命令，安装处理 *<font color="#d63200">css</font>* 文件的加载器

```Shell
npm install style-loader css-loader -D
```

2. 打开 *<font color="#d63200">webpack.config.js</font>*，新建一个 *<font color="#d63200">module</font>* 节点并配置，配置内容如下：

```js
module: {
    rules: [
        {
            // test 表示 匹配文件类型
            test: /\.css$/ ,
            // use 使用一个 loader 可以使用对象或者字符串，两个及以上 loader 需要用数组
            // use 数组中指定的 loader 顺序是固定的，多个 loader 的调用顺序是 从后往前调用的
            use: ['style-loader','css-loader']
        }
    ]
}
```
