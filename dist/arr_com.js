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
