
// node 命令执行文件 获取 命令参数
let a = () => {
  var arguments = process.argv.splice(2);
  return arguments
}
// console.log(a())

// Promise 封装异步 方法
const sleep = (time) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('sleep ok')
        resolve('ok')
      }, time)
  })
}
// async 定义异步方法 await 等待异步返回
const getJSON = async () => {
  await sleep(3000)
  return 'getJSON'
}
// async 定义异步方法 await 等待异步返回
const request = async () => {
  console.log(await getJSON())
  return "done"
}
let _R = request().then(R => {
  console.log(R)
})
