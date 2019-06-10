console.time() // default: 7.015ms
let text = `双十一在淘宝买东西，618在京东买东西，当然你也可以在拼多多买东西。`.repeat(300) // 10000字
let word = [ '十一', '东西', '618', '淘宝', '淘宝买', '淘宝买东西', '京东', '京东买', '京东买东西', '拼多多', '拼多多买', '拼多多买东西']

// 生成字典树
let wordObj = {}
let firstArr = []
for (let i = 0; i < word.length; i++) {
  const str = word[i]
  let arr = str.split('')
  firstArr.push(arr[0])
  let _obj = wordObj
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    _obj.isData = true
    _obj[item] = _obj[item] || {
    }
    if (i === arr.length - 1) {
      _obj[item].replace = true
    }
    _obj = _obj[item]
  }
}
let _text = text.split('')
// 匹配字典生成 index索引 str匹配项 
let _strArr = [] // 所有匹配项
let _strIndexObj = {} // 去除重复取最大值
let len = text.length
for (let i = 0; i < len; i++) {
  let index = i
  let str = text[index]
  let _obj = wordObj[str]
  let _str = str
  while (_obj) {
    index += 1
    str = text[index]
    if (str && _obj[str]) {
      _str = _str + str
      _obj = _obj[str]
      if (_obj.replace === true) {
        _strArr.push(_str)
        if (!_obj.isData) {
          _strIndexObj[i] = _str
          _text.splice(i, _str.length, ...'*'.repeat(_str.length).split('')) // 替换文字
          i = i + _str.length
          break
        }
      }
    } else {
      break
    }
  }
}
console.timeEnd()
// console.log(_strArr);
// console.log(_strIndexObj);
// console.log(_text.join(''));
