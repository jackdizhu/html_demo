// 跨域没有设置 Access-Control-Allow-Origin response===undefined 没有权限读取
// 响应体格式化
function formatRes (xhr) {
  let header = {}
  let list = xhr.getAllResponseHeaders().split('\n')
  for (let i = 0; i < list.length; i++) {
    if (list[i]) {
      const arr = list[i].split(':')
      header[arr[0]] = arr[1].replace(/^\s|\s$/, '')
    }
  }
  // let contentType = xhr.getResponseHeader('Content-Type')
  let contentType = header['content-type']
  let response
  if (contentType.indexOf('application/json') !== -1) {
    response = JSON.parse(xhr.responseText)
  } else {
    response = xhr.responseText
  }
  return {
    header,
    response,
    status: xhr.status
  }
}
// 请求参数格式化
function formatQuery (query) {
  let str = ''
  for (const key in query) {
    if (Object.prototype.hasOwnProperty.call(query, key)) {
      const item = query[key]
      if (str) {
        str += `&${key}=${item}`
      } else {
        str = `${key}=${item}`
      }
    }
  }
  return encodeURI(str)
}
var Ajax={
  header: {
    'Content-Type': 'application/x-www-form-urlencoded'
    // 'Content-Type': 'application/json'
  },
  get: function (url, data, fn) {
    var xhr = new XMLHttpRequest(); 
    if (fn) {
      if (url.indexOf('?') !== -1) {
        url += `&${formatQuery(data)}`
      } else {
        url += `?${formatQuery(data)}`
      }
    }  
    fn = fn || data
    xhr.open('GET', url, true);
    for (const key in this.header) {
      if (Object.prototype.hasOwnProperty.call(this.header, key)) {
        const item = this.header[key]
        xhr.setRequestHeader(key, item) 
      }
    }
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        fn.call(this, formatRes(xhr));  
      }
    };
    xhr.send()
  },
  post: function (url, {data, params}, fn) {
    var xhr = new XMLHttpRequest();
    if (params) {
      if (url.indexOf('?') !== -1) {
        url += `&${formatQuery(params)}`
      } else {
        url += `?${formatQuery(params)}`
      }
    }  
    xhr.open("POST", url, true);
    for (const key in this.header) {
      if (Object.prototype.hasOwnProperty.call(this.header, key)) {
        const item = this.header[key]
        xhr.setRequestHeader(key, item) 
      }
    }
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        fn.call(this, formatRes(xhr))
      }
    }
    let $data = ''
    if (this.header['Content-Type'] === 'application/x-www-form-urlencoded') {
      $data = formatQuery(data)
    // } else if (this.header['Content-Type'] === 'application/json') {
    } else {
      $data = JSON.stringify(data)
    }
    xhr.send($data)
  }
}

Ajax.header['token'] = 'token--1'
Ajax.header['Content-Type'] = 'application/json'
Ajax.get('http://127.0.0.1:3000/api/token?c=1', {
  a: 'a1'
}, function (res) {
  console.log(res, 'res')
})
Ajax.get('http://127.0.0.1:3000/api/token', function (res) {
  console.log(res, 'res')
})

Ajax.post('http://127.0.0.1:3000/api/token', {
  data: {
    a: 'a1',
    b: 'b1'
  },
  params: {
    ccc: '111'
  }
}, function (res) {
  console.log(res, 'res')
})
