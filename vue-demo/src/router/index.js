import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Index from '@/pages/Index'
import Home from '@/pages/Home'
import My from '@/pages/My'
import Cart from '@/pages/Cart'
import ProductClass from '@/pages/ProductClass'
import ProductDetail from '@/pages/ProductDetail'
import AllProducts from '@/pages/AllProducts'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      redirect: '/home',
      name: 'Index',
      component: Index,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home
        },
        {
          path: 'my',
          name: 'My',
          component: My
        },
        {
          path: 'cart',
          name: 'Cart',
          component: Cart
        },
        {
          path: 'allProducts',
          name: 'AllProducts',
          component: AllProducts
        }
      ]
    },
    {
      path: '/productClass/:id',
      name: 'ProductClass',
      component: ProductClass
    },
    {
      path: '/productDetail/:id',
      name: 'ProductDetail',
      component: ProductDetail
    }
  ]
})
