// simplified solution for say it challenge,
// sayIt('hello')('my')('name')('is')('Arundhati')()
// output expected: hello my name is Arundhati

// Simplified implementation of Slyvia Plath implementation.
// Improvement still to be completed: 1) remove global words variable.
const say_it = (...args) => {
 return args.length > 0 ? say_two('', args) : ''
}
const say_two = (words, ...args) => {
  return args.length > 0 ? ( args.map(word => words+=` ${word}`), say_two.bind(null, words) ) : words
}

const d = (x) => typeof x === 'string' ? x : x()

console.log(`
  the following commands work:
  command: d(say_it('hello')('my')('name')('is')('Arundhati')('have', 'a', 'nice', 'day')('jumbo', 'shrimp')())
  output: ${d(say_it('hello')('my')('name')('is')('Arundhati')('have', 'a', 'nice', 'day')('jumbo', 'shrimp')())},

  command: d(say_it('hello', 'test')('my')('name')('is')('Arundhati'))
  output: ${d(say_it('hello', 'test')('my')('name')('is')('Arundhati'))}

  the following commands do not work:
  command: d(say_it('hello', 'test')()('my')('name')('is')('Arundhati'))
  output: error
`)

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
// console.log(
//   mumbleMore('hello')('my')('name')('is')('Arundhati')()
// )

// ha ha, I am sure i typed it in right but I cant get it to work.
function sayIt(word){
  return s(word);
  function s(word){
    s.toString = function() { return k(word).join(' '); }
    console.log(s)
    return s
  }
  function k(word){
    t = [word];
    k = function(word) { return t.push(word);}
  }
}

// sayIt('hello')('my')('name')('is')('Arundhati')()
