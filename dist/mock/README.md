# apiMock 简单mock服务器

* 遍历/api文件夹 映射/api路由实现mock接口
* http://127.0.0.1:3000/api/a 调用 /api 文件夹中api接口
* http://127.0.0.1:3000/apiDoc/ 查看mock接口信息

```js
    module.exports =  {
    type: 'GET', // 接口类型
    name: '/a', // 接口名称
    desc: '测试接口 /a get', // 接口描述
    req: { // 接口参数
      id: 1
    },
    res: { // 接口返回数据
      a: 111
    }
  }
```
