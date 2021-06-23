<template>
  <div>
    <input :value="value" @input="handleInput" />
  </div>
</template>
<script>
export default {
  name: 'MyInput',
  props: ['value'],
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

