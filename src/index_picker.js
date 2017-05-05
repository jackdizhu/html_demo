
(function () {
    'use strict';


    require('./css/index_picker.css');
    require('./js/zepto.min.js');

    var picker = require('./js/picker.js');

              // <button class="button button-link pull-right close-picker">确定</button>\
              // <h1 class="title">选择品牌</h1>\
    var params = {
        toolbarTemplate: '<header class="bar bar-nav">\
              </header>',
        cssClass: 'pickerCol01',
        cols: [
                {
                    textAlign: 'center',
                    values: [1,2,3,4,5,6,7,8],
                    displayValues: [11,12,13,14,15,16,17,18]
                }
            ],
        formatValue: function (picker, value, displayValue) {
            console.log(value);
            return displayValue;
        },
    };

    var p = $("#picker")[0];

    picker(params,p);

    $("#picker")[0].open();


}());

