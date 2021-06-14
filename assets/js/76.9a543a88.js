(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{276:function(t,e,v){"use strict";v.r(e);var o=v(0),_=Object(o.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[t._v("上篇文章我们学习到什么是 "),v("strong",[v("font",{attrs:{color:"#d63200"}},[t._v("JSX")])],1),t._v("，  接下来我们继续探讨：")]),t._v(" "),v("h3",{attrs:{id:"为什么用-jsx-？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么用-jsx-？"}},[t._v("#")]),t._v(" 为什么用 JSX ？")]),t._v(" "),v("ol",[v("li",[t._v("相比较 "),v("code",[t._v("createElement")]),t._v(" ，"),v("strong",[v("font",{attrs:{color:"#d63200"}},[t._v("JSX")])],1),t._v(" 写起来更快更容易上手。")]),t._v(" "),v("li",[t._v("编译器会对 "),v("strong",[v("font",{attrs:{color:"#d63200"}},[t._v("JSX")])],1),t._v(" 进行规范的处理，做一些严谨的转换和类型检测，所以更安全，在编译过程中就能发现错误。")]),t._v(" "),v("li",[v("code",[t._v("DOM")]),t._v(" 操作很慢且非常消耗性能，相对于 "),v("code",[t._v("DOM")]),t._v(" 对象，"),v("code",[t._v("JS")]),t._v(" 对象处理起来更快更简单，从而提高性能和开发效率。")])]),t._v(" "),v("h3",{attrs:{id:"在哪用-jsx-？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#在哪用-jsx-？"}},[t._v("#")]),t._v(" 在哪用 JSX ？")]),t._v(" "),v("p",[v("strong",[t._v("React")]),t._v(" 用中 "),v("strong",[v("font",{attrs:{color:"#d63200"}},[t._v("JSX")])],1),t._v("  语法描述视图，通过 "),v("code",[t._v("babel-loader")]),t._v(" 转译后它们变为 ``c)"),v("code",[t._v("形式，用函数将生成的")]),t._v("VDOM"),v("code",[t._v("来描述真实")]),t._v("DOM"),v("code",[t._v("，当状态变化时，")]),t._v("VDOM"),v("code",[t._v("将作出相应变化，再通过")]),t._v("diff"),v("code",[t._v("算法对比新老")]),t._v("VDOM"),v("code",[t._v("的区别从而作出最终的")]),t._v("DOM``` 操作。")]),t._v(" "),v("h3",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),v("ol",[v("li",[v("p",[v("code",[t._v("webpack + babel")]),t._v(" 编译时，替换 "),v("strong",[v("font",{attrs:{color:"#d63200"}},[t._v("JSX")])],1),t._v(" 为 "),v("code",[t._v("React.createElement(type, props, ...children)")])])]),t._v(" "),v("li",[v("p",[t._v("所有 React.createElement() 执行结束后得到一个 JS 对象，它能完整的描述 dom 结构，称之为 vdom，")])]),t._v(" "),v("li",[v("p",[t._v("ReactDOM.render(vdom, container) 可以将 vdom 转换为 dom 并追加到 container 中，通过递归遍历 vdom 树，根据 vtype 不同，执行不同的逻辑，vtype 为 1 生成原生元素，为 2则需要将类组件实例化并执行其 render 将返回 vdom 初始化，为3 则将函数执行并返回 vdom 初始化")])])])])}),[],!1,null,null,null);e.default=_.exports}}]);