<template>
  <button :class="['btn', type, { 'disable': disabled }]" v-text="text"></button>
</template>

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
    disabled: {
      type: Boolean,
      required: false
    }
  }
}
</script>

<style scoped>
.btn {
  font-size: 16px;
  text-align: center;
  padding: 0 0 .2rem;
  border: 0;
}

.btn .solid {
  width: 100%;
  line-height: 1.32rem;
  color: #FFF;
  background-color: #F42E39;
}

.btn .hollow {
  display: inline-block;
  line-height: 0.826667rem;
  color: #F42E39;
  border: 0.04rem solid #F42E39;
  border-radius: 0.08rem;
  padding: 0 0.4rem;
}

.btn .disable {
  background-color: #BBB;
  pointer-events: none;
}
</style>
