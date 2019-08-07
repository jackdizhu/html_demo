// 简单实现一个 Promise
const PromiseConstructor = function (fun) {
  const resList = []
  const thenFnListFnList = []
  const rejList = []
  const catchFnList = []
  this.type = 'pending' // resolved rejected
  // then 链式调用
  this.then = function (fun) {
    thenFnListFnList.push({
      fun: fun
    })
    return this
  }
  // catch 链式调用
  this.catch = function (fun) {
    catchFnList.push({
      fun: fun
    })
    return this
  }
  // initRes initRej 开始执行队列函数
  const $this = this
  const initRes = function () {
    let fn = thenFnListFnList.shift()
    let arr = resList.shift() || {arguments: []}
    if (fn) {
      resList.push({
        arguments: fn.fun(arr.arguments)
      })
      initRes()
    }
  }
  const initRej = function () {
    let fn = catchFnList.shift()
    let arr = rejList.shift() || {arguments: []}
    if (fn) {
      rejList.push({
        arguments: fn.fun(arr.arguments)
      })
      initRej()
    }
  }
  const res = function (arr) {
    resList.push({
      arguments: arr
    })
    $this.type = 'resolved'
    initRes()
  }
  const rej = function (arr) {
    rejList.push({
      arguments: arr
    })
    $this.type = 'rejected'
    initRej()
  }
  fun(res, rej)
}

// 测试
let test = function () {
  return new PromiseConstructor((res, rej) => {
    setTimeout(() => {
      res('res 1')
      setTimeout(() => {
        rej('err 1')
      }, 1000)
    }, 500)
  })
}
let res = test()
.then(res => {
  console.log(res)
  return 'res 2'
})
.then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
  return 'err 2'
})
.catch(err => {
  console.log(err)
  return 'err 2'
})
// console.log(res)
