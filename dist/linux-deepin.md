## nodejs

tar -xvf   node-v6.10.0-linux-x64.tar.xz
mv node-v6.10.0-linux-x64  nodejs

1. 创建软链接
ln -s /home/one/lib/nodejs/bin/node /usr/local/bin
ln -s /home/one/lib/nodejs/bin/npm /usr/local/bin
2. 编辑文件
vi /etc/profile
export PATH="$PATH:/home/one/lib/nodejs/bin"
source /etc/profile

## git

1. apt-get install git

## mysql mariadb

> https://blog.csdn.net/e891377/article/details/108532295
1. apt-get install mariadb-server
2. vi /etc/mysql/mariadb.conf.d/50-server.cnf
> 设置远程访问, 注释 bind-address
3. sudo systemctl restart mysql
4. sudo mysql -u root
5. create user '用户'@'%' identified by '密码';

6. git config --global user.email "邮箱"
7. git config --global user.name "名称"
8. git config credential.helper store

## navicat

1. /home/one/.navicat64/ 或 /home/one/.wine/
2. 删除 system.reg

## System limit for number of file watchers reached 系统监听文件数量限制

1. echo fs.inotify.max_user_watches = 524288 | sudo tee -a /etc/sysctl.conf
2. sudo sysctl -p

## nginx

1. apt-get install nginx
2. vi /etc/nginx/sites-enabled/default
3. nginx -c /etc/nginx/nginx.conf

## adb
> https://www.jianshu.com/p/60d823b3d091

1. apt-get install android-tools-adb
2. adb devices
3. lsusb