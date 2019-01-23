### Mac管理员账户恢复

```sh
#开机按住 cmd + s 
fsck -y 
mount -uaw / 
rm /var/db/.AppleSetupDone 
reboot
```

### 软件下载地址 

* https://www.waitsun.com/

### Chrome 启动

```sh
# 1. 开启跨域访问 2. file:// 协议访问本地文件
open -n /Applications/Google\ Chrome.app/ --args --disable-web-security --allow-file-access-from-files  --user-data-dir=/Users/Shared/Documents/chomeData
```

### mongodb 启动

```sh
cd Users/root/Desktop/mongodb/bin/
./mongod --dbpath ./data/db
```

### mac 执行exe文件

```sh
# 安装 Mono framework
export PATH=/Library/Frameworks/Mono.framework/Versions/5.10.1/Commands:${PATH}
mono Fiddler.exe 
# 报错执行 
mono --arch=32 Fiddler.exe
```

### Charles 抓包设置

```sh
# mac -> Charles -> Install Charles Root Certificate 设置信任证书
# 手机端浏览器访问 http://www.charlesproxy.com/getssl/ 添加信任证书
# 设置ssl代理到443端口
```
