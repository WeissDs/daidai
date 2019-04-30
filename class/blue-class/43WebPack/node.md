##webpack 安装
    npm i webpack -D

##webpack 单个文件打包
* 直接用命令行（此方法webpack好像已经不支持了，官网api文档暂时没有修改）

        webpack js/1.js dist/1.bundle.js

* 用配置文件打包 webpack.config.js 

        module.exports = {
            entry: `${__dirname}/js/1.js`,
            output: {
                path: path.resolve(__dirname, 'dist').
                name: '1.bundle.js',
            }
        }
    `${__dirname}/js/1.js` || path.resolve(__dirname, 'dist')
    路径必须是绝对路径，两种写法都可以

##js引用css文件打包
* 使用webpack的css-loader,style-loader

        npm i style-loader css-loader -D

        webpack.config.js配置：
        module.exports = {
        //modules 是模块（插件）的配置
            module: {
                rules: \[
                    {
                        //test:碰到什么类型的文件
                        test: /\.(css|sass)$/i
                        //用什么模块解决
                        use:\['style-loader', 'css-loader']
                    }
                ]
            }
        }

##webpack-dev-server

    * 安装
    
            npm i webpack-dev-server -D

    * 运行(用不了了，报错'webpack-dev-server' 不是内部或外部命令？？？)
    
            webpack-dev-server --open
        
    




