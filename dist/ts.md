
## ts 语法

* typescript 安装

```sh
npm i dtsmake -g
// 在对应的文件 生成声明文件
dtsmake -s ./index.js  
npm i typescript -g
// 编译 ts 文体
tsc ./index.ts
```

* js ts 数据类型

```
JavaScript 的数据类型
  // 原始类型
  Undefined
  Null
  Boolean
  Number
  String
  // ES6 新增 表示独一无二的值
  Symbol
  // 引用类型
  Object
  Array
  Date
  RegExp
  Function

TypeScript 的数据类型
  // 原始类型
  Undefined
  Null
  Boolean
  // 所有的数值都是单精度数值
  // 双精度(double 型)
  //   用 64位2进制存放
  //   最大数值 1.7976931348623158e+308
  //   最小正数数值 2.2250738585072014e-308
  //   有效数字 十进制 15 位
  // 单精度(float 型)
  //   用 32位2进制存放
  //   最大数值 3.402823466e+38F
  //   最小正数数值 1.175494351e-38F
  //   有效数字 十进制 6-7 位
  Number
  String
  Symbol
  // TypeScript增加 枚举
  Enum
  // 表示该函数没有返回值 相当于 undefined | null
  Void
  // 任何类型 
  Any
  // 不存在的值的类型
  // never类型是任何类型的子类型，也可以赋值给任何类型；
  // 然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。
  Never
  // 引用类型
  Object
  Array
  Date
  RegExp
  Function
```

* 案例

```ts
  // 原始类型声明
  // declare let test1: number
  let test1: number
  // test1 = '1'
  test1 = 1
  
  // 多个 原始类型声明
  let test2: number | string
  // test2 = !!1
  test2 = '1'
  test2 = 1
  
  // 引用类型
  let test3: Object = {
    name: 1
  }
  let test4: Array<number> = [1]
  let test5: Array<any> = [1, '2']
  let test6: number[] = [1]
  let test7: any[] = [1, '2']
  
  // 扩展接口
  interface User {
    name: string,
    age: number
  }
  let test8: User = {
    name: '1',
    age: 1
  }
  
  // 扩展接口 可选属性
  interface User {
    name: string,
    age: number,
    // ?: 可选属性 
    child?: [
      {
        name: string,
        age: number
      }
    ]
  }
  let test9: User = {
    name: '1',
    age: 1
  }
  let test10: User = {
    name: '1',
    age: 1,
    child: [
      {
        name: '11',
        age: 2
      }
    ]
  }
  // Function 定义
  function add(num1:number, num2:number) :number {
    return num1 + num2
  }
  let add2 = function (num1:number, num2:number) :number {
    return num1 + num2
  }
  // console.log(add(1,2), 'add');
  // console.log(add2(1,2), 'add2');
  
  // 扩展接口
  interface UserChild {
    name: string,
    age: number
  }
  // 扩展接口 继承
  interface UserChild1 extends UserChild {
    sex?: number // 0女 1男
  }
  // class
  // public 公有          在当前类里面、 子类  、类外面都可以访问
  // protected 保护类型    在当前类里面、子类里面可以访问 ，在类外部没法访问
  // private 私有         在当前类里面可以访问，子类、类外部都没法访问
  class UserCls {
    name: string
    age: number
    static num:number = 0
    //构造函数
    constructor(name:string, age:number){
      this.name = name
      this.age = age
    }
    // ?: 可选属性 
    child?: [
      {
        name: string,
        age: number
      }
    ]
    add (child:UserChild) :void {
      UserCls.num++
      if (this.child) {
        this.child.push(child)
      } else {
        this.child = [child]
      }
    }
    // 静态方法
    static log (name:number|string|boolean) {
      console.log(name)
    }
    logNum () {
      UserCls.log(UserCls.num)
    }
    logName () {
      UserCls.log(this.name)
    }
  }
  let UserObj1 = new UserCls('name', 22)
  let child1:UserChild = {
    name: 'name1',
    age: 2
  }
  UserObj1.add(child1)
  // UserObj1.logName()
  // UserObj1.logNum()
  // console.log(UserObj1);
  
  // class 继承
  class UserCls1 extends UserCls {
    sex: number = 2
    //构造函数
    constructor(name:string, age:number, sex: number){
      super(name,age)
      this.sex = sex
    }
  }
  let UserObj2 = new UserCls1('name2', 24, 0)
  let child2:UserChild1 = {
    name: 'name2',
    age: 3,
    sex: 1
  }
  UserObj2.add(child2)
  // UserObj2.logName()
  // UserObj2.logNum()
  // console.log(UserObj2);
```

## d.ts 声明文件

* npm模块d.ts声明(引入时生效)

```ts
// 普通模块 导出(与js文件再同一位置)
interface Use {
  name: string
  age: number
  add (num : number) :void
}
declare var use: Use
export = use
// require('moment')
declare module "moment" {
  export var version: string;
}
// 命名空间 export = use
declare namespace use {
  export var name: string;
  export var age: string;
  export function add (num : number) :void;
}
export = use
```

* 全局对象d.ts声明(全局生效)

```ts
// 命名空间 全局
declare namespace moment {
  export var version: string;
}
```

* 导出方式 与 引入方式

```ts
export = moment;
import moment  = require('moment')

export default moment
import moment from 'moment'

export {moment}
import moment from 'moment'
```
