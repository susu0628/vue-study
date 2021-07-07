export const getShopList = {
  name: 'GetShopList',
  data: () => {
    return {
      shopList: []
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      this.shopList = Array(10).fill(1).map((item, index) => {
        return {
          id: index + 1
        }
      })
    },
    soreArray(arr) {
      return arr.map((item, index) => {
        return {
          id: index + 1,
          name: item
        }
      })
    }
  }
}