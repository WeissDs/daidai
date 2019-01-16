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

#####4. 强制换行和强制不换行

```javascript
    white-space: nowrap;     强制不换行

    强制换行
    1、word-break: break-all;        只对英文起作用，以字母作为换行依据。
    2、word-wrap: break-word;        只对英文起作用，以单词作为换行依据。
    3、white-space: pre-wrap;        只对中文起作用，强制换行

```

#####5. 宽高等比缩放的方法

######方法1

```javascript
div{ width: 100%; }
div:before{ 
    padding-bottom: 10%;   //宽度的10%
    }
```

#####6.不规则图片点击写法

######1分开切图： 将多个切好的图片放入<a>标签的<div>中（注意a标签不可以给宽高否则空隙部分也会触发点击事件，可以给主图定宽高后，覆土用绝对定位 ps: 师父说这里可以用map标签）， 用绝对定位排好。

        <a>
            <div 设置宽高 position: relative;>
                <img src="" alt="" position: absolute; top: -x;>
                <img src="" alt="" position: absolute;>
            </div>
        </a>



##CSS适配问题

width\height: min-content/max-content/fit-content
css3出的最新width值（IE和低级浏览器全部不支持）


##字体问题

####CSS中5个基本字体分类
    serif, sans-serif, monospace, cursive, fantasy.

    serif 衬线字体，如Big Caslon,宋体
    sans-serif 非衬线字体，如Helvetica,黑体,微软雅黑
    monospace 等宽字体，如 Menlo
    cursive 手写体，如 Comic Sans MS
    fantasy 幻想体，如 Bodoni Ornaments

####不同系统对字体的支持

    Arial (Mac&Win)
    SimSun 宋体 （WinXP）
    Linux
    文泉驿微米黑 （Linux）
    Win
    黑体：SimHei
    宋体：SimSun
    新宋体：NSimSun
    仿宋：FangSong
    楷体：KaiTi
    仿宋GB2312：FangSongGB2312
    楷体GB2312：KaiTiGB2312
    微软雅黑：Microsoft YaHei （Windows 7开始提供）
    Mac
    冬青黑体: Hiragino Sans GB （SNOW LEOPARD开始提供）
    华文细黑：STHeiti Light （又名STXihei）
    华文黑体：STHeiti
    华文楷体：STKaiti
    华文宋体：STSong
    华文仿宋：STFangsong
    Android
    Droid Sans 安卓系统默认字体，无衬线字体
    Droid Sans Fallback 包含汉字，日文假名，韩文的文字扩展支持

