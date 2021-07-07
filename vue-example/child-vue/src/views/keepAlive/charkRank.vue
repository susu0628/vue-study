<template>
  <div>
    <h3 :style="{color: currentColor}">加料排行</h3>
    <button @click="currentColor = '#f00'">changeColor</button>
  </div>
</template>
<script>
export default {
  name: 'CharkRank',
  data: () => {
    return {
      currentColor: '#000'
    }
  }
}
</script>