export const toggle = {
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    toggleShow() {
      this.isShow = !this.isShow
    }
  }
}

