import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueAsyncData from 'vue-async-data'
import VueTap from 'vue-tap'
import RouterConfig from './routers'
import App from './App'
import { ajaxapiDomain } from './domain'
import { showToast, getErrorMessage } from './utils/request'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueAsyncData)
Vue.use(VueTap)

Vue.http.options.root = `${ajaxapiDomain}/api`
Vue.http.options.xhr = { withCredentials: true }

let router = new VueRouter({
  hashbang: true,
  history: false,
  saveScrollPosition: false
}).map(RouterConfig)

router.beforeEach(function (transition) {
  if (transition.to.path) {
    transition.next()
  }
})

Vue.http.interceptors.push({
  request: function (request) {
    return request
  },
  response: function (response) {
    const status = response.status
    if (status !== 200) {
      const message = getErrorMessage(response.data.message)
      showToast(message)
    }
    return response
  }
})

router.start(App, '#app')
