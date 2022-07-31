#VSCode使用方法

---

##VSCode常用快捷鍵


---

##VSCode插件安装、删除方法

在扩展中下载插件，直接搜索即可

## 常用插件安装

Path Intellisense  文件路径提示
Formatting  js\css\html 格式化



#### 下载Live Sass Compiler

1. 下载后，管理==>配置扩展设置==>Autoprefix 点击(在setting.json中编辑)==>加入以下代码

```javascript
// sass官方配置（如更新请在官网复制）
"liveSassCompile.settings.formats":[
        // 扩展
        {
            "format": "compact",//可定制的出口CSS样式（expanded，compact，compressed，nested）
            "extensionName": ".min.css",//编译后缀名
            "savePath": null//编译保存的路径
        } 
        
    ],

    "liveSassCompile.settings.excludeList": [
        "**/node_modules/**",
        ".vscode/**"
     ],
```

2. 按F1或ctrl+shift+P键入Live Sass: Watch Sass以开始实时编译，或者按键入Live Sass: Stop Watching Sass以停止实时编译。

#### 下载svn插件  SVN 和 SVN Gutter

1. SVN Gutter使用：ctrl+alt+d


