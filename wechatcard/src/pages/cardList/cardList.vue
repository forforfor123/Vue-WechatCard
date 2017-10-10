<template>
  <div class="cardLists container">
    <div class="cards-list weui-cells" v-for="cardItem in cardLists" track-by="$index">
      <a :href="cardItem.link">
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <img class="cell-img" :src="cardItem.picture">
          </div>
          <div class="weui-cell__bd">
            <p v-text="cardItem.name"></p>
          </div>
          <div class="weui-cell__ft" v-text="cardItem.phone"></div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import API_PATH from './api'

const formatList = (cardLists) => {
  for (const item of cardLists) {
  }
}

const fetchcardLists = (vm) => {
  const query = vm.query
  const resource = vm.$resource(API_PATH.fetchcardLists)

  resource.get({ 'openId': query.openId }).then((resp) => {
    vm.cardLists = formatList(resp.data)
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
      cardLists: []
    }
  },
  mounted () {
    document.title = this.$t('cardLists.pageTitle')

    if (!this.query.openId) {
      this.$router.push({
        name: 'error'
      })
    } else {
      fetchcardLists(this)
    }
  }
}
</script>

<style lang="less">
.cardLists {
  background-color: #DDDDDD;

  h1 {
    font-style: italic;
  }
}
</style>
