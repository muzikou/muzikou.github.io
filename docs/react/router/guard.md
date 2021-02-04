### 路由守卫

**<font color="#d63200">路由守卫</font>** 是日常的开发中经常会遇到的需求，在 **<font color="#d63200">React</font>** 中路由守卫的思路是 、先包装一个高阶组件，把普通的路由配置加上权限校验之后返回新组件，具体如下：  

1. 创建一个组件，在这个组件使用时，想实现像 **```Route```** 一样，有 ```path``` 和 ```component``` 属性，具体如下：

```js
function GuardRoute({component: Comp, isLogin, ...rest}){
    return (
        <Route {...rest} render={
            props => isLogin ? <Comp /> : <Redirect to={{pathname: '/login', redirect: props.location.pathname}}></Redirect>
        }/>
    )
}
```

上面代码中利用 ```render``` 函数，实现根据条件动态渲染组件，通过判断 ```isLogin``` 是否登录，如果登录渲染传递进来的组件，如果没有登录跳转到登录页面，所以还需要定义登录组件，如下：

```js
function Login({location, isLogin, login}){
    const redirect = location.redirect || '/'
    if(isLogin){
        return <Redirect to={redirect}></Redirect>
    }
    return (
        <div>
            <p>用户登录</p>
            <button onClick={() => login} >登录</button>
        </div>
    )
}
export default function RouteT() {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <div>
                        <Link to="/">首页</Link>
                        <Link to="about">关于</Link>
                    </div>
                    <Switch>
                        <Route exact path="/" component={Home}></Route> 
                        <PrivateRoute path="/about" component={Aoubt}></PrivateRoute>
                        <Route path="/login" component={Login}></Route> 
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}
```

上面基本上实现了 **路由守卫**，点击 **关于** 会判断没有登录导航到 ```Login``` 页面，但是此时还没拿到 ```redux``` 中到 ```isLogin``` 状态以及 ```login``` 方法 ，所以还不能实现登录然后渲染 ```About``` 页面，需要做如下改动：

1. 在 ```store``` 中创建 ```user.redux.js```，具体代码如下：

```js
const initial = {
    isLogin: false,
    loading: false
}
const user = (state=0, actions ) => {
    switch (actions.type) {
        case 'requestLogin':
            return  {
                isLogin: false,
                loading: true
            };
        case 'login':
            return {
                isLogin: true,
                loading: false
            };
        default:
            return initial;
    }
}
export const login = () => (
    dispatch => {
        // 发送请求
        dispatch({type: 'requestLogin'})
        // 做异步操作
        setTimeout(() => {
            dispatch({type: 'login'})
        }, 2000)
    }
);
export default user
```

并在 ```./store/index.js``` 中引入并创建。具体代码如下：

```js
import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {user} from './user.redux'
const  store = createStore(combineReducers({user}), applyMiddleware(logger, thunk))
export default store;
```

上面代码中是用了 ```Redux``` 的中间件 **<font color="#d63200">redux-logger</font>**  和 **<font color="#d63200">redux-thunk</font>** ，如果不了解可以查看 [Redux 中间件](/react/redux/middlewares.md)

2. 需要对于创建的 **```GuardRoute```** 和 **```Login```** 组件进行修改，通过 **```connect```** 把 **```Redux```** 中状态和方法映射到组件的 **```props```** 上，具体操作如下：

```js
const GuardRoute = connect(
    state => ({isLogin: state.user.isLogin })
)(({component: Comp, isLogin, ...rest}) => {
    return (
        <Route {...rest} render={
            props => isLogin ? <Comp></Comp> : <Redirect to={{pathname: '/login', state: {redirect: props.location.pathname}}}></Redirect>
        }/>
    )
})
//登录组件
const Login = connect(
    state =>({
        isLogin: state.user.isLogin,
        loading: state.user.loading 
    }),
    {login}
)(function ({location, isLogin, login, loading}){
    const redirect = location.state.redirect || '/'
    const [uname, setUname] = useState(""); // 用户名输入状态
    if(isLogin){
        return <Redirect to={redirect}></Redirect>
    }
    return (
        <div>
            <p>用户登录</p>
            <button onClick={() => login} disabled={loading}>
                {loading ? "登录中..." : "登录"}
            </button>
        </div>
    )
})
```
