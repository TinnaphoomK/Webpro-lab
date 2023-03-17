// console.log('I am the first script')

// setTimeout(() => {
//     console.log('2 seconds')
//     }, 2000)

// for (let i = 0; i <= 10; i++){
//   console.log(i)
// }

// const md = require('./my_module')
// console.log(md)
// console.log(md.NAME)
// console.log(md.add)
// console.log(md.substract)
// console.log(md.add(2,3))

const { NAME, add } = require('./my_module')
console.log(NAME)
console.log(add(5, 6))