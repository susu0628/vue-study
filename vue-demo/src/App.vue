<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import './assets/scss/iconfont/iconfont.css';
  * {
    outline: none;
    border: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
  html {
    height: 100%;
  }
  body {
    font-size: 0.16rem;
    padding: 0.24rem;
  }
</style>
