<template>
  <div>
    <h3>我正在游泳🏊‍....</h3>
    {{count}}
    <button @click="count += 1">count + 1</button>
  </div>
  
  
</template>
<script>
export default {
  name: 'Swiming',
  data: () => {
    return {
      count: 1
    }
  }
}
</script>