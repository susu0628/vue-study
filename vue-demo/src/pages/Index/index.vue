<template>
  <div class="container_box">
    <router-view></router-view>
    <ul class="navbar_box">
      <li v-for="(item, idx) in menuList" :key="idx" @click="() => {handleActiveLink(idx, item.path)}">
        <ColorIcon :use="activeLink === idx ? item.activeIcon : item.normalIcon" :style="{width: '0.5rem', height: '0.5rem'}" />
        <p v-text="item.menu_text"></p>
      </li>
    </ul>
  </div>
</template>
<script>
import ColorIcon from '../../components/ColorIcon'
export default {
  name: 'Index',
  data: () => {
    return {
      activeLink: 0,
      menuList: [
        {
          path: '/home',
          normalIcon: 'icon-icon-store1',
          activeIcon: 'icon-icon-store',
          menu_text: '首页'
        },
        {
          path: '/allProducts',
          normalIcon: 'icon-icon-store1',
          activeIcon: 'icon-icon-store',
          menu_text: '全部宝贝'
        },
        {
          path: '/Cart',
          normalIcon: 'icon-icon-shoppingcart',
          activeIcon: 'icon-icon-shoppingcart1',
          menu_text: '购物车'
        },
        {
          path: '/my',
          normalIcon: 'icon-icon_personal_normal',
          activeIcon: 'icon-icon_personal_select1',
          menu_text: '我的',
          extra: true
        }
      ]
    }
  },
  components: {
    ColorIcon
  },
  mounted () {
  },
  methods: {
    handleActiveLink (idx, path) {
      this.activeLink = idx
      this.$router.push({
        path: `${path}`
      })
    }
  }
}
</script>
<style lang="less" scoped>
.container_box {
  .navbar_box {
    display: flex;
    justify-content: space-around;
    font-size: 0.24rem;
    position: fixed;
    bottom: 0rem;
    left: 0rem;
    width: 100vw;
    height: 1rem;
    box-shadow: 0 -0.02rem 0.06rem 0 rgba(0, 0, 0, 0.07);
    li {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
