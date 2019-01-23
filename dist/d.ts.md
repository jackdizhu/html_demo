# 代码库的不同类型

```txt
不同的类型的代码库，需要编写不同形式的.d.ts文件，
目前总共有以下几种流行的代码库类型：
（1）全局代码库（Global Libraries）
（2）模块库（Modular Libraries）
（3）UMD
（4）模块库或UMD的插件（Module Plugin or UMD Plugin）
（5）全局代码库的插件（Global Plugin）
（6）全局代码库的修改模块（Global-modifying Modules）
```

# 全局代码库（Global Libraries）

## 1. 代码库的表现形式

全局代码库，会导出名字到全局对象的属性上，例如，

``` ts
// 全局声明
function createGreeting(s) {
  return "Hello, " + s;
}

// 直接给全局变量赋值
window.createGreeting = function(s) {
  return "Hello, " + s;
}
```

## 2. 代码库的使用方式

如果我们依赖一个全局代码库，TypeScript要求在用户代码中如下声明它，

``` ts
/// <reference types="someLib" />
function getThing(): someLib.thing;
```

即，需要增加/// \<reference types="..." />指令，以找到相关的.d.ts文件。
## 3. .d.ts文件的编写方式
全局代码库的.d.ts文件编写方式 [global.d.ts](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-d-ts.html)

``` ts
// 如果全局代码库，导出了一个名为myLib的函数
// 例如，window.myLib(xxx)
declare function myLib(a: string): string;
declare function myLib(a: number): number;

// 如果全局代码库，导出了一个自定义类型
// 例如，var x: myLib
interface myLib {
  name: string;
  length: number;
  extras?: string[];
}

// 如果全局代码库，导出了一个对象
// 例如，window.myLib.timeout, window.myLib.version, ...
declare namespace myLib {
  // window.myLib.timeout
  let timeout: number;
  // window.myLib.version
  const version: string;
  // window.myLib.Cat
  class Cat {
      constructor(n: number);
      readonly age: number;
      purr(): void;
  }
  // var x: window.myLib.CatSettings
  interface CatSettings {
      weight: number;
      name: string;
      tailLength?: number;
  }
  // var x: window.myLib.VetID
  type VetID = string | number;
  // window.myLib.checkCat(xxx)
  function checkCat(c: Cat, s?: VetID);
}
```

# 模块库（Modular Libraries）

## 1. 代码库的表现形式

模块库指的是，类似CommonJS，AMD（RequireJS），ES6 module这样的代码组织方式，

``` ts
// CommonJS
var fs = require("fs");
// TypeScript 或 ES6
import fs = require("fs");
// AMD
define(..., ['someLib'], function(someLib) {
});
```

## 2. 代码库的使用方式

如果我们依赖一个模块库，TypeScript要求在用户代码中这样使用它

``` ts
// 直接import即可，TypeScript会根据模块名去寻找.d.ts文件
import * as moment from "moment";
function getThing(): moment;
```

## 3. .d.ts文件的编写方式

* 一个模块库可能会导出三种类型的东西：对象，类，函数。
* 需要注意的是，ES6 module只能导出一个对象，而CommonJS还可以导出类或者函数。

``` ts
// ES6 module导出一个对象
export {xxx};  // 导出方式
import {xxx} from 'yyy';  // 导入方式

// ES6 module .d.ts 编写
declare var yyy: number
export { yyy }

// ES module默认导出，只是导出一个名为default的变量
export default xxx; // 默认导出是以下导出方式的语法糖
export {xxx as default}; // 将导出的xxx变量重命名为default
import xxx from 'yyy'; // 使用默认导出的变量，是以下导入方式的语法糖
import {default as xxx} from 'yyy'; // 将导入的名为default的变量重命名

// CommonJS导出一个对象
module.exports = {xxx};  // 导出方式
const {xxx} = require('yyy'); // 导入方式

// CommonJS导出一个对象 .d.ts 编写
export let name: string
export let age: number

// CommonJS导出一个类
module.exports = class {}; // 导出方式
const cls = require('yyy'); // 导入方式

// CommonJS导出一个类 .d.ts 编写
export namespace yyy{
  let name: string
}

// CommonJS导出一个函数
module.exports = function(){ };  // 导出方式
const fn = require('yyy');  // 导入方式

// CommonJS导出一个函数 .d.ts 编写
export function b(): number
```

# TypeScript要求针对模块库，导出不同类型的东西，需要编写不同的.d.ts文件。

## 1. 导出一个对象 [module.d.ts](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html)

```ts
// 如果模块库是UMD，导出一个全局对象myLib
export as namespace myLib;

// 如果模块库导出的对象有方法，例如导出一个这样的对象 {myMethod,myOtherMethod}
export function myMethod(a: string): string;
export function myOtherMethod(a: number): number;

// 如果模块库导出了一个类型，例如 {someType}
export interface someType {
  name: string;
  length: number;
  extras?: string[];
}

// 可以声明模块导出的对象，有哪些属性
export const myField: number;

// 导出一个名字空间，这个名字空间中可以有类型，属性，和方法
export namespace subProp {
  // import { subProp } from 'yourModule'; 其中subProp是一个名字空间
  // subProp.foo(); 名字空间中的方法

  // 或者 import * as yourMod from 'yourModule'; 其中 import * as yourMod 将整个模块看做yourMod
  // yourMod.subProp.foo();
  export function foo(): void;
}
```

## 2. 导出一个类 [module-class.d.ts](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-class-d-ts.html)

