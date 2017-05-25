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

//个人存款
import grhq from './pages/cunkuan/pros/grhq'//个人活期
import grdq from './pages/cunkuan/pros/grdq'//个人定期
import grtz from './pages/cunkuan/pros/grtz'//个人通知
import decd from './pages/cunkuan/pros/decd'//大额存单
import ync from './pages/cunkuan/pros/ync'//益农存
import dht from './pages/cunkuan/pros/dht'//定活通
//单位存款
import dwhq from './pages/cunkuan/pros/dwhq'//单位活期
import dwdq from './pages/cunkuan/pros/dwdq'//单位定期
import dwtz from './pages/cunkuan/pros/dwtz'//单位通知存款
import dwxd from './pages/cunkuan/pros/dwxd'//单位协定存款
//中间业务
import dsf from './pages/zhongjian/pros/dsf'//代收付
import gjs from './pages/zhongjian/pros/gjs'//贵金属
//理财
import grlc from './pages/licai/pros/grlc'//个人理财
import qylc from './pages/licai/pros/qylc'//企业理财


//电子银行业务
import mobilebank from './pages/dzyh/pros/mobilebank'
import wechat from './pages/dzyh/pros/wechat'
import disanfang from './pages/dzyh/pros/disanfang'
import chefenqi from './pages/dzyh/pros/chefenqi'
import suixinfen from './pages/dzyh/pros/suixinfen'

//贷款
import zfaj from './pages/daikuan/pros/zfaj'//住房按揭
import syaj from './pages/daikuan/pros/syaj'//商用房按揭
import jzd from './pages/daikuan/pros/jzd'//家装贷
import cyd from './pages/daikuan/pros/cyd'//车易贷
import jyd from './pages/daikuan/pros/jyd'//精英贷
import gjjd from './pages/daikuan/pros/gjjd'//公积金信用贷

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

  //个人存款
  { path: '/grhq', component: grhq, meta: { title: "个人活期" } },
  { path: '/grdq', component: grdq, meta: { title: "个人定期" } },
  { path: '/grtz', component: grtz, meta: { title: "个人通知" } },
  { path: '/decd', component: decd, meta: { title: "大额存单" } },
  { path: '/ync', component: ync, meta: { title: "益农存" } },
  { path: '/dht', component: dht, meta: { title: "定活通" } },
  //单位存款
  { path: '/dwhq', component: dwhq, meta: { title: "单位活期" } },
  { path: '/dwdq', component: dwdq, meta: { title: "单位定期" } },
  { path: '/dwtz', component: dwtz, meta: { title: "单位通知存款" } },
  { path: '/dwxd', component: dwxd, meta: { title: "单位协定存款" } },
  //中间业务
  { path: '/dsf', component: dsf, meta: { title: "代收付" } },
  { path: '/gjs', component: gjs, meta: { title: "贵金属" } },

  //理财业务
  { path: '/grlc', component: grlc, meta: { title: "个人理财" } },
  { path: '/qylc', component: qylc, meta: { title: "企业理财" } },


  //电子银行业务
  { path: '/mobilebank', component: mobilebank, meta: { title: "个人手机银行" } },
  { path: '/wechat', component: wechat, meta: { title: "微信绑定" } },
  { path: '/disanfang', component: disanfang, meta: { title: "第三方支付" } },
  { path: '/chefenqi', component: chefenqi, meta: { title: "车分期" } },
  { path: '/suixinfen', component: suixinfen, meta: { title: "现金随心分" } },

  //贷款
  { path: '/zfaj', component: zfaj, meta: { title: "住房按揭" } },
  { path: '/syaj', component: syaj, meta: { title: "商用房按揭" } },
  { path: '/jzd', component: jzd, meta: { title: "家装贷" } },
  { path: '/cyd', component: cyd, meta: { title: "车易贷" } },
  { path: '/jyd', component: jyd, meta: { title: "精英贷" } },
  { path: '/gjjd', component: gjjd, meta: { title: "公积金信用贷" } }
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
