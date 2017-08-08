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
        bxwx9:{
            R: 'bxwx9.org',
            id:['#_cs_bf_item','#cs_kd_form']
        }
    };
    var _this = document.querySelector('#_chome_ext');
    var str = JSON.stringify(window._chome_ext);
    _this.setAttribute('data-ext',str);
    
    // 改写window.open 方法
    function edit_windowOpen() {
        var _arg = arguments;
        window.open = function () {
            console.log('window.open 1');
        }
    }
    // 改写onkeydow 方法
    function edit_keyDown() {
        document.onkeydown = function (event) {
            event.stopPropagation();
            event.preventDefault();
            var _arg = arguments;
            console.log('onkeydown 1');
        }
    }
    
    setTimeout(function () {
        edit_windowOpen();
        edit_keyDown();
    },800);
})();
