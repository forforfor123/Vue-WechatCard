function registerComponent (component) {
  return function (resolve) {
    require(['./pages/' + component + '/' + component], resolve)
  }
}

const routers = [
  {
    path: '/cardList',
    name: 'cardList',
    component: registerComponent('cardList')
  },
  {
    path: '/myCard',
    name: 'myCard',
    component: registerComponent('myCard')
  },
  {
    path: '/createCard',
    name: 'createCard',
    component: registerComponent('createCard')
  },
  {
    path: '/cardDetail',
    name: 'cardDetail',
    component: registerComponent('cardDetail')
  },
  {
    path: '/error',
    name: 'error',
    component: registerComponent('error')
  }
]

export default routers
