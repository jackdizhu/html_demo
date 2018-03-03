{
  "success": true,
  "data": [{
    "mock": {
      "英文名": "@name",
      "中文名": "@cname",
      "随机字符串|1-2": "@string",
      "整形": "@integer(10, 30)",
      "浮点型": "@float(60, 100, 2, 2)",
      "布尔型": "@boolean",
      "日期": "@date(yyyy-MM-dd)",
      "时间日期": "@datetime",
      "当前时间": "@now",
      "url": "@url",
      "email": "@email",
      "地区": "@region",
      "省份": "@province",
      "城市": "@city",
      "地区": "@county",
      "upper": "@upper(@title)",
      "guid": "@guid",
      "id": "@id",
      "站位图片": "@image(200x200)",
      "标题": "@title",
      "段落": "@cparagraph",
      "句子": "@csentence",
      "范围": "@range(2, 5)",
      "get 参数": function({ _req, mock }) {
        return _req.query.id || 1
      }
    }
  }]
}
// Mock  Mock 对象
// _req.url  获得请求 url 地址
// _req.method 获取请求方法
// _req.params 获取 url 参数对象
// _req.querystring  获取查询参数字符串(url中?后面的部分)，不包含 ?
// _req.query  将查询参数字符串进行解析并以对象的形式返回，如果没有查询参数字字符串则返回一个空对象
// _req.body 当 post 请求以 x-www-form-urlencoded 方式提交时，我们可以拿到请求的参数对象
// _req.path 获取请求路径名
// _req.header 获取请求头对象
// _req.originalUrl  获取请求原始地址
// _req.search 获取查询参数字符串，包含 ?
// _req.host 获取 host (hostname:port)
// _req.hostname 获取 hostname
// _req.type 获取请求 Content-Type，不包含像 "charset" 这样的参数
// _req.protocol 返回请求协议
// _req.ip 请求远程地址
// _req.get(field) 获取请求 header 中对应 field 的值
// _req.cookies(field) 获取请求 cookies 中对应 field 的值
