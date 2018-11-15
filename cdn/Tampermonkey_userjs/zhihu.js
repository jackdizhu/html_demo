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

// ==UserScript==
// @name         ad none
// @namespace    jackdizhu_AD
// @version      0.1
// @description  广告屏蔽 match URL 匹配规则
// @author       jackdizhu
// @match        *://*.weibo.com/*
// @match        *://weibo.com/*
// @match        *://*.zhihu.com/*
// @match        *://zhihu.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  setInterval(() => {
      let iframes = document.querySelectorAll('iframe')
      if (iframes.length) {
          for (let i = 0; i < iframes.length; i++) {
              const element = iframes[i];
              element.style.display = 'none'
          }
      }
  }, 2000)
})();
