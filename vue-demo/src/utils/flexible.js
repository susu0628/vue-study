;(function flexible (window, document) {
  function setRemUnit () {
    const viewport = document.querySelector('meta[name=viewport]')
    // 可以通过window.devicePixelRatio来获取当前设备的dpr（设备像素比）
    const devicePixelRatio = window.devicePixelRatio || 1
    viewport.setAttribute(
      'content',
      `width=device-width,initial-scale=${1 / devicePixelRatio}, maximum-scale=${1 /
        devicePixelRatio}, minimum-scale=${1 / devicePixelRatio}, user-scalable=no, viewport-fit=cover`
    )
    // 获取屏幕的宽度
    let deviceWidth = document.documentElement.clientWidth
    // 设置根节点的fontSize,
    // 已知ui图是按750*1344的尺寸来出图，
    // 为了简化前端的计算量，这里除于7.5 后续设置宽高的时候，只需要ui图的尺寸/100
    document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px'
  }
  setRemUnit()

  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit()
    }
  })
})(window, document)
