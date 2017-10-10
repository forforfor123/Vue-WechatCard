import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueTap from 'v-tap'
import VueAsyncData from 'vue-async-data'
import VueI18n from 'vue-i18n'
import App from './App'
import routerConfig from './routers'
// import requestUtilFunc from './utils/request'
import { zhMessage } from './langs/zh_cn'
import { enMessage } from './langs/en_us'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueTap)
Vue.use(VueAsyncData)
Vue.use(VueI18n)

let router = new VueRouter({
  routes: routerConfig
})

router.beforeEach(function (to, from, next) {
  if (to.path) { // Need to add jssdk to rewrite wechat-share
    next()
  }
})

let i18n = new VueI18n({
  locale: 'zh-CN',
  messages: {
    'zh-CN': zhMessage,
    'en-US': enMessage
  }
})

Vue.http.options.root = 'http://www.hywmp.cn/api'
Vue.http.options.xhr = { withCredentials: true }
Vue.http.interceptors.push({
  request: function (request) {
    return request
  },
  response: function (response) {
    const status = response.status
    if (status !== 200) {
      console.log(response)
      // let message = requestUtilFunc.getErrorMessage(response.data.message)
      // requestUtilFunc.showToast(message)
    }
    return response
  }
})

/* eslint-disable no-new */
new Vue({
  router,
  i18n,
  template: '<App/>',
  components: { App }
}).$mount('#app')
