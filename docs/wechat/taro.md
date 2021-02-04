## 为什么要有跨端的框架

前面我们学习了微信小程序的代码组成部分以及开发方式，随着小程序的流行，目前市场上多个平台都有自己的小程序，涉及的端太多，如下：  

1. 微信⼩程序
2. ⽹⻚H5
3. 头条⼩程序
4. 百度⼩程序
5. ⽀付宝⼩程序
6. 快应⽤
7. 原⽣APP
8. ....

由于原⽣⼩程序开发都有⼀套⾃⼰的语法，当业务要求同时在不同的端都要有所表现的时候，针对不同的端去编写多套代码的工程量就会太过于繁琐，这时候只编写一套代码就能够适配到多端的框架应运而生，用一套代码通过不同的打包指令产生多套代码部署到多端平台。其实最早的解决方案有：

+ **wepy**  
    腾讯官方出的，用 **`Vue`** 写小程序，但是还是有自己的独立语法，实现不是特别友好

+ **mapvue**  
使用 **`Vue`** 脚手架，完全的 **`Vue`** 体验,但是停更很久了

目前用的最多的框架有：  

+ [Taro](https://taro-docs.jd.com/taro/docs/README)  
**`React`** 开发小程序，可以使用 **`Hooks，Redux，Mobx`**,同时拥有自己的 `UI` 组件库-[Taro-ui](https://taro-ui.jd.com/#/docs/introduction)，使用 **`npm`** 管理
+ [ni-app](https://uniapp.dcloud.io/)  
基于 **`mapvue`** 的扩展，使用 **`Vue`** 开发,但是重点发展自己的社区、编辑器，开源的 **`github`** 和 **`npm`** 对接的不太好，官方 `UI` 组件库也不友好。

下面我们就来体验一下 **<font color="#d63200">Taro</font>** 的使用：

## Taro 简介

> **<font color="#d63200">Taro</font>** 是一个开放式跨端跨框架解决方案，支持使用 **`React/Vue/Nerv`** 等框架来开发 微信 / 京东 / 百度 / 支付宝 / 字节跳动 / QQ 小程序 / H5 等应用。现如今市面上端的形态多种多样，`Web`、`React Native`、微信小程序等各种端大行其道，当业务要求同时在不同的端都要求有所表现的时候，针对不同的端去编写多套代码的成本显然非常高，这时候只编写一套代码就能够适配到多端的能力就显得极为需要。

### 安装

```shell
npm install -g @tarojs/cli
```

> 值得一提的是，如果安装过程出现 `sass` 相关的安装错误，请在安装 [mirror-config-china](https://www.npmjs.com/package/mirror-config-china) 后重试

```shell
npm install -g mirror-config-china
```

### 初始化项目

```shell
taro init myApp
```

> `npm 5.2+` 也可在不全局安装的情况下使用 `npx` 创建模板项目

```shell
npx @tarojs/cli init myApp
```

![taro1](/img/wechat/taro1.png)

在创建完项目之后，**<font color="#d63200">Taro</font>** 会默认开始安装项目所需要的依赖，如果安装失败，使用 ```npm install``` 安装命令进行安装。

### 运行

**<font color="#d63200">Taro</font>** 需要运行不同的命令，将 **<font color="#d63200">Taro</font>** 代码编译成不同端的代码，然后在对应的开发工具中查看效果。

#### 微信小程序

```js
// 选择微信小程序模式，需要自行下载并打开微信开发者工具，然后选择项目根目录进行预览。
npm run dev:weapp
npm run build:weapp
```
#### 支付宝小程序

```js
// 选择支付宝小程序模式，需要自行下载并打开支付宝小程序开发者工具，然后在项目编译完后选择项目根目录下 dist 目录进行预览
npm run dev:alipay
npm run build:alipay
```

这里就不一一列举了，具体的请参考官方文档 [运行](https://taro-docs.jd.com/taro/docs/GETTING-STARTED#%E8%BF%90%E8%A1%8C)

## Taro UI

**`Taro UI`** 是一款基于 `Taro` 框架开发的多端 `UI` 组件库

### 安装

在项目的根目录执行指令如下：

```shell
npm install taro-ui
```

> 特别注意：`3.0+` 的 `taro` 需要安装版本为 `"^3.0.0-alpha.3"` 的 UI组件 ：

```shell
npm install taro-ui@3.0.0-alpha.3
```

###  使用 Taro UI

```js
// page.js
import { AtButton } from 'taro-ui'
// 除了引入所需的组件，还需要手动引入组件样式
// app.js
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可
```
