# aliyun ECS 环境搭建

``` sh
// 建立文件夹
mkdir app
// 安装 nvm node
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
source ~/.bashrc
nvm install 8.11.4
// 安装 ftp
rpm -qa| grep vsftpd // 检查命令
yum -y  install vsftpd
chkconfig vsftpd on service vsftpd start
vi /etc/vsftpd/vsftpd.conf

  anonymous_enable=NO
  local_enable=YES
  chroot_local_user=YES
  chroot_list_enable=YES
  chroot_list_file=/etc/vsftpd/chroot_list
  allow_writeable_chroot=YES

vi /etc/vsftpd/chroot_list

  ascii_upload_enable=YES
  ascii_download_enable=YES

useradd -d /var/www -g ftp -s /sbin/nologin ftpuser
passwd ftpuser
/bin/systemctl restart vsftpd.service

// mysql
yum -y install mariadb-server mariadb
systemctl start mariadb
# systemctl stop mariadb.service
systemctl enable mariadb.service
mysql
use mysql
UPDATE user SET password=password('mMm666666') WHERE user='root';
UPDATE user SET host = '%' WHERE user = 'root';
exit
systemctl restart mariadb.service
mysql -u root -p

// 安装 mongodb
curl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.0.6.tgz
tar -zxvf mongodb-linux-x86_64-3.0.6.tgz
mv  mongodb-linux-x86_64-3.0.6/ /usr/local/mongodb
export PATH=/usr/local/mongodb/bin:$PATH
cd /usr/local/mongodb/bin
mkdir -p /data
mkdir -p /data/db

// nginx
yum -y install gcc zlib zlib-devel pcre-devel openssl openssl-devel
wget http://nginx.org/download/nginx-1.13.7.tar.gz
tar -xvf nginx-1.13.7.tar.gz
mv nginx-1.13.7/ /usr/local
cd /usr/local/nginx-1.13.7
./configure
make
make install
cd /usr/local/nginx
./sbin/nginx
ps -ef | grep nginx
# ./sbin/nginx -s stop
# ./sbin/nginx -s reload
vi /usr/local/nginx/conf/nginx.conf

  location / {
    proxy_pass 127.0.0.1:8081;
    proxy_set_header Host $host;
    proxy_set_header S-Forwarded-For $remote_addr;
  }

./sbin/nginx -s reload

```

# node 部署问题

```
npm install -g pm2
pm2 start app.js -i max
pm2 list
pm2 monit

pm2 dump
pm2 kill
pm2 resurect
```
