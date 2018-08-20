
// 生成随机数据
let random = (min, max) => {
  let R = Math.floor(Math.random() * (max - min)) + min
  return R
}

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

// js 判断数据类型 取数据类型
// name: String (类型首字母大写)
function getIsTypeofFun (name) {
  var toString = Object.prototype.toString
  return function(object) {
    return toString.call(object) === '[object ' + name + ']'
  }
}
function isTypeof (object, name) {
  var toString = Object.prototype.toString
  return toString.call(object) === '[object ' + name + ']'
}
function getTypeofString (object) {
  var toString = Object.prototype.toString
  return toString.call(object).replace(/^\[object ([A-Za-z]+)\]$/, '$1')
}

console.log(getTypeofString('111'));	// String
console.log(getTypeofString(111));	// Number
console.log(getTypeofString(false));	// Boolean
console.log(getTypeofString(new Date()));	// Date
console.log(getTypeofString(undefined));	// Undefined
console.log(getTypeofString(null));	// Null
console.log(getTypeofString({}));	// Object
console.log(getTypeofString([]));	// Array
console.log(getTypeofString(() => {}));	// Function
console.log(getTypeofString(new RegExp("\\w+")));	// RegExp
console.log(getTypeofString(window.document));	// HTMLDocument

console.log(isTypeof('111', 'String'));
let isString = getIsTypeofFun('String');
console.log(isString('111'));

// Promise 理解 resolve reject 回调方法 后面代码会继续执行
const req = () => {
  return new Promise((resolve, reject) => {
    resolve({res: '00'})
    console.log('-----------')
    // reject(res.data.data)
  })
}
req().then(res => {
  console.log(res)
})

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

// vue 中生成日历表数据
getDateArr (date) {
  date = date || '2017-12-01'

  // let _week = [7, 1, 2, 3, 4, 5, 6] // 星期一 开头
  let _week = [1, 2, 3, 4, 5, 6, 7] // 星期天 开头
  let _maxDate = this.$moment(date).endOf('month')
  let _minDate = this.$moment(date).startOf('month')
  let _Date = this.$moment(date).format('YYYY-MM')
  let _Date2 = this.$moment(date).add(1, 'month').format('YYYY-MM')
  let _Date3 = this.$moment(date).subtract(1, 'month').format('YYYY-MM')
  let _prenDays = this.$moment(_Date3).endOf('month').format('DD')

  this.week_1 = _week[_minDate.format('d')] - 1
  this.daymax = Number(_maxDate.format('DD'))
  // 上一月 数据
  let _arr1 = Array(this.week_1)
  for (let i = 0; i < _arr1.length; i++) {
    let _d = _prenDays - _arr1.length + i + 1
    _arr1[i] = {
      day: _d,
      date: _Date3 + '-' + _d,
      wk: _week[this.$moment(_Date3 + '-' + _d).format('d')]
    }
  }

  let _arr2 = Array(this.daymax)
  for (let i = 0; i < _arr2.length; i++) {
    let _d = (i + 1) > 9 ? (i + 1) : '0' + (i + 1)
    _arr2[i] = {
      day: _d,
      date: _Date + '-' + _d,
      wk: _week[this.$moment(_Date + '-' + _d).format('d')]
    }
  }
  this.monthArr = [..._arr1, ..._arr2]
  if ((this.monthArr.length !== 35) && (this.monthArr.length !== 42)) {
    if (this.monthArr.length < 35) {
      let _n = 35 - this.monthArr.length
      // this.monthArr.push(...Array(_n))
      for (let i = 0; i < _n; i++) {
        this.monthArr.push({
          day: '0' + (i + 1),
          date: _Date2 + '-0' + (i + 1),
          wk: _week[this.$moment(_Date2 + '-0' + (i + 1)).format('d')]
        })
      }
    } else if (this.monthArr.length < 42) {
      let _n = 42 - this.monthArr.length
      // this.monthArr.push(...Array(_n))
      for (let i = 0; i < _n; i++) {
        this.monthArr.push({
          day: '0' + (i + 1),
          date: _Date2 + '-0' + (i + 1),
          wk: _week[this.$moment(_Date2 + '-0' + (i + 1)).format('d')]
        })
      }
    }
  }

  console.log(this.monthArr, 'getDateArr ----------- childrenSchedule index.vue')
}
