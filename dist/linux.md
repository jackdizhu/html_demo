# aliyun ECS 环境搭建

* vi 编辑文件不要使用 tab 使用空格缩进

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

// yum 安装 mongodb
vi /etc/yum.repos.d/mongodb-org-3.2.repo 

  [mongodb-org-3.2]
  name=MongoDB Repository
  baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/3.2/x86_64/
  gpgcheck=1
  enabled=1
  gpgkey=https://www.mongodb.org/static/pgp/server-3.2.asc

yum -y install mongodb-org
service mongod start
chkconfig mongod on
mongo 127.0.0.1:27017
// 添加管理员
db.createUser({
  user:"root",
  pwd:"password",
  roles:[{role:"root",db:"admin"}]
})
// 添加用户 db:"appdb" 分配数据库
db.createUser({
  user:"user",                                   
  pwd:"password",
  roles:[{role:"readWrite",db:"appdb"}]
});
vi /etc/mongod.conf

  # bindIp: 127.0.0.1  # Listen to local interface only, comment to listen on all interfaces.
  security:
    authorization: enabled
      
service mongod restart

// 源码安装 mongodb
curl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.0.6.tgz
tar -zxvf mongodb-linux-x86_64-3.0.6.tgz
mv  mongodb-linux-x86_64-3.0.6/ /usr/local/mongodb
export PATH=/usr/local/mongodb/bin:$PATH
cd /usr/local/mongodb/bin
mkdir -p /data
mkdir -p /data/db

// git 安装
yum -y install git
// 生成 ssh-key
cd ~/.ssh
ssh-keygen
cat ~/.ssh/id_rsa.pub
git config --global credential.helper store

// nginx 
yum install nginx
service nginx start
vi /etc/nginx/nginx.conf

  upstream app {
      server 127.0.0.1:8081 weight=1 fail_timeout=3s;
      server 127.0.0.1:8082 weight=1 fail_timeout=3s;
      server 127.0.0.1:8080 backup;
      ip_hash;
  }
  server {
      listen       80;
      server_name  localhost;
      location / {
          proxy_pass http://app;
          proxy_set_header Host $host;
          proxy_set_header S-Forwarded-For $remote_addr;
      }
      location ~ ^/api {
          default_type application/json;
      }
      error_page   500 502 503 504  /50x.html;
      location = /50x.html {
          root   html;
      }
  }

service nginx reload
ps -ef | grep nginx

```

# node 部署问题

```
cd /var/www/cooking_app/app2/node_koa2_mysql/

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

# https 部署问题

```
// 443端口 未开启
https://csr.chinassl.net/index.html
生成 csr key 文件
获取 自签名免费SSL证书 crt 文件
```
