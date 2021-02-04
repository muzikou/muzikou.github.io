###  类类型接口 
主要是对类的约束，和 ```抽象类``` 有点类似,下面我们定义一个 ```Persons``` 接口，如下：
```ts
interface Persons{
    name: string; 
    say(str: string):void;
}
``` 
这个地方 **```implements```** 关键字实现接口约束,如下：
```ts
class Boy implements Persons{
    name: string;
    constructor(name: string){
        this.name = name
    }
    say(str: string):void{
        console.log(`我是${str}，名字是${this.name}`)
    }
}
let bb = new Boy('小明')
bb.say('男孩子')
``` 

