function registerComponent (component) {
  return function (resolve) {
    require(['./pages/' + component + '/' + component], resolve)
  }
}

module.exports = {
  '/hello': {
    name: 'hello',
    component: registerComponent('hello')
  }
}
