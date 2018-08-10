import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const getRoute = (meta, path) => {
  return {
    path: path || `/${meta}`,
    name: meta,
    component: resolve => require([`@/views/${meta}.vue`], resolve)
  }
}

export default new Router({
  // 命名:组件名大驼峰、path/name小驼峰
  mode: 'history',
  base: '',
  routes: [
    getRoute('Home', '/'),
    getRoute('News'),
    getRoute('BusinessScenario'),
    getRoute('ScientificResearch'),
    getRoute('Aboutus'),
    getRoute('ScenarioDetail'),
    { path: '*', redirect: '/' }
    //  此处作用：用户如果直接“输入某个URL，如：icity.jd.com/News”，后台没配置的话将出现“404”，
    //  此时如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面,此处返回“首页”
  ]
})
