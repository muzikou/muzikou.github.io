(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{267:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"node-中通过-babel-体验-es6-模块化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-中通过-babel-体验-es6-模块化"}},[t._v("#")]),t._v(" Node 中通过 babel 体验 ES6 模块化")]),t._v(" "),a("p",[a("em",[a("font",{attrs:{color:"#d63200"}},[t._v("Node")])],1),t._v("  中默认支持  "),a("em",[a("font",{attrs:{color:"#d63200"}},[t._v("CommonJS")])],1),t._v(" 这个服务器端模块化规范，但是对 "),a("em",[a("font",{attrs:{color:"#d63200"}},[t._v("ES6")])],1),t._v(" 的模块化支持并不是太友好，所以需要通过 "),a("em",[a("font",{attrs:{color:"#d63200"}},[t._v("babel")])],1),t._v(" 这个第三方插件在 "),a("em",[a("font",{attrs:{color:"#d63200"}},[t._v("Node")])],1),t._v(" 中来体验高级的 "),a("em",[a("font",{attrs:{color:"#d63200"}},[t._v("ES6")])],1),t._v(" 特性，")]),t._v(" "),a("p",[a("strong",[a("font",{attrs:{color:"#d63200"}},[t._v("babel")])],1),t._v(" 相当于一个语法转换工具，可以把高级的、有兼容性的 "),a("em",[a("font",{attrs:{color:"#d63200"}},[t._v("Javascript")])],1),t._v(" 代码转换成为低级的、没有兼容性的  "),a("em",[a("font",{attrs:{color:"#d63200"}},[t._v("Javascript")])],1),t._v(" 代码")]),t._v(" "),a("p",[t._v("如何在 "),a("em",[a("font",{attrs:{color:"#d63200"}},[t._v("Node")])],1),t._v(" 中配置 "),a("em",[a("font",{attrs:{color:"#d63200"}},[t._v("babel")])],1),t._v(" ？")]),t._v(" "),a("ol",[a("li",[t._v("依次安装 "),a("em",[a("font",{attrs:{color:"#d63200"}},[t._v("babel")])],1),t._v(" 相关依赖包，如下")])]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node  \nnpm install --save @babel/polyfill\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("在项目的根目录下创建一个命名为 "),a("em",[a("font",{attrs:{color:"#d63200"}},[t._v("babel.config.js")])],1),t._v(" 的配置文件，其内容如下")])]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" presets "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@babel/env"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        targets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          edge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"17"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          firefox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"60"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          chrome"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"67"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          safari"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"11.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        useBuiltIns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"usage"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" presets "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("最后在终端执行如下命令，执行代码")])]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npx babel-node index.js  \n")])])]),a("p",[t._v("其中 "),a("em",[a("font",{attrs:{color:"#d63200"}},[t._v("npx")])],1),t._v(" 是在 高版本的 "),a("em",[a("font",{attrs:{color:"#d63200"}},[t._v("npm")])],1),t._v(" 中就默认提供了，可直接通过 "),a("em",[a("font",{attrs:{color:"#d63200"}},[t._v("npx")])],1),t._v(" 来执行某些命令"),a("br"),t._v(" "),a("em",[a("font",{attrs:{color:"#d63200"}},[t._v("index.js")])],1),t._v(" 是指要运行的文件，如果文件中还没有 "),a("em",[a("font",{attrs:{color:"#d63200"}},[t._v("index.js")])],1),t._v(" ，就新建 "),a("em",[a("font",{attrs:{color:"#d63200"}},[t._v("index.js")])],1),t._v("，跟 "),a("em",[a("font",{attrs:{color:"#d63200"}},[t._v("babel.config.js")])],1),t._v(" 同级")])])}),[],!1,null,null,null);s.default=e.exports}}]);