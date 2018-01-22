
/* 封装ajax函数
 * @param {string}opt.type http连接的方式，包括POST和GET两种方式
 * @param {string}opt.url 发送请求的url
 * @param {boolean}opt.async 是否为异步请求，true为异步的，false为同步的
 * @param {object}opt.data 发送的参数，格式为对象类型
 * @param {function}opt.success ajax发送并接收成功调用的回调函数
 */
var ajax = function (opt) {
    opt = opt || {};
    opt.method = opt.method.toUpperCase() || 'POST';
    opt.url = opt.url || '';
    opt.async = opt.async || true;
    opt.data = opt.data || null;
    opt.success = opt.success || function () {};
    var xmlHttp = null;
    if (XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    }
    else {
        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
    }var params = [];
    for (var key in opt.data){
        params.push(key + '=' + opt.data[key]);
    }
    var postData = params.join('&');
    if (opt.method.toUpperCase() === 'POST') {
        xmlHttp.open(opt.method, opt.url, opt.async);
        xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        xmlHttp.send(postData);
    }
    else if (opt.method.toUpperCase() === 'GET') {
        xmlHttp.open(opt.method, opt.url + '?' + postData, opt.async);
        xmlHttp.send(null);
    } 
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            opt.success(xmlHttp.responseText);
        }
    };
}

// ajax({
//     method: 'POST',
//     url: 'test.php',
//     data: {
//         name1: 'value1',
//         name2: 'value2'
//     },
//     success: function (response) {
//        console.log(response);
//     }
// });

// ajax({
//     method: 'GET',
//     url: 'test.php',
//     data: {
//         name1: 'value1',
//         name2: 'value2'
//     },
//     success: function (response) {
//        console.log(response);
//     }
// });
// 
var old_sendMsg;
var m = {
	"to": '', // 对方qq id 不是qq号码
	"content": "[\"" + ' ' + "\",[\"font\",{\"name\":\"宋体\",\"size\":10,\"style\":[0,0,0],\"color\":\"000000\"}]]", //消息内容和样式
	"face": '',
	"clientid": '',
	"msg_id": '',
	"psessionid": ''
}
if (window.mq) {
	old_sendMsg = mq.model.chat.sendMsg; //保存原函数
	// old_sendMsg(m); //发送消息
	mq.model.chat.sendMsg = function(k) { //hook
		m = k;
		console.log(k)
		var old = eval(k.content)[0]; //原消息内容
		if (old !== 'test') {
			// var msg = old + '\\n\\n -来自 jackdizhu 机器人会话.'; //添加尾巴
			var msg = old;
			k.content = "[\"" + msg + "\",[\"font\",{\"name\":\"宋体\",\"size\":10,\"style\":[0,0,0],\"color\":\"000000\"}]]"; //新消息内容
			old_sendMsg(k); //用原函数 发送消息
		}
	}
} 
var old_res;
var sendMsg = function (msg) {
	m.content = "[\"" + msg + "\",[\"font\",{\"name\":\"宋体\",\"size\":10,\"style\":[0,0,0],\"color\":\"000000\"}]]"
	old_sendMsg(m);
}

var time_fn_msg = 'time_fn_msg';
var time_fn = function () {
	ajax({
	    method: 'GET',
	    url: '/jackdizhu.js',
	    data: {
	    },
	    success: function (res) {
	    	if (old_res !== res) {
	    		if (typeof old_sendMsg === 'function') {
	    			old_res = res;
		    		sendMsg(time_fn_msg);
	    		}
		       console.log(res);
	    	}
	    }
	});
}
setInterval(function () {
	time_fn();
}, 3000);
