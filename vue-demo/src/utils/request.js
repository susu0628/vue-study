import config from './config'
import axios from 'axios'
export default (url, params = {}, method = 'GET') => {
  switch (method) {
    case 'GET':
      return new Promise((resolve, reject) => {
        axios.get(config.host + url).then((result) => {
          const { code, data } = result.data || {}
          if (code === 200) {
            resolve(data)
          }
        })
      })
  }
}
