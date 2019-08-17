class Cart {
  constructor () {
    this.list = []
  }

  add (data) {
    this.list.push(data)
  }

  del (id) {
    this.list = this.list.filters(itme => {
      return itme.id !== id
    })
  }

  getList () {
    return this.list.map(item => {
      return item.name
    }).join('/n')
  }
}

const getCart = (() => {
  let cart
  if (!cart) {
   return cart = new Cart()
  } else {
    return cart
  }
})()

export default getCart