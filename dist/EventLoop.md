# Event loop (事件循环)

* 事件循环被称作循环的原因在于，它一直在查找新的事件并且执行。一次循环的执行称之为 tick， 在这个循环里执行的代码称作 task

## 执行栈与任务队列

### 执行栈

* 当执行某个函数、用户点击一次鼠标，Ajax完成，一个图片加载完成等事件发生时，只要指定过回调函数，这些事件发生时就会进入任务队列中，等待主线程读取,遵循先进先出原则。
* 执行任务队列中的某个任务，这个被执行的任务就称为执行栈。

### 主线程

* 主线程跟执行栈是不同概念，主线程规定现在执行执行栈中的哪个事件。
* 主线程循环：即主线程会不停的从执行栈中读取事件，会执行完所有栈中的同步代码。
* 当遇到一个异步事件后，并不会一直等待异步事件返回结果，而是会将这个事件挂在与执行栈不同的队列中，我们称之为任务队列(Task Queue)。
* 当主线程将执行栈中所有的代码执行完之后，主线程将会去查看任务队列是否有任务。如果有，那么主线程会依次执行那些任务队列中的回调函数。

## js 异步执行的运行机制

* 所有任务都在主线程上执行，形成一个执行栈。
* 主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。
* 一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"。那些对应的异步任务，结束等待状态，进入执行栈并开始执行。
* 主线程不断重复上面的第三步。

### 宏任务与微任务：

* 异步任务分为 宏任务（macrotask） 与 微任务 (microtask)，不同的API注册的任务会依次进入自身对应的队列中，然后等待 Event Loop 将它们依次压入执行栈中执行。

#### 宏任务(macrotask)：

* script(整体代码)
* setTimeout
* setInterval
* UI 渲染
* I/O
* postMessage
* MessageChannel
* setImmediate(Node.js 环境)

#### 微任务(microtask)：

* Promise
* MutaionObserver
* process.nextTick(Node.js环境）

## Event Loop(事件循环)：宏任务 > 所有微任务 > 宏任务

### Event Loop(事件循环)中，每一次循环称为 tick, 每一次tick的任务如下：

* 执行栈选择最先进入队列的宏任务(通常是script整体代码)，如果有则执行
* 检查是否存在 Microtask，如果存在则不停的执行，直至清空 Microtask 队列
* 更新render(每一次事件循环，浏览器都可能会去更新渲染)
* 重复以上步骤

```js
let setName = function () {
  return new Promise((resolve, reject) => {
    console.log('-- Promise --')
    setTimeout(() => {
      reject(222)
    }, 0)
    // 暂停 4 秒
    let i = new Date().getTime()
    while (new Date().getTime() - i < 4000) {
    }
    resolve(111)
  })
}
let setValue = function () {
  console.log('-- setValue --')
  setTimeout(() => {
    console.log('setValue --> setTimeout')
  }, 0)
}

setValue()
setName()
  .then(res => {
    console.log(`Promise --> then ${res}`)
    // 暂停 2 秒
    let i = new Date().getTime()
    while (new Date().getTime() - i < 2000) {
    }
    return 333
  })
  .then(res => {
    console.log(`Promise --> then ${res}`)
    // 暂停 2 秒
    let i = new Date().getTime()
    while (new Date().getTime() - i < 2000) {
    }
    throw 444
  })
  .catch(err => {
    console.log(`Promise --> catch ${err}`)
  })

/**

-- setValue --
-- Promise --
Promise --> then 111
Promise --> then 333
Promise --> catch 444
setValue --> setTimeout

 */
```
