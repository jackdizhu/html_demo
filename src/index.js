
(function () {
    'use strict';

    require('./css/demoCss.css');

    var Prism = require('./js/prism.js');
    var css = require('./js/demoCss.js');

    var Htcss = '';
    // 移动dom
    var styleDom = document.querySelector('#style');
    document.querySelector('head').appendChild(styleDom);
    var T = setInterval(function () {
      if(css[Htcss.length]){
        Htcss += css[Htcss.length];

        document.querySelector('#code').innerHTML = Htcss;
        document.querySelector('#style').innerHTML = Htcss;

        Prism.highlightAll();
        document.querySelector('.codeCss').scrollTop = 9999;
      }else{
        clearInterval(T);
      }

    },100);


}());

