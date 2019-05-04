let target = {}

let proxy = new Proxy(target, {}) // 这个代理只是做了简单的转发

proxy.name = 'proxy'

console.log(proxy)
console.log(target)

target.name = 'target'

console.log(proxy)
console.log(target)