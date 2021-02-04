在设置 *<font color="#d63200">CSS</font>* 样式时，有很多时候需要我们考虑到兼容性问题，不然设置了也没效果，但是我们可以通过配置 *<font color="#d63200">postCSS</font>* 来实现自动添加 *<font color="#d63200">CSS</font>*  的兼容前缀

1. 在终端中运行如下命令，安装包

```Shell
npm install postcss-loader autoprefixer -D
```

2. 在根目录创建 *<font color="#d63200">postcss</font>* 的配置文件，命名为 *<font color="#d63200">postcss.config.js</font>* ，配置内容如下：

```js
const  autoprefixer = require('autoprefixer')//导入自动添加前缀的插件
module.exports = {
    plugin: [ autoprefixer ] //挂载插件
}
```

3. 打开 *<font color="#d63200">webpack.config.js</font>* 文件，找到 *<font color="#d63200">module -> rules</font>* 数组，修改 *<font color="#d63200">css</font>* 的 *<font color="#d63200">loader</font>* 规则，修改内容如下：

```js
// 所有第三方文件模块的匹配规则
module: {
    rules: [
        { test: /\.css$/ ,use:['style-loader','css-loader','postcss-loader']}
    ]
}
//其中 test 表示 匹配文件类型，use 表示对应要调用的 loader
```
