<template>
  <div class="guide_box">
    <div class="guide_icon" :style="TipStyle">
        <div class="icon_inner">
          <ColorIcon :use="TipIcon" :style="{width: '0.6rem', height: '0.6rem'}" />
          <p>{{TipText}}</p>
        </div>
      </div>
      <div class="guide_text" :style="GuideStyle">
        <p class="text_style">{{GuideText}}</p>
        <ColorIcon use="icon-icon_shurushanchu" :style="{marginTop: '0.3rem', position: 'absolute', left: '1.6rem', width: '0.52rem', height: '0.52rem'}" @click="$emit('click')" />
      </div>
  </div>
</template>
<script>
import ColorIcon from './ColorIcon'
export default {
  name: 'Guide',
  data: () => {
    return {}
  },
  props: {
    TipText: {
      type: String,
      required: true
    },
    TipIcon: {
      type: String,
      required: true
    },
    TipStyle: {
      type: Object
    },
    GuideText: {
      type: String,
      required: true
    },
    GuideStyle: {
      type: Object
    }
  },
  components: {
    ColorIcon
  }
}
</script>
<style lang="less" scoped>
  .guide_box {
    width: 100vw;
    height: 100vh;
    z-index: 20;
    position: fixed;
    top: 0rem;
    left: 0rem;
    background-color:rgba(0, 0, 0, 0.7);
    .guide_icon {
      width: 1.8rem;
      height: 1.62rem;
      position: absolute;
      top: 0.06rem;
      left: 0.06rem;
      z-index: 30;
      border: 0.02rem dashed white;
      border-radius: 0.08rem;
      .icon_inner {
        width: 1.5rem;
        height: 1.32rem;
        margin: 0.15rem;
        background-color: #ffffff;
        border-radius: 0.06rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        p {
          font-size: 0.24rem;
        }
      }
    }
    .guide_text {
      position: absolute;
      top: 2rem;
      left: 0.1rem;
      z-index: 30;
      color: #ffffff;
      .text_style {
        font-size: 0.30rem;
      }
    }
  }
</style>
