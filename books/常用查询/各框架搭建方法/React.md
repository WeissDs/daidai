#React笔记

##项目创建
####全局安装create-react-app

    npm install -g create-react-app

####创建test1项目

    create-react-app test1

####运行项目

    npm start

####webpack的修改路径

    \node_modules\react-scripts\config

####修改项目端口

    package.json文件
    
    "scripts": {
    "start": "set PORT=5000 && react-app-rewired start",
    
    }

##JSX事件
####鼠标事件：

    onClick 
    onContextMenu 
    onDoubleClick 
    onMouseDown 
    onMouseEnter 
    onMouseLeave 
    onMouseMove 
    onMouseOut 
    onMouseOver 
    onMouseUp 
    onDrop 
    onDrag 
    onDragEnd 
    onDragEnter 
    onDragExit 
    onDragLeave 
    onDragOver 
    onDragStart 

####触摸事件：

    onTouchCancel 
    onTouchEnd 
    onTouchMove 
    onTouchStart 

####键盘事件： 

    onKeyDown 
    onKeyPress 
    onKeyUp 

####剪切事件： 

    onCopy 
    onCut 
    onPaste 

####表单事件： 

    onChange 
    onInput 
    onSubmit 

####焦点事件： 

    onFocus 
    onBlur 

####UI事件: 

    onScroll 

####滚动事件： 

    onWheel