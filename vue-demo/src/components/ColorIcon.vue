<template>
  <svg class="icon" :style="_style ? _style : ''" aria-hidden="true" @click="$emit('click')">
    <use :xlink:href="`#${use}`"/>
  </svg>
</template>
<script>
export default {
  name: 'ColorIcon',
  props: {
    use: {
      type: String,
      default: '',
      required: true
    },
    _style: {
      type: Object
    }
  }
}
</script>
<style lang="less" scoped>
  .icon {
    width: 30px;
    height: 30px;
  }
</style>
