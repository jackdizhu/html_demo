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

// git 安装
yum -y install git

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
pm2 start bin/www --name app2 // pm2 start bin/www --name app2 -i max // --name 别名
pm2 list
pm2 monit

pm2 dump
pm2 kill
pm2 stop 0
pm2 restart 0
pm2 delete 0

// 自动更换端口监听
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      // console.error(bind + ' is already in use');
      // 端口占用 更换端口
      port = normalizePort(process.env.PORT || '8082');
      server.listen(port);
      // process.exit(1); // 不推出进程
      break;
    default:
      throw error;
  }
}
```
