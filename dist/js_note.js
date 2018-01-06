// vue filters 过滤器
// 显示星期几
filterDateWeek (str) {
  let _arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  let _dat = new Date(str).getDay()
  return _arr[_dat]
}
