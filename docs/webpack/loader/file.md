当我们在项目样式中引入图片或者字体时文件时，会发现项目报错，提示我们打包失败，需要安装合适的加载器解决问题  
1. 在终端中运行如下命令，安装相关的加载器
```Shell
npm install url-loader file-loader -D
```
2. 打开 *<font color="#d63200">webpack.config.js</font>* ，修改  *<font color="#d63200">module -> rules</font>* 数组(原数组内容不动)，新增规则如下：
```js
// 所有第三方文件模块的匹配规则
module: {
    rules: [
        { test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/ ,use:'url-loader?limit=16940'
    ]
}
//其中 ？之后是 loader 的参数项，limit用来指定图片的大小，只有小于这个值才会被转换成 base64 图片
```   

