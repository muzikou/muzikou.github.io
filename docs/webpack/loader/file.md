### file-loader

用来处理静态资源模块，原理是把打包⼊⼝中识别出的资源模块，移动到输出⽬录，并且返回⼀个地址名称。  
一般当我们需要模块，仅仅是从源代码挪移到打包⽬录，就可以使⽤ **<font color="#d63200">file-loader</font>** 来处理，如 ```txt```，```svg```，```csv```，```excel```，```图⽚资源```，```字体文件``` 等等。

1. 在终端中运行如下命令，安装相关的加载器

```Shell
npm install file-loader -D
```

2. 在 *<font color="#d63200">webpack.config.js</font>* 中，修改  *<font color="#d63200">module -> rules</font>* 数组(原数组内容不动)，新增规则如下：

```js
module: {
    rules: [
        {
            test: /\.(png|jpe?g|gif|bmp|ttf|eot|svg|woff|woff2$)$/,
            //use使⽤⼀个loader可以⽤对象，字符串，两个loader需要⽤数组
            use: {
                loader: "file-loader",
                // options额外的配置，⽐如资源名称
                options: {
                    // [name]打包前模块的名称 [hash]内容的哈希值 [ext]打包前模块的后缀
                    name: "[name]_[hash].[ext]",
                    //打包后的存放位置
                    outputPath: "images/"
                }
            }
        }
    ]
}
```
