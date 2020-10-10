const mysql = require('mysql')
const pool = mysql.createPool({
  host: 'localhost',
  database: 'leding',
  user: 'root',
  password: 'susu0628'
})
module.exports = pool
