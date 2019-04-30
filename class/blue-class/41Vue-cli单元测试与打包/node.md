##单元测试

####1. vue-cli用的是jest做的单元测试

* Jest是facebook出品的JavaScript单元测试软件
* 最常用的代码: expect(变量).toEqual(期待值)


####2. jest的配置

* jest配置文件 jest.config.js
* 默认入口为

    ```javascript
    srcrootDir: path.resolve(__dirname, '../../')
    ```
* 测试的文件类型

    ```javascript
    moduleFileExtensions: [
        'js',
        'json',
        'vue'
      ],
    ```

* 根目录简写为@/

    ```javascript
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
    }
    ```

* 测试前进行babel和vue-jest编译

    ```javascript
    transform: {
      '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
      '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
    }
    ```

##测试种类

* 单元测试 需要 写用例
* 覆盖率测试 需要 写用例

##webpack和性能优化

* 项目需要满足的前提条件： 1.稳定性 2.工程性（可维护）

* 性能：

    网络性能：
    1. 减少请求数 —— webpack的天职
    2. 减小体积 —— 压缩、懒加载（延迟加载）、按需加载
    3. CDN（服务器上cdn，就近读取数据，可缓存部分可缓存内容到cdn） 负责均衡（添加服务器）
    4. 图片（压缩）
    
    运行性能：
    1. 图片（少用图片）
    2. DOM操作（少用）

####工具

* 1.grunt, gulp
* 2.browserify(不常用了), browser-sync(能做多页面同步？)
* 3.webpack

####问题？

* 测试用例跑不起来 报错

        Test suite failed to run

        SecurityError: localStorage is not available for opaque origins
        at Window.get localStorage [as localStorage] (node_modules/jsdom/lib/jsdom/browser/Window.js:257:15)
        at Array.forEach (<anonymous>)


* jest.config.js 增加配置后报错改变 （）

        verbose: true,
        testURL: "http://localhost/",


##项目部署 build

####项目打包(生成dist文件夹，可以直接丢到服务器)

    npm run build

    npm run build -- --analyze 会显示打包的具体内容？好像没有用

####按需加载

* 我们可以用以下方式导入组件 a, b(此时build之后的文件会全部打成一个包)

        import A from 'a'
        import B from 'b'
        components: { A, B }

* 如果想要按需加载组件 我们需要这样写(a,b会各自生成一个js文件)

    components: { 
        A: import('a'),
        B: import('b')
    }

* 建议大的不常用的组件按需加载，小的常用组件不要按需加载

####优化webpack：

* 优化 app.xxx.js 的方法：

        1. 按需加载
        2. 


* 优化 vendor.xxx.js 



