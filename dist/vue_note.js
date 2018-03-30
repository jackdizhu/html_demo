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
  filterData (data) {
    return data
  }
}
// 数据修改后执行对应方法 不能使用 => 箭头函数
watch: {
  data: function (newVal, oldVal) {
    console.log(newVal, ' --> newVal')
  }
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

vue^2.0

1.构造器(实例化)
  var vm = new Vue({　
　　　//选项
　　　|-------DOM(3)
　　　|  　　　　|-------el (提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标。)
　　　|  　　　　|-------template (一个字符串模板作为 Vue 实例的标识使用。模板将会 替换 挂载的元素。挂载元素的内容都将被忽略，除非模板的内容有分发 slot。)
　　　|  　　　　|-------render (字符串模板的代替方案，允许你发挥 JavaScript 最大的编程能力。)
　　　|-------数据(6)
　　　|  　　　　|-------data    (Vue实例的数据对象。Vue 将会递归将 data 的属性转换为 getter/setter，从而让 data 的属性能够响应数据变化)
　　　|  　　　　|-------props　(可以是数组或对象，用于接收来自父组件的数据。)
　　　|  　　　　|-------propsData (创建实例时传递 props。主要作用是方便测试。)
　　　|  　　　　|-------computed (计算属性将被混入到 Vue 实例中。所有 getter 和 setter 的 this 上下文自动地绑定为 Vue 实例)
　　　|  　　　　|-------methods (methods 将被混入到 Vue 实例中。可以直接通过 VM 实例访问这些方法，或者在指令表达式中使用。方法中的 this 自动绑定为 Vue 实例。)
　　　|  　　　　|-------watch (一个对象，键是需要观察的表达式，值是对应回调函数。)
　　　|-------生命周期钩子(10)
　　　|  　　　　|-------beforeCreate(在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。)
　　　|  　　　　|-------create(实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见)
　　　|  　　　　|-------beforeMount(在挂载开始之前被调用：相关的 render 函数首次被调用。)
　　　|  　　　　|-------mounted(el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。)
　　　|  　　　　|-------beforeUpdate(数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。)
　　　|  　　　　|-------updated(由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。)
　　　|  　　　　|-------activated(keep-alive 组件激活时调用。)
　　　|  　　　　|-------deactivated(keep-alive 组件停用时调用。)
　　　|  　　　　|-------beforeDestroy(实例销毁之前调用。在这一步，实例仍然完全可用。)
　　　|  　　　　|-------destroyed(Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。)
　　　|-------资源(3)
　　　|  　　　　|-------directives(包含 Vue 实例可用指令的哈希表。)
　　　|  　　　　|-------filters(包含 Vue 实例可用过滤器的哈希表。)
　　　|  　　　　|-------components(包含 Vue 实例可用组件的哈希表。)
　　　|-------杂项(6)
　　　|  　　　　|-------parent(指定已创建的实例之父实例，在两者之间建立父子关系。子实例可以用 this.$parent 访问父实例，子实例被推入父实例的 $children 数组中。)
　　　|  　　　　|-------mixins(mixins 选项接受一个混合对象的数组。Mixin钩子按照传入顺序依次调用,并在调用组件自身的钩子之前被调用。)
　　　|  　　　　|-------name(允许组件模板递归地调用自身。注意，组件在全局用 Vue.component() 注册时，全局 ID 自动作为组件的 name。)
　　　|  　　　　|-------extends(允许声明扩展另一个组件。这主要是为了便于扩展单文件组件。这和 mixins 类似，区别在于，组件自身的选项会比要扩展的源组件具有更高的优先级。)
　　　|  　　　　|-------delimiters(改变纯文本插入分隔符。)
　　　|  　　　　|-------functional(使组件无状态(没有 data )和无实例(没有 this 上下文)。他们用一个简单的 render 函数返回虚拟节点使他们更容易渲染。)
　})

  扩展Vue构造器：可以扩展 Vue 构造器，从而用预定义选项创建可复用的组件构造器：

　var MyComponent = Vue.extend({
　})

2.属性与方法

　　1.实例属性(10)

　　vm.$data(Vue 实例观察的数据对象。Vue 实例代理了对其 data 对象属性的访问。)
　　vm.$el(Vue 实例使用的根 DOM 元素。)
　　vm.$options(用于当前 Vue 实例的初始化选项。需要在选项中包含自定义属性时会有用处)
　　vm.$parent(父实例，如果当前实例有的话。)
　　vm.$root(当前组件树的根 Vue 实例。如果当前实例没有父实例，此实例将会是其自已。)
　　vm.$children(当前实例的直接子组件。)
　　vm.$slots(用来访问被 slot 分发的内容。每个具名 slot 有其相应的属性(例如：slot="foo" 中的内容将会在 vm.$slots.foo中被找到)。default 属性包括了所有没有被包含在具名 slot 中的节点。)
　　vm.$scopedSlots(用来访问 scoped slots.)
　　vm.$refs(一个对象，其中包含了所有拥有 ref 注册的子组件。)
　　vm.$isServer(当前 Vue 实例是否运行于服务器。)

　　2.实例方法/数据(3)

　　　　vm.$watch(观察 Vue 实例变化的一个表达式或计算属性函数。回调函数得到的参数为新值和旧值。)
　　　　vm.$set(这是全局 Vue.set 的别名。)
　　　　vm.$delete(这是全局 Vue.delete 的别名。)

　　3.实例方法/事件(4)

　　　　vm.$on(监听当前实例上的自定义事件。事件可以由vm.$emit触发。回调函数会接收所有传入事件触发函数的额外参数。)
　　　　vm.$once(监听一个自定义事件，但是只触发一次，在第一次触发之后移除监听器。)
　　　　vm.$off(移除事件监听器。)
　　　　vm.$emit(触发当前实例上的事件。附加参数都会传给监听器回调。)

　　4.实例方法/生命周期(4)

　　　　vm.$mount(如果 Vue 实例在实例化时没有收到 el 选项，则它处于“未挂载”状态，没有关联的 DOM 元素。可以使用 vm.$mount()手动地挂载一个未挂载的实例。)
　　　　vm.$forceUpdate(迫使Vue实例重新渲染。注意它仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件。)
　　　　vm.$nextTick(将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。)
　　　　vm.$destroy(完全销毁一个实例。清理它与其它实例的连接，解绑它的全部指令及事件监听器。)

3.全局API(10)

　　　　Vue.extend　------使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。
　　　　Vue.nextTick ------在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
　　　　Vue.set          ------设置对象的属性。如果对象是响应式的，确保属性被创建后也是响应式的，同时触发视图更新。这个方法主要用于避开 Vue 不能检测属性被添加的限制。
　　　　Vue.delete     ------删除对象的属性。如果对象是响应式的，确保删除能触发更新视图。这个方法主要用于避开 Vue 不能检测到属性被删除的限制，但是你应该很少会使用它。
　　　　Vue.directive  ------注册或获取全局指令。
　　　　Vue.filter        ------注册或获取全局过滤器。
　　　　Vue.component----注册或获取全局组件。注册还会自动使用给定的id设置组件的名称
　　　　Vue.use         ------安装 Vue.js 插件。
　　　　Vue.mixin　　------全局注册一个混合，影响注册之后所有创建的每个 Vue 实例。
　　　　Vue.compile  ------在render函数中编译模板字符串。只在独立构建时有效

4.全局配置 Vue.config　(6)

　　　　Vue.config.silent = true   　　　　　　　　　　   ------取消 Vue 所有的日志与警告。
　　　　Vue.config.optionMergeStrategies.methods　　  ------自定义合并策略的选项。
　　　　Vue.config.devtools= true   　　　　　　　　　　------配置是否允许vue-devtools检查代码。
　　　　Vue.config.errorHandler= functiono(err, vm){}  ------指定组件的渲染和观察期间未捕获错误的处理函数。
　　　　Vue.config.ignoredElements = ['my-custom-web-component', 'another-web-component']　　　------忽略在Vue 之外的自定义元素。
　　　　Vue.config.keyCodes   　　　　　　　　　　　　　------给v-on自定义键位别名
