从本栏起，我们开始系统的学习 *<font color="#d63200">React</font>*，本篇文章主要讲述 正式学习知识点之前需要做一些准备工作。
既然是学习，那么还是要看官方的文件，这边提供了预习资源：

### 预习资源

1. [React](https://reactjs.org/)
2. [create-react-app](https://github.com/search?q=create-react-app)

### 开发环境

1. [vscode下载](https://code.visualstudio.com/)
2. [node.js下载](https://nodejs.org/en/)

### 起步

可以直接运行下面的 命令行，也可以使用 *<font color="#d63200">npx</font>* ：

```Shell
# 安装官方脚手架 并 初始化
npm install -g create-react-app
create-react-app react-demo
# 或者可以直接运行
npx create-react-app react-demo
```

运行完成之后，我们可以看到文件结构如下图：

![index.html](/img/react/tree.png)  

下面我们来分析一下文件结构，此时我们 打开 *<font color="#d63200">src -> index.js</font>* ，可以看到这句代码：

```js
ReactDOM.render(<App />, document.getElementById('root'));
```

这个就是一个项目最重要的两个组成部分，*<font color="#d63200">React</font>* 和 *<font color="#d63200">reactDom</font>* ，其中 *<font color="#d63200">react</font>* 负责逻辑控制，最终渲染的内容是由 *<font color="#d63200">reactDom</font>* 控制

此时 *<font color="#d63200">reactDom</font>* 渲染的是 一个 纯粹的组件 *<font color="#d63200">App</font>* ，那么我们打开 *<font color="#d63200">app.js</font>* 并找到下面这段代码：

```js
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
```

此时的你是否会疑惑，这个标签语法既不是字符串也不是 *<font color="#d63200">HTML</font>*，那么是什么呢？请看下一篇文章 [基本知识点](/react/ABC.md)
