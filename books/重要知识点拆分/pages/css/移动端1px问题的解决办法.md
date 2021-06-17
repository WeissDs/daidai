## 移动端1px问题的解决办法


#### 一．在ios8+中当devicePixelRatio=2的时候使用0.5px

p{
   border:1px solid #000;
}

@media (-webkit-min-device-pixel-ratio: 2) {
     p{
         border:0.5px solid #000;
     }
}


#### 二. 伪元素 + transform 实现

对于老项目伪元素+transform是比较完美的方法了。

原理是把原先元素的 border 去掉，然后利用 :before 或者 :after 重做 border ，并 transform 的 scale 缩小一半，原先的元素相对定位，新做的 border 绝对定位。

单条border样式设置：

.scale-1px{ position: relative; border:none; }

.scale-1px:after{

    content: '';

    position: absolute; bottom: 0;

    background: #000;

    width: 100%; height: 1px;

    -webkit-transform: scaleY(0.5);

    transform: scaleY(0.5);

     -webkit-transform-origin: 0 0;

    transform-origin: 0 0; 

}

优点：所有场景都能满足，支持圆角(伪元素和本体都需要加border-radius)

缺点：对于已经使用伪元素的元素(例如clearfix)，可能需要多层嵌套


#### 三，viewport + rem 实现

这种兼容方案相对比较完美，适合新的项目，老的项目修改成本过大。

在devicePixelRatio = 2 时，输出viewport：

在devicePixelRatio = 3 时，输出viewport：

优点：所有场景都能满足，一套代码，可以兼容基本所有布局

缺点：老项目修改代价过大，只适用于新项目





作者：grain先森
链接：https://www.jianshu.com/p/3a262758abcf
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
