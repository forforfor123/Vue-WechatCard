<template>
  <section class="button" :class="[type, {'disable' : disabled}]" v-tap="{ methods:handler }">{{ text }}</section>
</template>

<style lang="less">
.button {
  font-size: 16px;
  text-align: center;
  padding: 0 0 .2rem;
  border: 0;

  &.solid {
    width: 100%;
    line-height: 1.32rem;
    color: #FFF;
    background-color: #F42E39;
  }

  &.hollow {
    display: inline-block;
    line-height: 0.826667rem;
    color: #F42E39;
    border: 0.04rem solid #F42E39;
    border-radius: 0.08rem;
    padding: 0 0.4rem;
  }

  &.disable {
    background-color: #BBB;
    pointer-events: none;
  }
}
</style>

<script>
export default {
  replace: true,
  props: {
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    disabled: Boolean,
    clickHandler: Function
  },
  data () {
    return {
    }
  },
  methods: {
    handler () {
      const FUNC = 'function'
      if (!this.disabled && typeof this.clickHandler === FUNC) {
        this.clickHandler()
      }
    }
  }
}
</script>
