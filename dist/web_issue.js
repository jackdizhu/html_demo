
// 移动web页面，input获取焦点弹出系统虚拟键盘时，挡住input
let _dom = document.getElementById('domId')
_dom.scrollIntoView(true);
_dom.scrollIntoViewIfNeeded();

// html 文件显示 html 代码
// 普通 html标签 转译
// function HTMLEncode(html) {
//     var temp = document.createElement("div");
//     (temp.textContent != null) ? (temp.textContent = html) : (temp.innerText = html);
//     var output = temp.innerHTML;
//     temp = null;
//     return output;
// }
<noscript style="display: none;" id="pre_tpl_1" to="pre_1">
  <div><div>test</div></div>
  <textarea>aaaaaaa</textarea>
  <script sype="text/javascript">console.log('aaaaaa')</script>
</noscript>

function show_html_code(el) {
  var _el = el
  var _to = _el.getAttribute('to')
  var tpl = _el.innerHTML
  document.getElementById(_to) && (document.getElementById(_to).innerHTML = tpl)
}
(function () {
  var _noscript = document.querySelectorAll('noscript')
  for (let i = 0; i < _noscript.length; i++) {
      var _el = _noscript[i]
      console.dir(_el)
      show_html_code(_el)
  }
}())

// js 判断用户来源是否是 本网站
let isThisHost = function() {
	let doc = window.document
	let loc = window.location
	let _referrer = (doc && doc.referrer) || ''
	let host = loc && (loc.protocol + '//' + loc.host)
	let is = _referrer.indexOf(host) === -1 ? false : true
	return is
}
isThisHost()

// js 获取url get 参数
let getRequestParams = function() {
  // 获取url中"?"符后的字串
  let loc = window.location
  let url = (loc && loc.search) || ''
  let theRequest = new Object()
  if (url.indexOf('?') != -1) {
    let str = url.substr(1)
    let strs = str.split('&')
    for(let i = 0; i < strs.length; i ++) {
      theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1])
    }
  }
  return theRequest
}
getRequestParams()

// window.open chome 会被拦截
export const fnWindowOpen = function (url) {
  if (url) {
    let _window = window.open()
    setTimeout(function () {
      _window.location = url
    }, 100)

    let elA = document.createElement('a')
    let id = 'fnWindowOpen' + new Date().getTime()
    elA.setAttribute('target', '_blank')
    elA.setAttribute('href', url)
    elA.setAttribute('id', id)
    document.body.appendChild(elA)
    let a = document.querySelector(`#${id}`)
    a.click()

    let form = document.createElement('form')
    form.action = url
    form.target = '_blank'
    form.method = 'POST'
    document.body.appendChild(form)
    form.submit()
  }
}
