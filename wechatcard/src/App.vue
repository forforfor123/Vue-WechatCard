<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  min-height: 100%;
}

body {
  height: 100%;
}
</style>
