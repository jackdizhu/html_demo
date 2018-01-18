作者：Falost
来自：falost的小窝
链接：https://www.fedte.cc/p/633.html

(function(window,document,undefined){
        var hearts = [];
        var source = ["abstract","arguments","boolean","break","byte","case","catch","char","class","const","continue","debugger","default","delete","dodouble","else","enum","eval","export","extends","false","final","finally","float","for","function","goto","if","implements","import","in","instanceof","int","interface","let","long","native","new","null","package","private","protected","public","return","short","static","super","switch","synchronized","this","throw","throws","transient","true","try","typeof","var","void","volatile","while","with","yield","","Array","Date","eval","function","hasOwnProperty","Infinity","isFinite","isNaN","isPrototypeOf","length","Math","NaN","name","Number","Object","prototype","String","toString","undefined","valueOf","alert","all","anchor","anchors","area","assign","blur","button","checkbox","clearInterval","clearTimeout","clientInformation","close","closed","confirm","constructor","crypto","decodeURI","decodeURIComponent","defaultStatus","document","element","elements","embed","embeds","encodeURI","encodeURIComponent","escape","event","fileUpload","focus","form","forms","frame","innerHeight","innerWidth","layer","layers","link","location","mimeTypes","navigate","navigator","frames","frameRate","hidden","history","image","images","offscreenBuffering","open","opener","option","outerHeight","outerWidth","packages","pageXOffset","pageYOffset","parent","parseFloat","parseInt","password","plugin","prompt","propertyIsEnum","radio","reset","screenX","screenY","scroll","secure","select","self","setInterval","setTimeout","status","submit","taint","text","textarea","top","unescape","untaint","window","onblur","onclick","onerror","onfocus","onkeydown","onkeypress","onkeyup","onmouseover","onload","onmouseup","onmousedown","onsubmit", "getUserMedia", "postMessage", "RegExp", "addEventListener", "removeEventListener", "attachEvent", "detachEvent", "getBoundingClientRect", "offsetLeft", "offsetTop", "offsetWidth", "offsetHeight", "offsetParent", "createElement", "getElementById", "getElementsByTagName", "querySelector", "querySelectorAll", "createDocumentFragment", "requestAnimationFrame", "localStorage", "sessionStorage", "cancelAnimationFrame", "captureEvents", "releaseEvents", "getComputedStyle", "moveTo", "moveBy", "resizeTo", "resizeBy", "getSelection", "atob", "appendChild", "insertBefore", "getTime", "getYear", "getFullYear", "getMonth", "getDate", "getDay", "getHours", "getMinutes", "getSeconds", "setTime", "setYear", "setMonth", "setDate", "setDay", "setHours", "setMinutes", "setSeconds", "innerHTML", "innerText", 'reload', "charCodeAt", "indexOf", "lastIndexOf", "replace", "charAt", "match", "split", "join", "substr", "toLowerCase", "toUpperCase", "", "parseFloat", "fromCharCode", "contentEditable", "exec", "test", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "eval", "isFinite", "isNaN", "unescape", "toString", "require", "toDateString", "toGMTString", "toLocaleDateString", "toLocaleString", "toLocaleTimeString", "toTimeString", "toUTCString", "isPrototypeOf", "propertyIsEnumerable", "valueOf", "caller", "callee", "concat", "splice", "reverse", "sort", "pop", "shift", "slice", "unshift", "push", "parse", "JSON", "arguments", "apply", "call", "Math", "abs", "acos", "asin", "atan", "atan2", "ceil", "random", "round", "floor", "cos", "tan", "sin", "exp", "log", "console", "max", "min", "sqrt", "pow", "PI", "toFixed", "toExponential"];
        window.requestAnimationFrame = (function(){
            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (callback){
                    setTimeout(callback,1000/60);
                }
        })();
        init();
        function init(){
            attachEvent();
            gameloop();
        }
        function getRandomKeyword() {
            return source[Math.floor(Math.random() * source.length)];
        }
        function gameloop(){
            for(var i=0;i<hearts.length;i++){
                if(hearts[i].alpha <=0){
                    document.body.removeChild(hearts[i].el);
                    hearts.splice(i,1);
                    continue;
                }
                hearts[i].y--;
                hearts[i].scale += 0.004;
                hearts[i].alpha -= 0.013;
                css({
                    left: hearts[i].x + 'px',
                    top: hearts[i].y + 'px',
                    opacity: hearts[i].alpha,
                    transform: "scale(" + hearts[i].scale + ") translate(-50%, 0)"
                }, hearts[i].el);
            }
            requestAnimationFrame(gameloop);
        }
        function attachEvent(){
            var old = typeof window.onclick==="function" && window.onclick;
            document.onclick=function(event){
                old && old();
                createWord(event);
            }
        }
        function createWord(event){
            var d = document.createElement("div");
            hearts.push({
                el : d,
                x : event.clientX - 5,
                y : event.clientY - 5,
                scale : 1,
                alpha : 1,
                color : randomColor()
            });
            css({
                display: 'inline-block',
                transform: 'translate(-50%, 0)',
                position: 'fixed',
                zIndex: '99999999',
                color: randomColor(),
                fontSize: '14px'
            }, d);
            d.innerHTML = getRandomKeyword();
            document.body.appendChild(d);
            d.onselectstart = function() { return false; }
        }
        function css(css, node){
            for (var index in css) {
                if (css.hasOwnProperty(index)) {
                    node.style[index] = css[index];
                }
            }
        }
        function randomColor(){
            return "rgb("+(~~(Math.random()*255))+","+(~~(Math.random()*255))+","+(~~(Math.random()*255))+")";
        }
    })(window,document);
