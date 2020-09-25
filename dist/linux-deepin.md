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
2. 生成ssh-key
> ssh-keygen -t rsa -C "email"
3. 修改提交协议
```ssh
git remote -v
git remote set-url origin git@github.com:account/project.git
```
4. ~/.ssh文件夹下新建config文件
```config
# github
Host github.com
HostName github.com
publickey publickey
IdentityFile ~/.ssh/github_rsa
```
> ssh -T git@github.com 测试

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

## linux 下载器xdm

1. https://sourceforge.net/projects/xdman/ 下载安装xdm
2. xdman # 启动xdm
3. 下载 xdm-browser-monitor chrome扩展


## adb
> https://www.jianshu.com/p/60d823b3d091

1. apt-get install android-tools-adb
2. adb devices
3. lsusb

## deepin-wine

1. deepin-wine *.exe

## deepin 无线网卡问题

1. lspci

> https://github.com/lwfinger 网卡驱动下载地址
> Qualcomm Atheros QCA9377 802.11ac Wireless Network Adapter (rev 31)
> https://github.com/ajaybhatia/Qualcomm-Atheros-QCA9377-Wifi-Linux/
> sh ./install.sh
> sh ./install_for_kernel_4.4-rc2.sh

## 在Linux直接运行安卓程序

1. 安装 archon-integration*.deb 和 deepin-archon*.deb即可
2. http://packages.deepin.com/deepin/pool/non-free/a/
3. /usr/lib/node_modules/chromeos-apk/chromeos-apk --archon -t --scale --name "Android App" xxx.apk   ##xxx.apk为被解压的apk文件名
4. /lastore/framework/myarchon/archonrun --silent-launch --load-and-launch-app=被解压apk程序的完整路径
5. android.sh   xx.apk
