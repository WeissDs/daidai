## nvm安装

##### 下载

1. 下载地址：https://github.com/coreybutler/nvm-windows/releases

2. Download nvm-windows --- nvm-setup.zip


##### 默认安装地址

  nvm默认地址：C:\Users\hspcadmin\AppData\Roaming\nvm
  node默认地址：C:\Program Files\nodejs

##### nvm的坑

1.  如果安装node路径放在c盘Program Files，nvm没有权限读写配置安装node的系统文件夹，执行nvm use 报错exit status 1

  解决： 在执行命令时使用管理员权限运行cmd（并且安装路径不能有中文和空格） 或者 更改node use的安装路径

2. 下载后node_modules为空 npm没有下载成功（一般是网络原因没有下载成功，配置淘宝镜像地址）

  解决： 在settings.txt中增加配置
  node_mirror: https://npm.taobao.org/mirrors/node/
  npm_mirror: https://npm.taobao.org/mirrors/npm/

3. nvm下载后一般会自动添加环境变量 如果没有添加则需手动添加 添加内容如下：



## nvm使用

nvm install latest  // 安装最新node版本
nvm install 12.16.1  // 安装node版本
nvm uninstall 12.16.1  // 卸载node版本
nvm use 12.16.1  // 使用node版本
nvm list // 查看已安装版本



