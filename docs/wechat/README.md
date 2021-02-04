## 准备

学习小程序基础开发之前，需要以下准备：

1. [⼩程序开发⽂档](https://developers.weixin.qq.com/miniprogram/dev/framework/)

2. [微信公众号平台](https://mp.weixin.qq.com/) 注册⼀个账号

注册之后在【微信公众平台】-->【开发设置】里面找到 **<font color="#d63200">AppID</font>** ，如下图：

![appid](/img/wechat/appid.png)

3. [安装开发微信开发⼯具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html?t=19021516)

下载安装 并且扫码登录后，就进⼊了⼩程序的开发⼯具，点击加号新建项目，可以填入上一步找到的 **<font color="#d63200">AppID</font>**，如果没有注册可以使用 *测试号*，如下图：

![create](/img/wechat/create.png)

创建之后文件结构如下：

![1](/img/wechat/1.jpeg)

## 主体结构

一个小程序主体部分由三个文件组成，必须放在项目的根目录，如下：

1. **<font color="#d63200">app.js：</font>** 是必需的文件，主要用来写小程序的逻辑

2. **<font color="#d63200">app.json：</font>** 是必需的文件，用来对微信小程序进行全局配置，决定页面文件的路径、窗口表现、设置网络超时时间、设置多 ***tab*** 等。 [完整配置项说明请参考小程序全局配置](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html)  
具体内容如下：

```json
{
  "pages":[
    "pages/index/index",
    "pages/logs/logs"
  ],
  "window":{
    "backgroundTextStyle":"light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "Weixin",
    "navigationBarTextStyle":"black"
  },
  "style": "v2",
  "sitemapLocation": "sitemap.json"
}
```

> **pages**  : ⽤于描述当前⼩程序所有⻚⾯路径，这是为了让微信客户端知道当前你的⼩程序⻚⾯定义在哪个⽬录。  
> **window** : 定义⼩程序所有⻚⾯的顶部背景颜⾊，⽂字颜⾊定义等。  
> **tabBarw**: 底部导航

3. **<font color="#d63200">app.wxss：</font>** 不是必需的文件，主要用来写小程序的公共样式表

## 页面结构

每一个小程序页面由四个文件组成，分别是：

1. **<font color="#d63200">js：</font>** 是必需的文件，主要用来写本页面的核⼼逻辑  
整体⼩程序开发起来的感觉，像是 **```Vue```** 和 **```React```** 混合体，还有⼩程序特有的⽣命周期，**`index/index.js`** 代码如下：

```js
//获取应⽤实例
const app = getApp()
Page({
    data: {
        motto: 'Hello World',
        list: ['张三','李四','王二','麻子']
    },
    onLoad(){
        console.log('index⻚⾯加载拉')
    },
    onShow(){
        console.log('index⻚⾯显示拉')
    },
    onHide() {
        console.log('index⻚⾯隐藏拉')
    },
})
```

2. **<font color="#d63200">wxml：</font>** 是必需的文件，主要用来写本页面的结构  
打开 **`index.wxml`** 文件中会发现陌生的标签，其实 **`view`** 就相当于 **`html`** 中的 **`div`** 标签：

```html
<view >
  <view>{{motto}}</view>
  <view wx:for="{{list}}">{{index}}: {{item}}</view>
</view>
```

3. **<font color="#d63200">json：</font>** 不是必需的文件，对本页面的窗口表现进行配置，页面中配置项会覆盖 **`app.json`** 的 **`window`** 中相同的配置项，更改  **`index/index.json`** 配置如下：

```json
{
  "navigationBarTitleText" :"⾸⻚",
  "usingComponents": {}
}
```

4. **<font color="#d63200">wxss：</font>** 不是必需的文件，主要用来写本页面的样式，具有 **`CSS`** ⼤部分的特性，⼩程序在 **`WXSS`** 也做了⼀些扩充和修改。

> 新增了尺⼨单位。在写 **`CSS`** 样式时，开发者需要考虑到⼿机设备的屏幕会有不同的宽度和设备像素⽐，采⽤⼀些技巧来换算⼀些像素单位。 **`WXSS`** 在底层⽀持新的尺⼨单位 **`rpx`** ，开发者可以免去换算的烦恼，只要交给⼩程序底层来换算即可，由于换算采⽤浮点数运算，所以运算结果会和预期结果有⼀点点偏差
