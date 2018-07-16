#git使用方法

##git安装

---

Windows在[官网下载](https://git-scm.com/downloads)安装程序

自动全局安装不用添加环境变量

Mac直接从AppStore安装Xcode（apple官方IDE），Xcode集成了git

不过默认没有安装，你需要运行Xcode，选择菜单“Xcode”->“Preferences”，在弹出窗口中找到“Downloads”，选择“Command Line Tools”，点“Install”就可以完成安装了。

<br/>
<br/>


##git版本控制使用

---

####创建/修改 全局用户名和邮箱

    $ git config --global user.name "yourName"
    $ git config --global user.email "yourEmail"
    
####查看 全局用户名和邮箱

    $ git config user.name
    $ git config user.email
    
####在要创建仓库的文件夹下初始化git

    $ git init
    
####从远程库克隆到本地仓库

    $ git clone git@github...(远程库链接http||SSH)
    
####仓库提交文件

可add多个文件一次性提交

    $ git add index.txt(文件名)
    $ git commit -m "some append"
    
拉取远程库文件

    $ git pull <远程主机名> master
    
提交到远程库

    $ git push <远程主机名> master
    
####关联远程库

添加叫"gitee"的远程库

    $ git remote add gitee git@github...(远程库链接http||SSH)
    
删除叫"origin"的远程库

    $ git remote rm origin
    
查看远程库信息

    $ git remote -v 
    
修改远程库名称

    $ git remote rename <原主机名> <新主机名>
    
####本地库与远程库同步

将远程主机的更新，全部取回本地

    $ git fetch
    
取回远程主机的某个分支

    $ git fetch <远程主机名> <分支名>
    
查看远程分支

    $ git branch -r
    
查看所有分支

    $ git branch -a
    
取回远程主机的更新以后,可以在它的基础上，使用git checkout命令创建一个新的分支

    $ git checkout -b newBrach origin/master
    
在本地分支上合并远程分支

    $ git merge origin/master
    $ git rebase origin/master
    
####删除本地库

删除本地库中的.git文件

    $ rm -rf .git
    
查看本地仓库目录

    $ ls -a
    
删除本地仓库目录（在没有init的情况下也可以用git bash删除所有文件）

    $ rm -rf <ls -a出来的目录>

####生成密钥

查看是否存在ssh keys

    cd ~/.ssh

在C:\Users\我的用户名\.ssh (默认路径) 中查找 .id_rsa.pub 用记事本打开

    ssh-keygen -t rsa -C "用户名"
    
    回车后可更改路径
    设置密码

阿里云 ssh密钥对设置

        home/Profile/sshKeys
    


##git问题解决

---

####阿里云 clone时用户名密码登陆失败
登录名：profile里的username
密码：阿里云密码不是支付宝密码（重新生成）

fatal: Authentication failed for 'https://code.aliyun.com/whhftkj-SDD/huiquan.git/'

1.在 控制面板\用户帐户\凭据管理器\添加普通凭据  添加
git:https://code.aliyun.com
用户名
密码

阿里云ssh密钥设置
https://code.aliyun.com/profile/keys



####clone国内项目时速度过慢

cmd命令行输入：

    ping www.baidu.com

进入IP查询网站

https://www.ipaddress.com/

获取github.com的ip地址（地图下方）

C:windows > System32 > drivers > etc > hosts

在hosts最后两行添加 192.30.253.112  github.com
                   192.30.253.113  github.com
后保存，我添加在了For example:末尾


 
 
    