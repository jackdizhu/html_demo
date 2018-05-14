
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
// async await 理解
async function fn_async1() {
  console.log('fn_async1 执行1')
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('fn_async1 执行2')
      resolve({ fn_async1: 'fn_async1' })
    }, 500)
  })
}
async function fn_async2() {
  console.log('fn_async2 执行1')
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('fn_async2 执行2')
      resolve({ fn_async2: 'fn_async2' })
    }, 500)
  })
}
// 顺序执行 await 等待上一个 await 执行返回后执行
const async1 = await fn_async1()
const async2 = await fn_async2()
// 并发执行 Promise.all 返回的是 Promise
let [async1, async2] = await Promise.all([fn_async1(), fn_async2()])
// 并发执行 await 等待结果
let async1 = fn_async1();
let async2 = fn_async2();
let _async1 = await async1;
let _async2 = await async2;

// mongodb 原生方法
// 插入数据 一条 多条
db.collection("table").insertOne({})
db.collection("table").insertMany([{}, {}])
// 查询多条数据 where 查询条件
db.collection("table").find(where)
// 更新数据 一条 多条 where 查询条件 update 更新数据
db.collection("table").updateOne(where, update)
db.collection("table").updateMany(where, update)
// 删除数据 一条 多条
db.collection("table").deleteOne(where)
db.collection("table").deleteMany(where)
// 排序
sort({ type: 1 }) // 按 type 字段升序
sort({ type: -1 }) // 按 type 字段降序
// 查询分页
limit(2) // 读取两条数据
// 跳过指定条数
skip(2) // 跳过前面两条数据
// 删除集合
db.collection("table").drop()
