import $ from 'jquery'
import ShoppinCart from './ShoppingCart/ShoppingCart'
import List from './list/list'

export default class {
  constructor(id) {
    this.$el = $('#' + id)
  }
  // 初始化购物车
  initShoppingCart () {
    let shoppingCart = new ShoppinCart(this)
    shoppingCart.init()
  }
  // 初始化列表
  initList () {
    let list = new List(this)
    list.init()
  }
  // 初始化
  init () {
    this.initShoppingCart()
    this.initList()
  }
}