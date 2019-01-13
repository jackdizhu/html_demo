# import和require的区别

* node编程中最重要的思想就是模块化，`import`和`require`都是被模块化所使用。

## 遵循规范

*   `require` 是 AMD规范引入方式
*   `import`是es6的一个语法标准，如果要兼容浏览器的话必须转化成es5的语法

## 调用时间

*   require是运行时调用，所以require理论上可以运用在代码的任何地方
*   import是编译时调用，所以必须放在文件开头

## 本质

*   require是赋值过程，其实require的结果就是对象、数字、字符串、函数等，再把require的结果赋值给某个变量
*   import是解构过程，但是目前所有的引擎都还没有实现import，我们在node中使用babel支持ES6，也仅仅是将ES6转码为ES5再执行，import语法会被转码为require

## require / exports ：
* 遵循 CommonJS/AMD，只能在运行时确定模块的依赖关系及输入/输出的变量，无法进行静态优化。
* 用法只有以下三种简单的写法：

```
const fs = require('fs')

exports.fs = fs
module.exports = fs
```

## import / export：
* 遵循 ES6 规范，支持编译时静态分析，便于JS引入宏和类型检验。动态绑定。
* 写法就比较多种多样：

```
import fs from 'fs'
import {default as fs} from 'fs'
import * as fs from 'fs'
import {readFile} from 'fs'
import {readFile as read} from 'fs'
import fs, {readFile} from 'fs'

export default fs
export const fs
export function readFile
export {readFile, read}
export * from 'fs'
```

* 通过require引入基础数据类型时，属于复制该变量。
* 通过require引入复杂数据类型时，数据浅拷贝该对象。
* 出现模块之间的循环引用时，会输出已经执行的模块，而未执行的模块不输出（比较复杂）
* CommonJS模块默认export的是一个对象，即使导出的是基础数据类型

<table style="height: 96px; width: 580px">
  <thead>
  <tr class="firstRow">
    <th width="60">加载方式</th>
    <th width="130">规范</th>
    <th width="60">命令</th>
    <th width="330">特点</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>运行时加载</td>
    <td>CommonJS/AMD</td>
    <td>require</td>
    <td>社区方案，提供了服务器/浏览器的模块加载方案。非语言层面的标准。只能在运行时确定模块的依赖关系及输入/输出的变量，无法进行静态优化。</td>
  </tr>
  <tr>
    <td>编译时加载</td>
    <td>ESMAScript6+</td>
    <td>import</td>
    <td>语言规格层面支持模块功能。支持编译时静态分析，便于JS引入宏和类型检验。动态绑定</td>
  </tr>
  </tbody>
</table>
