define(['./require_test2.js'],function(test2) {

    test2.doSomething();

    //type2
    var a = {};
    a.doSomething = function(){
        console.log("require_test1 doSomething");
    };

    // 通过 return 提供整个接口
    return a;
});