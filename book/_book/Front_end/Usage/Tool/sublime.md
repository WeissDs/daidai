#sublime使用方法

---

##sublime常用快捷鍵

1. 全局搜索    ctrl+shift+f

2. 当前页面搜索    ctrl+f

3. Ctrl+Shift+D 复制光标所在整行，插入到下一行

4. Ctrl+~  打开sublime控制台

5. Ctrl+Shift+P调出命令面板

---

##sublime插件安装、删除方法

####下载Package Control

命令行下载地址 复制网页中对应版本的下载代码

	https://packagecontrol.io/installation

sublime控制台粘贴代码回车安装package control

####使用package control
1. 下载插件

使用ctrl+shift+p调出命令面板 输入package install
输入要下载的插件名

2.删除插件

查看Perferences->package settings中是否有要删除的插件
使用ctrl+shift+p调出命令面板 输入remove 选择 Remove Channel 点击要删除的插件后回车



---


##AutoFileName

自动提示路径

---

##markdown插件安装使用

功能：markdown支持.md语法高亮

1.需要两款插件：Markdown Editing + MarkdownLivePreview；

2.在Package Control → Install Package中输入两款插件的名字，找到相应插件，点击即可自动完成安装，安装完重启Sublime；

3.简单设置：Preferences → Package Settings → MarkdownLivePreview → Setting，打开后将左边default的设置代码复制到右边User栏，找到"markdown_live_preview_on_open": false,把false改为true，保存。

---

##babel插件安装使用

功能：babel支持ES6、React.js、jsx代码语法高亮。

安装：

    command（ctrl）+shift+p -> install package -> babel


该插件不需要额外配置，在打开.js或.jsx后缀的文件，直接选择Babel为对应的语法就可以了。
选择方法：view->Syntax->babel->JavaScript(babel)

---

##colorpicker插件安装使用

功能：插入颜色选择器

安装：

    command（ctrl）+shift+p -> install package -> colorpicker

使用：Ctrl+Shift+c

---


##Emmet插件安装使用

功能：可以自动扩展React的className

安装：

    ctrl(command)+shift+p -> install package -> emmet

配置：

打开菜单Preferences -> Package Settings -> Emmet -> Key Bindings - User
将下面代码贴进去保存。更详细的规则可以参考
https://github.com/sergeche/emmet-sublime#how-to-expand-abbreviations-with-tab-in-other-syntaxes


    [{
        "keys": ["tab"],
        "command": "expand_abbreviation_by_tab",
        // put comma-separated syntax selectors for which 
        // you want to expandEmmet abbreviations into "operand" key 
        // instead of SCOPE_SELECTOR.
        // Examples: source.js, text.html - source
        "context": [{
                "operand": "source.js",
                "operator": "equal",
                "match_all": true,
                "key": "selector"
            },
            // run only if there's no selected text
            {
                "match_all": true,
                "key": "selection_empty"
            },
            // don't work if there are active tabstops
            {
                "operator": "equal",
                "operand": false,
                "match_all": true,
                "key": "has_next_field"
            },
            // don't work if completion popup is visible and you
            // want to insert completion with Tab. If you want to
            // expand Emmet with Tab even if popup is visible -- 
            // remove this section
            {
                "operand": false,
                "operator": "equal",
                "match_all": true,
                "key": "auto_complete_visible"
            }, {
                "match_all": true,
                "key": "is_abbreviation"
            }
        ]
    }]

---

##Autoprefixer

功能：自动补全css兼容前缀

安装：

    ctrl(command)+shift+p -> install package -> Autoprefixer

配置：
安装完成后，设置快捷键：
打开Preferences > Key Bindings
在右侧填入设置的快捷键：
    
    [
    { "keys": ["ctrl+alt+o"], "command": "autoprefixer" }
    ]

默认的补齐前缀是没有-moz-和-ms-的，需要自定义
点击Preferences > Package Settings会出现Autoprefixer选项，点击打开该选项：
设置左侧browsers属性值：

    "browsers": ["last 2 version", "> 0.1%", "> 5% in US", "ie 6-8","Firefox < 20"],

