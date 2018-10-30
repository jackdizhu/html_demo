// 根据报错位置映射 原始位置信息
const fs = require('fs')
// ^0.5.3
const sourceMap = require('source-map')
let obj = fs.readFileSync('./map/f2aa107547315366da2a.js.map', 'utf8')

let smc = new sourceMap.SourceMapConsumer(obj)
let originalPosition = smc.originalPositionFor({
  line: 1,
  column: 4839
})
originalPosition.source = originalPosition.source.replace(/webpack:\/\//, '')
console.log(JSON.stringify(originalPosition, null, 2));
