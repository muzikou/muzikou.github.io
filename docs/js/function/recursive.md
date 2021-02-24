### 什么是 递归？

如果一个函数在内部可以调用其本身，那么这个函数就是 **<font color="#d63200">递归函数</font>**

简单的理解就是：函数内部自己调用自己，这个函数就是 **递归函数**
下面是几个 递归的案例：

1. 利用递归函数求 1～n 的阶乘 1 * 2 * 3 * ...

```JavaScript
function fn(n){
    if(n == 1){
        return 1
    }
    return n * fn(n-1)
}
console.log(fn(4)) // 24
```

2. 利用递归函数求 斐波那契数列 1，1，2，3，5，8，13，...  
用户输入 *n*，就可以求出 这个数字的对应的值

```JavaScript
// 想要知道这个数字对应的值，需要知道 n-1 和 n-2 的值
function fb(n){
    if(n == 1 || n == 2){
        return 1
    }
    return fb(n-1) + fb(n-2)
}
console.log(fb(8));
```

3. 利用递归函数求 根据 id 返回对应的数据对象  
输入 *id* 号，返回其数据对象

```JavaScript
// 想要知道这个数字对应的值，需要知道 n-1 和 n-2 的值
var data = [{
    value: 'beijing',
    label: '北京',
    children: [{
        value: 'gugong',
        label: '故宫'
    }]},{
    value: 'zhejiang',
    label: '浙江',
    children: [{
        value: 'hangzhou',
        label: '杭州',
        children: [{
            value: 'xihu',
            label: '西湖区',
            children: [{
                value: 'ceshi',
                label: '测试',
            }]
        }]
    }]
}]
//  1、利用 forEach 去遍历里面的每一个对象
function getItem(data,value){
    var obj = {}
    data.forEach(res => {
        if(res.value == value){
            obj = res
            return res;
            // 2、我们想要获取 children 数据，可以利用 递归函数
            // 如果有 chilfren 数据，且长度 大于 0
        }else if(res.children && res.children.length > 0){
            obj = getItem(res.children,value)
        }
    })
    return obj
}
console.log(getItem(data,'ceshi'))
```
