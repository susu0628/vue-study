<template>
  <div>
    <input type="checkbox" :checked="checked" @change="handleChange" />是否是周六
  </div>
</template>
<script>
export default {
  name: 'MyCheckbox',
  props: ['checked'],
  model: {
    prop: 'checked',
    event: 'change'
  },
  methods: {
    handleChange(e) {
      console.log(e.target.checked)
      this.$emit('change', e.target.checked)
    }
  }
}
</script>

