const Router = require('koa-router')
const pool = require('../pool.js')
const router = new Router()
router.get('/getProductList', async (ctx) => {
  const {id, page, pageSize} = ctx.query || {}
  await new Promise((resolve, reject) => {
    console.log(`SELECT * FROM products WHERE pid = ${id} LIMIT ${(page - 1) * pageSize}, ${pageSize} `)
    pool.query(`SELECT * FROM products WHERE pid = ${id} LIMIT ${(page - 1) * pageSize}, ${pageSize} `, (err, result, fields) => {
      if (err) throw err
      resolve(result)
    })
  }).then((result) => {
    if (result.length > 0) {
      ctx.body = {
        data: {
          productlist: result
        },
        code: 200
      }
    }
  })
})
module.exports = router
