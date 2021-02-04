### 枚举类型
**<font color="#d63200">枚举</font>** 的作用组织收集一组关联数据的方式。

标注语法:
```ts
enum 枚举名称 { key1=value, key2=value2 }
```
- ```key``` 不能是数字
- ```value``` 可以是数字，称为 <u>数字类型枚举</u>，也可以是字符串，称为 <u>字符串类型枚举</u>，但不能是其它值，默认为数字：<u>0</u>
- 第一个枚举值或者前一个枚举值为数字时，可以省略赋值，其值为 <u>前一个数字值 + 1</u> 
### 数字类型枚举
```ts
enum HTTP_CODE {
    OK = 200,
    NOT_FOUND = 404
};
HTTP_CODE.OK	//200
```
### 字符串类型枚举
```ts
enum URLS  {
    USER_REGISETER = '/user/register',
    USER_LOGIN = '/user/login'
}
```

