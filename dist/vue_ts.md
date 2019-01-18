
## vue ts webpack@3 项目搭建

```sh
npm i vue-cli -g
vue init webpack app
npm i vue-class-component@6.3.2 vue-property-decorator@7.3.0 --save
npm i ts-loader@3.5.0 typescript@3.2.2 tslint@5.12.1 tslint-loader@3.5.4 tslint-config-standard8.0.1 --save-dev
```

## vue typescript 问题记录

* VSCode 打开项目问题 必须是项目根目录 (tsconfig.json 文件只从 当前根目录读取)

* prop 属性定义给默认值 必须跟父级属性一致 (当父级 有不确定属性时 prop 不能赋值)

* mixin 引入后 使用 mixin 属性方法 提示属性不在当前组件问题

```ts
// mixin.ts
// import Vue from 'vue'
// import Component from 'vue-class-component'
import { Vue, Component } from 'vue-property-decorator'

// You can declare a mixin as the same style as components.
@Component
export default class MyMixin extends Vue {
  mixinValue: string = 'Hello'
}
```

```ts
// import Component, { mixins } from 'vue-class-component'
import { Vue, Component, Mixins } from 'vue-property-decorator'
import MyMixin from './mixin.ts'

// Use `mixins` helper function instead of `Vue`.
// `mixins` can receive any number of arguments.
@Component
export class MyComp extends Mixins(MyMixin) {
  created () {
    console.log(this.mixinValue) // -> Hello
  }
}
```
