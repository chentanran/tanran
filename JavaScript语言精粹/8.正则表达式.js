var parse_url = /^(?:([A-Za-z]+):)?(\/(0,3))([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/

var url = 'http://www.baidu.com:9999/test?q#farg'

var result = parse_url.exec(url)
console.log(result)
// var name = ['url', 'scheme', 'slash', 'host', 'port', 'path', 'query', 'hash']

// var blanks = '  '

// for (let i = 0; i < name.length; i++) {
//   console.log(name[i] + ':' + blanks.substring(name[i].length), result[i])
// }