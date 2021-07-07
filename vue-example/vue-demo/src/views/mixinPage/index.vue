<template>
  <div>
    <div v-if="isShow">hello</div>
    <button @click="toggleShow">切换</button>
    <div v-for="(item, index) in shopList" :key="index">{{item.id}}</div>
    <button @click="changeArray">改变Array</button>
  </div>
</template>
<script>
import { toggle } from '../mixin/index.js'
import { getShopList } from '../mixin/getShopList'
export default {
  name: 'MixinPage',
  mixins: [toggle, getShopList],
  data: () => {
    return {
      arr: []
    }
  },
  methods: {
    changeArray() {
      this.arr = this.soreArray(Array(10).fill(12))
      console.log('arr', this.arr)
    }
  }
}
</script>