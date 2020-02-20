interface LengthWish {
  length: number
}

function loggingIndentity<T extends LengthWish>(arg: T): T {
  console.log(arg.length)
  return arg
}

loggingIndentity({length: 2})