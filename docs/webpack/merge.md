开发环境(```development```)和生产环境(```production```)的构建目标差异很大。  

在开发环境中，我们需要具有强大的、具有实时重新加载(```live reloading```)或热模块替换(```hot module replacement```)能力的 ```source map``` 和 ```localhost server```。  

在生产环境中，我们的目标则转向于关注更小的 ```bundle```，更轻量的 ```source map```，以及更优化的资源，以改善加载时间。  
由于要遵循逻辑分离，我们通常建议为每个环境编写彼此独立的 ```webpack``` 配置。

虽然，以上我们将生产环境和开发环境做了略微区分，但是请注意，我们还是会遵循不重复原则(```Don't repeat yourself - DRY```)，保留一个“通用”配置。  

为了将这些配置合并在一起，我们将使用一个名为 ```webpack-merge``` 的工具。通过“通用”配置，我们不必在环境特定(```environment-specific```)的配置中重复代码。

### 安装

```js
npm install --save-dev webpack-merge
```

同时新建 ```build``` 文件夹，结构如下：

```diff
+ |- /build
+   |- webpack.base.js
+   |- webpack.dev.js
+   |- webpack.prod.js
|- package.json
|- webpack.config.js
|- /src
|- /node_modules
```

+ **webpack.dev.js**

```js
const webpack = require("webpack");
const devConfig = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    plugins: [ new webpack.HotModuleReplacementPlugin() ],
    devServer: {
        contentBase: "./dist",
        open: true,
        hot: true, //即便HMR不生效，浏览器也不自动刷新，就开启hotOnly
        hotOnly: true
    },
    optimization: {
        usedExports: true,
        splitChunks: {
          chunks: "all"
        }
      }
}
module.exports = devConfig
```

+ **webpack.prod.js**

```js
const prodConfig = {
    mode: 'production',
    devtool: 'cheap-module-source-map'
}
module.exports = prodConfig
```

+ **webpack.base.js**

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const devConfig = require('./webpack.dev.js')
const prodConfig  = require('./webpack.prod.js')
const merge = require("webpack-merge") // 此处用到 webpack-merge 将配置合并

const baseConfig = {
    entry: './index.js',
    output: {
        path: path.join(__dirname,'../dist'),
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '测试自定义标题',
            template: './index.html',
        }),
    ]
}

module.exports = env => {
    // 通过 package.json 中配置的环境变量(--env.production)来判断当前是什么环境
    if (env && env.production) {
      return merge(baseConfig, prodConfig);
    } else {
      return merge(baseConfig, devConfig);
    }
};
```

最后记得去修改 ```package.json```，如下：

```js
"scripts": {
    "dev": "webpack --config ./build/webpack.base.js",
    "prod": "webpack --env.production --config ./build/webpack.base.js"
},
```
