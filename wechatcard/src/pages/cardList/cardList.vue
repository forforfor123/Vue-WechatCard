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
    document.title = this.$t('cardList.pageTitle')
  }
}
</script>

<style lang="less">
.cardList {
  background-color: #DDDDDD;

  h1 {
    font-style: italic;
  }
}
</style>
