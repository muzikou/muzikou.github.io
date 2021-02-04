# 组件化

**<font color="#d63200">React</font>** 没有那么多 ```api``` ，基本全部都是组件，```React``` 的开发模式，大体可以用一个公式表达:

```js
UI = F(state)
```

代码中的 **```F```** 相当于 **```render```** 函数，把组件中的 ```state``` 状态通过函数执行渲染，然后返回新的组件，从而展示界面。

**<font color="#d63200">React</font>** 离不开组件，所以我们在日常开发设计组件时要尽可能的把 数据展示 和 逻辑控制 写到不同的组件中，即 **容器组件 / 展示组件**

**<font color="#d63200">容器组件</font>** 负责数据获取，如下所示：

```js
// 容器组件
export default class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                comments: [
                    { body: "react is very good", author: "facebook" },
                    { body: "vue is very good", author: "youyuxi" }
                ]
            });
        }, 1000);
    }
    render() {
        return (
            <div>
                {this.state.comments.map((c, i) => (
                    <Comment key={i} data={c} />
                ))}
            </div>
        );
    }
}
```

**<font color="#d63200">展示组件</font>** 只负责根据数据展示信息，不关心数据从何而来之类的, 如下所示：

```js
// 展示组件
function Comment({data){
    return (
        <div>
            <p>{data.body}</p>
            <p> --- {data.author}</p>
        </div>
    );
}
```

上面这种 **展示组件**，在数据更新时，会多次调用渲染函数，如果项目中有很多个组件，都在调用，就会很消耗性能，是不可行的，所以 react 在之前的版本中，页面是否更新渲染之前会在 ```shouldComponentUpdate``` 钩子中做判断，示例代码如下：

```js
shouldComponentUpdate(nextProps){
    if(nextProps.data.body == this.props.data.name1 && nextProps.data.body == this.props.data.name2){
        return false
    }
    return true;
}
```

## PureComponent

但是上面这种写法很累赘，因此在版本 ```15.3``` 之后出现了 **<font color="#d63200">PureComponent</font>** ，可以理解成定制了 ```shouldComponentUpdate``` 后的 ```Component```，是做 **浅比较**：

```js
class Comment extends React.PureComponent {
    render() {
        console.log('render')
        return (
            <div>
                <p>{this.props.body}</p>
                <p> --- {this.props.author}</p>
            </div>
        );
    }
}
```

但是分析了 **<font color="#d63200">PureComponent</font>** 的实现原理之后我们发现了一些坑：

+ ```PureComponen``` 实际上就是扩展了 ```shouldComponentUpdate``` 函数的实现，定义了一个 *浅比较* 的方式，尽可能不去比较太深层次的属性值，```shallowCompare``` 首先去比较对象的引用地址是否变化，且对与对象属性的比较只比较一层，所以在使用 ```pureComponent``` 需要注意，要么传 *值类型的数据*，要么需要确定传入的引用值的地址不能有变化而且数据只能有一层，才能直接用。

所以我们要尽可能的把 **展示组件** 抽取出来，同时 **展示组件** 尽可能的使用 **```pureComponent```**

## React.memo

上面这种写法是基于类的写法，可能很多人不喜欢，所以在 ```React v16.6.0``` 之后的版本，可以使用 **<font color="#d63200">React.memo</font>** 让函数式的组件也有 ```PureComponent``` 的功能  
**<font color="#d63200">memo</font>** 是一个高阶组件，接受一个组件之后返回一个新的组件，新组件就拥有了 ```PureComponent``` 功能，类似于下面这种写法：

```js
// 高阶组件
const Comment = React.memo(function(props) {
    console.log('render')
    return (
        <div>
            <p>{props.body}</p>
            <p> --- {props.author}</p>
        </div>
    );
})
```
