// ==UserScript==
// @name         去 知乎 Advertisement EBook LiveItem
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  广告 电子书相关 包含价格相关  信息屏蔽
// @author       jackdizhu
// @match        https://www.zhihu.com/
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  let time = null;
  // 清除相关信息
  let fn_zhihu = () => {
      let el1 = document.querySelector('.Popover.TopstoryItem-rightButton');
      if (el1) {
          el1.parentNode.remove();
      }

      let el2 = document.querySelector('.EBookItem');
      if (el2) {
          el2.parentNode.parentNode.remove();
      }

      let el3 = document.querySelector('.LiveItem');
      if (el3) {
        el3.parentNode.parentNode.remove();
    }
      // console.log('fn_zhihu');
  }
  fn_zhihu()
  // 延时处理
  let time_fn = () => {
      clearTimeout(time)
      time = setTimeout(() => {
          fn_zhihu()
      }, 100);
  }
  document.addEventListener("scroll", time_fn);
})();
