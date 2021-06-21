<template>
  <div>
    <h3>子组件</h3>
    <input v-model="inputColor" />
    <button @click="addColor(inputColor)">Add Color</button>
    <div v-for="(item, index) in colors" :key="index">
      {{item}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'Child',
  props: ['colors', 'addColor'],
  data: function () {
    return {
      inputColor: ''
    }
  },
}
</script>

