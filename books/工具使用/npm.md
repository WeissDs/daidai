#npm使用方法

##npm安装

---

下载node.js

##cnpm安装方法 npm镜像

---

地址 https://npm.taobao.org/ 网站有下载命令

##npm更新版本

    npm install npm -g

##npm项目搭建

---

####初始化项目 简写 i

    npm init
    
####下载项目依赖包

可在package.json文件里查看安装目录（在npm init后自动生成此文件）

1. 生产依赖

-save是指将包信息添加到dependencies，表示你发布时依赖的包裹。  简写 -S

    npm install <下载的依赖包名称> --save


2. 开发依赖

-save-dev是指将包信息添加到devDependencies，表示你开发时依赖的包裹。  简写 -D

    npm install <下载的依赖包名称> --save-dev
