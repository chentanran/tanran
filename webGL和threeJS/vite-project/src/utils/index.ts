import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

const fbxLoader = new FBXLoader()
export const loadFBX = (url: string) => {
  return new Promise((resolve, reject) => {
    fbxLoader.load(url, (object: unknown) => {
      resolve(object)
    }, undefined, (error: any) => {
      reject(error)
    })
  })
}