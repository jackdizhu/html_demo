```sh
# Chrome 启动
open -n /Applications/Google\ Chrome.app/ --args --disable-web-security  --user-data-dir=/Users/Shared/Documents/chomeData

# mongodb 启动
cd Users/root/Desktop/mongodb/bin/
./mongod --dbpath ./data/db
```
```sh
# mac 执行exe文件
# 安装 Mono framework
export PATH=/Library/Frameworks/Mono.framework/Versions/5.10.1/Commands:${PATH}
mono Fiddler.exe 
# 报错执行 
mono --arch=32 Fiddler.exe
```
