function curry2(fn) {
    function inner(len, arg) {
        if (len <= 0) {
            return fn.apply(null, arg)
        }
        return function() {
            return inner(len - arguments.length, arg.concat(Array.apply([], arguments)))
        }
    }
    return inner(fn.length, [])
}

function sum(x, y, z, w) {
    return x + y + z + w
}

const aaa = curry2(sum)('a')('b', 'c')('d')
const bbb = curry2(sum)('a')()('b', 'c')()('d')

console.log(aaa, bbb, 'aaabbb')