(function () {'use strict';var demoCss =`/*
* 前端简历demo
*/
/* 首先给所有元素加上过渡效果 */
* {
  -webkit-transition: all .3s;
  transition: all .3s;
}
.content {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.content > div {
  position: absolute;
  left: 0;
  top: 0;
}
.content .codeCss {
  color: #DEDEDE;
  background: #002B36;
  padding: .5em;
  border: 1px solid;
  overflow: auto;
  width: 40%;
  height: 60%;
}
.content .codeCss .token.selector {
  color: #859900;
}
.content .codeCss .token.property {
  color: #BB8900;
}
.content .codeCss .token.punctuation {
  color: #FFFF00;
}
.content .codeCss .token.function {
  color: #2AA198;
}
.content .codeCss .token.comment {
  color: #676767;
}
.content .codeCss {
  position: fixed;
  left: 50%;
  top: 0;
}
.content .textArea textarea {
  display: block;
}
`;module.exports = demoCss;}());