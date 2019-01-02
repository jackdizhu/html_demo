// IndexedDB api 及 原理
// http://www.ruanyifeng.com/blog/2018/07/indexeddb.html
// IndexedDB 基本使用
// https://www.cnblogs.com/dolphinX/p/3415761.html

var myDB={
    name: 'testDB',
    version: 1,
    db: null,
    ojstore:{
        name: 'testTable',// DB 表的名字
        keypath: 'id' // 主键
    }
};

var INDEXDB = {
    indexedDB: window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB,
    IDBKeyRange: window.IDBKeyRange || window.webkitIDBKeyRange, // 键范围
    openDB:function(dbname,dbversion,callback){
        //建立或打开数据库，建立对象 DB (ObjectStore)
        var _this = this;
        var version = dbversion || 1;
        var request = _this.indexedDB.open(dbname,version);
        request.onerror = function(e){
            console.log(e.currentTarget.error.message);
        };
        request.onsuccess = function(e){
            myDB.db = e.target.result;
            console.log('成功建立并打开数据库:'+myDB.name+' version'+dbversion);
            setTimeout(function(){
	            callback&&callback();
            },0);
        };
        request.onupgradeneeded=function(e){
            var db=e.target.result,transaction= e.target.transaction,store;
            if(!db.objectStoreNames.contains(myDB.ojstore.name)){
                //没有该对象空间时创建该对象空间
                store = db.createObjectStore(myDB.ojstore.name,{keyPath:myDB.ojstore.keypath});
                console.log('成功建立对象 DB ：'+myDB.ojstore.name);
            }
        }


    },
    deletedb:function(dbname){
        //删除数据库
        var _this = this;
        _this.indexedDB.deleteDatabase(dbname);
        console.log(dbname+'数据库已删除')
    },
    closeDB:function(db){
        //关闭数据库
        db.close();
        console.log('数据库已关闭')
    },
    addData:function(db,storename,data){
        //添加数据，重复添加会报错
        var store = store = db.transaction(storename,'readwrite').objectStore(storename),request;
        for(var i = 0 ; i < data.length;i++){
            request = store.add(data[i]);
            request.onerror = function(){
                console.error('add添加数据库中已有该数据')
            };
            request.onsuccess = function(){
                console.log('add添加数据已存入数据库')
            };
        }
        
    },
    putData:function(db,storename,data){
        //添加数据，重复添加会更新原有数据
        var store = store = db.transaction(storename,'readwrite').objectStore(storename),request;
        for(var i = 0 ; i < data.length;i++){
            request = store.put(data[i]);
            request.onerror = function(){
                console.error('put添加数据库中已有该数据')
            };
            request.onsuccess = function(){
                console.log('put添加数据已存入数据库')
            };
        }
    },
    getDataByKey:function(db,storename,key){
        //根据 DB 的键找到对应数据
        var store = db.transaction(storename,'readwrite').objectStore(storename);
        var request = store.get(key);
        request.onerror = function(){
            console.error('getDataByKey error');
        };
        request.onsuccess = function(e){
            var result = e.target.result;
            console.log('查找数据成功')
            console.log(result);
        };
    },
    deleteData:function(db,storename,key){
        //删除某一条记录
        var store = store = db.transaction(storename,'readwrite').objectStore(storename);
        store.delete(key)
        console.log('已删除 DB '+storename+'中'+key+'记录');
    },
    clearData:function(db,storename){
        //删除 DB 全部记录
        var store = db.transaction(storename,'readwrite').objectStore(storename);
        store.clear();
        console.log('已删除 DB '+storename+'全部记录');
    }
}
var students=[{ 
    id:1001, 
    name:"Byron", 
    age:24 
},{ 
    id:1002, 
    name:"Frank", 
    age:30 
},{ 
    id:1003, 
    name:"Aaron", 
    age:26 
}];

INDEXDB.openDB(myDB.name,myDB.version,function () {
    console.log('**************** 添加数据 ****************************');
    INDEXDB.addData(myDB.db,myDB.ojstore.name,students);
});
INDEXDB.openDB(myDB.name,myDB.version,function () {
    console.log('**************** 更新数据 ****************************');
    INDEXDB.putData(myDB.db,myDB.ojstore.name,students);
});
INDEXDB.openDB(myDB.name,myDB.version,function () {
    console.log('**************** 获取数据1001 ****************************');
    INDEXDB.getDataByKey(myDB.db,myDB.ojstore.name,1001);
});
INDEXDB.openDB(myDB.name,myDB.version,function () {
    console.log('**************** 删除数据1001 ****************************');
    INDEXDB.deleteData(myDB.db,myDB.ojstore.name,1001);
});
INDEXDB.openDB(myDB.name,myDB.version,function () {
    console.log('**************** 删除全部数据 ****************************');
    INDEXDB.clearData(myDB.db,myDB.ojstore.name);
    // INDEXDB.closeDB(myDB.db); // 关闭数据库
    INDEXDB.deletedb(myDB.name);
});
