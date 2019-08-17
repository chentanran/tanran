import Item from './item'

function createDiscount(itemData) {
  return new Proxy(itemData, {
    get: function(target, key, receiver) {
      if (key === 'name') {
        return 'xxx'
      }
      if (key === 'price') {
        return target[key] * 0.8
      }
      return target[key]
    }
  })
}

export default function(list, itemData) {
  return new Item(list, itemData)
}