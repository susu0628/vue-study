<template>
  <div>
    {{title}}
    <button :style="{fontSize: '0.32rem'}" @click="jump">跳转</button>
  </div>
</template>
<script>
export default {
  name: 'Index',
  data: () => {
    return {
      title: ''
    }
  },
  created () {
    console.log(22222, this.$route.params)
  },
  beforeRouteUpdate (to, from, next) {
    if (to.name === 'Index') {
      this.title = to.params.title
    }
  },
  // watch: {
  //   $route (to, from) {
  //     if (to.name === 'Index') {
  //       this.title = to.params.title
  //     }
  //   }
  // },
  mounted () {
    const { title } = this.$route.params
    this.title = title
  },
  methods: {
    jump () {
      this.$router.push({
        path: `/index/库存查询`
      })
    }
  }
}
</script>
<style lang="less" scoped>

</style>
