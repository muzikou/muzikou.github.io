(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{396:function(t,a,s){"use strict";s.r(a);var r=s(0),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"为什么要有跨端的框架"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要有跨端的框架"}},[t._v("#")]),t._v(" 为什么要有跨端的框架")]),t._v(" "),s("p",[t._v("前面我们学习了微信小程序的代码组成部分以及开发方式，随着小程序的流行，目前市场上多个平台都有自己的小程序，涉及的端太多，如下：")]),t._v(" "),s("ol",[s("li",[t._v("微信⼩程序")]),t._v(" "),s("li",[t._v("⽹⻚H5")]),t._v(" "),s("li",[t._v("头条⼩程序")]),t._v(" "),s("li",[t._v("百度⼩程序")]),t._v(" "),s("li",[t._v("⽀付宝⼩程序")]),t._v(" "),s("li",[t._v("快应⽤")]),t._v(" "),s("li",[t._v("原⽣APP")]),t._v(" "),s("li",[t._v("....")])]),t._v(" "),s("p",[t._v("由于原⽣⼩程序开发都有⼀套⾃⼰的语法，当业务要求同时在不同的端都要有所表现的时候，针对不同的端去编写多套代码的工程量就会太过于繁琐，这时候只编写一套代码就能够适配到多端的框架应运而生，用一套代码通过不同的打包指令产生多套代码部署到多端平台。其实最早的解决方案有：")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("wepy")]),s("br"),t._v("\n腾讯官方出的，用 "),s("strong",[s("code",[t._v("Vue")])]),t._v(" 写小程序，但是还是有自己的独立语法，实现不是特别友好")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("mapvue")]),s("br"),t._v("\n使用 "),s("strong",[s("code",[t._v("Vue")])]),t._v(" 脚手架，完全的 "),s("strong",[s("code",[t._v("Vue")])]),t._v(" 体验,但是停更很久了")])])]),t._v(" "),s("p",[t._v("目前用的最多的框架有：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://taro-docs.jd.com/taro/docs/README",target:"_blank",rel:"noopener noreferrer"}},[t._v("Taro"),s("OutboundLink")],1),s("br"),t._v(" "),s("strong",[s("code",[t._v("React")])]),t._v(" 开发小程序，可以使用 "),s("strong",[s("code",[t._v("Hooks，Redux，Mobx")])]),t._v(",同时拥有自己的 "),s("code",[t._v("UI")]),t._v(" 组件库-"),s("a",{attrs:{href:"https://taro-ui.jd.com/#/docs/introduction",target:"_blank",rel:"noopener noreferrer"}},[t._v("Taro-ui"),s("OutboundLink")],1),t._v("，使用 "),s("strong",[s("code",[t._v("npm")])]),t._v(" 管理")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://uniapp.dcloud.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ni-app"),s("OutboundLink")],1),s("br"),t._v("\n基于 "),s("strong",[s("code",[t._v("mapvue")])]),t._v(" 的扩展，使用 "),s("strong",[s("code",[t._v("Vue")])]),t._v(" 开发,但是重点发展自己的社区、编辑器，开源的 "),s("strong",[s("code",[t._v("github")])]),t._v(" 和 "),s("strong",[s("code",[t._v("npm")])]),t._v(" 对接的不太好，官方 "),s("code",[t._v("UI")]),t._v(" 组件库也不友好。")])]),t._v(" "),s("p",[t._v("下面我们就来体验一下 "),s("strong",[s("font",{attrs:{color:"#d63200"}},[t._v("Taro")])],1),t._v(" 的使用：")]),t._v(" "),s("h2",{attrs:{id:"taro-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#taro-简介"}},[t._v("#")]),t._v(" Taro 简介")]),t._v(" "),s("blockquote",[s("p",[s("strong",[s("font",{attrs:{color:"#d63200"}},[t._v("Taro")])],1),t._v(" 是一个开放式跨端跨框架解决方案，支持使用 "),s("strong",[s("code",[t._v("React/Vue/Nerv")])]),t._v(" 等框架来开发 微信 / 京东 / 百度 / 支付宝 / 字节跳动 / QQ 小程序 / H5 等应用。现如今市面上端的形态多种多样，"),s("code",[t._v("Web")]),t._v("、"),s("code",[t._v("React Native")]),t._v("、微信小程序等各种端大行其道，当业务要求同时在不同的端都要求有所表现的时候，针对不同的端去编写多套代码的成本显然非常高，这时候只编写一套代码就能够适配到多端的能力就显得极为需要。")])]),t._v(" "),s("h3",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm install -g @tarojs/cli\n")])])]),s("blockquote",[s("p",[t._v("值得一提的是，如果安装过程出现 "),s("code",[t._v("sass")]),t._v(" 相关的安装错误，请在安装 "),s("a",{attrs:{href:"https://www.npmjs.com/package/mirror-config-china",target:"_blank",rel:"noopener noreferrer"}},[t._v("mirror-config-china"),s("OutboundLink")],1),t._v(" 后重试")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm install -g mirror-config-china\n")])])]),s("h3",{attrs:{id:"初始化项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化项目"}},[t._v("#")]),t._v(" 初始化项目")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("taro init myApp\n")])])]),s("blockquote",[s("p",[s("code",[t._v("npm 5.2+")]),t._v(" 也可在不全局安装的情况下使用 "),s("code",[t._v("npx")]),t._v(" 创建模板项目")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npx @tarojs/cli init myApp\n")])])]),s("p",[s("img",{attrs:{src:"/img/wechat/taro1.png",alt:"taro1"}})]),t._v(" "),s("p",[t._v("在创建完项目之后，"),s("strong",[s("font",{attrs:{color:"#d63200"}},[t._v("Taro")])],1),t._v(" 会默认开始安装项目所需要的依赖，如果安装失败，使用 "),s("code",[t._v("npm install")]),t._v(" 安装命令进行安装。")]),t._v(" "),s("h3",{attrs:{id:"运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[t._v("#")]),t._v(" 运行")]),t._v(" "),s("p",[s("strong",[s("font",{attrs:{color:"#d63200"}},[t._v("Taro")])],1),t._v(" 需要运行不同的命令，将 "),s("strong",[s("font",{attrs:{color:"#d63200"}},[t._v("Taro")])],1),t._v(" 代码编译成不同端的代码，然后在对应的开发工具中查看效果。")]),t._v(" "),s("h4",{attrs:{id:"微信小程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微信小程序"}},[t._v("#")]),t._v(" 微信小程序")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 选择微信小程序模式，需要自行下载并打开微信开发者工具，然后选择项目根目录进行预览。")]),t._v("\nnpm run dev"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("weapp\nnpm run build"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("weapp\n")])])]),s("h4",{attrs:{id:"支付宝小程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#支付宝小程序"}},[t._v("#")]),t._v(" 支付宝小程序")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 选择支付宝小程序模式，需要自行下载并打开支付宝小程序开发者工具，然后在项目编译完后选择项目根目录下 dist 目录进行预览")]),t._v("\nnpm run dev"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("alipay\nnpm run build"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("alipay\n")])])]),s("p",[t._v("这里就不一一列举了，具体的请参考官方文档 "),s("a",{attrs:{href:"https://taro-docs.jd.com/taro/docs/GETTING-STARTED#%E8%BF%90%E8%A1%8C",target:"_blank",rel:"noopener noreferrer"}},[t._v("运行"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"taro-ui"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#taro-ui"}},[t._v("#")]),t._v(" Taro UI")]),t._v(" "),s("p",[s("strong",[s("code",[t._v("Taro UI")])]),t._v(" 是一款基于 "),s("code",[t._v("Taro")]),t._v(" 框架开发的多端 "),s("code",[t._v("UI")]),t._v(" 组件库")]),t._v(" "),s("h3",{attrs:{id:"安装-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-2"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("p",[t._v("在项目的根目录执行指令如下：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm install taro-ui\n")])])]),s("blockquote",[s("p",[t._v("特别注意："),s("code",[t._v("3.0+")]),t._v(" 的 "),s("code",[t._v("taro")]),t._v(" 需要安装版本为 "),s("code",[t._v('"^3.0.0-alpha.3"')]),t._v(" 的 UI组件 ：")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm install taro-ui@3.0.0-alpha.3\n")])])]),s("h3",{attrs:{id:"使用-taro-ui"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-taro-ui"}},[t._v("#")]),t._v(" 使用 Taro UI")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// page.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" AtButton "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'taro-ui'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 除了引入所需的组件，还需要手动引入组件样式")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// app.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'taro-ui/dist/style/index.scss'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局引入一次即可")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);