``` ts
// 如果模块库是UMD，导出一个全局对象myLib
export as namespace myClassLib;

// 表明模块只导出了一个类，
// 注意，ES module只能导出一个对象，不能导出一个类
export = MyClass;

// 声明导出的这个类的构造器，属性，和方法
declare class MyClass {
  // 构造器
  constructor(someParam?: string);

  // 属性
  someProperty: string[];

  // 方法
  myMethod(opts: MyClass.MyClassMethodOptions): number;
}

// 如果导出的这个类，还可以做为名字空间来使用
declare namespace MyClass {
  // 名字空间中的类型
  // const MyClass = require('yyy');
  // const x: MyClass.MyClassMethodOptions
  export interface MyClassMethodOptions {
    width?: number;
    height?: number;
  }
}
```

## 3. 导出一个方法 [module-function.d.ts](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-function-d-ts.html)
``` ts
// 如果模块库是UMD，导出一个全局函数myFuncLib
export as namespace myFuncLib;

// 表明模块只导出了一个函数，
// 注意，ES module只能导出一个对象，不能导出一个函数
export = MyFunction;

// 导出的函数可以具有多个重载版本
declare function MyFunction(name: string): MyFunction.NamedReturnType;
declare function MyFunction(length: number): MyFunction.LengthReturnType;

// 如果导出的这个函数，还可以做为名字空间来使用
declare namespace MyFunction {
  // 名字空间中的类型
  // const MyFunction = require('yyy');
  // const x: MyFunction.LengthReturnType
  export interface LengthReturnType {
    width: number;
    height: number;
  }

  // 名字空间中的类型
  // const MyFunction = require('yyy');
  // const x: MyFunction.NamedReturnType
  export interface NamedReturnType {
    firstName: string;
    lastName: string;
  }

  // 名字空间中的属性
  export const defaultName: string;

  // 名字空间中的属性
  export let defaultLength: number;
}
```

# UMD

## 1. 代码库的表现形式

UMD的例子如下，根据运行环境不同，UMD会自动降级处理，
``` js
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["libName"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("libName"));
  } else {
    root.returnExports = factory(root.libName);
  }
}(this, function (b) {
```

## 2. 代码库的使用方式
UMD可以被全局代码库所引用，也可以被模块库所引用。
* 被全局代码库所引用

``` ts
/// <reference types="moment" />
function getThing(): moment;
```

需要增加/// \<reference types="..." />指令，以找到相关的.d.ts文件。
* 被模块库所引用
``` ts
import * as someLib from 'someLib';
```

## 3. .d.ts文件的编写方式
与模块库的.d.ts文件编写方式相同。

# 模块库或UMD的插件（Module Plugin or UMD Plugin）

## 1. 代码库的表现形式

仍然是一个模块库或UMD。

## 2. 代码库的使用方式

同模块库和或UMD相同。

## 3. .d.ts文件的编写方式

官网例子：[module-plugin.d.ts](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-plugin-d-ts.html)

``` ts
// 作为核心库的插件，这里要引入核心库本身
import * as m from 'someModule';

// 如果需要的话，也可以引入其他库
import * as other from 'anotherModule';

// 声明一个和核心库同名的module
declare module 'someModule' {
  // 添加插件中t添加的函数，类型
  // 注意，还可以使用unexport删除核心库中已经导出的名字

  // 插件中的函数
  export function theNewMethod(x: m.foo): other.bar;

  // 插件中的类型
  export interface SomeModuleOptions {
    someModuleSetting?: string;
  }

  // 插件中的类型
  export interface MyModulePluginOptions {
    size: number;
  }
}
```

# 全局代码库的插件（Global Plugin）

## 1. 代码库的表现形式

和全局代码库一样，为全局对象增加了一个属性。

## 2. 代码库的使用方式

同全局代码库一样。

## 3. .d.ts文件的编写方式

官网例子：[global-plugin.d.ts](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-plugin-d-ts.html)

``` ts
// 对被增加属性的全局变量进行声明，其中包括添加的属性
interface Number {
  toBinaryString(opts?: MyLibrary.BinaryFormatOptions): string;
  toBinaryString(callback: MyLibrary.BinaryFormatCallback, opts?: MyLibrary.BinaryFormatOptions): string;
}

// 全局添加了一个名字空间，其中包含类型，以及类型别名
declare namespace MyLibrary {
  // 类型别名
  // const x: window.MyLibrary.BinaryFormatCallback
  type BinaryFormatCallback = (n: number) => string;

  // 类型
  // const x: window.MyLibrary.BinaryFormatOptions
  interface BinaryFormatOptions {
    prefix?: string;
    padding: number;
  }
}
```

# 全局代码库的修改模块（Global-modifying Modules）

## 1. 代码库的表现形式

和全局代码库一样，修改了全局变量的属性。

## 2. 代码库的使用方式

同全局代码库一样。

## 3. .d.ts文件的编写方式

官网例子：[global-modifying-module.d.ts](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html)

``` ts
// 声明对全局空间造成的修改
declare global {
  // 类型
  interface String {
    fancyFormat(opts: StringFormatOptions): string;
  }
}

// 全局修改模块导出的类型
export interface StringFormatOptions {
  fancinessLevel: number;
}

// 全局修改模块导出的函数
export function doSomething(): void;

// 如果全局修改模块什么也没有导出
export { };
```


* global.d.ts (global 名字随意 项目根目录下 默认是全局文件 .d.ts 结尾)

```ts
import { AxiosStatic } from "axios";

// 扩展第三方 模块
declare module 'axios/index' {
  interface AxiosStatic {
    $apiV: any
  }
}
// ===
// declare module 'axios' {
//   interface AxiosStatic {
//     $apiV: any
//   }
// }
// axios.$apiV

// 扩展 全局对象
declare global {
  interface Window {
      axios: AxiosStatic
  }
}
// window.axios
```
