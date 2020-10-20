const Router = require('koa-router')
const pool = require('../pool.js')
const router = new Router()
router.post('/addCartProduct', async (ctx) => {
  const { id, activeColor, buyNum, isBuy } = ctx.request.body
  const data = await new Promise((resolve, reject) => {
    pool.query(`SELECT title, img_src, price FROM products WHERE id = ${id}`, (err, result, fields) => {
      if (err) throw err
      resolve(result)
    })
  })
  const {title, price} = data[0] || {}
  const insertData = await new Promise((resolve, reject) => {
    pool.query(`INSERT INTO product_cart VALUES(${id}, '${title}', ${buyNum}, '${activeColor}', '${(data[0] || {}).img_src}', ${price}, ${isBuy})`, (err, result, fields) => {
      if (err) throw err
      resolve(result)
    })
  })
  if (insertData.affectedRows > 0) {
    ctx.body = {
      data: '成功',
      code: 200
    }
  }
})
module.exports = router
