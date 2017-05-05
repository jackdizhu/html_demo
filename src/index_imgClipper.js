
(function () {
    'use strict';

    require('./css/reset.css');
    require('./css/index_imgClipper.css');

    var $ = require('./js/jquery.min.js');

    var ImgClip = require('./js/imgClip.js');

    var cut = new ImgClip({
        canvas : 'canvas01', // canvas id
        fileObj : 'imgClipperFile', // input id
        cutBtn : 'imgClipperSave', // 保存按钮id
        resultObj : 'img', // 保存图片id
        rotateR : 'rotateBtn', //旋转id
        cutScale : 1, // 1:1、3:4
        cutW : '160' // '数字'或者'winW'关键字，裁切宽度，随屏幕宽或自己设置
    });
    $('.content').on('click','#imgClipperSave',function () {
        var is = $(this).hasClass('disable');
        if (is) {return;}
        $('#imgClipperImgBox').removeClass('hide');
        $(this).addClass('disable');
    }).on('change','#imgClipperFile',function (e) {
        if (!e.target.files[0]) {return;}
        $('#imgClipperImgBox').addClass('hide');
        $('#imgClipperSave').removeClass('disable');
    });

}());

