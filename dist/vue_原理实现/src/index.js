
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
function VUE ({data, dom, tpl}) {
  this.data = data
  this.abduction(data, dom, tpl)
  // 等待 abduction 数据劫持方法执行完成
  setTimeout(() => {
    render (data, dom, tpl)
  }, 0)
}
// 原型方法
VUE.prototype.abduction = function (data, dom, tpl) {
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
        // 修改数据后 重新渲染数据
        render (data, dom, tpl)
      }
    })
    //递归处理
    this.abduction(value)
  }
}

// 数据渲染 事件绑定
function render (data, dom, tpl) {
  console.log(tpl)

  let _obj = {}
  let _arr = tpl.match(/{{[a-zA-Z_-]+}}/g)
  for (let i = 0; i < _arr.length; i++) {
    _arr[i] = _arr[i].replace(/{{|}}/g, '')
    _obj[_arr[i]] = data[_arr[i]]

    let R = new RegExp(`{{${_arr[i]}}}`, 'g')
    tpl = tpl.replace(R, _obj[_arr[i]])
  }

  dom.innerHTML = tpl
}
