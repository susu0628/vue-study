const Koa = require('koa')
const staticFiles = require('koa-static')
const bodyParser = require('koa-bodyparser')
const path = require('path')
// 引入根路由
const router = require('./routes')
const app = new Koa()
// 防止跨域
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080')
  ctx.set('Access-Control-Allow-Headers', 'Origin, X-Request-with, Content-Type, Accept')
  if (ctx.method === 'OPTIONS') {
    ctx.body = 200
  } else {
    await next()
  }
})
app.use(bodyParser())
// 注册根路由
app.use(router.routes(), router.allowedMethods())
// koa处理静态资源，将所有的图片存储在public中
app.use(staticFiles(path.join(__dirname, 'public')))
app.listen(3000, () => {
  console.log('server success')
})
