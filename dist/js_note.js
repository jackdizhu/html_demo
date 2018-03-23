// apply(this, array)
// call(this, arg1, arg2, arg3)
function log () {
	console.log.apply(console, arguments)
  console.log.call(console, arguments)

	var [...arg] = arguments
  console.log.apply(console, arg)
  console.log.call(console, arg)

  var args = Array.prototype.slice.call(arguments)
  console.log.apply(console, args)
  console.log.call(console, args)
}
log(1,2,3)
// 1 2 3
// [1, 2, 3]
// 1 2 3
// [1, 2, 3]
// 1 2 3
// [1, 2, 3]

// vue filters 过滤器
// 显示星期几
function filterDateWeek (str) {
  let _arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  let _dat = new Date(str).getDay()
  return _arr[_dat]
}

// Array ---------------------------------------------------------------------------
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

function propEq(prop, value) {
  return (obj) => {
     return obj && obj[prop] === value;
  };
}
function prop(key) {
  return (obj) => {
    return obj && obj[key];
  };
}
const data = [{id: 1}, {id: 2}, {id: 3}, {id: 4}];

// 我想得到id = 2的数据
data.find(propEq('id', 2));
// find太危险?
data.filter(propEq('id', 2));

// 我想要所有的id集合
data.map(prop('id'));
// 我想要所有的name
data.map(prop('name'));

// Object ----------------------------------------------------------------------------
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
// console.log(_o10)
