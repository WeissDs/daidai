##配置请求限制
解决同一个局域网内，别人机器不能访问站点的问题
https://www.cnblogs.com/airbreak/p/6369764.html

1. 防火墙关闭

2. 修改 apache 的 httpd.con f文件，将其中的 Require local 修改成 Require all granted.

3. 修改 httpd-vhosts.conf. 找到 <VirtualHost *:80>节点上的所有虚拟站点，将其中的 Require local 都改成 Require all granted。

4. 重启服务器