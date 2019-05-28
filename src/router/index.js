import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const getRoute = (title, name, path = `/${name}`) => ({
  name,
  path,
  meta: {
    title
  },
  component: resolve => require([`@/views/${name}/${name}.vue`], resolve)
})

export const routes = [
  getRoute('首页', 'Home', '/'),
  getRoute('买家中心', 'BuyerCenter'),
  getRoute('商品详情', 'GoodsDetail', '/GoodsDetail/:productId'),
  getRoute('商品搜索结果', 'GoodsSearchResult'),
  getRoute('卖家中心', 'SellerCenter'),
  getRoute('购物车', 'ShopingCart')
]

export default new Router({
  // 命名:组件名大驼峰、path/name小驼峰
  mode: 'history',
  base: process.env.baseRoute,
  routes: routes.concat([{
    path: '*',
    redirect: '/'
  }]),
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})