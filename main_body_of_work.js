// Simplified implementation of Slyvia Plath implementation. From the book: If Hemmingway Wrote Javascript
const d = (x) => typeof x === 'string' ? x : x()

const mapOverObjectTerminate = (myObject) => (
  Object.keys(myObject).map( (key, index) => d(myObject[key]) )
)

const say_it_shortened = (...args) => (
  args.length > 0 ? _say_it_shortened(0, args) : ''
)

const _say_it_shortened = (prev_length, ...args) => (
  prev_length !== args.length
    ? _say_it_shortened.bind(null, args.length, ...args)
    : args.join(' ')
)

async function run_the_stuff(){
  let inputs = {}
  inputs['anonymousTerminator'] = await say_it_shortened('hello')('my')('jumbo', 'shrimp')()
  inputs['funcNeedsTerminator'] = await say_it_shortened('hello')('my')('jumbo', 'shrimp')

  console.log(
    mapOverObjectTerminate(inputs).join('\n')
  )
}
run_the_stuff()
