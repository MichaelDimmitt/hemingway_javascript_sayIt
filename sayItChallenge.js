// simplified solution for say it challenge, 
// sayIt('hello')('my')('name')('is')('Arundhati')()
// output expected: hello my name is Arundhati

// Simplified implementation of Slyvia Plath implementation.
// Improvement still to be completed: 1) remove global words variable.
words = '';
function say_it(word) {
  return  word ? (words+=` ${word}`, say_it) : words
}
console.log( 
  say_it('hello')('my')('name')('is')('Arundhati')() 
)
