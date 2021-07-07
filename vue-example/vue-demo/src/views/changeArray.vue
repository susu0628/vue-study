<template>
  <div>
    {{color}}
  </div>
</template>
<script>
export default {
  name: 'ChangeArray',
  data: () => {
    return {
      color: ['red', 'green', 'blue']
    }
  }
}
</script>
<style scoped>

</style>