import Vue from 'vue'
import App from './App.vue'
import router from './router'
import singleSpaVue from 'single-spa-vue'
Vue.config.productionTip = false
const appOptions = {
  el: '#vue',
  router,
  render: function (h) { return h(App) }
}
const singleLiftCiycle = singleSpaVue({
  Vue,
  appOptions
})
// 如果是父应用引用，设置子应用在下面这个地址加载静态资源，否则会去基座应用的域名下加载
if (window.singleSpaNavigate) {
  __webpack_public_path__ = 'http://localhost:10001/' 
} else { // 如果不是父应用引用，支持子应用独立运行、部署、不依赖于基座调用
  delete appOptions.el 
  new Vue(appOptions).$mount('#app')
}
// 子应用导出生命周期函数，供基座调用
export const bootstrap = singleLiftCiycle.bootstrap
export const mount = singleLiftCiycle.mount
export const unmount = singleLiftCiycle.unmount
// new Vue({
//   router,
//   render: function (h) { return h(App) }
// }).$mount('#app')
