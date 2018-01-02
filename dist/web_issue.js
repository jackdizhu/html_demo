
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
<textarea style="display: none;" id="pre_tpl_1" to="pre_1">
  <div><div>test</div></div>
</textarea>

function show_html_code(el) {
  var _el = el
  var _to = _el.getAttribute('to')
  var tpl = _el.innerHTML
  document.getElementById(_to) && (document.getElementById(_to).innerHTML = tpl)
}
(function () {
  var _textarea = document.querySelectorAll('textarea')
  for (let i = 0; i < _textarea.length; i++) {
      var _el = _textarea[i]
      console.dir(_el)
      show_html_code(_el)
  }
}())