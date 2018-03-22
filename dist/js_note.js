// apply(this, array)
// call(this, arg1, arg2, arg3)
function log(){
	console.log.apply(console, arguments);
  console.log.call(console, arguments);
  
	var [...arg] = arguments;
  console.log.apply(console, arg);
  console.log.call(console, arg);
  
  var args = Array.prototype.slice.call(arguments);
  console.log.apply(console, args);
  console.log.call(console, args);
};
log(1,2,3);
// 1 2 3
// [1, 2, 3]
// 1 2 3
// [1, 2, 3]
// 1 2 3
// [1, 2, 3]

// vue filters 过滤器
// 显示星期几
filterDateWeek (str) {
  let _arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  let _dat = new Date(str).getDay()
  return _arr[_dat]
}
