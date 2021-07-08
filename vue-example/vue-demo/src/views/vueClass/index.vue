<template>
  <div>
    <div :style="{ color: 'red', 'font-size': '20px', fontWeight: '500'}">我是内联样式</div>
    <div :style="[styleObj1, {backgroundColor: 'black'}]">我是内联样式</div>
  </div>
</template>
<script>
export default {
  name: 'VueClass',
  data: () => {
    return {
      styleObj1: {
        fontWeight: '500',
        color: 'red',
        'font-size': '30px'
      }
    }
  }
}
</script>
<style scoped>
  .header {
    font-weight: 500;
    font-size: 30px;
  }
  .active {
    color: aquamarine;
  }
</style>