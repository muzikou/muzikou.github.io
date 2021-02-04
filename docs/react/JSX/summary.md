上篇文章我们学习到什么是 **<font color="#d63200">JSX</font>**，  接下来我们继续探讨：

### 为什么用 JSX ？

1. 相比较 ```createElement``` ，**<font color="#d63200">JSX</font>** 写起来更快更容易上手。
2. 编译器会对 **<font color="#d63200">JSX</font>** 进行规范的处理，做一些严谨的转换和类型检测，所以更安全，在编译过程中就能发现错误。
3. ```DOM``` 操作很慢且非常消耗性能，相对于 ```DOM``` 对象，```JS``` 对象处理起来更快更简单，从而提高性能和开发效率。

### 在哪用 JSX ？

**React** 用中 **<font color="#d63200">JSX</font>**  语法描述视图，通过 ```babel-loader``` 转译后它们变为 ``c)``` 形式，用函数将生成的 ```VDOM``` 来描述真实 ```DOM```，当状态变化时，```VDOM``` 将作出相应变化，再通过 ```diff``` 算法对比新老 ```VDOM``` 的区别从而作出最终的 ```DOM``` 操作。
 

### 总结

1. ```webpack + babel``` 编译时，替换 **<font color="#d63200">JSX</font>** 为 ```React.createElement(type, props, ...children)```

2. 所有 React.createElement() 执行结束后得到一个 JS 对象，它能完整的描述 dom 结构，称之为 vdom，

3. ReactDOM.render(vdom, container) 可以将 vdom 转换为 dom 并追加到 container 中，通过递归遍历 vdom 树，根据 vtype 不同，执行不同的逻辑，vtype 为 1 生成原生元素，为 2则需要将类组件实例化并执行其 render 将返回 vdom 初始化，为3 则将函数执行并返回 vdom 初始化


