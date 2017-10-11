<template>
  <div class="container">
    DETAIL
  </div>
</template>

<script>

export default {
  data () {
    this.query = this.$route.query

    return {
      currentUser: this.query.openId
    }
  },
  mounted () {
    document.title = this.$t('cardDetail.pageTitle')
  }
}
</script>

<style lang="less">
</style>
