### 泛型类：
比如我们定义一个类，具有 ```add``` 方法 和 比较最大值大方法，如下： 
```ts
class MinClass{
    public list: number[] = [];
    add(num: number){
        this.list.push(num)
    }
    max(): number{
        let maxNum= this.list[0]
        this.list.forEach(res => {
            if (res > maxNum) maxNum = res
        })
        return maxNum
    }
}
let m = new MinClass()
m.add(11);m.add(33);m.add(88);m.add(22);m.add(99);
console.log(m.max())
```
这样定义局限于只能是 数字类型，如果 我们需要同时支持返回数字和字符串两种类型要怎么实现呢，可以通过类的泛型来实现，如下： 
```ts
class MaxClass<T>{
    public list: T[] = [];
    add(num: T){
        this.list.push(num)
    }
    max(): T{
        let maxNum= this.list[0]
        this.list.forEach(res => {
            if (res > maxNum) maxNum = res
        })
        return maxNum
    }
}
let m = new MaxClass<number>()
m.add(11);m.add(33);m.add(88);m.add(22);m.add(99);
console.log(m.max()) // 99

let m2 = new MaxClass<string>()
m2.add('a');m2.add('b');m2.add('c');m2.add('d');
console.log(m2.max()) // d
```
上面代码我们定义类一个 泛型类 ```MaxClass```，从而实现传入不同类型的参数并返回。

下面我们深入探讨一下,把类当做参数的泛型类:
1. 首先我们 定义一个 ```User``` 的类这个类的作用就是映射数据库字段  
2. 然后定义一个 ```MysqlDB``` 的类这个类用于操作数据库   
3. 然后把 ```User``` 类作为参数传入到 ```MysqlDB``` 中
```ts
class User{
    loginName: string | undefined;
    password: string | undefined;
    constructor(name: string,password: string){
        this.name = name;
        this.password = password;
    }
}
class MysqlDB<T>{
    add(user: T):boolean{

        console.log(user)
        return true;
    }
}
let u = new User('muzi','123456') 
let db = new MysqlDB<User>()
db.add(u)
``` 
下面我们再定一个 ```Good``` 类，复用 ```MysqlDB``` 泛型类：
```ts
class Good{
    id: number | undefined;
    weight: string | undefined;
    price: number | undefined;
    constructor(id: number,weight: string,price: number){
        this.id = id;
        this.weight = weight;
        this.price = price;
    }
}
let good = new Good(1,'100g',100)
let gdb = new MysqlDB<Good>()
gdb.add(good)
```
上面的代码其实可以 优化成下面这样， 定义一个 ```goodObj``` 的接口，如下
```ts
interface goodObj{
    id: number | undefined;
    weight: string | undefined;
    price: number | undefined;
}
class Good{
    obj: goodObj;
    constructor(data: goodObj){
        Object.keys(data).forEach(res =>{
            this[res] = data[res]
        })
    }
}
let good = new Good({ id: 1,weight: '100g',price: 100 })
let gdb = new MysqlDB<Good>()
gdb.add(good)
```
