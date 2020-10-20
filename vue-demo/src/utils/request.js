import config from './config'
import axios from 'axios'
export default (url, params = {}, method = 'GET') => {
  console.log(234234234, params)
  switch (method) {
    case 'GET':
      return new Promise((resolve, reject) => {
        axios.get(config.host + url, { params }).then((result) => {
          const { code, data } = result.data || {}
          if (code === 200) {
            resolve(data)
          }
        })
      })
    case 'POST':
      return new Promise((resolve, reject) => {
        axios.post(config.host + url, params).then((result) => {
          console.log(345345, result)
        })
      })
  }
}
