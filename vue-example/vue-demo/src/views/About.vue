<template>
  <div @click="bubble">
    <button @click.stop="showOrHide">显示/隐藏</button>
    <p v-if="isShow">我显示出来了</p>
  </div>
</template>
<script>
export default {
  name: 'About',
  data: () => {
    return {
      isShow: true
    }
  },
  methods: {
    showOrHide() {
      this.isShow = !this.isShow
    },
    bubble() {
      console.log('冒泡了冒泡了。。。')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>