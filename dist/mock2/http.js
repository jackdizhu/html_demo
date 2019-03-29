const fs = require('fs')
const host = '127.0.0.1'
const prot = 8082
// 加载json 数据
// const api = require('./api.js')

// 获取 返回数据
function getRes(path, method) {
  let resStr = ''
  let Obj = null
  if (/^\/apiDoc[^ ]+/.test(path)) {
    path = path.replace('/apiDoc', '')
    Obj = api.getDOC(`[${method}]${path}`, `[ALL]${path}`)
  } else {
    Obj = api.getJSON(`[${method}]${path}`, `[ALL]${path}`)
  }
  // 数据处理
  if (Obj) {
    let str = ''
    if (typeof Obj === 'string' && Obj) {
      str = Obj
    } else {
      str = JSON.stringify(Obj, null, 2)
    }
    return str
  } else {
    return '{}'
  }
  return '{}'
}

// 创建 http 服务器
let http = require('http')
http.createServer((req, res) => {
  let path = req.url
  let method = req.method
  let reqHost = req.headers.host

  // 跨越设置
  // res.setHeader('Access-Control-Allow-Origin', reqHost)
  res.setHeader('Access-Control-Allow-Origin', "*")
  // 允许客户端 编辑 'content-type' headers
  res.setHeader('Access-Control-Allow-Headers', 'content-type')
  // 允许请求的方式
  res.setHeader('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS')

  if (/\.pdf$/.test(req.url)) {
    // 文件下载测试
    res.setHeader('content-type', 'application/octet-stream')
    // 返回数据
    let pdf = fs.readFileSync('./test.pdf')
    res.write(pdf)
  } else if (/\/upload$/.test(req.url)) {
    // 文件上传测试
    if (req.method === 'POST') {
      let data = null
      req.on('data', (chunk) => {
        console.log(chunk, 'chunk')
        if (data) {
          data += chunk
          // data = Buffer.concat([data, chunk])
        } else {
          // data = chunk
          data = Buffer.concat([chunk])
        }
      })
      req.on('end', () => {
        let data2 = data.toString()
        var rems = []
        // 根据\r\n分离数据和报头
        for (var i = 0; i < data2.length; i++) {
          var v = data2[i]
          var v2 = data2[i + 1]
          if (v == 13 && v2 == 10) {
            rems.push(i)
          }
        }
        // 报文信息
        var str = data2.slice(rems[0] + 2, rems[1]).toString()
        var filename = str.match(/filename=".*"/g)[0].split('"')[1]

        // fs.writeFileSync('file.pdf', data)
        fs.writeFile(`./${filename}`, data, (err, res) => {
          if (err) {
            console.log(err, 'writeFile err')
          } else {
            console.log(res, 'writeFile res')
          }
        })
        let resStr = "{code: '000'}"
        // 返回数据的方式
        res.setHeader('content-type', 'application/json')
        res.write(resStr)
        // 关闭连接
        res.end()
      })
    } else {
      // 接口测试
      let resStr = "{code: '000'}"
      // 返回数据的方式
      res.setHeader('content-type', 'application/json')
      res.write(resStr)
      // 关闭连接
      res.end()
    }
  } else {
    // 获取返回数据
    // let resStr = getRes(path, method)
    let resStr = "{code: '000'}"
    // 返回数据的方式
    res.setHeader('content-type', 'application/json')
    res.write(resStr)
    // 关闭连接
    res.end()
  }
}).listen(prot, host)
console.log(`listen to: http://${host}:${prot}`);
