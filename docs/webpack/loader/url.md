### url-loader

**```url-loader```** 可以处理 ```file-loader``` 所有的事情，但是遇到 ```jpg``` 格式的模块，会把该图⽚转换成 base64 格式字符串，并打包到 ```js``` ⾥。对⼩体积的图⽚⽐较合适，⼤图⽚不合适。

**```url-loader```** 可以限定模块的体积，根据体积判断是否需要转换成 base64（文件大小低于指定的限制时），减少 http 请求。

1. 在终端中运行如下命令，安装相关的加载器

```Shell
npm install url-loader -D
```

2. 打开 *<font color="#d63200">webpack.config.js</font>* ，修改  *<font color="#d63200">module -> rules</font>* 数组(原数组内容不动)，新增规则如下：

```js
module: {
    rules: [
        {
            test: /\.(png|jpe?g|gif)$/,
            //use使⽤⼀个loader可以⽤对象，字符串，两个loader需要⽤数组
            use: {
                loader: "url-loader",
                // options额外的配置，⽐如资源名称
                options: {
                    // [name]打包前模块的名称 [hash]内容的哈希值 [ext]打包前模块的后缀
                    name: "[name]_[hash].[ext]",
                    //打包后的存放位置
                    outputPath: "images/",
                    //⼩于2048，才转换成base64
                    limit: 2048
                }
            }
        }
    ]
}
```
