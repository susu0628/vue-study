<template>
  <MyInput v-model="myValue" title="测试input" />
</template>
<script>
import MyInput from './MyInput.vue'
export default {
  name: 'ChildVModel',
  data: () => {
    return {
      myValue: ''
    }
  },
  components: {
    MyInput
  },
  watch: {
    myValue(newVal) {
      console.log('newVal', newVal)
    }
  }
}
</script>