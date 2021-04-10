module.exports = {
  configureWebpack: {
    // 导出umd格式的包，在全局对象window上挂在属性singleVue
    // 基座通过这个全局对象获取一些信息 eg 子应用导出的生命周期函数
    output: {
      library: 'singleVue',  // 在所有子应用中为唯一
      libraryTarget: 'umd'
    },
    devServer: {
      port: 10000
    }
  }
}

