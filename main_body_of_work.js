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
// run_the_stuff()

function micah_nested_partial_application_solution1(){

  const say_it = (...args) =>
    _say_it( (...arr) => arr, ...args)

  const _say_it = (fn, ...args) =>
    args.length === 0 ? fn() : _say_it.bind(null, fn.bind(null, ...args))

  const has_been_said = say_it("foo", "bar")("baz")("quz", "quo")()
  console.log(has_been_said.join(" "))

}
// micah_nested_partial_application_solution1()

class try_to_make_it_better {
  constructor() {

  }
  fun(...arr){ return arr }
  
  say_it(fn, ...args) {
    return this._say_it(fn, fn, ...args)
  }

  _say_it(fn, ...args) {
   return args.length === 0 ? fn() : this._say_it.bind(this, fn.bind(this, ...args))
    // ()=>this._say_it(fn.bind(null, ...args))
    // ()=>this._say_it( ()=>this.fn(...args) )
  }

  //   // foo = () => this.foo()
  //   // foo = (function(_this) { return _this.foo(); })(this)

  //   // bar = () => baz();
  //   // bar = function() { baz(); }

  // const has_been_said = say_it("foo", "bar")("baz")("quz", "quo")()
  // console.log(has_been_said.join(" "))

}
let test = new try_to_make_it_better()
console.log('this ', test.say_it(test.fun, "foo", "bar")("baz")("quz", "quo")(), ' afterthis')

function micah_nested_partial_application_solution2(){

  const fun = (...arr) => arr

  const say_it = (fn, ...args) => {
    return _say_it(fn, fn, ...args)
  }

  const _say_it = (fn, ...args) => {
    const [first, ...rest] = args
    const junkFreeArray = ( (fn == first) ? rest : args )

    return ( args.length === 0 ) ? fn() : _say_it.bind(null, fn.bind(null, ...junkFreeArray))
  }

  const has_been_said = say_it(fun, "foo", "bar")("baz")("quz", "quo")()
  const has_been_said_again = say_it(fun)("foo", "bar")("baz")("quz", "quo")
  console.log(
    " has_been_said_first: ",has_been_said.join(" "),"\n",
    "has_been_said_again: ",has_been_said_again().join(" ")
  )
}
micah_nested_partial_application_solution2()
