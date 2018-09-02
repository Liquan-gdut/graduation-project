import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const getRoute = (title, name, path = `/${name}`) => ({
  name,
  path,
  meta: { title },
  component: resolve => require([`@/views/${name}.vue`], resolve)
})

export const routes = [
  getRoute('首页', 'Home', '/'),
  getRoute('最新资讯', 'News'),
  getRoute('', 'NewsDetail', '/NewsDetail/:id'),
  getRoute('解决方案', 'Solution', '/Solution/:id'),
  getRoute('产品技术', 'Production'),
  getRoute('关于我们', 'Aboutus'),
  // getRoute('BusinessScenario'),
  // getRoute('ScientificResearch'),
  // getRoute('Aboutus'),
  // getRoute('ScenarioDetail'),
]

export default new Router({
  // 命名:组件名大驼峰、path/name小驼峰
  mode: 'history',
  base: process.env.baseRoute,
  routes: routes.concat([
    { path: '*', redirect: '/' }
  ]),
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
