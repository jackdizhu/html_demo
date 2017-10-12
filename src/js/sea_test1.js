define(function(require, exports, module) {
    // 通过 require 引入依赖
    var test2 = require('./sea_test2.js');

    // type1
    // 通过 exports 对外提供接口
    // exports.doSomething2 = function(){
    //     console.log("do2");
    // };
    test2.doSomething();

    //type2
    var a = {};
    a.doSomething = function(){
        console.log("sea_test1 doSomething");
    };

    // 同时出现 后面覆盖前面
    // 或者通过 module.exports 提供整个接口
    module.exports = a;
});