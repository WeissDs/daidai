##HTML

####form表单

######enctype的值有
    application/x-www-urlencoded    默认
    multipart/form-data             (method必须为post)可以传输二进制
    text-plain                      

######enctype修改的是MIME 编码？？？？？？？？


####html标签中存放不显示数据的属性

###### aria-label属性用来给当前元素加上的标签描述，接受字符串作为参数。是用不可视的方式给元素加label（如果被描述元素存在真实的描述元素，可使用 aria-labelledby 属性作为来绑定描述元素和被描述元素来代替）

  <div aria-label="user.age"></div>


##CSS常见问题

#####1. li之间的空隙怎么解决

    在ul中设置font-size: 0;  如果li中有文字，用绝对定位或浮动解决

#####2. img的空隙怎么解决

    在父元素中设置font-size: 0;


#####3. margin-top将父元素和相邻元素顶下来的问题

    css定义所有相邻(包括 同级 and 嵌套时相邻的父元素和第一个子元素)的两个元素，margin合并为一个

    专业解释： BFC规范， 在同一个BFC中两个毗邻的块级盒，在垂直方向的margin会发生折叠

```javascript
解决方法：
    同级： vertical-align: top;
    嵌套： 1. 父元素设置 overfloat: hidden; 或者父元素设置padding 或 border 
          2. 子元素设置为inline-block; 或者 浮动子元素

```

#####4. background-img: url(); 需要给元素设置高度，background-img无法撑起高度

#####5. flex

        1. flex布局有时会出现宽度设置flex:x;的元素被无限撑大的情况， 使用width:0;可以解决，原因不明
        2. flex:x; 会被超出内容高度撑大，使用overflow: hidden;可以解决

#####6. css3动画 文字抖动问题

        解决方案（不确定）: 1. backface-visibility: hidden;
                           2. 改成transform: translate3d(-50%, -50%, 0)会解决一部分问题，主要是transform：translateZ(0)的功劳

#####7. animation中的动画用transform来写比用top left性能高很多

    原理： eft/top/margin 之类的属性会影响到元素在文档中的布局，当对布局（layout）进行动画时，
    该元素的布局改变可能会影响到其他元素在文档中的位置，就导致了所有被影响到的元素都要进行重新
    布局[1]，浏览器需要为整个层进行重绘并重新上传到 GPU，造成了极大的性能开销。
    
    transform 属于合成属性（composite property），对合成属性进行 transition/animation 动画将会创建一个合成层（composite layer），这使得被动画元素在一个独立的层中进行动画。通常情况下，浏览器会将一个层的内容先绘制进一个位图中，然后再作为纹理
    （texture）上传到 GPU，只要该层的内容不发生改变，就没必要进行重绘（repaint），浏览器会通过重新复合（recomposite）
    来形成一个新的帧[2]。

#####8. background gradient背景渐变

    1. 线性
    background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
    2. 重复线性
    background-image: repeating-linear-gradient(135deg,#ccc,#efefef 90%,#000 10%);
    3. 径向
    background-image: radial-gradient(red 5%, green 15%, blue 60%);
    4. 重复径向
    background-image: repeating-radial-gradient(red, yellow 10%, green 15%);





##CSS常用

#####1. 清除浮动
```javascript
&:after{
    clear: both;
    content: '';
    display: block;
    height:0;
    width:0;
    visibility:hidden;
}
```

#####2. 子元素水平垂直居中的方法

######方法1

    子元素： display: inline-block;
            vertical-align: middle;
    父元素： text-align: center;
            height: xx;            // 不能使用百分比，可以使用vw vh rem px!!!
            line-height: xx;
            


######一个黑科技css2垂直居中

    <div class="container">
      <div class="dialog">
      </div>
    </div>
    核心 CSS 代码如下：

    .container {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0,0,0,.5);
        text-align: center;
        font-size: 0;
        white-space: nowrap;
        overflow: auto;
    }

    .container:after {
        content: '';
        display: inline-block;
        height: 100%;
        vertical-align: middle;
    }

    .dialog {
        display: inline-block;
        vertical-align: middle;
        text-align: left;
        font-size: 14px;
        white-space: normal;
    } 


#####3. 用js控制transform写动画

```javascript
    js:
    oDiv.style.transform='tanslate(20px)';
    css:
    div{ transition: transform 2s; }
```

#####4. 强制换行和强制不换行

```javascript
    
    1、word-break: break-all;        强制换行，只对英文起作用，以字母作为换行依据。
    2、word-wrap: break-word;        强制换行，只对英文起作用，以单词作为换行依据。
    3、white-space: nowrap;          强制不换行。
    4、white-space: pre-wrap;        强制换行，只对中文起作用。

```

#####5. 限制文本行数

######显示两行 多余部分隐藏

```javascript
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
```
######显示一行 多余部分用...表示

```javascript
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;  /* 超出用...表示 */
```

#####7. 宽高等比缩放的方法

######方法1

```javascript
    div{ width: 100%; }
    div:before{
        padding-bottom: 10%;   //宽度的10%
        }
```

#####8. 不规则图片点击写法

######1分开切图： 将多个切好的图片放入<a>标签的<div>中（注意a标签不可以给宽高否则空隙部分也会触发点击事件，可以给主图定宽高后，副图用绝对定位 ps: 师父说这里可以用map标签）， 用绝对定位排好。

        <a>
            <div 设置宽高 position: relative;>
                <img src="" alt="" position: absolute; top: -x;>
                <img src="" alt="" position: absolute;>
            </div>
        </a>

#####9. 多排文字竖向排列

        writing-mode: vertical-lr;/*从左向右 从右向左是 writing-mode: vertical-rl;*/ 
        writing-mode: tb-lr;/*IE浏览器的从左向右 从右向左是 writing-mode: tb-rl；*/  



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
