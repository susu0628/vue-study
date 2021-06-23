<template>
  <div class="rank_box">
    <div class="rank_title">
      <div 
        v-for="(item, index) in rankList" 
        :key="index" 
        :class="['item_box', item.componentName === activeComponent ? 'item_active' : '']"
        @click="activeComponent = item.componentName"
      >
        {{ item.title }}
      </div>
    </div>
    <!-- <keep-alive include="CharkRank,DrinkRank"> -->
    <keep-alive exclude="WechatRank">
      <component :is="activeComponent"></component>
    </keep-alive>
  </div>
</template>
<script>
import CharkRank from './charkRank.vue'
import DrinkRank from './drinkRank.vue'
import WechatRank from './wechatRank.vue'
export default {
  name: 'KeepAliveTest',
  data: () => {
    return {
      rankList: [{
        title: '加料排行',
        componentName: 'CharkRank'
      }, {
        title: '堂食排行',
        componentName: 'wechatRank'
      }, {
        title: '饮品排行',
        componentName: 'DrinkRank'
      }],
      activeComponent: 'CharkRank'
    }
  },
  components: {
    CharkRank,
    DrinkRank,
    WechatRank
  }
}
</script>
<style scoped>
.rank_box {
  padding: 0.24rem;
}
.rank_title {
  display: flex;
}
.item_box {
  width: 100rem;
  height: 1.5rem;
  line-height: 1.5rem;
  border: 0.01rem solid #eee;
  margin-right: 0.24rem;
}
.item_active {
  color: chocolate;
  border-color: chocolate;
}
</style>