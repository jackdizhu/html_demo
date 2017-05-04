
(function () {
    'use strict';

    var demoCss = `
/*
* 前端简历demo
*/

/* 首先给所有元素加上过渡效果 */
* {
  -webkit-transition: all .3s;
          transition: all .3s;
}
/* 白色背景太单调了，我们来点背景 */
.codeCss {
  color: #DEDEDE;
  background: #002B36;
}
/* 文字离边框太近了 */
.codeCss{
  padding: .5em;
  border: 1px solid;
  overflow: auto;
  width: 40%;
  height: 60%;
}
/* 代码高亮 */
.token.selector{ color: #859900; }
.token.property{ color: #BB8900; }
.token.punctuation{ color: #FFFF00; }
.token.function{ color: #2AA198; }
.token.comment{ color: #676767; }

.codeCss{
  position: fixed;
  left: 1em;
  top: 0;
  -webkit-transition: .5;
          transition: .5;
  -webkit-transform: rotateY(10deg) translateZ(-100px) ;
          transform: rotateY(10deg) translateZ(-100px) ;
}

`;

    module.exports = demoCss;

}());
