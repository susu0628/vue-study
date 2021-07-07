<template>
  <div>
    <h3>{{title}}</h3>
    <input
      :value="myValue"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  name: 'MyInput',
  data: () => {
    return {}
  },
  props: ['myValue', 'title']
}
</script>
<style>

</style>