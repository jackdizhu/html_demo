let _requestData = {}
/**
 * get 请求方法
 * @param url
 * @param params
 * @returns {Promise}
 */
function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res)
    }, err => {
      reject(err)
    }).catch(err => {
      reject(err)
    })
  })
}

/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }
    }).then(res => {
      resolve(res)
    }, err => {
      reject(err)
    }).catch(err => {
      reject(err)
    })
  })
}

/**
 * request 请求方法
 * @param obj {  url, params, type }
 * @returns {Promise}
 */
function request (obj) {
  let { url, params, type, baseURL } = obj
  baseURL !== undefined && (axios.defaults.baseURL = baseURL)
  return new Promise((resolve, reject) => {
    // ajax 缓存
    if (_requestData[url] && _requestData[url].params === JSON.stringify({url, params, type})) {
      resolve(_requestData[url].data)
      return
    }
    _requestData[url] = {
      params: JSON.stringify({url, params, type}),
      data: {}
    }
    let fn = null
    if (type === 'POST') {
      fn = post
    } else {
      fn = get
    }
    fn(url, params).then(function (res) {
      let data = res.data || {}
      // ajax 缓存
      _requestData[url].data = data
      resolve(data)
    }).catch(err => {
      let status = (err.response && err.response.status) || 0
      console.log(status, 'request catch err')
      resolve({ code: status, err: 'requestErr' })
      // reject(err) // 返回错误
    })
  })
}

/*
  this.$requestAll([
    this.$request({
      url: this.$api.mock,
      type: 'GET',
      params: {}
    }),
    this.$request({
      url: this.$api.mock,
      type: 'POST',
      params: {}
    })
  ]).then((arg) => {
    console.log(arg, '--requestAll--')
  })
 */
function requestAll (_requestArr) {
  return new Promise((resolve, reject) => {
    axios.all(_requestArr)
    .then(axios.spread(function (...params) {
      resolve(params)
    })).catch(err => {
      console.log(err, 'requestAll catch err')
      resolve({ err: 'requestErr' })
      // reject(err) // 返回错误
    })
  })
}
