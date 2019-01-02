## node 部署问题记录

### (PM2 Cluster 模式下 Log4js 日志丢失)[https://www.jianshu.com/p/20fcb3672723]

* Log4js 配置修改

```
Log4js 在 Cluster 模式下，worker 将日志发送至 master，master 实现日志写入文件。但在 PM2 Cluster 模式下，所有进程皆为 worker

于是按照 Log4js 源码的指引安装 pm2-intercom 进程间通讯模块

仍不奏效，又注意到 isPM2Master()

isPM2Master 通过 Log4js configure 中 pm2 及 pm2InstanceVar 参数确定，于是修改 Log4js 配置如下

Log4JS.configure({
    // ...
    pm2: true,
    pm2InstanceVar: 'INSTANCE_ID'
});
```

* 自行实现 Node Cluster：

```
const OS = require('os');
const Cluster = require('cluster');
const Koa = require('koa');
const App = new Koa();
if (Cluster.isMaster) {
    for (let i = 0; i < OS.cpus().length; i++) Cluster.fork();
    console.log('master', process.pid);
} else {
    App.listen(3000);
    console.log('worker', process.pid);
}
```
