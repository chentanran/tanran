function isNumber(x: any): x is number {
  return typeof x === 'number'
}

function isString(x: any): x is string {
  return typeof x === 'string'
}

function padLeft(value: string, padding: number | string) {
  if (isNumber(padding)) {
    return 'number'
  } else if (isString(padding)) {
    return 'string'
  }
  throw new Error('undefind')
}