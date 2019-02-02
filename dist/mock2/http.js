const fs = require('fs')
const host = '127.0.0.1'
const prot = 8080
// 加载json 数据
const api = require('./api.js')

// 获取 返回数据
function getRes (path, method) {
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
    // 获取返回数据
    let resStr = getRes(path, method)
    // 跨越设置
    res.setHeader('Access-Control-Allow-Origin', reqHost)
    // 允许客户端 编辑 'content-type' headers
    res.setHeader('Access-Control-Allow-Headers', 'content-type')
    // 允许请求的方式
    res.setHeader('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS')
    // 返回数据的方式
    res.setHeader('content-type', 'application/json')
    // 返回数据
    res.write(resStr)
    // 关闭连接
    res.end()
}).listen(prot, host)
console.log(`listen to: http://${host}:${prot}`);
