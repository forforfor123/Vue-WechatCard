import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueAsyncData from 'vue-async-data'
import routerConfig from './routers'
import App from './App'
import requestUtilFunc from './utils/request'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueAsyncData)

let router = new VueRouter({
  routes: routerConfig
})

router.beforeEach(function (to, from, next) {
  if (to.path) { // Need to add jssdk to rewrite wechat-share
    next()
  }
})

Vue.http.options.root = 'http://www.hywmp.cn'
Vue.http.options.xhr = { withCredentials: true }
Vue.http.interceptors.push({
  request: function (request) {
    return request
  },
  response: function (response) {
    const status = response.status
    if (status !== 200) {
      let message = requestUtilFunc.getErrorMessage(response.data.message)
      requestUtilFunc.showToast(message)
    }
    return response
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
