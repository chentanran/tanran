class Compile {
  constructor(el, vm) {
    // 检查是否是传过来的对象
    this.el = typeof el === 'string' ? document.querySelector(el) : el
    this.vm = vm
    // 处理指令
    if (this.el) {
      // 将el 的子元素编译到内存中
      let fragment = this.node2fragment(this.el)
      // 解析文本节点或指令
      let compile = this.compile(fragment)
      // 放到根节点
      this.el.appendChild(fragment)
    }
  }
  // 获取 节点
  node2fragment(node) {
    let fragment = document.createDocumentFragment()
    let nodes = node.childNodes
    this.toArray(nodes).forEach(item => {
      fragment.appendChild(item)
    })
    return fragment
  }
  // 解析
  compile(nodes) {
    // console.dir(nodes.childNodes)
    this.toArray(nodes.childNodes).forEach(node => {
      // 文本节点
      if (this.isText(node)) {
        // 解析文本
        this.compileText(node)
      }
      // 元素节点
      if (this.isElement(node)) {
        this.compileElement(node)
      }
      // 如果元素下面还有子节点, 递归循环
      if (node.childNodes && node.childNodes.length > 0) {
        this.compile(node)
      }
    })
  }
  // 解析文本
  compileText(text) {
    directivesUtil.moustache(text, this.vm)
  }
  // 解析 html
  compileElement(ele) {
    let attributes = ele.attributes
    this.toArray(attributes).forEach(attr => {
      let attrName = attr.name
      // console.dir(attr)
      if (this.isDirective(attrName)) {
        let str = attrName.slice(2)
        let attrValue = attr.value
        // v-on
        if (this.isEventDirective(str)) {
          directivesUtil['eventHandle'](ele, this.vm, attrValue, str)
        } else {
          directivesUtil[str](ele, this.vm, attrValue)
        }
      }
    })
  }
  // 转为数组
  toArray(likeArray) {
    return [].slice.call(likeArray)
  }
  // 判断是否是文本节点
  isText(node) {
    return node.nodeType === 3
  }
  // 判断是否是元素节点
  isElement(node) {
    return node.nodeType === 1
  }
  // 判断是否是 v- 开头
  isDirective(attr) {
    return attr.startsWith('v-')
  }
  // 判断是否是 on 指令
  isEventDirective(type) {
    return type.split(':')[0] === 'on'
  }
}

const directivesUtil = {
  // 小胡子语法
  moustache(ele, vm) {
    let txt = ele.textContent
    let exp = /\{\{(.+)\}\}/
    if (exp.test(txt)) {
      let pre = RegExp.$1.trim()
      ele.textContent = txt.replace(exp, this.getVMvalue(vm, pre))
      // 订阅
      new Watcher(vm, pre, (newValue, oldValue) => {
        ele.textContent = newValue
      })
    }
  },
  // text
  text(ele, vm, val) {
    // ele.textContent = vm.$data[val]
    ele.textContent = this.getVMvalue(vm, val)
    // 订阅
    new Watcher(vm, val, (newValue, oldValue) => {
      ele.textContent = newValue
    })
  },
  // html
  html(ele, vm, val) {
    ele.innerHTML = this.getVMvalue(vm, val)
    // 订阅
    new Watcher(vm, val, (newValue, oldValue) => {
      ele.innerHTML = newValue
    })
  },
  // model
  model(ele, vm, val) {
    let self = this
    ele.value = this.getVMvalue(vm, val)
    // 订阅
    new Watcher(vm, val, (newValue, oldValue) => {
      ele.value = newValue
    })
    ele.addEventListener('input', function() {
      self.setVMValue(vm, val, this.value)
    })
  },
  // on
  eventHandle(ele, vm, val, str) {
    let event = str.split(':')[1]
    let fn = vm.$methods && vm.$methods[val]
    ele.addEventListener(event, fn.bind(vm))
  },
  // 解析对象类型
  getVMvalue(vm, val) {
    let data = vm.$data
    val.split('.').forEach(key => {
      data = data[key]
    })
    return data
  },
  //
  setVMValue (vm, vals, value) {
    let data = vm.$data
    let val = vals.split('.')
    val.forEach((key, index) => {
      if (index < val.length - 1) {
        data = data[key]
      } else {
        data[key] = value
      }
    })
  }
}