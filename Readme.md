## Installation: 
git clone https://github.com/MichaelDimmitt/hemingway_javascript_sayIt.git;
cd hemingway_javascript_sayIt; node sayItChallenge.js;
```javascript
// simplified solution for say it challenge, 
// sayIt('hello')('my')('name')('is')('Arundhati')()
// output expected: hello my name is Arundhati

// Simplified implementation of Slyvia Plath implementation.
const say_it = (prev_length, ...args) => {
  return prev_length !== args.length ? ( say_it.bind(null, args.length, ...args ) ) : args.join(' ')
}

console.log(`
  ${say_it(0, 'hello')('my')('name')('is')('Arundhati')('have', 'a', 'nice', 'day')('jumbo', 'shrimp')()}
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
// console.log(
//   sayIt('hello')('my')('name')('is')('Arundhati')()
// )

```
