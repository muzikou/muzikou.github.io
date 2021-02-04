### cleanWebpackPlugin

在修改代码过程中，会产生很多不同的的文件，不及时处理的话，无用的文件会越来越多，所以需要用到 ```cleanWebpackPlugin``` 清除文件。

#### 安装

```Shell
npm install --save-dev clean-webpack-plugin
```

#### 基本使用

```js
// webpack.config.js
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  plugins: [
      // 再打包之前，先删除生成目录
      new CleanWebpackPlugin()
    ]
};
```
