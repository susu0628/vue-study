<template>
  <div>
    <div class="tab_box">
      <div 
        v-for="(item, index) in tabs" 
        :key="index" 
        :class="['tab_content', currentName === item.componentName ? 'tab_active' : '']" 
        @click="currentName = item.componentName"
      >
        {{item.title}}
      </div>
    </div>
    <keep-alive>
      <component :is="currentName"></component>
    </keep-alive>
  </div>
</template>
<script>
import Daceing from './dacwing.vue'
import Singing from './sing.vue'
import Swiming from './swimming.vue'
export default {
  name: 'MenuTabs',
  data: () => {
    return {
      tabs: [
        {
          title: 'Daceing',
        },
        {
          title: 'Swiming',
        },
        {
          title: 'Singing',
        }
      ],
      currentName: 'Daceing'
    }
  },
  components: {
    Daceing,
    Singing,
    Swiming
  },
  mounted() {
    this.tabs = this.tabs.map((item) => {
      return {
        ...item,
        componentName: item.title
      }
    })
  }
}
</script>
<style>
  .tab_box {
    display: flex;
  }
  .tab_content {
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border: 1px solid #eee;
    margin-left: 20px;
    cursor: pointer;
  }
  .tab_active {
    color: #f00;
  }
</style>