### 微信支付

借助小程序的云开发功能来实现相应的支付功能，开发者无需关心证书、签名、微信支付服务器端文档，使用简单，代码较少，只需要调用相应的函数即可。同时，云开发还支持云函数接收微信支付进行支付和退款的回调，安全高效。

> 安全：微信私有协议，无证书等信息泄露风险  
> 免签名：所有接口免签名 & 直接获取小程序 wx.requestPayment 所需参数  
> 接收回调：云函数支持接收异步支付结果回调

![pay1](/img/wechat/pay1.png)

## 准备

1. 已经开通了微信支付，且已绑定了商户号的小程序，获取该小程序的 AppID 和 Secret，(在小程序管理后台中，【设置】 →【开发设置】 下可以获取微信小程序 **<font color="#d63200">AppID</font>** 和 **<font color="#d63200">Secret</font>** )。  
2. 在 [微信支付商户管理平台](https://pay.weixin.qq.com/index.php/core/home/login?return_url=%2Findex.php%2Fcore%2Fhome%2Fdefault_header)中，获取商户号和商户密钥，并开通支付，(【账户中心】→【商户信息】下可以获取微信支付商户号, 在【账户中心】 ‒> 【API安全】 下可以设置商户密钥，在 【产品中心】→【我授权的产品】下授权支付权限)。  
3. 在微信开发者工具中点击云开发，在云控制台 -> 设置 -> 其他设置中绑定商户号，同时该商户号已经开通了支付权限，如下：

![pay2](/img/wechat/pay2.png)

4. 云数据库创建 商品数据 **`goods`** 和 订单数据 **`orders`** 集合，如下：
![pay3](/img/wechat/pay3.png)

## 商品列表布局

通过调用云商品库里的数据，展示在首页，具体代码如下：

```html
<!--index.wxml-->
<view class="container">
  <!-- 商品列表 -->
  <view class="good-item" wx:for="{{goods}}" wx:key="_id" data-goodid="{{item._id}}">
      <view class="good-image">
          <image src="{{item.pic}}"></image>
      </view>
      <view class="good-detail">
          <view class="title">商品: {{item.name}}</view>
          <view class="content">价格： {{item.price}} 元 </view>
          <button class="button" type="primary" bindtap="makeOrder" data-goodid="{{item._id}}" >下单</button>
      </view>
  </view>
</view>
```

```js
//index.js
const app = getApp()
const db = wx.cloud.database()
Page({
    data: {
        goods: []
    },
    onLoad: function() {
        this.getGoodsList()
    },
    // 获取商品信息
    getGoodsList(){
        db.collection('goods').get().then(res  => {
            console.log('res  res', res)
            this.setData({
                goods: res.data
            })
        })
    }
})
```

## 云支付函数

云函数的目录结构如下

```diff
├── cloudfunctions
│   ├── pay
│   │   ├── config
│   │   │   └── index.js
│   │   ├── config.json
│   │   ├── index.js
        └── package.json
```

+ config -> index.js 是做支付配置用的，主要配置支付相关的账号信息，代码如下：

```js
// config/index.js
const fs = require('fs');
const path = require('path');
const CERT_PATH = path.join(__dirname, './apiclient_cert.p12')
const CA_PATH = path.join(__dirname, '/path/to/rootca.pem')
module.exports = {
  env: 'pay-test-xxxxxxxxxx', // 云开发环境ID
  mchId: 'xxxxxxxxx', //商户号id
  key: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', //商户API密钥
  certFileContent: fs.existsSync(CERT_PATH) ? fs.readFileSync(CERT_PATH) : null,
  caFileContent: fs.existsSync(CA_PATH) ? fs.readFileSync(CA_PATH) : null,
  timeout: 10000 // 毫秒
};
```

+ 用到了第三方的支付库 **`wx-js-utils`**，所以 **`package.json`** 内容如下：

```json
// package.json
{
    ...,
    "dependencies": {
        "dayjs": "^1.10.4",
        "ip": "^1.1.5",
        "wx-js-utils": "latest",
        "wx-server-sdk": "~2.3.3"
    }
}
```

+ 云函数入口 **`index.js`**，首先我们来理一下支付的逻辑，如下：

1. 用户点击下单，去商户中心统一下单，统一下单接口成功之后，商户中心就有了订单，然后把该订单信息 add 到云数据库，此时的订单是未支付状态
2. 统一下单成功之后，跳转到订单确认页面，点击付款按钮，验证逻辑，然后调用  **<font color="#d63200">wx.requestPayment</font>** 拉起支付
3. 支付完成之后，修改订单。

根据以上的逻辑，云函数入口内容如下：

```js
// index.js 云函数模板
// 部署：在 cloudfunctions/pay 文件夹右击选择 “上传并部署”
const cloud = require('wx-server-sdk')
const { WXPay, WXPayConstants, WXPayUtil } = require('wx-js-utils')
const ip = require('ip')
const { mchId, key, certFileContent, timeout, caFileContent } = require('./config/index')
const dayjs = require('dayjs')
// 初始化 cloud
cloud.init({
  env: 'pay-test-xxxxxxxxxx' // API 调用都保持和云函数当前所在环境一致
})
const db = cloud.database()
const goodCollection = db.collection('goods') // 商品数据集合
const orderCollection = db.collection('orders') //订单数据集合
async function getGoodInfo(id){ // 根据商品id 从商品库里获取该商品的信息
    let goods = null
    try {
        goods = await goodCollection.doc(id).get()
        if (!goods.data) {
            return { code: 1, message: '找不到商品' }
        }else{
            return goods.data
        }
    } catch (e) {
        return { code: 1, message: '找不到商品' }
    }
}
exports.main = async (event, context) => {
    // 获取 WX Context (微信调用上下文)，包括 OPENID、APPID、及 UNIONID（需满足 UNIONID 获取条件等信息
    const { OPENID: openid, APPID: appId, UNIONID} = cloud.getWXContext()
    const { type, data } = event
    const sign_type = WXPayConstants.SIGN_TYPE_MD5 // 使用 HMAC-SHA256 签名，也可以选择  WXPayConstants.SIGN_TYPE_MD5，小程序默认是 WXPayConstants.SIGN_TYPE_MD
    let wxpay = new WXPay({
        appId, mchId, key, certFileContent, caFileContent, timeout, signType: sign_type,
        useSandbox: false   // 不使用沙箱环境
    });
    switch (type) {
        case 'unifiedOrder': // 统一下单（分别在微信支付侧和云开发数据库生成订单）
            const { name, price, pic, _id } = await getGoodInfo(data.goodid)
            const out_trade_no = dayjs().format('YYYYMMDDHHmmss')+Date.now()+Math.floor(Math.random()*(1000 - 1) + 1) // 创建外部订单号
            const time_stamp = '' + Math.ceil(Date.now() / 1000)
            // 拼凑订单参数
            const reqObj = {
                body: name, //商品名称
                out_trade_no, // 订单号 可以是 goodid + 时间戳
                total_fee: price * 100, // 单位是 分
                spbill_create_ip: ip.address() || '192.168.10.62', // 支持IPV4和IPV6两种格式的IP地址。调用微信支付API的机器IP
                notify_url: 'http://www.example.com/wxpay/notify',// '云函数暂时没有外网地址和HTTP触发起，暂时随便填个地址。'
                trade_type: 'JSAPI',
                openid,
                timeStamp: time_stamp,
            }; 
            // 在微信支付服务端生成该订单
            const { return_code, ...unifiedOrderResult } = await wxpay.unifiedOrder(reqObj)
            let order_id = null
            if (return_code === 'SUCCESS' && unifiedOrderResult.result_code === 'SUCCESS') {
                const { prepay_id, nonce_str } = unifiedOrderResult
                // 生成微信支付签名，为后在小程序端进行支付打下基础
                const sign = WXPayUtil.generateSignature({
                    appId,
                    nonceStr: nonce_str,
                    package: `prepay_id=${prepay_id}`,
                    signType: 'MD5',
                    timeStamp: time_stamp
                }, key)
                const orderData = { 
                    out_trade_no, time_stamp, nonce_str, sign, sign_type,
                    body: name, goodDetail: { name, price, pic, _id }, total_fee: price,
                    prepay_id, status: 0, // 0表示刚创建订单
                    _openid: openid,
                }
                const order = await orderCollection.add({ data: orderData })
                order_id = order._id
            }
            return {
                code: return_code === 'SUCCESS' ? 0 : 1,
                data: {
                    out_trade_no, time_stamp, order_id, ...unifiedOrderResult
                }
            }
        // 进行微信支付及更新订单状态
        case 'payorder': {
            const { out_trade_no, prepay_id, body, total_fee } = data
            const {return_code, ...restData} = await wxpay.orderQuery({
                out_trade_no
            }) // wxpay.orderQuery 查询该订单的信息，SUCCESS时 更新云集合中的该订单信息
            if (restData.trade_state === 'SUCCESS') {
                await orderCollection.where({out_trade_no}).update({
                    data: {
                        status: 1,
                        trade_state: restData.trade_state,
                        trade_state_desc: restData.trade_state_desc
                    }
                })
            }
            return {
                code: return_code === 'SUCCESS' ? 0 : 1,
                data: restData
            }
        }
        default:
        break;
    }
}
```

**`index.wxml`** 页面下单按钮的 *`makeOrder`* 方法，调用统一下单，代码如下：

```js
// pages/index/index.js
makeOrder({target}){
        wx.showLoading({
            title: '正在下单',
        })
        const { goodid } = target.dataset
        wx.cloud.callFunction({
            name: 'pay',
            data: {
                type: 'unifiedOrder',
                data: {
                    goodid
                }
            }
        }).then(res => {
            const { data } = res.result
            wx.hideLoading()
            wx.navigateTo({
                url: `/pages/order-confirm/index?id=${data.out_trade_no}`
            })
        }).catch(err => {
            wx.hideLoading()
            wx.showToast({
                title: '下单失败，请重试',
                icon: 'none'
            })
        })
    },
```

订单确认页面 **`order-confirm`**，代码如下：

```html
<!--order-confirm.wxml-->
<view>
    <view><!-- 订单查询 -->
        <view >支付金额：{{order.cash_fee || order.total_fee}}</view>
        <view>商品信息： {{order.body}}</view>
        <view >交易状态：{{order.trade_state}}</view>
        <view class="weui-form-preview__item">商户订单号：{{order.out_trade_no}}</view>
        <view class="weui-form-preview__item">支付完成时间：{{order.time_end}}</view>
        <view class="weui-form-preview__item">交易状态描述： {{order.trade_state_desc}}</view>
    </view>
    <view wx:if="{{order.trade_state ==='NOTPAY'}}" class="block">
        <button type="primary" class="button" bindtap="pay" > 支付 </button>
    </view>
</view>
```

```js
/* eslint-disable camelcase */
Page({
    data: {
        order: {}
    },
    onLoad({id}) {
        wx.showLoading({
            title: '正在加载',
        })
        this.setData({
              out_trade_no: id
        }, async () => {
            await this.getOrder()
            wx.hideLoading()
        })
    },
    // 获取订单详情
    async getOrder() {
        const {result} = await wx.cloud.callFunction({
            name: 'pay',
                data: {
                type: 'orderquery',
                data: {
                    out_trade_no: this.data.out_trade_no
                }
            }
        })
        const data = result.data || {}
        this.setData({
            order: data
        })
    },
    // 发起支付
    pay() {
        const orderQuery = this.data.order
        const out_trade_no = this.data.out_trade_no
        const { time_stamp, nonce_str, sign, prepay_id, body, total_fee } = orderQuery
        wx.requestPayment({
            timeStamp: time_stamp,
            nonceStr: nonce_str,
            package: `prepay_id=${prepay_id}`,
            signType: 'MD5',
            paySign: sign,
            success: async () => {
                wx.showLoading({
                    title: '正在支付',
                })
                wx.showToast({
                    title: '支付成功',
                    icon: 'success',
                    duration: 1500,
                    success: async () => {
                        this.getOrder()
                        await wx.cloud.callFunction({
                            name: 'pay',
                            data: {
                                type: 'payorder',
                                data: {
                                    body, prepay_id, out_trade_no, total_fee
                                }
                            }
                        })
                        wx.hideLoading()
                    }
                })
            },
            fail() {}
        })
    }
})
```
