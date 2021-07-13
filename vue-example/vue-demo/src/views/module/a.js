let moduleA = {
  count: 100,
  foo: () => {
    console.log('foo function')
  }
}

// (function (window) {
//   let count = 100
//   const foo = () => {
//     console.log('foo function')
//   }
//   window.moduleA = {
//     foo,
//     count
//   }
// })(window)


