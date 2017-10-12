define(function(require, exports, module) {

    //type2
    var a = {};
    a.doSomething = function(){
        console.log("sea_test2 doSomething");
    };
    
    // 或者通过 module.exports 提供整个接口
    module.exports = a;
});