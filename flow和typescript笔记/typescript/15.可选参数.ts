interface User {
  name: string,
  age: number,
  six: string
}

type partial<T> = { [k in keyof T]?: T[k] }

type partialUser = partial<User>

