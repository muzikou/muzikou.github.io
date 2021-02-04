### 命名空间:
在代码量较大的情况下，为了避免各种变量命名相冲突，可将相似功能的函数、类、接口等放置到 **<font color="#d63200">命名空间</font>** 内。

同 ```Java``` 的包、 ```.Net``` 的命名空间一样，**<font color="#d63200">TypeScript</font>** 的 ```命名空间``` 可以将代码包裹起来，只对外暴露需要在外部访问的对象。命名空间内的对象通过 ```export``` 关键字对外暴露。 
```ts
namespace A{
    interface Animal {
        name: string;
        eat(): void;
    }
    export class Dog implements Animal {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        eat() {
            console.log(`${this.name} 在吃狗粮。`);
        }
    }  
}
namespace B{
    interface Animal {
        name: string;
        eat(): void;
    }
    export class Dog implements Animal {
        name: string;
        constructor(theName: string) {
            this.name = theName;
        }
        eat() {
            console.log(`${this.name} 在吃狗粮。`);
        }
    }  

}

var ad=new A.Dog('空间a 小狗');
ad.eat();

var bd=new B.Dog('空间b 小狗');
bd.eat();
```
上面代码中我们分别在不同空间中定义了相同名称的 ```Animal``` 接口和实现这个接口的 ```Dog``` 类，同时用 空间名称 **```. ```**  来实例化类，这就是 ```typescript``` 中 命名空间的作用

如果我们想把上面的 ```A``` 和 ```B``` 单独抽出来 做一个模块使用。需要 把命名空间导出， 如下：
```ts
// ./modules/animal
export namespace A{
    interface Animal {
        name: string;
        eat(): void;
    }
    export class Dog implements Animal {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        eat() {
            console.log(`${this.name} 在吃狗粮。`);
        }
    }  
}
export namespace B{
    interface Animal {
        name: string;
        eat(): void;
    }
    export class Dog implements Animal {
        name: string;
        constructor(theName: string) {
            this.name = theName;
        }
        eat() {
            console.log(`${this.name} 在吃狗粮。`);
        }
    }  
}
```
然后在引用页面，引入
```ts
import {A,B} from './modules/animal';
```
### 区别
命名空间和模块的 **<font color="#d63200">区别</font>**：
+ 命名空间：内部模块，主要用于组织代码，避免命名冲突。 
+ 模块：ts的外部模块的简称，侧重代码的复用，一个模块里可能会有多个命名空间。