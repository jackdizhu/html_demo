(function () {
    window._chome_ext = {
        baidu:{
            R: 'baidu.com',
            id:['#content_right','.fxuQda','.c-container<.c-icon-v3','.c-container<.c-icon-v2','.c-container<.c-icon-v1']
        },
        liewen:{
            R: 'liewen.cc',
            id:['#cs_right_bottom']
        },
        haxwx:{
            R: 'haxwx.com',
            id:['#cs_right_bottom']
        }
    };
    var _this = document.querySelector('#_chome_ext');
    var str = JSON.stringify(window._chome_ext);
    _this.setAttribute('data-ext',str);
})();
