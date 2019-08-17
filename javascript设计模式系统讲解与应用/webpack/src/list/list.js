import $ from 'jquery'
import CreateItem from './createItem'

export default class {
  constructor (app) {
    this.app = app
    this.$el = $('<div>')
  }
  // 获取数据
  loadData () {
    // 返回 promise
    return fetch('/api/list').then(res => {
      return res.json()
    })
  }
  // 生成列表
  initItemList (data) {
    data.forEach(itemData => {
      let item = CreateItem(this, itemData)
      item.init()
    })
  }
  // 渲染
  render () {
    this.app.$el.append(this.$el)
  }
  init () {
    this.loadData().then(res => {
      this.initItemList(res)
    }).then(() => {
      this.render()
    })
  }
}