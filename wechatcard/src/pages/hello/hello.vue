<template>
  <div id="hello">
    <div>{{ name }}</div>
  </div>
</template>

<script>
import { setDocumentTitle } from '../../utils/request'

export default {
  data () {
    return {
      name: 'YangZheng',
    }
  },
  ready () {
    setDocumentTitle('Page Hello')
  }
}
</script>
