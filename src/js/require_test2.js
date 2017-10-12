define(function() {

    //type2
    var a = {};
    a.doSomething = function(){
        console.log("require_test2 doSomething");
    };

    // 通过 return 提供整个接口
    return a;
});