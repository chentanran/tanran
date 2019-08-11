// 备忘类
class Memento {
  constructor (content) {
    this.content = content
  }
  getContent () {
    return this.content
  }
}

// 备忘列表
class CareTaker {
  constructor () {
    this.list = []
  }
  add (memento) {
    this.list.push(memento)
  }
  get (index) {
    return this.list[index]
  }
}

// 编辑器
class Editor {
  constructor () {
    this.content = null
  }
  setContent (content) {
    this.content = content
  }
  getContent () {
    return this.content
  }
  saveContentToMemento () {
    return new Memento()
  }
  getContentFromMemento (memento) {
    this.content = memento.getContent()
  }
}