const MyNew = (fun, ...args) => {
  const obj = {}
  obj.__proto__ = fun.prototype
  fun.apply(obj, args)
  return obj
}


function Foo (name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function () {
    console.log(this.name, this.age)
  }
}
const f1 = new Foo('jiang', 18)
f1.sayHello() // jiang 18
console.log(f1 instanceof Foo) // true


const f2 = MyNew(Foo, 'tlp', 19)
f2.sayHello() // tlp 19
console.log(f2 instanceof Foo) // true