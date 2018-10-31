
const host = '127.0.0.1'
const port = 3000

const koa = require('koa')
const app = new koa()
const koaRouter = require('koa-router')()
const koaStatic = require('koa-static')
const koaBodyparser = require('koa-bodyparser')
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
const apiDoc = require('./apiDocJson').init()
koaRouter.get('/apiDocJson', async (ctx, next) => {
  ctx.body = apiDoc
})
// 查看 api 文件信息
koaRouter.get('/apiDoc/*', async (ctx, next) => {
  const file = ctx.path.replace(/\/apiDoc\//, '')
  const fs = require('fs')
  const path = require('path')
  let dirName = path.resolve('./api')
  let files = null
  if (/^[a-zA-Z-/]{1,}\.js$/.test(file)) {
    // 文件
    files = file
    ctx.body = require(path.resolve(dirName, file))
  } else if (/^[a-zA-Z-]+$/.test(file)) {
    // 文件夹
    dirName = path.resolve('./api', file)
    const isDirName = fs.existsSync(dirName)
    files = isDirName && fs.readdirSync(dirName)
    for (let i = 0; i < files.length; i++) {
      files[i] = `http://${host}:${port}/apiDoc/${file}/` + files[i]
    }
    ctx.body = files
  } else {
    const isDirName = fs.existsSync(dirName)
    files = isDirName && fs.readdirSync(dirName)
    for (let i = 0; i < files.length; i++) {
      files[i] = `http://${host}:${port}/apiDoc/` + files[i]
    }
    ctx.body = files
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

const fs = require('fs')
const path = require('path')
const dirName = path.resolve('./api')
// 遍历 /api 文件夹 映射路由
function forReqJson(dirName) {
  const isDirName = fs.existsSync(dirName)
  const files = isDirName && fs.readdirSync(dirName)
  /*
  module.exports =  {
    type: 'GET',
    name: '/a',
    res: {
      a: 111
    }
  }
  */
  if (files && files.length) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (/^[a-zA-Z-]+\.js$/.test(file)) {
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
      } else if (/^[a-zA-Z-]+$/.test(file)) {
        // 文件夹递归
        const dirName2 = path.resolve(dirName, file)
        forReqJson(dirName2)
      }
    }
  }
}
forReqJson(dirName)
