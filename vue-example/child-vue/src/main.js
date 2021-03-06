import Vue from 'vue'
import App from './App.vue'
import router from './router'
import singleSpaVue from 'single-spa-vue' // 为vue应用生成通用的生命周期函数钩子函数

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
// 如果是父应用引用，设置子应用在下面这个地址加载静态资源，否则会去基座应用的域名下加载
if (window.singleSpaNavigate) {
  console.log(123123123)
  __webpack_public_path__ = 'http://localhost:10001/' 
} else { // 如果不是父应用引用，支持子应用独立运行、部署、不依赖于基座调用
  delete appOptions.el 
  new Vue(appOptions).$mount('#app')
}
// 子应用导出生命周期函数，供基座调用
export const bootstrap = singleCiycle.bootstrap
export const mount = singleCiycle.mount
export const unmount = singleCiycle.unmount
// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')
