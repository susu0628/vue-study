const Router = require('koa-router')
const fs = require('fs')
const path = require('path')
// 定义了一个根路由
const router = new Router()
// fs.readdirSync为同步版本的fs.readdir()
// 将返回一个包含“指定目录下所有文件名称”的数组对象
const files = fs.readdirSync(__dirname)
// files: ['home.js', 'index.js']
files.filter((file) => {
  // . 匹配除换行符 \n 之外的任何单字符。要匹配 . ，请使用 \. 
  return file.search(/^[.]*\.js$/)
}).forEach((file) => {
  const file_name = file.substr(0, file.length - 3)
  const file_enter = require(path.join(__dirname, file))
  if (file_name !== 'index') {
    router.use(`/${file_name}`, file_enter.routes(), file_enter.allowedMethods())
  }
})
module.exports = router