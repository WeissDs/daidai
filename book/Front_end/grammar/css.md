##CSS常见问题

#####1. li之间的空隙怎么解决

    在ul中设置font-size: 0;  如果li中有文字，用绝对定位或浮动解决

#####2. img的空隙怎么解决

    在父元素中设置font-size: 0;


#####3. margin-top将父元素和相邻元素顶下来的问题

    css定义所有相邻(包括 同级 and 嵌套时相邻的父元素和第一个子元素)的两个元素，margin合并为一个

```javascript
解决方法：
    同级： vertical-align: top;
    嵌套： 父元素设置 overfloat: hidden; 或者父元素设置padding 或 border

```

#####4. background-img: url(); 需要给元素设置高度，background-img无法撑起高度

#####5. width: %;宽度为百分比时无法固定在浏览器固定的一个位置，用绝对定位（？？？）




##CSS常用

#####1. 清除浮动
```javascript
&:after{
    display: inline-block; content: ""; clear: both;
}
```

#####2. 子元素水平垂直居中的方法

######方法1

    子元素： display: inline-block;
    父元素： text-align: center;
            vertical-align: middle;


#####3. 用js控制transform写动画

```javascript
    js:
    oDiv.style.transform='tanslate(20px)';
    css:
    div{ transition: transform 2s; }
```

#####4. 强制不换行

```javascript
    white-space: nowrap;
```

#####5. 宽高等比缩放的方法

######方法1

```javascript
div{ width: 100%; }
div:before{ 
    padding-bottom: 10%;   //宽度的10%
    }
```