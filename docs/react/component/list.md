
1. 在 *<font color="#d63200">src -> components</font>* 文件夹中，再新建 *<font color="#d63200">list.js</font>* ，具体代码如下：
```js
import React, { Component } from 'react';
class List extends Component {
    //  状态的初始化一般放在构造器中
    constructor(props){
        super(props);

        this.state = {
            goods: [
                {id: 1,text: '条件渲染'},
                {id: 2,text: '循环渲染'}
            ],
        }
    }
    render() {
        return (
            <div>
                {/* 条件渲染 */}
                { this.props.title && <h1>{this.props.title}</h1> } {/* 短路逻辑 */}

                {/* 列表渲染 */}
                <ul>
                    {this.state.goods.map( good  => <li key={good.id}>{good.text}</li> )}
                </ul>
            </div>
        );
    }
}

export default List;
```
2. 然后在 *<font color="#d63200">src -> index.js</font>* 导入组件，再使用，具体代码如下：
```js
import React from 'react';
import List from './component/List'

function App() {
  return (
    <div>
      {/* 条件渲染与循环 */}
      <List title="条件渲染与循环Demo"></List>
    </div>
  );
}
export default App;
```