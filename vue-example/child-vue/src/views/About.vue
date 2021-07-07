<template>
  <div class="about">
    <h1>{{color}}</h1>
    <button @click="changeColor">change colorArray</button>
    <button @click="changeColorLength">change colorArray length</button>
    <div v-for="(p, index) in preson" :key="index">{{p.name}}</div>
    <button @click="changePerson">change person</button>
  </div>
</template>
<script>
export default {
  name: 'About',
  data: () => {
    return {
      color: ['red', 'green', 'blue'],
      preson: [
        {id: 1, name: 'jiangsusu'},
        {id: 2, name: 'tanliping'},
        {id: 3, name: 'mafeifei'}
      ],
    }
  },
  methods: {
    changeColor() {
      const newColor = this.color.slice(0)
      newColor[1] = 'orage'
      this.color = newColor
    },
    changeColorLength() {
      this.color = this.color.slice(0, -1)
    },
    changePerson() {
      this.preson = this.preson.map((item) => {
        if (item.name === 'tanliping') {
          return {
            ...item,
            name: 'xiaopeiqi'
          }
        } else {
          return {
            ...item
          }
        }
      })
    }
  }
}
</script>
