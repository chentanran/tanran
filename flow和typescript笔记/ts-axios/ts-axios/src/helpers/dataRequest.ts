import { isNormalObject } from './utils'

export function dataRequest(data:any): any {
  if (isNormalObject(data)) {
    return JSON.stringify(data)
  }
  return data
}