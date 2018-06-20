
function isObject (obj) {
  return obj != null && typeof(obj) === 'object'
  // return Object.prototype.toString(obj) === '[object Object]'
}

// 对外暴露 方法
function Vue (data) {
  if (!isObject(data)) {
    return
  }
  return new VUE(data)
}
// 构造函数
function VUE ({data, dom, html, fn}) {
  this.data = data
  this.abduction({data, dom, html, fn})
  // 等待 abduction 数据劫持方法执行完成
  setTimeout(() => {
    render({data, dom, html, fn})
  }, 0)
}
// render 优化
let _time = null
// 原型方法
VUE.prototype.abduction = function ({data, dom, html, fn}) {
  for (let key in data) {
    let value = data[key]
    Object.defineProperty(data, key, {
      // enumerable为true时，该属性可以枚举
      enumerable: true,
      // configurable 为 true 时，该属性可以修改 删除
      configurable: false,
      get: function () {
        console.log(`get: ${key}`)
        return value
      },
      set: function (newVal) {
        console.log(`set: ${key}`)
        if (newVal == value) {
          return
        }
        // data[key]=newVal set中又会调用set函数，就会递归调用，死循环
        // 利用闭包的特性,修改value,get取值时也会变化
        value = newVal

        // 优化处理 等待所有数据修改完成执行 render
        clearTimeout(_time)
        setTimeout(() => {
          // 修改数据后 重新渲染数据
          render({data, dom, html, fn})
        }, 0)
      }
    })
    //递归处理
    this.abduction(value)
  }
}

// 编译 dom 绑定事件
function compileElement ({data, dom, _dom, html, fn}) {
  if (_dom) {
    let childNodes = _dom.childNodes
    let _arr = []
    _arr.slice.call(childNodes).forEach(function (node) {
      let nodeAttrs = node.attributes
      if (nodeAttrs) {
        _arr.slice.call(nodeAttrs).forEach(function (nodeAttr) {
          let attrName = nodeAttr.name
          // 事件处理
          if (attrName.indexOf('on') === 0) {
            node.addEventListener(attrName.substring(2), fn[nodeAttr.value].bind(data), false)
          }
        })
      }
      if (node.childNodes && node.childNodes.length) {
        compileElement({data, dom, _dom: node, html, fn})
      }
    })
  }
}

// 数据渲染 事件绑定
function render ({data, dom, html, fn}) {
  let _renderTpl = html.renderTpl

  let _obj = {}
  let _arr = html.tpl.match(/{{[a-zA-Z_-]+}}/g)
  for (let i = 0; i < _arr.length; i++) {
    _arr[i] = _arr[i].replace(/{{|}}/g, '')
    _obj[_arr[i]] = data[_arr[i]]

    let R = new RegExp(`{{${_arr[i]}}}`, 'g')
    html.renderTpl = html.tpl.replace(R, _obj[_arr[i]])
  }
  // 缓存处理 dom 没有变化不赋值
  if (_renderTpl !== html.renderTpl) {
    dom.innerHTML = html.renderTpl

    setTimeout(() => {
      let _dom = document.createDocumentFragment()
      let $el = dom.firstElementChild
      _dom.appendChild($el)
      // 编译 dom 绑定属性事件
      // compileElement({data, dom, _dom, html, fn})

      dom.appendChild(_dom)
      console.log(html, 'dom.innerHTML')
    }, 100)
  }
}
