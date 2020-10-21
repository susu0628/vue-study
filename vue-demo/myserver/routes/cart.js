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
  // 查询购物车是否已经存在该商品
  const cartData = await new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM product_cart WHERE id = ${id} AND spec = '${activeColor}'`, (err, result, fields) => {
      if (err) throw err
      resolve(result)
    })
  })
  const {title, price} = data[0] || {}
  let insertData = {}
  let updateData = {}
  if (cartData.length > 0) {
    // 当购物车表中已经有一个同id同颜色的商品的时候，此时，只更新商品商品的数量
    updateData = await new Promise((resolve, reject) => {
      pool.query(`UPDATE product_cart SET buyNum = ${(cartData[0] || {}).buyNum + buyNum} WHERE id = ${id} AND spec = '${activeColor}' AND isBuy = ${isBuy}`, (err, result, fields) => {
        if (err) throw err
        resolve(result)
      })
    })
  } else {
    // 否则，添加商品
    insertData = await new Promise((resolve, reject) => {
      pool.query(`INSERT INTO product_cart VALUES(${id}, '${title}', ${buyNum}, '${activeColor}', '${(data[0] || {}).img_src}', ${price}, ${isBuy})`, (err, result, fields) => {
        if (err) throw err
        resolve(result)
      })
    })
  }
  if (updateData.affectedRows > 0 || insertData.affectedRows > 0) {
    ctx.body = {
      data: '成功',
      code: 200
    }
  }
})
router.post('/getCartProduct', async (ctx) => {
  const data = await new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM product_cart`, (err, result, fields) => {
      if (err) throw err
      resolve(result)
    })
  })
  if (data) {
    ctx.body = {
      code: 200,
      data: data
    }
  }
})
module.exports = router
