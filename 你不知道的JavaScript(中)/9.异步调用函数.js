function asycnify(fn) {
  var orig_fn = fn;
  var intv = setTimeout(function() {
    init = null
    if(fn) {
    fn()
    }
  }, 0)

  fn = null;

  return function() {
    if(intv) {
      fn = orig_fn.bind.apply(orig_fn, [this].concat([].slice.call(arguments)))
    } else {
      orig_fn.apply(this, arguments)
    }
  }
}

function result(data) {
  console.log(a)
}

var a = 1;

let b = asycnify(result)
console.log(b())

a++