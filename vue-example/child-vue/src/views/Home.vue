<template>
  <div class="home">
    <h1>{{color}}</h1>
    <button @click="changeColor">change colorArray</button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data: () => {
    return {
      color: ['red', 'green', 'blue'],
    }
  },
  methods: {
    changeColor() {
      const newColor = this.color
      newColor[1] = 'orage'
      this.color = newColor
    },
  }
}
</script>
