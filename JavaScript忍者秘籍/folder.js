function Folder() {
  return new Proxy({}, {
    get: (target, property) => {
      console.log(property)
      if (!(property in target)) {
        target[property] = new Folder()
      }
      return target[property]
    }
  })
}

const rootFolder = new Folder()

rootFolder.ninjasDir.first = 'qwert'
console.log(rootFolder)