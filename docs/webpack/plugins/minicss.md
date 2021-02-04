### miniCssExtractPlugin

```miniCssExtractPlugin``` 将 ```css``` 单独打包成一个文件的插件，它为每个包含 ```css``` 的 ```js``` 文件都创建一个css文件。它支持 ```css``` 和 ```sourceMaps``` 的按需加载。

目前只有在 ```webpack V4``` 版本才支持使用该插件

和 ```extract-text-webpack-plugin``` 相比：

+ 异步加载
+ 无重复编译，性能有所提升
+ 用法简单
+ 之支持css分割

#### 安装

```Shell
npm install --save-dev mini-css-extract-plugin
```

#### 基本使用

```js
// webpack.config.js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    plugins: [
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
            })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // 指定公共路径, 默认情况下,使用 publicPathwebckoptions.output
                            publicPath: '../'
                        }
                    },
                    "css-loader"
                ]
            }
        ]
    }
};
```
