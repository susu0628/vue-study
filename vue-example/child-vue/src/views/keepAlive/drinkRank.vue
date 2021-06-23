<template>
  <div>
    <h3>饮品排行</h3>
    <div>{{num}}</div>
    <button @click="num += 1">addNum</button>
  </div>
</template>
<script>
export default {
  name: 'DrinkRank',
  data: () => {
    return {
      num: 0
    }
  }
}
</script>