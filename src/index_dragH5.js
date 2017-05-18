/*
 * drag 1.0
 * create by tony@jentian.com
 * date 2015-08-18
 * 拖动滑块
 */
 require('./css/drag.css');
 var jQuery = require('./js/jquery.min.js');

(function($){
    $.fn.drag = function(options){
        var x, drag = this, isMove = false, defaults = {
        };
        var options = $.extend(defaults, options);
        //添加背景，文字，滑块
        var html = '<div class="drag_bg"></div>'+
                    '<div class="drag_text" onselectstart="return false;" unselectable="on">拖动滑块验证</div>'+
                    '<div class="handler handler_bg"></div>';
        this.append(html);

        var handler = drag.find('.handler');
        var drag_bg = drag.find('.drag_bg');
        var text = drag.find('.drag_text');
        var maxWidth = drag.width() - handler.width();  //能滑动的最大间距

        var _x;
        function touchstart(e){
            isMove = true;
            x = e.touches[0].pageX - parseInt(handler.css('left').replace(/px/g,''), 10);
            console.log(e.touches[0].pageX);
            // alert(e.touches[0].pageX);
        }
        function touchmove(e){
            if(isMove){
                _x = e.touches[0].pageX - x;
                if(_x > 0){
                    if(_x > maxWidth){_x=maxWidth;}
                    handler.css({'left': _x});
                    drag_bg.css({'width': _x});
                }
            }
        }
        function touchend(e){
            if(!isMove){return false;}
            if(_x >= maxWidth){
                handler.css({'left': maxWidth});
                drag_bg.css({'width': maxWidth});
                dragOk();
            }else{
                handler.css({'left': 0});
                drag_bg.css({'width': 0});
            }
            isMove = false;
        }
        //鼠标按下时候的x轴的位置
        handler[0].addEventListener("touchstart",touchstart , false);
        document.addEventListener("touchmove",touchmove , false);
        document.addEventListener("touchend", touchend, false);

        //清空事件
        function dragOk(){
            handler.removeClass('handler_bg').addClass('handler_ok_bg');
            text.text('验证通过');
            drag.css({'color': '#fff'});
            handler[0].removeEventListener('touchstart',touchstart , false);
            document.removeEventListener('touchmove',touchmove, false);
            document.removeEventListener('touchend',touchend, false);
            if(typeof options.callback == 'function'){
                options.callback();
            }
        }
    };
})(jQuery);

jQuery('#drag').drag({
    callback: function (T) {
        console.log(T);
    }
});

