##git安装

---

Windows在[官网下载](https://git-scm.com/downloads)安装程序

自动全局安装不用添加环境变量

Mac直接从AppStore安装Xcode（apple官方IDE），Xcode集成了git

不过默认没有安装，你需要运行Xcode，选择菜单“Xcode”->“Preferences”，在弹出窗口中找到“Downloads”，选择“Command Line Tools”，点“Install”就可以完成安装了。

<br/>
<br/>

##git更新版本

---

先清除npm缓存：npm cache clean -f

然后安装n模块：npm install -g n   

升级node.js到最新稳定版：n stable

n后面也可以跟随版本号比如：n v 3.7.3

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

####关联远程库

1. 添加叫"gitee"的远程库

        $ git remote add gitee git@github...(远程库链接http||SSH)
    
2. 删除叫"origin"的远程库

        $ git remote rm origin
    
3. 查看远程库信息

        $ git remote -v 
    
4. 修改远程库名称

        $ git remote rename <原主机名> <新主机名>
    
    
####克隆

1. 从远程库克隆到本地仓库

        $ git clone git@github...(远程库链接http||SSH)

2. 从本地仓库克隆到远程库（需要库文件名相同？）

        $ git remote add gitee git@github...(远程库链接http||SSH) 
        $ git push -u origin master

####提交文件

1. 可add多个文件一次性提交(提交文件到暂存区)

        $ git add index.txt(文件名)

2. 提交到版本库

        $ git commit -m "some append"

3. 提交到远程库

        $ git push <远程主机名> master


####拉取远程库文件

1. 拉取远程库文件

        $ git pull <远程主机名> master

2. 将远程主机的更新，全部取回本地

        $ git fetch

####查询

1. 查看提交commit的信息

        $git status

2. 查看文件具体修改

        $git diff <文件名(index.html)>

3. 查看提交记录(所有本地版本记录及本地版本号)

        git log

4. 添加参数简化查询内容

        git log --pretty=oneline

5. 查看所有提交记录（包含版本回退的记录）

        git reflog

####撤销和回退(工作区、 暂存区{add时添加到stage}、 版本库{commit时添加到master})

1. 丢弃工作区修改，不会修改已add到暂存区的内容（原理是使用本地版本库替换工作区内容）

        git checkout --<文件名(index.html)>

2. 撤销暂存区的内容, 撤销暂存区的index.html 重新放回工作区（撤销工作区内容重复上一步{git checkout --<文件名>}操作）

        git reset HEAD <文件名(index.html)>

3. 将指针指向最后一次提交的版本(将覆盖工作区和暂存区的内容)

        git reset --hard HEAD

4. 将指针指向上一个版本 （^^上两个版本，HEAD~ 100上100个版本）

        git reset --hard HEAD^
        git reset --hard HEAD~100

5. 将指针指向固定的某个版本

        git reset --hard <版本号(版本号取前七位)>


####分支

1. 创建分支

        $ git branch <dev>  -----------创建分支dev
        $ git branch -b <dev>  -----------创建分支dev并将指针切换到分支dev

2. 切换HEAD指向

        $ git checkout <dev>  -----------指针指向dev分支
        $ git checkout master   -----------指针指回master

2. 查看分支

        $ git branch  -----------查看本地分支
        $ git branch -r  -----------查看远程分支
        $ git branch -a  -----------查看全部分支

3.  将分支提交到远程库(确认指针已经切换到分支上)

        $ git add .
        $ git commit -m ''
        $ git push origin <dev>

4. 合并本地分支到主分支master

        $ git merge <dev>

5. 删除分支

        $ git branch -d <dev>  -----------删除本地分支
        $ git push origin --delete <dev>  -----------删除远程分支

####远程库更新（包括分支）在本地合并

1. 将远程主机的更新，全部取回本地

        $ git fetch
    
2. 取回远程主机的某个分支

        $ git fetch <远程主机名> <分支名>
    
3. 查看远程分支

        $ git branch -r
    
4. 查看所有分支

        $ git branch -a
    
5. 取回远程主机的更新以后,可以在它的基础上，使用git checkout命令创建一个新的分支

        $ git checkout -b newBrach origin/master
    
6. 在本地分支上合并远程分支

        $ git merge origin/master
        $ git rebase origin/master
    
####删除本地库

1. 删除本地库中的.git文件

        $ rm -rf .git
    
2. 查看本地仓库目录

        $ ls -a
    
3. 删除本地仓库目录（在没有init的情况下也可以用git bash删除所有文件）

        $ rm -rf <ls -a出来的目录>

####生成密钥

1. 查看是否存在ssh keys

        cd ~/.ssh

2. 在C:\Users\我的用户名\.ssh (默认路径) 中查找 .id_rsa.pub 用记事本打开

        ssh-keygen -t rsa -C "用户名"
        
        回车后可更改路径
        设置密码

3. 阿里云 ssh密钥对设置

        home/Profile/sshKeys
    
<br/>
<br/>


##git问题解决

---

####阿里云 clone时用户名密码登陆失败

1. 登陆名或密码错误

        登录名：profile里的username
        密码：阿里云密码不是支付宝密码（重新生成）

        fatal: Authentication failed for 'https://code.aliyun.com/whhftkj-SDD/huiquan.git/'

2. 电脑未自动添加凭据（在 控制面板\用户帐户\凭据管理器\添加普通凭据  添加）

        git:https://code.aliyun.com
        用户名
        密码

3. 找不到ssh密钥设置位置

    阿里云ssh密钥[设置地址](https://code.aliyun.com/profile/keys)


####clone国内项目时速度过慢

1. cmd命令行输入：

        ping www.baidu.com

    进入[IP查询网站](https://www.ipaddress.com/)

    获取github.com的ip地址（地图下方）

    C:windows > System32 > drivers > etc > hosts

    在hosts最后两行添加 192.30.253.112  github.com
                       192.30.253.113  github.com
    后保存，我添加在了For example:末尾


####git在pull需要合并时的操作

        git中Please enter a commit message to explain why this merge is necessary.
        Please enter a commit message to explain why this merge is necessary.
        请输入提交消息来解释为什么这种合并是必要的

        git 在pull或者合并分支的时候有时会遇到这个界面。可以不管(直接下面3,4步)，如果要输入解释的话就需要:
        1.按键盘字母 i 进入insert模式
        2.修改最上面那行黄色合并信息,可以不修改
        3.按键盘左上角"Esc"
        4.输入":wq",注意是冒号+wq,按回车键即可


####git冲突解决


        <<<<<<< Updated upstream
            xxxx;
        ========
            xxxx;
        >>>>>>>


        其中Updated upstream 和=====之间的内容就是pull下来的内容
        ====和stashed changes之间的内容就是本地修改的内容。
        留下需要的代码，后重新push