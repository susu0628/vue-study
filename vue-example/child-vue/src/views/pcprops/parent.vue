<template>
  <div>
    <h3>父组件</h3>
    <div>colors的个数{{colors.length}}</div>
    <div>子组件即将添加的color为：{{($refs.childRef || {}).inputColor}}</div>
    <Child ref="childRef" :colors="colors" :addColor="addColor" />
  </div>
</template>
<script>
import Child from './child.vue'
export default {
  name: 'Parent',
  components: {
    Child
  },
  data: function () {
    return {
      colors: ['red', 'yellow', 'blue'],
      childColor: ''
    }
  },
  methods: {
    addColor(color) {
      this.colors = this.colors.concat(color)
    }
  }
}
</script>