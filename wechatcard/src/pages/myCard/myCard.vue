<template>
  <div class="myCard container">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    this.query = this.$route.query

    return {
      msg: 'My Card'
    }
  },
  mounted () {
    document.title = this.$t('myCard.pageTitle')
  }
}
</script>

<style lang="less">
.myCard {
  background-color: #DDDDDD;

  h1 {
    font-style: italic;
  }
}
</style>
