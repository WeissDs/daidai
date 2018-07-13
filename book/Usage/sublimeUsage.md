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

##markdown插件安装使用

功能：markdown支持.md语法高亮

1.需要两款插件：Markdown Editing + MarkdownLivePreview；

2.在Package Control → Install Package中输入两款插件的名字，找到相应插件，点击即可自动完成安装，安装完重启Sublime；

3.简单设置：Preferences → Package Settings → MarkdownLivePreview → Setting，打开后将左边default的设置代码复制到右边User栏，找到"markdown_live_preview_on_open": false,把false改为true，保存。


##babel插件安装使用

功能：babel支持ES6、React.js、jsx代码语法高亮。

安装：

    command（ctrl）+shift+p -> install package -> babel


该插件不需要额外配置，在打开.js或.jsx后缀的文件，直接选择Babel为对应的语法就可以了。
选择方法：view->Syntax->babel->JavaScript(babel)

##colorpicker插件安装使用

功能：插入颜色选择器

安装：

    command（ctrl）+shift+p -> install package -> colorpicker

使用：Ctrl+Shift+c


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


