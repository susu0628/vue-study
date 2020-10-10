const Router = require('koa-router')
const pool = require('../pool.js')
const router = new Router()
router.get('/', (ctx) => {
  ctx.body = '这是子路由'
})
router.get('/getProductSwiper', async (ctx) => {
  await new Promise((resolve, reject) => {
    pool.query('SELECT * FROM product_swiper', (err, result, fields) => {
      if (err) {
        throw err
      }
      resolve(result)
    })
  }).then((result) => {
    ctx.body = {
      data: result,
      code: 200
    }
  })
})
router.get('/productClass', async (ctx) => {
  await new Promise((resolve, reject) => {
    pool.query('SELECT * FROM product_class', (err, result, fields) => {
      if (err) {
        throw err
      }
      resolve(result)
    })
  }).then((result) => {
    ctx.body = {
      data: result,
      code: 200
    }
  })
})
module.exports = router
