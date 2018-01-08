// 对象遍历 keys
let _o2 = {'0': {name: '1', val: 'aa'}, '1': {name: '2', val: 'bb'}}
Object.keys(_o2).forEach(item => {
  _o2[item].name = '3'
})
// console.log(_o2)

// 对象遍历 values
let _o3 = {'0': {name: '1', val: 'aa'}, '1': {name: '2', val: 'bb'}}
Object.values(_o3).forEach(item => {
  item.name = '3'
})
// console.log(_o3)

// 对象遍历 entries key value 二维数组
let _o4 = {'0': {name: '1', val: 'aa'}, '1': {name: '2', val: 'bb'}}
Object.entries(_o4).forEach(item => {
  item[0].name = '3'
})
// console.log(_o4)

// 对象 浅拷贝
let _o5 = {a: 1}
let _o6 = {a: 2, b: 3}
let _o7 = Object.assign({}, _o5, _o6)
// console.log(_o7)

// 对象 合并
let _o8 = {a: 1, c: 4}
let _o9 = {a: 2, b: 3}
let _o10 = {..._o8, ..._o9}
console.log(_o10)
