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
  }
}
