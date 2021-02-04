**<font color="#d63200">TypeScript</font>**  编写的程序并不能直接通过浏览器运行，我们需要先通过 **<font color="#d63200">TypeScript</font>**  编译器把 **<font color="#d63200">TypeScript</font>**  代码编译成 **JavaScript** 代码。              
## 安装 
```shell
npm install -g typescript
```
```TypeScript 编译器``` 安装成功以后，会提供一个 **```tsc```** 的命令，用于编译我们的 ```TypeScript``` 代码文件。
## 编译
新建 ```ts-demo/src/HelloTypeScript.ts```，编写如下代码：
```typescript
let str: string = 'Hello TypeScript';
```
然后在终端打开文件夹 ```ts-demo```，执行下面命令编译该文件
```shell
tsc src/HelloTypeScript.ts
```
默认情况下会在当前文件所在目录下生成同名的 ```js``` 文件
## 编译选项
编译命令 ```tsc``` 还支持许多编译选项，我们先来了解其中几个:       
#### --outDir: 指定编译文件输出目录
```shell
tsc --outDir ./dist ./src/HelloTypeScript.ts
```
#### --target: 指定编译的代码版本目标，默认为 ```ES3```
```shell
tsc --outDir ./dist --target ES6 ./src/HelloTypeScript.ts
```
#### --watch: 在监听模式下运行，当文件发生改变的时候自动编译
```shell
tsc --outDir ./dist --target ES6 --watch ./src/HelloTypeScript.ts
```
#### 编译配置文件
上面的 操作虽然可以实现编译，但是如果每次编译都如此操作会很繁琐，所以 **<font color="#d63200">TypeScript</font>** 编译为我们提供了一个更加强大且方便的方式 -- 编译配置文件。          
在根目录新建 ```tsconfig.json``` 文件，然后把编译选项保存到这个配置文件中：
```json
{
	"compilerOptions": {
		"outDir": "./dist",
		"target": "ES2015",
    "watch": true,
	},
  "include": ["./src/**/*"]
}
// include：指定需要编译的 **```.ts```** 文件目录，如果没有指定，则默认包含当前目录及子目录下的所有 **```.ts```** 文件       
```
#### 执行编译
然后在终端执行  **```tsc```** 命令，进行编译。 
            
#### 默认配置
**```tsc```** 默认会从当前目录开始去查找 ```tsconfig.json``` 文件，如果没有找到，会逐级向上搜索父目录。           
#### 指定配置文件
使用 **```--project```** 或 **```-p```** 也可以指定某个具体的配置文件:
```shell
tsc -p ./c.json
```
#### 指定配置文件目录
使用 **```-p```** 指定配置文件所在目录，**```tsc```** 会默认加载该目录下的 ```tsconfig.json``` 文件
```shell
tsc -p ./src
```


