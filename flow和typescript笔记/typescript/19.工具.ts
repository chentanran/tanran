type Partials<T> = { [P in keyof T]?: T[P] }

interface Company {
  id: number,
  name: string
}

interface Person {
  id: number,
  name: string,
  adress: string,
  company: Company
}

type R1s = Partials<Person>

type DeepPartial<T> = {
  [U in keyof T]?: T[U] extends object ? DeepPartial<T[U]> : T[U]
}

type R2s = DeepPartial<Person>

// type Exclude<T, U> = T extends U ? never : T
type T = Exclude<1 | 2, 1 | 3>

type Foo = Omit<{name: string, age: number}, 'name'>

type O1 = {
  name: string,
  id: number
}

type O2 = {
  id: number,
  from: string
}

type R21 = Merge<O1, O2>

type Compute<A extends any> = A extends Function ? A : { [k in keyof A]: A[k] }

type R3 = Compute<{ x: 'x' } & { y: 'y' }>

type Merge<O1 extends object, O2 extends object> = Compute<O1 & Omit<O2, keyof O1>>

type props = { name: string, age: number, visible: boolean }
type DefaultProps = { age: number }
type DuplicatedProps = Intersection<props, DefaultProps>
type Intersection<T extends object, U extends object> = Pick<T, Extract<keyof T, keyof U> & Extract<keyof U, keyof T>>

type Diff<T extends object, U extends object> = Omit<T, Extract<keyof T, keyof U>>
type Overwrite<T extends object, U extends object, I = Diff<T, U> & Intersection<U, T>> = Pick<I, keyof I>

type Mutable<T> = {
  -readonly [P in keyof T]: T[P]
}