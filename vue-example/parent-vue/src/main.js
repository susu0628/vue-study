import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {registerApplication, start} from 'single-spa'

Vue.config.productionTip = false
const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script')
    script.src = src
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })
}
/**
 * single-spa 缺陷
 * 不够灵活 不能动态加载js文件
 * 样式不隔离  没有js沙箱的机制
 */
registerApplication(
  'mySub', 
  async () => {
    console.log('load')
    await loadScript('http://localhost:10001/js/chunk-vendors.js')
    await loadScript('http://localhost:10001/js/app.js')
    console.log('window', window)
    return window.singleVue
  },
  location => location.pathname.startsWith('/vue')
)
start()
new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
