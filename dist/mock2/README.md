# apiMock 简单mock服务器

* http://127.0.0.1:3000/index 调用 /api 文件夹中/index接口
* http://127.0.0.1:3000/apiDoc/index 查看mock接口信息 
* 需要配合FeHelper等JSON插件使用

* /api/[GET]_index.js

```js
module.exports = {
  "req": {
      "id": 1,
  },
  "res": {
      "data": {
          "name": "name 01" // name
      }
  }
}
```
