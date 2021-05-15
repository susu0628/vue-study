<template>
  <div id="app">
    {{first.second}}
    <div>
      {{this.fullName}}
    </div>
    <button @click="change">改变</button>
  </div>
</template>
<script>
export default {
  name: 'App',
  data: () => {
    return {
      first: {
        second: 2
      },
      firstName: 'jiang',
      lastName: 'susu'
    }
  },
  computed: {
    fullName: {
      get: function () {
        return this.firstName + this.lastName
      },
      set: function (newValue) {
        const [firstName, lastName] = newValue.split(' ')
        this.firstName = firstName
        this.lastName = lastName
        console.log(firstName, lastName)
      }
    }
  },
  watch: {
    first(value) {
      console.log(value.second)
    }
  },
  methods: {
    change() {
      this.first = {
        ...this.first,
        second: this.first.second + 1
      }
      this.fullName = 'tan liping'
    }
  }
}
</script>
<style>

</style>