使用ctrl+alt+o进行补全前缀

---


##sublime快捷键

#####选择类

    Ctrl+D 选中光标所占的文本，继续操作则会选中下一个相同的文本。
    Alt+F3 选中文本按下快捷键，即可一次性选择全部的相同文本进行同时编辑。举个栗子：快速选中并更改所有相同的变量名、函数名等。
    Ctrl+L 选中整行，继续操作则继续选择下一行，效果和 Shift+↓ 效果一样。
    Ctrl+Shift+L 先选中多行，再按下快捷键，会在每行行尾插入光标，即可同时编辑这些行。
    Ctrl+Shift+M 选择括号内的内容（继续选择父括号）。举个栗子：快速选中删除函数中的代码，重写函数体代码或重写括号内里的内容。
    Ctrl+M 光标移动至括号内结束或开始的位置。
    Ctrl+Enter 在下一行插入新行。举个栗子：即使光标不在行尾，也能快速向下插入一行。
    Ctrl+Shift+Enter 在上一行插入新行。举个栗子：即使光标不在行首，也能快速向上插入一行。
    Ctrl+Shift+[ 选中代码，按下快捷键，折叠代码。
    Ctrl+Shift+] 选中代码，按下快捷键，展开代码。
    Ctrl+K+0 展开所有折叠代码。
    Ctrl+← 向左单位性地移动光标，快速移动光标。
    Ctrl+→ 向右单位性地移动光标，快速移动光标。
    shift+↑ 向上选中多行。
    shift+↓ 向下选中多行。
    Shift+← 向左选中文本。
    Shift+→ 向右选中文本。
    Ctrl+Shift+← 向左单位性地选中文本。
    Ctrl+Shift+→ 向右单位性地选中文本。
    Ctrl+Shift+↑ 将光标所在行和上一行代码互换（将光标所在行插入到上一行之前）。
    Ctrl+Shift+↓ 将光标所在行和下一行代码互换（将光标所在行插入到下一行之后）。
    Ctrl+Alt+↑ 向上添加多行光标，可同时编辑多行。
    Ctrl+Alt+↓ 向下添加多行光标，可同时编辑多行。

####编辑类

    {Ctrl+J 合并选中的多行代码为一行。举个栗子：将多行格式的CSS属性合并为一行。
    Ctrl+Shift+D  复制光标所在整行，插入到下一行。
    Tab 向右缩进。
    Shift+Tab 向左缩进。
    Ctrl+K+K 从光标处开始删除代码至行尾。
    Ctrl+Shift+K 删除整行。
    Ctrl+/ 注释单行。
    Ctrl+Shift+/ 注释多行。
    Ctrl+K+U 转换大写。
    Ctrl+K+L 转换小写。
    Ctrl+Z 撤销。
    Ctrl+Y 恢复撤销。
    Ctrl+U 软撤销，感觉和 Gtrl+Z 一样。
    Ctrl+F2 设置书签
    Ctrl+T 左右字母互换。
    F6 单词检测拼写}


####搜索类

    Ctrl+F 打开底部搜索框，查找关键字。
    Ctrl+shift+F 在文件夹内查找，与普通编辑器不同的地方是sublime允许添加多个文件夹进行查找，略高端，未研究。
    Ctrl+P 打开搜索框。举个栗子：1、输入当前项目中的文件名，快速搜索文件，2、输入@和关键字，查找文件中函数名，3、输入：和数字，跳转到文件中该行代码，4、输入#和关键字，查找变量名。
    Ctrl+G 打开搜索框，自动带：，输入数字跳转到该行代码。举个栗子：在页面代码比较长的文件中快速定位。
    Ctrl+R 打开搜索框，自动带@，输入关键字，查找文件中的函数名。举个栗子：在函数较多的页面快速查找某个函数。
    Ctrl+： 打开搜索框，自动带#，输入关键字，查找文件中的变量名、属性名等。
    Ctrl+Shift+P 打开命令框。场景栗子：打开命名框，输入关键字，调用sublime text或插件的功能，例如使用package安装插件。
    Esc 退出光标多行选择，退出搜索框，命令框等。