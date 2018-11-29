
const host = '127.0.0.1'
const port = 3000

const fs = require('fs')
const path = require('path')
const koa = require('koa')
const app = new koa()
const koaRouter = require('koa-router')()
const koaStatic = require('koa-static')
const koaBodyparser = require('koa-bodyparser')
const koaBody = require('koa-body')
app.use(koaBody({
  multipart: true,
  formidable: {
    maxFileSize: 200*1024*1024    // 设置上传文件大小最大限制，默认2M
  }
}))

// 文件夹正则
const dirReg = /^[a-zA-Z0-9-]+$/
// 文件名称路径正则
const fileNameReg = /^[a-zA-Z0-9-/]+\.js$/
// 图片类型文件正则
const imageNameReg = /^[a-zA-Z0-9-/]+\.[jpg|png|gif]+$/

app.use(koaRouter.routes())
app.use(koaStatic(__dirname + '/www', {
  extensions: ['html', 'js', 'css', 'jpg', 'gif', 'png'],
  index: false
}))
app.use(koaBodyparser({
  enableTypes: ['json', 'form', 'text', 'multipart']
}))

app.listen(port, host, () => {
  console.log(`listen ${host}:${port}`)
})

app.use(async (ctx, next) => {
  await next()
  if (ctx.response.status !== 200) {
    ctx.body = {
      path: ctx.path,
      _get: ctx.query || {},
      _post: ctx.request.body || {}
    }
  }
})

// 查看 /api 目录信息
// const apiDoc = require('./apiDocJson').init()
// koaRouter.get('/apiDocJson', async (ctx, next) => {
//   ctx.body = apiDoc
// })
// 查看 api 文件信息
koaRouter.get('/apiDoc/*', async (ctx, next) => {
  const file = ctx.path.replace(/\/apiDoc\//, '')
  let dirName = path.resolve('./api')
  let files = null
  if (fileNameReg.test(file) || imageNameReg.test(file)) {
    // 文件
    files = file
    // ctx.body = require(path.resolve(dirName, file))
    ctx.type = imageNameReg.test(file) ? 'image/jpg;image/png;image/gif;' : 'application/json;'
    ctx.body = fileNameReg.test(file) ? require(path.resolve(dirName, file)) : fs.readFileSync(path.resolve(dirName, file))
  } else {
    let filesInfo = []
    if (dirReg.test(file)) {
      // 下级文件夹
      dirName = path.resolve('./api', file)
      const isDirName = fs.existsSync(dirName)
      files = isDirName && fs.readdirSync(dirName)
      for (let i = 0; i < files.length; i++) {
        const type = fileNameReg.test(files[i]) ? 'file' : 'dir'
        const filePath = path.resolve(dirName, files[i])
        const content = type === 'file' ? require(filePath) : {}
        if (type === 'file' && (!content.name || !content.type || !content.desc)) {
          continue;
        }
        filesInfo.push({
          // type: type,
          // files: filePath,
          url: `http://${host}:${port}/apiDoc/${file}/` + files[i],
          // content: content,
          name: content.name,
          type: content.type,
          desc: content.desc
        })
      }
    } else {
      // 默认显示/api文件夹
      const isDirName = fs.existsSync(dirName)
      files = isDirName && fs.readdirSync(dirName)
      for (let i = 0; i < files.length; i++) {
        const type = fileNameReg.test(files[i]) ? 'file' : 'dir'
        const filePath = path.resolve(dirName, files[i])
        const content = type === 'file' ? require(filePath) : {}
        if (type === 'file' && (!content.name || !content.type || !content.desc)) {
          continue;
        }
        filesInfo.push({
          // type: type,
          // files: filePath,
          url: `http://${host}:${port}/apiDoc/` + files[i],
          // content: content,
          name: content.name,
          type: content.type,
          desc: content.desc
        })
      }
    }
    ctx.body = filesInfo
  } 
})

koaRouter.get('/api', async (ctx, next) => {
  ctx.body = {
    path: '/api'
  }
})
koaRouter.post('/api', async (ctx, next) => {
  ctx.body = {
    path: '/api'
  }
})

// 文件上传测试
koaRouter.post('/upload', async (ctx, next) => {
  // 上传单个文件
  const file = ctx.request.files.file // 获取上传文件
  // 创建可读流
  const reader = fs.createReadStream(file.path)
  let filePath = path.join(__dirname, 'data/') + `/${file.name}`
  // 创建可写流
  const dataStream = fs.createWriteStream(filePath)
  // 可读流通过管道写入可写流
  reader.pipe(dataStream);
  ctx.body = {
    path: '/upload',
    file
  }
})

/*
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
*/
const dirName = path.resolve('./api')
// 遍历 /api 文件夹 映射路由
function forReqJson(dirName) {
  const isDirName = fs.existsSync(dirName)
  const files = isDirName && fs.readdirSync(dirName)
  if (files && files.length) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (fileNameReg.test(file)) {
        // js 文件
        const item = require(path.resolve(dirName, file))
        if (!item.name || !item.res) {
          continue;
        }
        if (item.type === 'POST') {
          koaRouter.post('/api' + item.name, async (ctx, next) => {
            ctx.body = item.res
          })
        } else {
          koaRouter.get('/api' + item.name, async (ctx, next) => {
            ctx.body = item.res
          })
        }
      } else if (dirReg.test(file)) {
        // 文件夹递归
        const dirName2 = path.resolve(dirName, file)
        forReqJson(dirName2)
      }
    }
  }
}
forReqJson(dirName)
