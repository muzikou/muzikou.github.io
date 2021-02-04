### 编程式导航
除了使用 ```<router-link>``` 创建 ```a``` 标签来定义导航链接，我们还可以借助 **<font color="#d63200">router</font>**  的实例方法来实现，
### router.push
使用 **<font color="#d63200">router.push</font>** 方法, 会向 ```history``` 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 **URL**。           
其实点击 ```<router-link :to="...">``` 等同于调用``` router.push(...)```。
```JavaScript
this.$router.push('name')
```
声明式 | 编程式   
:-: | :-:
```<router-link :to="...">``` | ```router.push(...)```       
 
该方法的参数可以是一个字符串路径，或者一个描述地址的对象。例如：
```JavaScript
// 字符串
router.push('user')

// 对象
router.push({ path: 'user' })

// 命名的路由
router.push({ name: 'user', params: { id: '123' }})

// 带查询参数，变成 /user?id=123
router.push({ path: 'user', query: { id: '123' }})
```
**<font color="#d63200">注意：</font>** 如果提供了 ```path```，```params ```会被忽略
```JavaScript
// 这里的 params 不生效
router.push({ path: '/user', params: { userId }}) // -> /user
```
### router.replace
**<font color="#d63200">router.replace</font>** 跟 ```router.push``` 很像，唯一的不同就是，它不会向 ```history``` 添加新记录，而是 **替换** 掉当前的 ```history``` 记录。
声明式 | 编程式   
:-: | :-:
```router-link :to="..." replace>``` | ```router.replace(...)```
### router.go(n)
**<font color="#d63200">router.go(n)</font>** 的参数是一个整数，意思是在 ```history``` 记录中向前或者后退多少步，类似`` window.history.go(n)``
```JavaScript
// 在浏览器记录中前进一步，等同于 history.forward()
router.go(1)

// 后退一步记录，等同于 history.back()
router.go(-1) 
```