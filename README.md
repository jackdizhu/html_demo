# 常用方法

* log 方法

``` js
// 常用 log 方法
let log = (obj) => {
  let str = typeof obj === 'object' ? JSON.stringify(obj, null, 2) : obj
  console.log(str)
}
// 控制台批量点击
function clickAll () {
  let _arr = document.querySelectorAll('.Button.TopstoryItem-rightButton')
  for (let i = 0; i < _arr.length; i++) {
    _arr[i].click()
  }
}
clickAll()
```

* 正则
``` js
// 匹配 html 标签
/</?[a-z]+( [ 0-9a-z="-]+)?>/g
```

# vue_原理实现

* 简单通过 Object.defineProperty 定义 get set 方法数据劫持
* 通过 render 渲染数据
* 增加 render innerHTML 赋值缓存
* http.js 增加 ajax 缓存

前端笔记 vue + vuex + vue-router + axios + easy-mock

gulp + webpack 完成 less 编译 js css 打包

https://github.com/jackdizhu/html_demo

https://jackdizhu.github.io/html_demo

# 特殊符号

⎛ ◜⦿ ⏝⏝ ⦿◝⎞

😄😃😀😊😉😍😘😚😗😙😜😝😛😳😁😔😌😒😞😣😢😂😭😪😥😰😅😓😩😫😨😱😠😡😤😖😆😋😷😎😴😵😲😟😦😧😈👿😮😬😐😕😯😶😇😏😑

