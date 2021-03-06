// 中文按照拼音排序
stringObject.localeCompare(target)
var array = ['白鸽', '麻雀', '大象', '狗', '猫', "鸡"];
array = array.sort(function compareFunction(item1, item2) {
  return item1.localeCompare(item2);
});
//["白鸽", "大象", "狗", "鸡", "麻雀", "猫"]
// 数组分割
let arrGroup = (arr, groupLength) => {
  let i = 0
  let n_arr = []
  while (i < arr.length) {
    n_arr.push(arr.slice(i, i += groupLength))
  }
  return n_arr
}

let _a = ['法国', '澳大利亚', '智利', '新西兰']
let _arr = arrGroup(_a, 3)
// console.log(_arr)

// 返回数组 指定字段
let _a2 = [{name: '1', val: 'aa'}, {name: '2', val: 'bb'}]
let _a3 = _a2.map(item => {
  return {
    id: item.name
  }
})
// console.log(_a3)

// 返回 指定值 数组
let _a4 = [{name: '1', val: 'aa', state: 1}, {name: '2', val: 'bb', state: 0}, {name: '3', val: 'cc', state: 1}]
let _a5 = _a4.filter(item => {
  return item.state === 1
})
// console.log(_a5)

// 有一个 true 则 true
let _a6 = [2, 5, 8, 1, 4]
let _R = _a6.some(item => {
  return item === 1
})
// console.log(_R)

// 有一个 false 则 false
let _a7 = [2, 5, 8, 1, 4]
let _R2 = _a7.every(item => {
  return item > 1
})
// console.log(_R2)

// 返回 指定值 数组
let _a8 = [{name: '1', val: 'aa', state: 1}, {name: '2', val: 'bb', state: 0}, {name: '3', val: 'cc', state: 1}]
let _a9 = _a8.find(item => {
  return item.state === 1
})
// console.log(_a9)

// 返回 指定值 index 索引( 返回一条纪录 )
let _a10 = [{name: '1', val: 'aa', state: 1}, {name: '2', val: 'bb', state: 0}, {name: '3', val: 'cc', state: 1}]
let _a11 = _a10.findIndex(item => {
  return item.state === 1
})
// console.log(_a11)

// 数组遍历
let _a12 = [{name: '1', val: 'aa', state: 1}, {name: '2', val: 'bb', state: 0}, {name: '3', val: 'cc', state: 1}]
_a12.forEach(item => {
  item.name = '3'
})
// console.log(_a12)

// 数组 合并
let _a13 = [1, 2]
let _a14 = [3, 4]
let _a15 = [..._a13, ..._a14]
// console.log(_a15)

// 数组去重
arr = [...new Set(arr)]
