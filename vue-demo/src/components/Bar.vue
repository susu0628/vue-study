<template>
  <div>
    <div :style="barStyle" class="bar_box" @click="togglePopup ? handleToggle() : null">
      <div class="bar_left">
        <span :style="labelStyle" class="bar_label" v-text="label"></span>
        <slot name="bar_desc"></slot>
      </div>
      <div class="bar_right">
        <slot name="bar_right">
          <span class="iconfont icon-arrow-right" :style="{fontSize: '0.36rem'}"></span>
        </slot>
      </div>
    </div>
    <VantPopup v-model="show" round position="bottom" :style="{ height: '40%' }">
      <!-- 下拉弹出窗的内容 -->
      <slot name="bar_popup_content"></slot>
      <div @click="handleToggle" class="popup_btn">我知道了</div>
    </VantPopup>
  </div>
</template>
<script>
import { Popup } from 'vant'
export default {
  name: 'Bar',
  data: () => {
    return {
      show: false
    }
  },
  props: {
    label: {
      type: String
    },
    togglePopup: { // 是否有下拉弹出窗
      type: Boolean
    },
    barStyle: {
      type: Object
    },
    labelStyle: {
      type: Object
    }
  },
  components: {
    VantPopup: Popup
  },
  methods: {
    handleToggle () {
      this.show = !this.show
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
    align-items: center;
    border-radius: 0.1rem;
    .bar_label, .bar_right {
      color: #999;
      margin-right: 0.12rem;
    }
  }
  .popup_btn {
    position: absolute;
    bottom: 0.12rem;
    left: 0.24rem;
    right: 0.24rem;
    text-align: center;
    background-color:#f75f47;
    padding: 0.16rem;
    font-size: 0.26rem;
    color: #fff;
    border-radius: 0.3rem;
  }
</style>
