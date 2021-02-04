### 继承接口
和类一样，接口也可以相互 **<font color="#d63200">继承</font>**。 这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里：
```ts
interface Animals{
    eat():void;
}
interface Personss extends Animals{
    work():void;
}
class Web implements Personss{
    name: string;
    constructor(name: string){
        this.name = name
    }
    eat():void{
        console.log(`${this.name}喜欢吃面食`)
    }
    work():void{
        console.log(`${this.name}在做前端工作`)
    }

}
let w=new Web('muzi')
w.eat();
w.work()
```
下面我们来实现一个更复杂的一点的：
```ts
interface Animals{
    eat():void;
}
interface Personss extends Animals{
    work():void;
}
class progrommer{
    name: string;
    constructor(name: string){
        this.name = name
    }
    doing(str: string){
        console.log(`${this.name}${str}`)
    }
}
class Web extends progrommer implements Personss{
    constructor(name: string){
        super(name)
    }
    eat():void{
        console.log(`${this.name}喜欢吃面食`)
    }
    work():void{
        console.log(`${this.name}在做前端工作`)
    }

}
let w=new Web('muzi')
w.eat();
w.work()
w.doing('写代码')
```