<template>
  <div class="box">
    <div class="left"></div>
    <div class="right"></div>
  </div>
</template>
<script>
import ColorIcon from '../../components/ColorIcon'
export default {
  name: 'Home',
  components: {
    ColorIcon
  }
}
</script>
<style lang="less" scoped>
  .box {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    .left {
      width: 450px;
      height: 300px;
      background-color: aquamarine;
    }
    .right {
      width: 400px;
      height: 300px;
      background-color: bisque;
    }
  }
</style>
