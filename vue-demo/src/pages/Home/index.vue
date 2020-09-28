<template>
  <div>
    <ul class="barBox">
      <li v-for="(bar, idx) in barList" :key="idx">
        <ColorIcon :use="bar.icon" :style="{width: '0.52rem', height: '0.52rem', marginBottom: '0.08rem'}" />
        <p>{{bar.title}}</p>
      </li>
    </ul>
    <Guide
      TipText="库存盘点"
      TipIcon="icon-Homemaintenance"
      GuideText="在这里开始门店的库存盘点哟"
      @click="() => {closeGuide(1)}"
      v-if="alreadyEnterHome && !alreadyEnterHome.deep"
    />
    <Guide
      TipText="库存查询"
      TipIcon="icon-Inquire"
      :TipStyle="{left: '1.3rem'}"
      GuideText="在这里开始门店的库存查询哟"
      @click="() => {closeGuide(2)}"
      v-if="alreadyEnterHome && alreadyEnterHome.deep === 1"
    />
    <Guide
      TipText="报货计划"
      TipIcon="icon-icon_dispatch"
      :TipStyle="{left: '4.5rem'}"
      GuideText="所属门店报货计划在这哟"
      :GuideStyle="{left: '3.7rem'}"
      @click="() => {closeGuide(3)}"
      v-if="alreadyEnterHome && alreadyEnterHome.deep === 2"
    />
  </div>
</template>
<script>
import ColorIcon from '../../components/ColorIcon'
import Guide from '../../components/Guide'
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
    ColorIcon,
    Guide
  },
  computed: {
    ...mapGetters('Home', ['alreadyEnterHome'])
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
</style>
