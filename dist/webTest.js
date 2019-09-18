/**
 * testcafe 基于浏览器的自动化测试
 * npm i --save-dev testcafe
 * testcafe chrome webTest.js
 * testcafe chrome webTest.js --skip-js-errors 忽略浏览器js报错信息
 */
import { Selector } from 'testcafe';
fixture `测试 1`
  .page `https://mijisou.com/`;

test('测试 搜索', async t => {
  const input = await Selector('.input-group input').withAttribute('type', 'search')
  const submit = await Selector('#submit')
  await t.typeText(input, 'vue ssr').click(submit)
  const nextBtn = await Selector('.pull-right button').withAttribute('type', 'submit')
  // 断言
  await t.expect(nextBtn.exists).ok();
  // eval 执行js
  await t.eval(() => window.scrollTo(0, 999));
  await t.wait(2000).click(nextBtn)
});
