<template>
  <div class="container">
    <div class="weui-cells cards-list">
      <router-link class="weui-cell card-cell-link" v-for="(cardItem, key, index) in cardLists" :to="{ name: 'cardDetail', params: { cardId: cardItem.id, openId: currentUser } }">
        <div class="weui-cell__hd cell-avatar"><img :src="cardItem.picture"></div>
        <div class="weui-cell__bd cell-name" v-text="cardItem.name"></div>
        <div class="weui-cell__ft cell-phone" v-text="cardItem.phone"></div>
      </router-link>
    </div>
  </div>
</template>

<script>
import API_PATH from './api'

const fetchcardLists = (vm) => {
  const query = vm.query
  const resource = vm.$resource(API_PATH.fetchcardLists)

  resource.get({ 'openId': query.openId }).then((resp) => {
    const data = resp.data
    if (data && data.length > 0) {
      vm.cardLists = data
    }
  })
}

// const initjssdk = (vm, readyCallback) => {
//   const wx = window.wx

//   if (wx && vm) {
//     fetchWechatConfig(vm, wx, readyCallback)
//   }
// }

// const fetchWechatConfig = (vm, wx, readyCallback) => {
//   const resource = vm.$resource()
//   resource.get({ 'refererUrl': window.location.href.split('#')[0] }).then((resp) => {
//     const options = resp.data
//     const jsApiList = [
//       'showOptionMenu',
//       'onMenuShareTimeline',
//       'onMenuShareAppMessage',
//       'hideOptionMenu'
//     ]

//     wx.config({
//       appId: options.appId,
//       timestamp: options.timestamp,
//       nonceStr: options.nonceStr,
//       signature: options.signature,
//       jsApiList: jsApiList
//     })

//     wx.ready(() => {
//       if (readyCallback && typeof (readyCallback) === 'function') {
//         readyCallback(vm, wx)
//       } else {
//         wx.hideOptionMenu()
//       }
//     })
//   })
// }

export default {
  data () {
    this.query = this.$route.query

    return {
      cardLists: [],
      currentUser: this.query.openId
    }
  },
  mounted () {
    // document.title = this.$t('cardLists.pageTitle')

    if (!this.query.openId) {
      this.$router.push({
        name: 'error'
      })
    } else {
      fetchcardLists(this)
    }
  },
  methods: {
    viewCardDetail (params) {
      console.log(params)
    }
  }
}
</script>

<style lang="less">
@import './../../styles/variables.less';
@import './../../styles/mixins.less';

.container {
  background-color: @white;

  .cards-list {
    margin: 0;

    .card-cell-link {
      color: initial;
    }

    .cell-avatar {
      img {
        display: block;
        .size(20px, 20px);
        margin-right: 5px;
      }
    }
  }
}
</style>
