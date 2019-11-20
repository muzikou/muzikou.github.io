### 关于input输入框checkbox类型的样式问题
日常开发中总会遇到 需要自定义 *<font color="#d63200">CheckBox</font>* 的样式，如下：

![placeholder default](/img/css/checkbox/2.png) 

你肯定会不假思索的直接设置 *<font color="#d63200">CheckBox</font>*  的宽高、颜色，发现并没有那么简单，所以需要换个角度设置
 
 *<font color="#d63200">HTML</font>* 文件代码：
```html
<div class="checkbox">
    <input type="checkbox" value="1" id="checkboxInput" checked="checked" />
    <label for="checkboxInput"><i></i></label>
</div>
<span>点击试试</span>
```

然后在 *<font color="#d63200">CSS</font>* 中 坐如下设置
```css
.checkbox {
    width: 18px;
    position: relative;
    display: inline-block;
    vertical-align: middle;
}            
.checkbox label {
    cursor: pointer;
    position: absolute;
    width: 18px;
    height: 18px;
    top: 0;
    left: 0;
    background: #ccc;
    border-radius: 3px;
}            
.checkbox label i {
    content: '';
    position: absolute;
    width: 8px;
    height: 5px;
    background: transparent;
    top: 4px;
    left: 4px;
    border: 3px solid #fff;
    border-top: none;
    border-right: none;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
}
.checkbox input[type=checkbox]+label i {
    border-color: #fff;
}
.checkbox input[type=checkbox]:checked+label i{
    opacity: 1;
    border-color: #fe5850;
}
````
这样就可以实现 自定义 checkbox 样式了。