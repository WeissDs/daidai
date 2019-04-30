#gitbook使用方法

##gitbook的安装

######使用npm安装

如果安装gitbook命令行会提升先卸载掉gitbook后安装gitbook-cli
    
    npm install gitbook -g
    npm uninstall gitbook -g
    
正确的安装命令

    npm install -g gitbook-cli
    
##gitbook的使用

####初始化文件夹

进入项目文件夹内初始化gitbook，会生成README.md和SUMMARY.md两个文件。

    gitbook init
    
####网页预览书籍

gitbook serve 会先调用 gitbook build 编译书籍

输入gitbook serve命令后即可在localhost：4000端口预览书籍

    gitbook serve
    
