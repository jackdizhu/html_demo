 // 生成随机数 0-9
parseInt(Math.random()*10)
// promise 封装异步回调
let _Promise = new Promise((res, rej) => {})
// es6 Array.find()
[{name: 'n1', value: 'v1'}, {name: 'n2', value: 'v2'}, {name: 'n3', value: 'v3'}].find((value, index, arr) => {
return value.value === 'v3'
})
// es6 Array.findIndex()
[{name: 'n1', value: 'v1'}, {name: 'n2', value: 'v2'}, {name: 'n3', value: 'v3'}].findIndex((value, index, arr) => {
return value.value === 'v3'
})
// es6 Object.keys() 用于获取对象自身所有的可枚举的属性值
Object.keys({name: 'n1', id: 'i1', value: 'v1'})
// es6 Object.assign方法用于对象的合并 arg[1] 覆盖 arg[0]
Object.assign({a: 'a1', name: 'na'}, {name: 'n1', id: 'i1', value: 'v1'})
// ES5 IE9+ 锁定对象 不能添加新的属性,不能删除已有属性,不能修改已有属性
Object.freeze(data)
// ES5 IE9+ 对象密封 不能添加新的属性,不能删除已有属性,可以修改已有属性
Object.seal(data)
// es6 对象 数组 复制问题
let {...newObj} = obj // es6 对象 复制
let [...newArr] = arr // es6 数组 复制
// es6 Array.prototype.filter() 返回 age > 18 的数组
[{name: "张含韵", "age": "18"}, {name: "江一燕", "age": "19"}, {name: "李小璐", "age": "20"}]
.filter(item => item.age > 18)
// es6 Array.prototype.map() 返回 email 组成的 新数组
[{name: "张含韵", "email": "zhang@email.com"}, {name: "江一燕", "email": "jiang@email.com"}, {name: "李小璐", "email": "li@email.com"}]
.map(function (item) { return item.email })
// 获取node 命令 参数
// _arg = process.argv[2]

// this.$store.commit(this.$types.UPDATE_CURRENT_STUDENT_STATE, 1)
// <p style="word-wrap:break-word;width:400px">{{data}}</p>
// Mongodb
// mongod --dbpath D:\Mongodb\data

// vuex sessionStorage localstorage 本地保存 + vuex 浏览器缓存
(() => {
  let _userInfo = sessionStorage.getItem('user') || '{}'
  let obj = {}
  try {
    obj = JSON.parse(_userInfo)
  } catch (err) {
    obj = {}
  }
  return obj
})()
(() => {
  let _userInfo = localstorage.getItem('user') || '{}'
  let obj = {}
  try {
    obj = JSON.parse(_userInfo)
  } catch (err) {
    obj = {}
  }
  return obj
})()
// vue
// 路由拦截 未登录不能访问
router.beforeEach((to, from, next) => {
// 如果将要去到的路由为/login，则清空用户session
if (to.path === '/home') {
    sessionStorage.removeItem('user')
}
let _arr = ['/home', '/teachingModel', '/curriculumSystem', '/classProcess', '/aboutUs']
let _to = _arr.find((value, index, arr) => { return value === to.path })
// 获取session中的用户信息
let user = JSON.parse(sessionStorage.getItem('user'))
if (!user && !_to) {
    next({path: '/home'})
} else {
    next()
}
})
// 获取 vue url get 参数
this.$route.query ( 获取所有 )
// 强制刷新
this.$forceUpdate()
computed // 计算属性 ...mapState()
methods // click 事件等
created //组件创建 异步获取数据
// img 默认图片
item.img ? imgURI + item.img : defaultData.teacherImg
// 数据过滤
filters: {
  filterData () {
  }
}
// 数据修改后执行对应方法
watch: {
  data: 'handleDataFun'
}

// es6 深拷贝 数组包含对象 拷贝有问题
// 简单对象 深拷贝
const deepClone = (obj) => {
  var proto = Object.getPrototypeOf(obj);
  return Object.assign({}, Object.create(proto), obj);
}
// 简单数组 深拷贝
export const deepCopy = function (arr) {
  return arr.map((e) => {
    if (typeof e === 'object') {
    return Object.assign({}, e)
    } else {
    return e
    }
  })
}
// 复杂对象深拷贝
const deepClone = (initObj) => {
  var obj = {}
  for (var i in initObj) {
  // 避免相互引用对象导致死循环，如initObj.a = initObj的情况
    var prop = initObj[i]
    if(prop === obj) {
      continue
    }
    if (typeof prop === 'object') {
      obj[i] = (prop.constructor === Array) ? [] : Object.create(prop)
    } else {
      obj[i] = prop
    }
  }
  return obj
}
// 数据过滤
getDataType2 () {
  return this.dataArr.filter(item => item.type === '2')
}

// 定义全局插件 pluginsUtil.js
// Vue.js 的插件应当有一个公开方法 install 。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象：
import LoadingComponent from './Loading.vue'
export default {
  install (Vue, options) {
    // Vue.use(pluginsUtil) 引入后 自动注册组件
    Vue.component('Loading', LoadingComponent)
  }
}
// main.js里引入并使用
import pluginsUtil from './pluginsUtil'
Vue.use(pluginsUtil)

// Vue.mixin 方式 注册全局混合对象
Vue.mixin({
  data () {
    return {
      someValue1: 'some value1：mixin的data里的值'
    }
  }
})

// Vue.prototype 方式 定义 Vue 原型上的属性
Vue.prototype.someValue2 = 'someValue2：Vue.prototype上的值'
Vue.prototype.getDate = function () {
  let dateNew = new Date()
  return dateNew
}

// Vue.filter 方式 定义全局过滤器
Vue.filter('vcntFormat', function (cnt) {
  return cnt >= 100000 ? Math.floor(cnt / 10000) + '万' : cnt
})

// Vue.directive 方式 定义全局自定义指令
Vue.directive('myfocus', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
// 通过 v-focus 属性调用指令
<input v-focus>
 
// v-model="bool" 组件 v-model 应用
<v-component v-model="bool"></v-component>
// v-component
<template>
  <div>
    <div @click="click">点击</div>
  </div>
</template>
<script>
  export default {
    props: ['value'],
    watch: {
      value: (nVal, oVal) => {
        console.log(nVal, '新值')
        console.log(oVal, '旧值')
      }
    },
    methods: {
      click () {
        this.$emit('input', !this.value)
      }
    }
  }
</script>
<style scoped>
</style>

