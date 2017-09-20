<template>
  <div id="hello">
    <div>{{ name }}</div>
  </div>
</template>

<script>
import { setDocTitle } from '../../utils/request'

export default {
  data () {
    return {
      name: 'YangZheng',
    }
  },
  ready () {
    setDocTitle('Page Hello')
  }
}
</script>
