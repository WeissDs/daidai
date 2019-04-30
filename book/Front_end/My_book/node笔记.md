##node功能

#####node.js没有一个特别好的图片生成的插件，有一个canvas 但是不好用，npm下载后报错
#####而在java（imageLab） php（GD库）
#####node中有个child-process 可以调用外部代码（java，pathon，php等等）
    const cp=require('child_process')
    cp.exec('python 1.py 参数1 参数2 ...', function(err){
      console.log(err)
    })
