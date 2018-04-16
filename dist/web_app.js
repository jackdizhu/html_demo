/*
 * 加载控制台 手机端 console
 */
export const loadScript = (url, callback) => {
 const script = document.createElement('script')
 script.onload = () => callback()
 script.src = url
 document.body.appendChild(script)
}

loadScript(
 'https://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/vconsole/3.0.0/vconsole.min.js',
 () => {
   new VConsole()
 }
)

/*
 * web JavaScript 与 Android Ios 交互
 */

// 调用 Android 方法
androidHandle () {
  window.WebViewJavascriptBridge.callHandler(
    'androidHandle',
    null,
    null
  )
}
// 调用 Ios 方法
iosHandle () {
  window.webkit.messageHandlers.iosHandle.postMessage({msg: 'msg'})
}
// 或
function setupWebViewJavascriptBridge (callback) {
    if (window.WebViewJavascriptBridge) {
    	return callback(WebViewJavascriptBridge)
    }
  	if (window.WVJBCallbacks) {
    	return window.WVJBCallbacks.push(callback)
    }
    window.WVJBCallbacks = [callback]
    var WVJBIframe = document.createElement('iframe')
    WVJBIframe.style.display = 'none'
    WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__'
    document.documentElement.appendChild(WVJBIframe)
    setTimeout(function () {
    	document.documentElement.removeChild(WVJBIframe)
  	}, 0)
}
setupWebViewJavascriptBridge(function (bridge) {
	// 注册返回 ios 调用
  bridge.registerHandler('jsFunction', function (data, responseCallback) {
    console.log('jsFunction', data)
    responseCallback(data)
  })
  // 调用 ios 方法
  bridge.callHandler('ObjCFunction', {'key':'value'}, function responseCallback (responseData) {
    console.log('ObjCFunction', responseData)
  })
})

// Android 调用 js 方法
const connectWebViewJavascriptBridge = function (callback) {
  if (window.WebViewJavascriptBridge) {
    callback(window.WebViewJavascriptBridge)
  } else {
    document.addEventListener(
      'WebViewJavascriptBridgeReady',
      function () {
        callback(window.WebViewJavascriptBridge)
      },
      false
    )
  }
}
connectWebViewJavascriptBridge(function (bridge) {
	// handleAndroid 是 Android 调用的方法名称
  bridge.registerHandler('handleAndroid', function (data, responseCallback) {
  	// 执行js 方法 responseCallback 返回值
    responseCallback('success')
  })
})
// Ios 调用js 方法
setTimeout(function () {
  // 利用iframe的onload事件刷新页面
  // handleIos 是 Ios 调用的方法名称
  window.handleIos = function (opt) {
    // 执行js 方法
    return opt
  }
  // 下面代码是 为了能让ios知道 上面的 js 方法.
  var iframe = document.createElement('iframe')
  iframe.style.visibility = 'hidden'
  iframe.style.width = '1px'
  iframe.style.height = '1px'
  iframe.onload = function () {
    setTimeout(function () {
      document.body.removeChild(iframe)
    }, 0)
  }
  document.body.appendChild(iframe)
}, 0)

if (ios) {
  window.webkit.messageHandlers.appFunctionName.postMessage({url: 'http://baidu.com'})
} else {
  window.WebViewJavascriptBridge.callHandler(
    'appFunctionName',
    {'url': 'http://baidu.com'},
    null
  )
}

