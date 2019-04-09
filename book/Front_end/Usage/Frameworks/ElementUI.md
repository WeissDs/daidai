##element ui 在vue中的使用

####下载安装

    npm install element-ui -S

####使用（看官方文档 以下为2.0-3.0版本方法）
#####1. 完整引入

    import ElementUI from 'element-ui';
    import 'element-ui/lib/theme-chalk/index.css';

    Vue.use(ElementUI);

#####2. 按需引入（需要下载babel-plugin-component）

    npm install babel-plugin-component -D

######然后，将 .babelrc 修改为：

    
        
        //element官网presets 会报错
       "presets": [
         ["es2015", { "modules": false }]  ----vue3.0才需要配置
       ],

######原因是Babel 的官网上在2017年9月宣布 ES2015 / ES2016/ ES2017 等等 ES20xx 时代的 presets 通通被废弃（deprecated），取而代之的是 babel-preset-env，并且承诺它将成为“未来不会过时的（future-proof）”解决方案。

######首先卸载原来的 preset，然后安装 babel-preset-env：

      npm uninstall --save-dev babel-preset-es2015
      npm install --save-dev babel-preset-env@next

######然后，将 .babelrc 修改为：
      
    {
      "presets": [ "env" ],
      "plugins": [["component", [
        {
          "libraryName": "element-ui",
          "styleLibraryName": "theme-chalk"
        }
      ]]]
    }

######接下来，如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容：

    import { Button, Select } from 'element-ui'

    Vue.component(Button.name, Button)
    Vue.component(Select.name, Select)
    /* 或写为
     * Vue.use(Button)
     * Vue.use(Select)
     */