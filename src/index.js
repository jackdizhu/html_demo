
(function () {
    'use strict';

    require('./css/demoCss.css');

    var Prism = require('./js/prism.js');
    var css = require('./js/demoCss.js');

    var Htcss = '';
    // 移动dom
    var styleDom = document.querySelector('#style');
    document.querySelector('head').appendChild(styleDom);

    var textarea = document.createElement('textarea');
    document.getElementById('#textArea').appendChild(textarea);

    var T = setInterval(function () {
      if(css[Htcss.length]){
        Htcss += css[Htcss.length];

        document.querySelector('#code').innerHTML = Htcss;
        document.querySelector('#style').innerHTML = Htcss;

        Prism.highlightAll();
        document.querySelector('.codeCss').scrollTop = 9999;
      }else{
        clearInterval(T);
        document.querySelector('textarea').value = Htcss;
        document.querySelector('textarea').onkeyup = function () {
            var Htcss = this.value;
            document.querySelector('#code').innerHTML = Htcss;
            document.querySelector('#style').innerHTML = Htcss;

            Prism.highlightAll();
            document.querySelector('.codeCss').scrollTop = 9999;
        };
      }

    },100);


}());

