const Router = require('koa-router')
const pool = require('../pool.js')
const router = new Router()
router.get('/getDiscounts', async (ctx) => {
  await new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM product_discounts`, (err, result) => {
      if (err) throw err
      resolve(result)
    })
  }).then((result) => {
    if (result.length > 0) {
      ctx.body = {
        data: result,
        code: 200
      }
    }
  })
})
router.get('/getProductDetail', async (ctx) => {
  const { id } = ctx.query || {}
  let data = await new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM products WHERE id = ${id}`, (err, result) => {
      if (err) throw err
      resolve(result)
    })
  })
  let inventory = await new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM product_inventory WHERE pid = ${id}`, (err, result) => {
      if (err) throw err
      resolve(result)
    })
  })
  ctx.body = {
    data: {
      ...data[0],
      inventory, // 剩余库存，区分颜色
      inventoryAll: (inventory || []).reduce((pre, item) => {
        return pre + item.inventory
      }, 0) // 剩余库存总数
    },
    code: 200
  }
})
module.exports = router
