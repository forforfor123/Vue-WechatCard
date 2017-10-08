function registerComponent (component) {
  return function (resolve) {
    require(['./pages/' + component + '/' + component], resolve)
  }
}

const routers = [
  {
    path: '/',
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
  }
]

export default routers
