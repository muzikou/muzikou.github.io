**<font color="#d63200">redux-saga</font>** 是一个用于管理 **```Redux```** 应用异步操作的中间件，可以用来代替 ```redux-thunk``` 中间件。

**<font color="#d63200">Sagas</font>** 不同于 ```Thunks```，```Thunks``` 是在 ```action``` 被创建时调用，而 ```Sagas``` 只会在应用启动时调用。  
**<font color="#d63200">Sagas</font>** 派发出去的是比较纯粹的 ```action``` 对象，而不是一个函数，其次对异步对处理更强，可以解决更复杂的方案。

**<font color="#d63200">Sagas</font>** 是通过 **```Generator```** 函数来创建的。如果你还不熟悉 **```Generator```**，可以查看 [Generator](/ES6/generator.md) 这篇文章。

### 安装

```shell
npm install -s redux-saga
```

### 使用示例

通过一个简单的用户登录用例，来初步学习 **<font color="#d63200">redux-saga</font>** 的用法。  

1. 首先创建一个 ```./store/saga.js``` 处理用户登录请求：

```js
import { call, put, takeEvery } from "redux-saga/effects";

// 定义了一个模拟登录的异步函数
const UserService = {
    login(uname) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (uname === "muzi") {
                    resolve({ id: 1, name: "muzi", age: 18 });
                } else {
                    reject("用户名或密码错误");
                }
            }, 1000);
        });
    }
};
  
// worker Saga 是一个生成器函数
function* login(action) {
    try {
        yield put({ type: "requestLogin" });
        const result = yield call(UserService.login, action.uname);
        yield put({ type: "loginSuccess", result });
    } catch (message) {
        yield put({ type: "loginFailure", message });
    }
}

function* mySaga() {
    yield takeEvery("login", login);
}
export default mySaga;
```

代码中，从 **<font color="#d63200">redux-saga</font>** 中导出了 **```call, put, takeEvery```** 三个方法，作用分别是：

- **call** 是用来调用异步函数
- **put** 是在异步函数执行结束，得到数据之后通知 Redux 去更新状态时调用
- **takeEvery** 负责全局监听 ```action```，拦截 ```action``` 之后执行异步操作

2. 在 ```/store/index.js``` 中注册 **<font color="#d63200">redux-saga</font>**：

```js
import { createStore, applyMiddleware, combineReducers } from 'redux'
import {user} from './user.redux'
import createSagaMiddleware from "redux-saga";
import mySaga from "./sagas";
// 1.创建saga中间件并注册
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({user }),
  applyMiddleware(logger, sagaMiddleware)
);
// 2.中间件运行saga
sagaMiddleware.run(mySaga);
export default store;
```

3. 创建 ```./store/user.redux.js```，用户状态管理的 ```Reducer```：

```js
export const user = (
    state = { isLogin: false, loading: false, error: "" },
    action
) => {
    switch (action.type) {
        case "requestLogin": // 请求状态
            return { isLogin: false, loading: true, error: "" };
        case "loginSuccess": // 登录成功
            return { isLogin: true, loading: false, error: "" };
        case "loginFailure": // 登录失败
            return { isLogin: false, loading: false, error: action.message };
        default:
            return state;
    }
};
export function login(uname) {
     return { type: "login", uname };
}
```

**```Reducer```** 中有初始状态，**```isLogin```** 代表是否登陆，**```loading```** 代表是否登录中，**```error```** 代表登录错误信息。

4. 使用状态

```js
//登录组件
const Login = connect(
    state =>({
        isLogin: state.user.isLogin,
        loading: state.user.loading,
        error: state.user.error,
    }),
    {login}
)(
    function ({location, isLogin, login, loading, error}){
        const redirect = location.state.redirect || '/'
        const [uname, setUname] = useState(""); // 用户名输入状态
        if(isLogin){
            return <Redirect to={redirect}></Redirect>
        }
        return (
            <div>
                <p>用户登录</p>
                <hr />
                {/* 登录错误信息展示 */}
                {error && <p>{error}</p>}
                {/* 输入用户名 */}
                <input
                    type="text"
                    onChange={e => setUname(e.target.value)}
                    value={uname}
                />
                <button onClick={() => login(uname)} disabled={loading}>
                    {loading ? "登录中..." : "登录"}
                </button>
            </div>
        )
    }
)
```

代码中使用了 **```useState```** 钩子，如果不了解请查看 [状态钩子](/react/hook/state.md)  
