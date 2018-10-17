##安装了wamp就不用安装mysql了？？？

##mySQL安装

####1. 在官网下载https://dev.mysql.com/downloads/mysql/

####2. 下载完后，将压缩包解压到C:\web\mysql-8.0.12

####3. 配置 MySQL 的配置文件,在C:\web\mysql-8.0.12 中创建 my.ini 文件，配置以下信息（记得修改安装目录名）：

    [mysql]
    # 设置mysql客户端默认字符集
    default-character-set=utf8
     
    [mysqld]
    # 设置3306端口
    port = 3306
    # 设置mysql的安装目录
    basedir=C:\web\mysql-8.0.12
    # 设置mysql数据库的数据的存放目录
    datadir=C:\web\sqldata
    # 允许最大连接数
    max_connections=20
    # 服务端使用的字符集默认为8比特编码的latin1字符集
    character-set-server=utf8
    # 创建新表时将使用的默认存储引擎
    default-storage-engine=INNODB


####4. 以管理员身份打开 cmd 命令行工具，切换目录：(以下所有操作都需要用管理员身份打开cmd命令行操作)

    cd C:\web\mysql-8.0.11\bin

####5. 初始化数据库：

    mysqld --initialize --console

    ...
    2018-04-20T02:35:05.464644Z 5 [Note] [MY-010454] [Server] A temporary password is generated for root@localhost: APWCY5ws&hjQ
    ...

######APWCY5ws&hjQ就是root用户初始密码，后续登录需要用到，也可以在登陆后修改密码。

####6. 输入以下安装命令：（好像没有输入也可以直接启动数据库）

    mysqld install

####7. 启动输入以下命令：

    net start mysql

####8. 关闭输入以下命令：

    net stop mysql

##登录 MySQL

####1. 当 MySQL 服务已经运行时, 我们可以通过 MySQL 自带的客户端工具登录到 MySQL 数据库中, 首先打开命令提示符, 输入以下格式的命名:

    mysql -h 主机名 -u 用户名 -p

######参数说明：

    -h : 指定客户端所要登录的 MySQL 主机名, 登录本机(localhost 或 127.0.0。1)该参数可以省略;
    -u : 登录的用户名;
    -p : 告诉服务器将会使用一个密码来登录, 如果所要登录的用户名密码为空, 可以忽略此选项。

######如果我们要登录本机的 MySQL 数据库，只需要输入以下命令即可：

    mysql -u root -p
    按回车确认, 如果安装正确且 MySQL 正在运行, 会得到以下响应:
    Enter password:

######输入 exit 或 quit 退出登录