// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HelloFromVux'

//添加的页面
import catalog from './pages/catalog'
import ck_gr_catalog from './pages/cunkuan/ck_gr_catalog'//个人存款子目录
import ck_qy_catalog from './pages/cunkuan/ck_qy_catalog'//企业存款子目录
import lc_gr_catalog from './pages/licai/lc_gr_catalog'//个人理财子目录
import lc_qy_catalog from './pages/licai/lc_qy_catalog'//企业理财子目录
import zj_dj_catalog from './pages/zhongjian/zj_dj_catalog'//中间业务代缴类子目录
import zj_gjs_catalog from './pages/zhongjian/zj_gjs_catalog'//中间业务贵金属类子目录
import dzyh_gr_catalog from './pages/dzyh/dzyh_gr_catalog'//个人电子银行子目录
import dzyh_qy_catalog from './pages/dzyh/dzyh_qy_catalog'//企业电子银行子目录
import dk_gr_catalog from './pages/daikuan/dk_gr_catalog'//个人贷款子目录
import dk_qy_catalog from './pages/daikuan/dk_qy_catalog'//企业贷款子目录

import mobilebank from './pages/dzyh/pros/mobilebank'//个人手机银行业务
import wechat from './pages/dzyh/pros/wechat'
import disanfang from './pages/dzyh/pros/disanfang'

Vue.use(VueRouter)

const routes = [
  // { path: '/', component: Home,meta: { title: "如皋农商行产品介绍" } },
  { path: '/', component: catalog, meta: { title: "如皋农商行产品介绍" } },
  { path: '/ck_gr_catalog', component: ck_gr_catalog, meta: { title: "个人存款业务" } },
  { path: '/ck_qy_catalog', component: ck_qy_catalog, meta: { title: "企业存款业务" } },
  { path: '/lc_gr_catalog', component: lc_gr_catalog, meta: { title: "个人理财业务" } },
  { path: '/lc_qy_catalog', component: lc_qy_catalog, meta: { title: "企业理财业务" } },
  { path: '/zj_dj_catalog', component: zj_dj_catalog, meta: { title: "中间业务代缴类" } },
  { path: '/zj_gjs_catalog', component: zj_gjs_catalog, meta: { title: "中间业务贵金属" } },
  { path: '/dzyh_gr_catalog', component: dzyh_gr_catalog, meta: { title: "个人电子银行业务" } },
  { path: '/dzyh_qy_catalog', component: dzyh_qy_catalog, meta: { title: "企业电子银行业务" } },
  { path: '/dk_gr_catalog', component: dk_gr_catalog, meta: { title: "个人贷款业务" } },
  { path: '/dk_qy_catalog', component: dk_qy_catalog, meta: { title: "企业贷款业务" } },
  { path: '/mobilebank', component: mobilebank, meta: { title: "个人手机银行" } },
  { path: '/wechat', component: wechat, meta: { title: "微信绑定" } },
  { path: '/disanfang', component: disanfang, meta: { title: "第三方支付" } }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
