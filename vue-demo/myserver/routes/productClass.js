const Router = require('koa-router')
const pool = require('../pool.js')
const router = new Router()
router.get('/getProductList', async (ctx) => {
  const id = (ctx.query || {}).id
  await new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM products WHERE pid = ${id}`, (err, result, fields) => {
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
