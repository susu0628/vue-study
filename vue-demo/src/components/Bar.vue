<template>
  <div class="bar_box">
    <div class="bar_left">
      <span class="bar_label" v-text="label"></span>
      <slot name="bar_desc"></slot>
    </div>
    <div class="bar_right">
      <slot name="bar_right">
        <span class="iconfont icon-arrow-right" :style="{fontSize: '0.36rem'}"></span>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Bar',
  data: () => {
    return {}
  },
  props: {
    label: {
      type: String
    }
  }
}
</script>
<style lang="less" scoped>
  .bar_box {
    padding: 0.2rem 0.24rem;
    font-size: 0.24rem;
    display: flex;
    justify-content: space-between;
    .bar_label, .bar_right {
      color: #999;
      margin-right: 0.12rem;
    }
  }
</style>
