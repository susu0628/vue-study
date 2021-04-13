<template>
  <div id="app">
    <div ref="list" class="infinite-list-container" @scroll="scrollEvent">
      <div class="nfinite-list-phantom" :style="{height: listHeight + 'px'}" ></div>
      <div class="infinite-list" :style="{transform: getTransform}">
        <div 
          class="infinite-list-item" 
          v-for="item in visibleData" 
          :key="item.id"
          :style="{height: itemSize + 'px', lineHeight: itemSize + 'px'}"
        >
          {{item.id}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VirtualList',
  data () {
    return {
      screenHeight: 0, // 可视区域的高度固定
      itemSize: 50, // 列表每项的高度固定
      listData: Array(100).fill({}).map((item, index) => {
        return {
          ...item,
          id: index + 1
        }
      }), // 列表数据
      startOffset: 0, // 当前滚动的位置
      startIndex: 0, // 可视数据的开始下标
      endIndex: 0, // 可视数据的结束下标
    }
  },
  mounted() {
    console.log(this.$el)
    this.screenHeight = this.$el.clientHeight
    console.log(this.screenHeight)
  },
  computed: {
    listHeight() {
      return this.listData.length * this.itemSize
    },
    visibleCount () {
      return Math.ceil(this.screenHeight / this.itemSize)
    },
    visibleData() {
      return this.listData.slice(this.startIndex, this.startIndex + this.visibleCount)
    },
    //偏移量对应的style
    getTransform(){
      return `translate3d(0,${this.startOffset}px,0)`;
    },
  },
  methods: {
    scrollEvent() {
      let scrollTop = this.$refs.list.scrollTop
      this.startIndex = Math.floor(scrollTop / this.itemSize)
      this.endIndex = this.startIndex + this.visibleCount
      this.startOffset = scrollTop - (scrollTop % this.itemSize)
    }
  }
}
</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .infinite-list-container {
    position: relative;
    height: 100vh;
    overflow: auto;
  }
  .infinite-list-item {
    border-bottom: 1px solid #eee;
  }
  .infinite-list {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
  }
</style>
