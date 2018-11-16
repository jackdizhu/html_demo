// ==UserScript==
// @name         ad none
// @namespace    jackdizhu_AD
// @version      0.1
// @description  广告屏蔽
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
        let ADArr = []
        let ADArrPush = (item) => {
            let dis = item && item.style && item.style.display
            if (dis !== 'none') {
                ADArr.push(item)
            }
        }
        // weibo
        let fn_weibo = () => {
            let iframes = document.querySelectorAll('iframe')
            if (iframes.length) {
                for (let i = 0; i < iframes.length; i++) {
                    ADArrPush(iframes[i])
                }
            }
        }
        fn_weibo()
        // zhihu
        let fn_zhihu = () => {
            let el1 = document.querySelectorAll('.Popover.TopstoryItem-rightButton') || []
            for (let i = 0; i < el1.length; i++) {
                ADArrPush(el1[i])
            }

            let el2 = document.querySelectorAll('.EBookItem') || []
            for (let i = 0; i < el2.length; i++) {
                ADArrPush(el2[i].parentNode)
            }

            let el3 = document.querySelectorAll('.LiveItem') || []
            for (let i = 0; i < el3.length; i++) {
                ADArrPush(el3[i].parentNode)
            }

            let el4 = document.querySelectorAll('.TopstoryItem--advertCard') || []
            for (let i = 0; i < el4.length; i++) {
                ADArrPush(el4[i])
            }
        }
        fn_zhihu()
        if (ADArr.length) {
            for (let i = 0; i < ADArr.length; i++) {
                let element = ADArr[i]
                if (element) {
                    element.style.display = 'none'
                    ADArr[i] = null
                }
            }
        }
    }, 2000)
  })();
