<template>
  <div class="page-create-card container">
    <!-- <h1>{{ msg }}</h1> -->
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
  mounted () {
    document.title = this.$t('createCard.pageTitle')
  },
  methods: {
    saveCard () {
      console.log('Do action save card.')
    }
  },
  components: {
    Btn
  }
}
</script>

<style lang="less">
.createCard {
  background-color: #DDDDDD;

  h1 {
    font-style: italic;
  }
}
</style>
