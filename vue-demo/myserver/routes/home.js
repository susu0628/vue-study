const Router = require('koa-router')
const pool = require('../pool.js')
const router = new Router()
router.get('/', (ctx) => {
  ctx.body = '这是子路由'
})
router.get('/getProductSwiper', async (ctx) => {
  let swiperImg = await new Promise((resolve, reject) => {
    pool.query('SELECT * FROM product_swiper', (err, result, fields) => {
      if (err) {
        throw err
      }
      resolve(result)
    })
  })
  let productClass = await new Promise((resolve, reject) => {
    pool.query('SELECT * FROM product_class', (err, result, fields) => {
      if (err) {
        throw err
      }
      resolve(result)
    })
  })
  ctx.body = {
    data: {
      swiperImg,
      productClass
    },
    code: 200
  }
})
module.exports = router
