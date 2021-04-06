import Vue from 'vue'
import App from './App.vue'
import router from './router'
import singleSpaVue from 'single-spa-vue'

Vue.config.productionTip = false
const appOptions = {
  el: '#vue',
  router,
  render: h => h(App)
}
const singleCiycle = new singleSpaVue({
  Vue,
  appOptions
})
// 如果是父应用引用，此时动态设置打包的目录
if (window.singleSpaNavigate) {
  __webpack_public_path__ = 'http://localhost:10001/' 
} else {
  delete appOptions.el 
  new Vue(appOptions).$mount('#app')
}
export const bootstrap = singleCiycle.bootstrap
export const mount = singleCiycle.mount
export const unmount = singleCiycle.unmount
// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')
