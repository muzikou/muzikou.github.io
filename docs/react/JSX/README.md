上篇文章我们初始一种新的语法，其实它被称为 **<font color="#d63200">JSX</font>**  
**<font color="#d63200">JSX</font>** 是一个看起来像 ```XML``` 的 ```JavaScript``` 的语法扩展，实际核心的逻辑完全是 ```JavaScript``` 实现的。

### JSX

+ **<font>表达式</font>**

我们打开此时项目的起始点是 *<font color="#d63200">app.js</font>* ，删除 *<font color="#d63200">header</font>* 标签及其内容，并更改以下内容:

```js
function App() {
  const name = 'name is muzi'
  return (
    <div>
      {/* 表达式 */}
      <h1> { name } </h1>
    </div>
  );
}
```

然后在终端运行如下指令，启动项目可以看到我们定义的 *<font color="#d63200">name</font>* 变量的值：

```shell
npm run start
```

*<font color="#d63200">注意： </font>* 在 *<font color="#d63200">{ }</font>* 中只要是合法的 *<font color="#d63200">js</font>* 表达式即可，例如 加减乘除、函数表达式等  

下面我们列举一个函数表达式的使用，新定义一个 *<font color="#d63200">formatName</font>* 函数 和 *<font color="#d63200">user</font>* 变量并调用，修改代码如下：  

```js
function formatName(user){
  return user.firstName + ' ' + user.lastName
}
function App() {
  const user = {
    firstName: 'mu',
    lastName: 'zi'
  }
  return (
    <div>
      {/* 此处做一个函数表达式的使用 */}
      <h1>{formatName(user)}</h1>
    </div>
  );
}
```

*<font color="#d63200">注意： </font>*  中合法是表达式不是条件语句，不能在 *<font color="#d63200">{ }</font>* 中写 条件语句或者 *<font color="#d63200">for</font>* 循环  

+ **<font>属性值</font>**

如以 *<font color="#d63200">img</font>* 标签为例，我们设置其 *<font color="#d63200">src</font>* 属性 和 *<font color="#d63200">style</font>* 样式，新增代码如下：

```js
function App() {
  const styles = { width:'100px' }
  return (
    <div>
      {/*   属性 */}
      <img src={ logo } style={ styles }/>
    </div>
  );
}
```

此时 style 样式为一个对象，修改完成之后 可以去浏览器看结果。

+ **<font>jsx 也是表达式</font>**  

此时我们定义一个 *<font color="#d63200">jsx</font>* 的变量，修改代码如下：  

```js
function App() {
  const jsx = <p>hello,jsx 也是表达式</p>
  return (
    <div>
      {/* jsx 也是表达式 */}
        { jsx }
    </div>
  );
}
```
