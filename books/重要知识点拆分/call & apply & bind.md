
##a.call(b, 参数)

#####b使用a的方法（相当于a的this指向了b?）

    function a(){
        this.dai = 12
        this.xi = 0
        this.yu = 34
    }
    function b(){
        this.age=1
        // b的this指向了a？？
        a.call(this)
    }
    let bb = new b();
    
    let result = bb.dai
    console.log(result) ------12

##const $ = document.querySelectorAll.bind(document)

#####document使用$方法（将this绑定在document）