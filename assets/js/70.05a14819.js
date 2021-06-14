(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{270:function(v,_,t){"use strict";t.r(_);var r=t(0),o=Object(r.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("移动互联网时代，用户对首屏加载的速度要求越来越高。优化其体验也是成为我们前端开发的必要工作之一。")]),v._v(" "),t("p",[v._v("从用户的角度而言，从输入完网址后到最后展现完整页面这个过程需要的时间越短，体验就越好。"),t("br"),v._v("\n作为网页的开发者，就从输入url到页面渲染呈现这个过程中去提升网页的性能。")]),v._v(" "),t("h2",{attrs:{id:"从输⼊-url-到⻚⾯加载完成，发⽣了什么？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从输⼊-url-到⻚⾯加载完成，发⽣了什么？"}},[v._v("#")]),v._v(" 从输⼊ URL 到⻚⾯加载完成，发⽣了什么？")]),v._v(" "),t("p",[v._v("从前端的角度出发，尝试回答这个问题：")]),v._v(" "),t("ol",[t("li",[v._v("⽤户输⼊网址，如 "),t("code",[v._v("baidu.com")])]),v._v(" "),t("li",[v._v("浏览器通过 "),t("strong",[t("code",[v._v("DNS")])]),v._v("，把 "),t("code",[v._v("url")]),v._v(" 解析为 "),t("strong",[t("code",[v._v("IP")])])]),v._v(" "),t("li",[v._v("和 "),t("strong",[t("code",[v._v("IP")])]),v._v(" 地址建⽴ "),t("strong",[t("code",[v._v("TCP")])]),v._v(" 链接，发送 "),t("strong",[t("code",[v._v("HTTP")])]),v._v(" 请求")]),v._v(" "),t("li",[v._v("服务器接收请求，查库，读⽂件等，拼接好返回的 "),t("strong",[t("code",[v._v("HTTP")])]),v._v(" 响应")]),v._v(" "),t("li",[v._v("浏览器收到⾸屏 "),t("strong",[t("code",[v._v("HTML")])]),v._v("，开始渲染")]),v._v(" "),t("li",[v._v("解析 "),t("code",[v._v("HTML")]),v._v(" 为 "),t("strong",[t("code",[v._v("DOM")])])]),v._v(" "),t("li",[v._v("解析 "),t("code",[v._v("CSS")]),v._v(" 为 "),t("strong",[t("code",[v._v("css-tree")])])]),v._v(" "),t("li",[t("strong",[t("code",[v._v("DOM + CSS")])]),v._v(" ⽣成 "),t("strong",[t("code",[v._v("render-tree")])]),v._v(" 绘图")]),v._v(" "),t("li",[v._v("加载 "),t("strong",[t("code",[v._v("Script")])]),v._v(" 的 "),t("strong",[t("code",[v._v("JS")])]),v._v(" ⽂件")]),v._v(" "),t("li",[v._v("执⾏ "),t("strong",[t("code",[v._v("JS")])])])]),v._v(" "),t("p",[v._v("所谓性能优化，就是上⾯的步骤加⼀起，时间尽可能的短，所以基本也有两⼤⽅向：")]),v._v(" "),t("ul",[t("li",[t("router-link",{attrs:{to:"/perOpt/render.html"}},[t("strong",[v._v("文件获取优化")])])],1),v._v(" "),t("li",[t("router-link",{attrs:{to:"/perOpt/code.html"}},[t("strong",[v._v("代码执行优化")])])],1)]),v._v(" "),t("blockquote",[t("p",[v._v("对于以上步骤中的内容，作补充说明：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("DNS(域名系统)"),t("br"),v._v("\n1. 查看 DNS 缓存"),t("br"),v._v("\n2. 本地没缓存，发起 DNS 请求，向本地配置的 DNS 服务器发请求(递归)"),t("br"),v._v("\n3.  优化： prefetch 预获取，⽐如使⽤了cdn的域名\n"),t("img",{attrs:{src:"/img/perOpt/cdn.png",alt:"cdn"}})])]),v._v(" "),t("li",[t("p",[v._v("IP、TCP、HTTP的关系"),t("br"),v._v("\n1. IP 协议（寻址）"),t("br"),v._v("\n2. IP 协议之上，使用 TCP 来确保数据的完整有序，或使用 UDP （传输层 ）"),t("br"),v._v("\n3. TCP 协议之上，HTTP 应用层,负责应用层数据，数据终止时机")])])])])])}),[],!1,null,null,null);_.default=o.exports}}]);