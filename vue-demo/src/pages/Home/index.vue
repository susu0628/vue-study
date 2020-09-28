<template>
  <div>
    <ul class="barBox">
      <li v-for="(bar, idx) in barList" :key="idx">
        <ColorIcon :use="bar.icon" :style="{width: '0.52rem', height: '0.52rem', marginBottom: '0.08rem'}" />
        <p>{{bar.title}}</p>
      </li>
    </ul>
    <template v-if="alreadyEnterHome && !alreadyEnterHome.deep">
      <div class="guide_icon">
        <div class="icon_inner">
          <ColorIcon use="icon-Homemaintenance" :style="{width: '0.6rem', height: '0.6rem'}" />
          <p>库存盘点</p>
        </div>
      </div>
      <div class="guide_text">
        <p class="text_style">在这里开始门店的库存盘点哟</p>
        <ColorIcon use="icon-icon_shurushanchu" :style="{marginTop: '0.3rem', position: 'absolute', left: '1.6rem', width: '0.52rem', height: '0.52rem'}" @click="() => {closeGuide(1)}" />
      </div>
      <div class="guide_mask"></div>
    </template>
    <template v-if="alreadyEnterHome && alreadyEnterHome.deep === 1">
      <div class="guide_icon guide_search">
        <div class="icon_inner">
          <ColorIcon use="icon-Homemaintenance" :style="{width: '0.6rem', height: '0.6rem'}" />
          <p>库存查询</p>
        </div>
      </div>
      <div class="guide_text text_search">
        <p class="text_style">在这里开始门店的库存查询哟</p>
        <ColorIcon use="icon-icon_shurushanchu" :style="{marginTop: '0.3rem', position: 'absolute', left: '1.6rem', width: '0.52rem', height: '0.52rem'}" @click="() => {closeGuide(2)}" />
      </div>
      <div class="guide_mask"></div>
    </template>
  </div>
</template>
<script>
import ColorIcon from '../../components/ColorIcon'
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'Home',
  data: () => {
    return {
      barList: [
        {
          title: '库存盘点',
          icon: 'icon-Homemaintenance'
        },
        {
          title: '库存查询',
          icon: 'icon-Inquire'
        },
        {
          title: '巡店报告',
          icon: 'icon-EquipmentRepair'
        },
        {
          title: '报货计划',
          icon: 'icon-icon_dispatch'
        },
        {
          title: '退货申请',
          icon: 'icon-icon-Return'
        }
      ]
    }
  },
  components: {
    ColorIcon
  },
  computed: {
    ...mapGetters('Home', ['alreadyEnterHome'])
  },
  mounted () {
    console.log(234234, this.alreadyEnterHome)
  },
  methods: {
    ...mapMutations('Home', ['UPDATE_GEUIDE']),
    closeGuide (deep) {
      console.log(234234, deep)
      this.UPDATE_GEUIDE({
        ...this.alreadyEnterHome,
        deep
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .barBox {
    display: flex;
    justify-content: space-between;
    font-size: 0.24rem;
    li {
      list-style-type: none;
      text-align: center;
    }
  }
  .guide_icon {
    width: 1.8rem;
    height: 1.62rem;
    position: absolute;
    top: 0.06rem;
    left: 0.06rem;
    z-index: 30;
    border: 0.02rem dashed white;
    border-radius: 0.08rem;
    .icon_inner {
      width: 1.5rem;
      height: 1.32rem;
      margin: 0.15rem;
      background-color: #ffffff;
      border-radius: 0.06rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      p {
        font-size: 0.24rem;
      }
    }
  }
  .guide_search {
    left: 1.3rem;
  }
  .text_search {
    left: 0.3rem;
  }
  .guide_text {
    position: absolute;
    top: 2rem;
    left: 0.1rem;
    z-index: 30;
    color: #ffffff;
    .text_style {
      font-size: 0.30rem;
    }
  }
  .guide_mask {
    position: fixed;
    top: 0rem;
    left: 0rem;
    z-index: 20;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
  }
</style>
