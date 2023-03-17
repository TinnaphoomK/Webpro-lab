console.log('I am in args.js')

console.log(process.argv)

const args  = process.argv.slice(2)

for (let arg of args) {
  console.log('Hello ' + arg)
}