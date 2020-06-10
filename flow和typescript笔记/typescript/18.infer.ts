interface User {
  name: string,
  age: number,
  form?: string
}

type foo = () => User

// ReturnType 用于获取函数的返回类型,
type R1 = ReturnType<foo>

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;

type Result = UnionToIntersection<string | number>;