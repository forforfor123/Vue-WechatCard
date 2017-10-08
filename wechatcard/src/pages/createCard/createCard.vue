<template>
  <div class="createCard container">
    <h1>{{ msg }}</h1>
    <btn type="solid" :text="$t('createCard.createCard')" :click-handler="saveCard"></btn>
  </div>
</template>

<script>
import Btn from './../../components/Btn'

export default {
  data () {
    this.query = this.$route.query

    return {
      msg: 'Create Card'
    }
  },
  methods: {
    saveCard () {
      console.log('Do action save card.')
    }
  },
  mounted () {
    document.title = this.$t('createCard.pageTitle')
  },
  components: {
    Btn
  }
}
</script>

<style scoped>
</style>
