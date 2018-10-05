// Simplified implementation of Slyvia Plath implementation. From the book: If Hemmingway Wrote Javascript
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
  inputs['food'] = await say_it_shortened('hello')('my')('jumbo', 'shrimp')()

  console.log(
    inputs
  )
}
run_the_stuff()
