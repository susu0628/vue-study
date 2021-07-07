<template>
  <div>
    <h3>checkbox框</h3>
    <MyCheckbox v-model="ischecked" />
    <div>ischecked: {{ischecked}}</div>
  </div>
</template>
<script>
import MyCheckbox from './myCheckbox.vue'
export default {
  name: 'SelfModel',
  data: () => {
    return {
      ischecked: true,
    }
  },
  components: {
    MyCheckbox
  }
}
</script>
