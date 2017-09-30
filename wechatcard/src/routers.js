function registerComponent (component) {
  return function (resolve) {
    require(['./pages/' + component], resolve)
  }
}

const routers = [
  {
    path: '/',
    name: 'Hello',
    component: registerComponent('Hello')
  }
]

export default routers
