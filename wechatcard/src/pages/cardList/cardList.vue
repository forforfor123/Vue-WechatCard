<template>
  <div class="cardList container">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    this.query = this.$route.query

    return {
      msg: 'Card List'
    }
  },
  mounted () {
    console.log(this.$t('cardList.pageTitle'))
    document.title = this.$t('cardList.pageTitle')
  }
}
</script>

<style scoped>
</style>
