import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {registerApplication, start} from 'single-spa'

Vue.config.productionTip = false
const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })
} 
registerApplication(
  'mySub',
  async () => {
    console.log('load')
    await loadScript('http://192.168.29.28:10001/js/chunk-vendors.js')
    await loadScript('http://192.168.29.28:10001/js/app.js')
    console.log('window', window)
    return window.singleVue
  },
  (location) => location.pathname.startsWith('/vue')
)
start()
new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
