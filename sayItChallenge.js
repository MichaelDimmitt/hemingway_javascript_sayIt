// simplified solution for say it challenge, 
// sayIt('hello')('my')('name')('is')('Arundhati')()
// output expected: hello my name is Arundhati

// Simplified implementation of Slyvia Plath implementation.
// Improvement still to be completed: 1) remove global words variable.
words = '';
function say_it(word) {
  return  word ? (words+=` ${word}`, say_it) : words
}
// console.log( 
//   say_it('hello')('my')('name')('is')('Arundhati')() 
// )

// Simplified version of JK Rowling implmentation.
// How does this work, 😱 ; so cool. messing with function bindings and then calling the function?
function mumbleMore(p, w, m, s){
  var spells = {
    e: function (fn) {
      return fn.bind(m,w ? p.concat(w):[p])
    },
    a: function(s) {
      return p.join(' ')
    }
  }
  return spells[(w || p.split) ? 'e' : 'a'](mumbleMore)
}
console.log(
  mumbleMore('hello')('my')('name')('is')('Arundhati')()
)