<template>
  <div>
    <button @click.stop="toggleShow">显示/隐藏</button>
    <p v-if="isShow">我显示出来了</p>
  </div>
</template>
<script>
import {toggle} from './mixin/index'
export default {
  name: 'About',
  mixins: [toggle],
}
</script>

<style lang="scss" scoped>
</style>