/**
 * mocha 单元测试
 * npm i --save-dev mocha
 * mocha ./unitTest.js
 */
const assert = require('assert')
// 严格模式 ^9.9.0
// const assert = require('assert').strict

// 四舍五入
function toFixed(num, x) {
  let reg = new RegExp(`^([0-9]+\\.[0-9]{${x + 1}})[0-9]{0,}$`)
  if (reg.test(num) && x > 0) {
    let str = RegExp.$1
    let reg2 = new RegExp(`^([0-9]+)\\.([0-9]{${x}})([0-9]{${1}})$`)
    if (reg2.test(str)) {
      let Xnum = Number(`${RegExp.$1}${RegExp.$2}`)
      let last = Number(RegExp.$3)
      // console.log({Xnum, last})
      if (last > 4) {
        Xnum += 1
      }
      Xnum = Xnum + ''
      if (Xnum.length <= x) {
        for (let i = 0; i < x - Xnum.length + 2; i++) {
          Xnum = '0' + Xnum
        }
      }
      let reg3 = new RegExp(`([0-9]{${x}})$`)
      let strNum = Number(Xnum.replace(reg3, '.$1'))
      return strNum
    } else {
      return num
    }
  } else {
    return num
  }
}

describe('toFixed', function() {
  it('四舍五入 结果为0', function() {
    assert.strictEqual(0, toFixed(0.000111, 3))
    assert.strictEqual(0, toFixed(0.000111, 3))
  });
  it('四舍五入 结果为整数', function() {
    assert.strictEqual(11231, toFixed(11231, 2))
    assert.strictEqual(1123, toFixed(1123, 2))
    assert.strictEqual(12, toFixed(11.99999, 2))
  });
  it('四舍五入 小数位不足', function() {
    assert.strictEqual(11.55, toFixed(11.55, 3))
  });
  it('四舍五入 小数位相等', function() {
    assert.strictEqual(11.55, toFixed(11.55, 2))
  });
  it('四舍五入 舍去', function() {
    assert.strictEqual(11.55, toFixed(11.55, 3))
    assert.strictEqual(11.44, toFixed(11.44444, 2))
    assert.strictEqual(0.44, toFixed(0.44444, 2))
    assert.strictEqual(0.27, toFixed(0.2746789727126806, 2))
  });
  it('四舍五入 舍入', function() {
    assert.strictEqual(11.56, toFixed(11.55555, 2))
    assert.strictEqual(11.99, toFixed(11.98999, 2))
    assert.strictEqual(333333.56, toFixed(333333.55555, 2))
    assert.strictEqual(0.56, toFixed(0.55555, 2))
    assert.strictEqual(0.04, toFixed(1 / 23, 2))
    assert.strictEqual(0.04, toFixed(0.0399, 3))
    assert.strictEqual(0.04, toFixed(0.039, 2))
  });
})
