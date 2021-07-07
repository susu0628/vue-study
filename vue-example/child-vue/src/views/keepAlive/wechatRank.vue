<template>
  <div>
    <h3>堂食排行</h3>
    <div>{{num}}</div>
    <button @click="num += 1">addNum</button>
  </div>
</template>
<script>
export default {
  name: 'WechatRank',
  data: () => {
    return {
      num: 0
    }
  }
}
</script>