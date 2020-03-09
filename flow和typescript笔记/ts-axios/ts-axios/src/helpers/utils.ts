
const toString = Object.prototype.toString

export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}

export function isNormalObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}

export function parseHeaders(header:string):any {
  const parse = Object.create(null)
  if (!header) {
    return parse
  }
  const headerArr:string[] = header.split('\r\n')
  headerArr.forEach(item => {
    let itemArr:string[] = item.split(':')
    let key = itemArr[0].trim()
    if (!key) {
      return
    }
    let val = itemArr[1].trim()
    parse[key] = val
  })
  return parse
}

export function transformData(data:any):any {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch(e) {
      // no thing
    }
  }
  return data
}

export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    (to as T & U)[key] = from[key] as any
  }
  return to as T & U
}