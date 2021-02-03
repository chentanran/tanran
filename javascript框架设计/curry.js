function curry(fn) {
    function inner(len, arg) {
        if (len === 0) {
            return fn.apply(null, arg)
        }
        return function(x) {
            return inner(len - 1, arg.concat(x))
        }
    }
    return inner(fn.length, [])
}

function sum(x, y, z, w) {
    return x + y + z + w
}

const currys = curry(sum)('a')('b')('c')('d')

// console.log(currys, 'currys')